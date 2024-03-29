## 1.Solidity 支持多重继承。合约可以通过is关键字继承其他合约
将被子合约覆盖的函数必须声明为virtual.
* 要覆盖父函数的函数必须使用关键字override。
* 继承顺序很重要。您必须按照从“最基础”到“最衍生”的顺序​​列出父合约。
```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/* Graph of inheritance
    A
   / \
  B   C
 / \ /
F  D,E
*/

contract A {
    function foo() public pure virtual returns (string memory) {
        return "A";
    }
}

// Contracts inherit other contracts by using the keyword 'is'.
contract B is A {
    // Override A.foo()
    function foo() public pure virtual override returns (string memory) {
        return "B";
    }
}

contract C is A {
    // Override A.foo()
    function foo() public pure virtual override returns (string memory) {
        return "C";
    }
}

// Contracts can inherit from multiple parent contracts.
// When a function is called that is defined multiple times in
// different contracts, parent contracts are searched from
// right to left, and in depth-first manner.

contract D is B, C {
    // D.foo() returns "C"
    // since C is the right most parent contract with function foo()
    function foo() public pure override(B, C) returns (string memory) {
        return super.foo();
    }
}

contract E is C, B {
    // E.foo() returns "B"
    // since B is the right most parent contract with function foo()
    function foo() public pure override(C, B) returns (string memory) {
        return super.foo();
    }
}

// Inheritance must be ordered from “most base-like” to “most derived”.
// Swapping the order of A and B will throw a compilation error.
contract F is A, B {
    function foo() public pure override(A, B) returns (string memory) {
        return super.foo();
    }
}
```

## 2.隐藏继承的状态变量
与函数不同，状态变量不能通过在子合约中重新声明来覆盖。

让我们学习如何正确覆盖继承的状态变量。

A constructor is an optional function that is executed upon contract creation.

Here are examples of how to pass arguments to constructors.
```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract A {
    string public name = "Contract A";

    function getName() public view returns (string memory) {
        return name;
    }
}

// Shadowing is disallowed in Solidity 0.6
// This will not compile
// contract B is A {
//     string public name = "Contract B";
// }

contract C is A {
    // This is the correct way to override inherited state variables.
    constructor() {
        name = "Contract C";
    }

    // C.getName returns "Contract C"
}
```

## 3.调用父合约
* 父合约可以直接调用
* 也可以使用关键字调用super。

通过使用关键字super，将调用所有直接父合约。
Parent contracts can be called directly, or by using the keyword super.

By using the keyword super, all of the immediate parent contracts will be called.
```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/* Inheritance tree
   A
 /  \
B   C
 \ /
  D
*/

contract A {
    // This is called an event. You can emit events from your function
    // and they are logged into the transaction log.
    // In our case, this will be useful for tracing function calls.
    event Log(string message);

    function foo() public virtual {
        emit Log("A.foo called");
    }

    function bar() public virtual {
        emit Log("A.bar called");
    }
}

contract B is A {
    function foo() public virtual override {
        emit Log("B.foo called");
        A.foo();
    }

    function bar() public virtual override {
        emit Log("B.bar called");
        super.bar();
    }
}

contract C is A {
    function foo() public virtual override {
        emit Log("C.foo called");
        A.foo();
    }

    function bar() public virtual override {
        emit Log("C.bar called");
        super.bar();
    }
}

contract D is B, C {
    // Try:
    // - Call D.foo and check the transaction logs.
    //   Although D inherits A, B and C, it only called C and then A.
    // - Call D.bar and check the transaction logs
    //   D called C, then B, and finally A.
    //   Although super was called twice (by B and C) it only called A once.

    function foo() public override(B, C) {
        super.foo();
    }

    function bar() public override(B, C) {
        super.bar();
    }
}
```


## 1.规则
* virtual: 父合约中的函数，如果希望子合约重写，需要加上virtual关键字。
* override：子合约重写了父合约中的函数，需要加上override关键字。

注意：用override修饰public变量，会重写与变量同名的getter函数，例如：

## 2.简单继承
写一个简单的爷爷合约Yeye，里面包含1个Log事件和3个function: hip(), pop(), yeye()，输出都是”Yeye”

定义一个爸爸合约Baba，让他继承Yeye合约，语法就是contract Baba is Yeye，非常直观。

在Baba合约里，我们重写一下hip()和pop()这两个函数，加上override关键字，并将他们的输出改为”Baba”；并且加一个新的函数baba，输出也是”Baba”:

我们部署合约，可以看到Baba合约里有4个函数，其中hip()和pop()的输出被成功改写成”Baba”，而继承来的yeye()的输出仍然是”Yeye”。
```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// 合约继承
contract Yeye {
    event Log(string msg);

    // 定义3个function: hip(), pop(), man()，Log值为Yeye。
    function hip() public virtual{
        emit Log("Yeye");
    }

    function pop() public virtual{
        emit Log("Yeye");
    }

    function yeye() public virtual {
        emit Log("Yeye");
    }
}

contract Baba is Yeye{
    // 继承两个function: hip()和pop()，输出改为Baba。
    function hip() public virtual override{
        emit Log("Baba");
    }

    function pop() public virtual override{
        emit Log("Baba");
    }

    function baba() public virtual{
        emit Log("Baba");
    }
}
```

