interface IRoute {
  path: string;
  label: string;
}

interface IParentRoute extends IRoute {
  children: IRoute[] | null
}

const crypto: IRoute[] = [
  { path: "/btcAddress", label: "Btc Address" },
  { path: "/meme", label: "Meme trade" },
  { path: "/tech1", label: "tech1" },
];

const trader: IRoute[] = [
  { path: "/invest", label: "invest" },
  { path: "/banFurture", label: "banFurture" },
];

const trader2: IRoute[] = [
  { path: "/neverWrong", label: "neverWrong" },
  { path: "/opportunity", label: "opportunity" },
  { path: "/stopLoss", label: "stopLoss" },
  { path: "/volume", label: "volume" },
  { path: "/history", label: "history" },
];

const thinking: IRoute[] = [
  { path: "/thinking1", label: "thinking 1" },
];

const candleNew: IRoute[] = [
  { path: "/trend", label: "趋势" },
  { path: "/excerpt", label: "节选" },
  { path: "/body", label: "实体" },
  { path: "/spindle", label: "纺锤线" },
  { path: "/crosshairs", label: "十字星" },
  { path: "/shadow", label: "上下影线" },
  { path: "/hammer", label: "锤子线" },
  { path: "/meteor", label: "流星线" },
  { path: "/darkClouds", label: "乌云盖顶" },
  { path: "/pierce", label: "刺穿形态" },
  { path: "/swallow", label: "吞噬形态" },
  { path: "/pregnant", label: "包孕形态" },
  { path: "/dusk", label: "黄昏星" },
  { path: "/venus", label: "启明星" },
];

const candleTech: IRoute[] = [
  { path: "/excerpt", label: "节选" },
  { path: "/reversal", label: "反转形态" },
  { path: "/crosshairs", label: "十字星" },
  { path: "/spindleLine", label: "纺锤线" },
  { path: "/umbrella1", label: "伞形线之锤子线" },
  { path: "/umbrella2", label: "伞形线之上吊线" },
  { path: "/tunMo", label: "吞没形态" },
  { path: "/darkClouds", label: "乌云盖顶" },
  { path: "/piercing", label: "刺透形态" },
  { path: "/starLine", label: "星线" },
  { path: "/starLine2", label: "星线-启明星" },
  { path: "/starLine3", label: "星线-流星-倒锤线" },
  { path: "/starLine4", label: "星线-黄昏星" },
  { path: "/pregnant", label: "孕线" },
  { path: "/flatHead", label: "平头顶部-平头底部" },
  { path: "/grabBelt", label: "捉腰带线" },
  { path: "/threeCrows", label: "三只乌鸦" },
  { path: "/twoCrows", label: "向上跳空两只乌鸦" },
  { path: "/threeSoldiers", label: "白色三兵挺进" },
  { path: "/threeMountains", label: "三山形态-三川形态" },
  { path: "/fightingBack", label: "反击线形态" },
  { path: "/roundTop", label: "圆形顶部-平底锅底部" },
  { path: "/tower", label: "塔形顶部-塔形底部" },
  { path: "/window", label: "窗口" },
  { path: "/riseDown", label: "上升-下降" },
  { path: "/breakup", label: "分手线" },
  { path: "/candleVolume", label: "蜡烛图与交易量" },
];

export const parentRoute: IParentRoute[] = [
  {
    label: "dashboard",
    path: "/dashboard",
    children: null
  },
  {
    label: "crypto",
    path: "/crypto",
    children: crypto
  },
  {
    label: "trader",
    path: "/trader",
    children: trader
  },
  {
    label: "trader2",
    path: "/trader2",
    children: trader2
  },
  {
    label: "thinking",
    path: "/thinking",
    children: thinking
  },
  {
    label: "Candle tech",
    path: "/candleTech",
    children: candleTech
  },
  {
    label: "Candle new",
    path: "/candleNew",
    children: candleNew
  },
]
