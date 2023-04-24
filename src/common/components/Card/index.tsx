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
    <Link href={cardLink}>
      <div className={styles.card}>
          <span className={styles.cardTitle}>
            {cardTitle}
          </span>
          <div className={styles.cardImage}>
            <Image
              src={cardImage}
              alt="Card image not found"
              fill
              sizes="(max-width: 1200px) 50vw,
                33vw"
            />
          </div>
          <span className={styles.cardText}>{cardText}</span>
      </div>
    </Link>
  )
};
