## 1.函数和状态变量必须声明它们是否可以被其他合约访问。
Functions and state variables have to declare whether they are accessible by other contracts.

Functions can be declared as

public - any contract and account can call
private - only inside the contract that defines the function
internal- only inside contract that inherits an internal function
external - only other contracts and accounts can call
State variables can be declared as public, private, or internal but not external.

### 1-1.函数可以声明为
* public- 任何合约和账户都可以调用
* private- 仅在定义函数的合约内
* internal- 仅在继承internal函数的合约内部
* external- 只有其他合约和账户可以调用

函数定义,方括号中的是可写可不写的关键字：
```js
function <function name>(<parameter types>) internal|external|public|private [pure|view|payable] [returns (<return types>)]
```

### 1-2.状态变量
状态变量可以声明为
* public
* private
* internal但不能声明为external

### 1-3.例子
```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Base {
    // Private function can only be called
    // - inside this contract
    // Contracts that inherit this contract cannot call this function.
    function privateFunc() private pure returns (string memory) {
        return "private function called";
    }

    function testPrivateFunc() public pure returns (string memory) {
        return privateFunc();
    }

    // Internal function can be called
    // - inside this contract
    // - inside contracts that inherit this contract
    function internalFunc() internal pure returns (string memory) {
        return "internal function called";
    }

    function testInternalFunc() public pure virtual returns (string memory) {
        return internalFunc();
    }

    // Public functions can be called
    // - inside this contract
    // - inside contracts that inherit this contract
    // - by other contracts and accounts
    function publicFunc() public pure returns (string memory) {
        return "public function called";
    }

    // External functions can only be called
    // - by other contracts and accounts
    function externalFunc() external pure returns (string memory) {
        return "external function called";
    }

    // This function will not compile since we're trying to call
    // an external function here.
    // function testExternalFunc() public pure returns (string memory) {
    //     return externalFunc();
    // }

    // State variables
    string private privateVar = "my private variable";
    string internal internalVar = "my internal variable";
    string public publicVar = "my public variable";
    // State variables cannot be external so this code won't compile.
    // string external externalVar = "my external variable";
}

contract Child is Base {
    // Inherited contracts do not have access to private functions
    // and state variables.
    // function testPrivateFunc() public pure returns (string memory) {
    //     return privateFunc();
    // }

    // Internal function can be called inside child contracts.
    function testInternalFunc() public pure override returns (string memory) {
        return internalFunc();
    }
}
```
