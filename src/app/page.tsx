import styles from "./page.module.css";
import { Layout } from '../components/layout';

export default function Home() {
  return <div className='wrapper-box'>
    <div className='wrapper-container'>
      <Layout />
      <div className='md-box'>
        Home
      </div>
    </div>
  </div>
}
