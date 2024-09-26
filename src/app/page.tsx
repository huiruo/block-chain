import Link from 'next/link'
import styles from "./page.module.css";

export const parentRoute = [
  {
    label: "about",
    path: "/about",
  },
  {
    label: "dashboard",
    path: "/dashboard",
  }
]

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <ul>
          {parentRoute.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
