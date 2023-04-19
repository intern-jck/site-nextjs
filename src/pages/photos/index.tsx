import styles from '@/styles/Photos.module.scss';
import { getPhotos } from '../../modules/data';
import Image from 'next/image'
import Link from 'next/link';

type Props = {
  photos: Array<string>,
};

export default function Photos({ photos }: Props) {
  return (
    <div className='container'>

      <div className='page-header'>
        <h1>PHOTOGRAPHY</h1>
      </div>

      <div className='page-content'>
        <div className={styles.photosContent}>
          {
            photos.map((photo, i) => {
              return (
                <button key={i} className={styles.photoButton}>
                  <Image
                    loading='lazy'
                    src={photo}
                    alt='photo not found...'
                    width='600'
                    height='400'
                  />
                </button>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}


export async function getStaticProps() {
  const photos = await getPhotos();
  return {
    props: { photos }
  }
}