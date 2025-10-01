export interface ISidebar {
  href: string
  label: string
  type?: 'category' | 'link'
  items?: ISidebar[]
}

export const sidebar: ISidebar[] = [
  {
    label: 'Index',
    href: '/',
  },
  {
    label: 'trade',
    href: '/trade',
    type: 'category',
    items: [
      { href: "/trade/action", label: "Action" },
      { href: "/trade/realTrade", label: "Real Trade" },
      { href: "/trade/trade", label: "trade" },
      { href: "/trade/trade2", label: "trade2" },
      { href: "/trade/trade202509", label: "trade202509" }
    ]
  },

  { href: "/thinking/thinking1", label: "Thinking" },
  // { href: "/thinking/invest", label: "Invest" },
  // { href: "/thinking/btcTradeExperience", label: "BTC Trade Experience" },
  { href: "/thinking/btc2024", label: "BTC 2024" },
  { href: "/crypto/btcBelievers", label: "BTC Believers" },
  { href: "/crypto/btcUniqueDiversifier", label: "BTC Unique Diversifier" },
  { href: "/thinking/banFurture", label: "Ban Furture" },
  {
    label: 'Crypto',
    href: '/crypto',
    type: 'category',
    items: [
      { href: "/crypto/btcAddress", label: "Btc Address" },
      { href: "/crypto/meme", label: "Meme trade" },
      { href: "/crypto/tech1", label: "Tech" },
    ]
  },
  {
    label: 'Thinking',
    href: '/thinking',
    type: 'category',
    items: [
      { href: "/thinking/invest", label: "Invest" },
      { href: "/thinking/thinking1", label: "Thinking" },
      { href: "/thinking/banFurture", label: "BanFurture" },
      { href: "/thinking/btcTradeExperience", label: "BTC Trade Experience" },
      { href: "/thinking/btc2024", label: "BTC 2024" },
    ]
  },
  {
    label: 'Options',
    href: '/options',
    type: 'category',
    items: [
      { href: "/options/1", label: "Options 1" },
    ]
  },
  /*
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
  */
  {
    label: 'Business',
    href: '/business',
    type: 'category',
    items: [
      { href: "/business/main", label: "Main" },
    ]
  },
  {
    label: 'Trader',
    href: '/trader',
    type: 'category',
    items: [
      { href: "/trader/neverWrong", label: "NeverWrong" },
      { href: "/trader/opportunity", label: "Opportunity" },
      { href: "/trader/stopLoss", label: "StopLoss" },
      { href: "/trader/volume", label: "Volume" },
      { href: "/trader/history", label: "History" },
    ]
  },
  {
    label: 'Candle tech',
    href: '/candleTech',
    type: 'category',
    items: [
      { href: "/candleTech/excerpt", label: "节选" },
      { href: "/candleTech/reversal", label: "反转形态" },
      { href: "/candleTech/crosshairs", label: "十字星" },
      { href: "/candleTech/spindleLine", label: "纺锤线" },
      { href: "/candleTech/umbrella1", label: "伞形线之锤子线" },
      { href: "/candleTech/umbrella2", label: "伞形线之上吊线" },
      { href: "/candleTech/tunMo", label: "吞没形态" },
      { href: "/candleTech/darkClouds", label: "乌云盖顶" },
      { href: "/candleTech/piercing", label: "刺透形态" },
      { href: "/candleTech/starLine", label: "星线" },
      { href: "/candleTech/starLine2", label: "星线-启明星" },
      { href: "/candleTech/starLine3", label: "星线-流星-倒锤线" },
      { href: "/candleTech/starLine4", label: "星线-黄昏星" },
      { href: "/candleTech/pregnant", label: "孕线" },
      { href: "/candleTech/flatHead", label: "平头顶部-平头底部" },
      { href: "/candleTech/grabBelt", label: "捉腰带线" },
      { href: "/candleTech/threeCrows", label: "三只乌鸦" },
      { href: "/candleTech/twoCrows", label: "向上跳空两只乌鸦" },
      { href: "/candleTech/threeSoldiers", label: "白色三兵挺进" },
      { href: "/candleTech/threeMountains", label: "三山形态-三川形态" },
      { href: "/candleTech/fightingBack", label: "反击线形态" },
      { href: "/candleTech/roundTop", label: "圆形顶部-平底锅底部" },
      { href: "/candleTech/tower", label: "塔形顶部-塔形底部" },
      { href: "/candleTech/window", label: "窗口" },
      { href: "/candleTech/riseDown", label: "上升-下降" },
      { href: "/candleTech/breakup", label: "分手线" },
      { href: "/candleTech/candleVolume", label: "蜡烛图与交易量" },
    ]
  },
  {
    label: 'Candle new',
    href: '/candleNew',
    type: 'category',
    items: [
      { href: "/trader/invest", label: "Invest" },
      { href: "/candleNew/trend", label: "趋势" },
      { href: "/candleNew/excerpt", label: "节选" },
      { href: "/candleNew/body", label: "实体" },
      { href: "/candleNew/spindle", label: "纺锤线" },
      { href: "/candleNew/crosshairs", label: "十字星" },
      { href: "/candleNew/shadow", label: "上下影线" },
      { href: "/candleNew/hammer", label: "锤子线" },
      { href: "/candleNew/meteor", label: "流星线" },
      { href: "/candleNew/darkClouds", label: "乌云盖顶" },
      { href: "/candleNew/pierce", label: "刺穿形态" },
      { href: "/candleNew/swallow", label: "吞噬形态" },
      { href: "/candleNew/pregnant", label: "包孕形态" },
      { href: "/candleNew/dusk", label: "黄昏星" },
      { href: "/candleNew/venus", label: "启明星" },
    ]
  },
  {
    label: 'Stock',
    href: '/stock',
    type: 'category',
    items: [
      { href: "/stock/analyze", label: "Analyze" },
    ]
  },
]
