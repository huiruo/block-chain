interface IRoute {
  path: string;
  label: string;
}

interface IParentRoute extends IRoute {
  children: IRoute[] | null
}

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
  }
]