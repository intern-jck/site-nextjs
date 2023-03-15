import styles from '@/styles/Home.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className={styles.homePageImage}>
        <Image
          src={'https://iili.io/638tAF.jpg'}
          alt="Home page photo not found"
          fill
        />
      </div>
    </div>
  )
}
