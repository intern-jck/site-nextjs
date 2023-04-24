import Link from 'next/link';
import Image from 'next/image'
import useSWR from 'swr';
import fetcher from '@/modules/utils/fetcher';

import type { PhotoType } from '@/common/types';
import styles from './Photos.module.scss';

// import { getPhotos } from '../../modules/data/_index';
// type Props = {
//   photos: Array<string>,
// };
// { photos }: Props

export default function Photos() {

  const { data, error } = useSWR<Array<PhotoType>>('/api/photos', fetcher);

  return (
    <div className='container'>

      <div className='page-header'>
        <h1>PHOTOGRAPHY</h1>
      </div>

      <div className='page-content'>
        <div className={styles.photosContent}>
          {
            data ?
            data.map((photo, i) => {
              return (
                <Link key={i} className={styles.photoLink} href={"#"}>
                  <Image
                    loading='lazy'
                    src={photo}
                    alt='photo not found...'
                    // fill
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                    style={{ height: '100%', width: '100%' }} 

                    
                  />
                </Link>
              )
            })
            : <></>
          }
        </div>
      </div>

    </div>
  )
};

// export async function getStaticProps() {
//   const photos = await getPhotos();
//   return {
//     props: { photos }
//   }
// }