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
];

const thinking: IRoute[] = [
  { path: "/thinking1", label: "thinking 1" },
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
    label: "thinking",
    path: "/thinking",
    children: thinking
  },
]
