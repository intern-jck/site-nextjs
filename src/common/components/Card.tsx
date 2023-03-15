import styles from '@/styles/Card.module.scss';
import Image from 'next/image';

type CardProps = {
  cardId: string,
  cardTitle: string,
  cardImage: string,
  cardText: string,
  clickHandler: Function,
}

export default function Card(
  { cardId, cardTitle, cardImage, cardText, clickHandler }: CardProps
) {
  return (
    <div className={styles.card}>
      <span className={styles.cardTitle}>{cardTitle}</span>
      {/* <span className={styles.cardTitle}>{cardId}</span> */}
      <div className={styles.cardImage}>
        <Image
          src={cardImage}
          alt="Card image not found"
          fill
        />
      </div>
      <span className={styles.cardText}>{cardText}</span>
    </div>

  )
};
