import styles from '@/styles/Home.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container'>

      <div className='page-header'>
        <h1>Home Page</h1>
      </div>

      <div className='page-content'>
        <div className={styles.homeImage}>
          <Image
            src={'https://iili.io/638tAF.jpg'}
            alt="Home page photo not found"
            fill
          />
        </div>
      </div>

    </div>
  )
}
