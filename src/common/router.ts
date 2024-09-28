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
];

export const parentRoute: IParentRoute[] = [
  {
    label: "about",
    path: "/about",
    children: null
  },
  {
    label: "dashboard",
    path: "/dashboard",
    children: null
  },
  {
    label: "crypto",
    path: "/crypto",
    children: crypto
  }
]
