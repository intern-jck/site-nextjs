import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';

type CardProps = {
  className: string,
  cardTitle: string,
  cardImage: string,
  cardText: string,
  cardLink: string,
};

export default function Card(
  { 
    className,
    cardTitle,
    cardImage,
    cardText,
    cardLink
  }: CardProps
) {
  console.log(className)
  return (
    <div className={className ? className : styles.card}>
      <span
        // className={className ? `${className}-title` : styles.cardTitle}
        className={`${className}-title`}
      >
        {cardTitle}
      </span>
      <Link
        className={className ? `${className}-link` : styles.cardLink}
        href={cardLink}
      >
        <Image
          className={className ? `${className}-image` : styles.cardImage}
          src={cardImage}
          alt="Card image not found"
          fill
        />
      </Link>
      <p
        className={className ? `${className}-text` : styles.cardText}
      >
        {cardText}
      </p>
    </div>
  );
};