## 3.多重继承
规则：
1. 继承时要按辈分最高到最低的顺序排。比如我们写一个Erzi合约，继承Yeye合约和Baba合约，那么就要写成contract Erzi is Yeye, Baba，而不能写成contract Erzi is Baba, Yeye，不然就会报错。
2. 如果某一个函数在多个继承的合约里都存在，比如例子中的hip()和pop()，在子合约里必须重写，不然会报错。
3. 重写在多个父合约中都重名的函数时，override关键字后面要加上所有父合约名字，例如override(Yeye, Baba)。

例子：
我们可以看到，Erzi合约里面重写了hip()和pop()两个函数，将输出改为”Erzi”，并且还分别从Yeye和Baba合约继承了yeye()和baba()两个函数。
```js
contract Erzi is Yeye, Baba{
    // 继承两个function: hip()和pop()，输出改为Erzi。
    function hip() public virtual override(Yeye, Baba){
        emit Log("Erzi");
    }

    function pop() public virtual override(Yeye, Baba) {
        emit Log("Erzi");
    }

    function callParent() public{
        Yeye.pop();
    }

    function callParentSuper() public{
        super.pop();
    }
}
```

## 4.修饰器的继承
Solidity中的修饰器（Modifier）同样可以继承，用法与函数继承类似，在相应的地方加 virtual 和 override 关键字即可。
```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Base1 {
    modifier exactDividedBy2And3(uint _a) virtual {
        require(_a % 2 == 0 && _a % 3 == 0);
        _;
    }
}

contract Identifier is Base1 {

    //计算一个数分别被2除和被3除的值，但是传入的参数必须是2和3的倍数
    function getExactDividedBy2And3(uint _dividend) public exactDividedBy2And3(_dividend) pure returns(uint, uint) {
        return getExactDividedBy2And3WithoutModifier(_dividend);
    }

    //计算一个数分别被2除和被3除的值
    function getExactDividedBy2And3WithoutModifier(uint _dividend) public pure returns(uint, uint){
        uint div2 = _dividend / 2;
        uint div3 = _dividend / 3;
        return (div2, div3);
    }

    //重写Modifier: 不重写时，输入9调用getExactDividedBy2And3，会revert，因为无法通过检查
    //删掉下面三行注释重写Modifier，这时候输入9调用getExactDividedBy2And3， 会调用成功
    // modifier exactDividedBy2And3(uint _a) override {
    //     _;
    // }
}
```

## 构造函数的继承
子合约有两种方法继承父合约的构造函数。举个简单的例子，父合约A里面有一个状态变量a，并由构造函数的参数来确定：
1. 在继承时声明父构造函数的参数，例如：contract B is A(1)
2. 在子合约的构造函数中声明构造函数的参数，例如
```js
contract C is A {
    constructor(uint _c) A(_c * _c) {}
}
```

## 调用父合约的函数
子合约有两种方式调用父合约的函数
1. 直接调用,子合约可以直接用父合约名.函数名()的方式来调用父合约函数，例如Yeye.pop()。
```js
function callParent() public{
    Yeye.pop();
}
```
2. 利用super关键字
super关键字：子合约可以利用super.函数名()来调用最近的父合约函数。solidity继承关系按声明时从右到左的顺序是：contract Erzi is Yeye, Baba，那么Baba是最近的父合约，super.pop()将调用Baba.pop()而不是Yeye.pop()：
```js
function callParentSuper() public{
    // 将调用最近的父合约函数，Baba.pop()
    super.pop();
}
```

## 钻石继承:指一个派生类同时有两个或两个以上的基类
我们先写一个合约God，再写Adam和Eve两个合约继承God合约，最后让创建合约people继承自Adam和Eve，每个合约都有foo和bar两个函数。
```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/* 继承树：
  God
 /  \
Adam Eve
 \  /
people
*/

contract God {
    event Log(string message);

    function foo() public virtual {
        emit Log("God.foo called");
    }

    function bar() public virtual {
        emit Log("God.bar called");
    }
}

contract Adam is God {
    function foo() public virtual override {
        emit Log("Adam.foo called");
    }

    function bar() public virtual override {
        emit Log("Adam.bar called");
        super.bar();
    }
}

contract Eve is God {
    function foo() public virtual override {
        emit Log("Eve.foo called");
        super.foo();
    }

    function bar() public virtual override {
        emit Log("Eve.bar called");
        super.bar();
    }
}

contract people is Adam, Eve {
    function foo() public override(Adam, Eve) {
        super.foo();
    }

    function bar() public override(Adam, Eve) {
        super.bar();
    }
}
```

在这个例子中，调用合约people中的super.bar()会依次调用Eve、Adam，最后是God合约。

虽然Eve、Adam都是God的子合约，但整个过程中God合约只会被调用一次。原因是Solidity借鉴了Python的方式，强制一个由基类构成的DAG（有向无环图）使其保证一个特定的顺序。
