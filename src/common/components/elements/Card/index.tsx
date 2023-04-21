import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';

type CardProps = {
  cardTitle: string,
  cardImage: string,
  cardText: string,
  cardLink: string,
};

export default function Card(
  { cardTitle, cardImage, cardText, cardLink }: CardProps
) {
  return (
    <div className={styles.card}>
      <span className={styles.cardTitle}>
        {cardTitle}
      </span>
      <div className={styles.cardImage}>
        <Link href={cardLink}>
          <Image
            src={cardImage}
            alt="Card image not found"
            fill
          />
        </Link>
      </div>
      <span className={styles.cardText}>{cardText}</span>
    </div>
  )
};
