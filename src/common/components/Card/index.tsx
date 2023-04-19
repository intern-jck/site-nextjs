import styles from '@/styles/Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  cardId: string,
  cardTitle: string,
  cardImage: string,
  cardText: string,
  cardSlug: string,
  clickHandler: Function,
}

export default function Card(
  { cardId, cardTitle, cardImage, cardText, cardSlug, clickHandler }: CardProps
) {
  return (
    <div className={styles.card}>
      <span className={styles.cardTitle}>{cardTitle}</span>
      <div className={styles.cardImage}>
        <Link href={`/mecha/${cardSlug}`}>
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
