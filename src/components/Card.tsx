import styles from '@/styles/Card.module.scss';
import Image from 'next/image';

type CardProps = {
  projectId: Number,
  projectName: String,
  projectImage: String,
  viewHandler: Function,
}

export default function Card({ projectId,
  projectName,
  projectImage,
  viewHandler, }: CardProps) {

  return (
    <div className={styles.card}>
      Card COMPONENT
      <div className={styles.cardBody}>
        <div className={styles.cardImage}>
          <Image
            src={'https://iili.io/638tAF.jpg'}
            alt="Card image not found"
            fill
          />
        </div>
      </div>
    </div>
  )
}