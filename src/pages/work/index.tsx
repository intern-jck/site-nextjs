import type { ProjectType } from '@/common/types';
import { Card } from '@/common/components';
import styles from './Work.module.scss';

import useSWR from 'swr';
import fetcher from '@/modules/utils/fetcher';

// import { githubInstance } from '@/modules/data';
// import { getProjects } from '@/modules/data';
// type Props = {
//   workData: ProjectType[],
// };
// { workData }: Props)

export default function Work() {

  const { data, error } = useSWR<Array<ProjectType>>('/api/work', fetcher);
  
  return (
    <>
      <div className='page-header'>
        <h1>Work</h1>
      </div>
      <div className='page-content'>
        <div className={styles.workContent}>
          {
            data ?
            data.map((work, i) => {
              return (
                <Card
                  key={i}
                  cardTitle={work.name}
                  cardImage={work.photos[0]}
                  cardText={work.short}
                  cardLink={`/work/${work.link}`}
                />
              )
            })
            : <></>
          }
        </div>
      </div>
    </>
  )
};

// export async function getStaticProps() {
//   const workData = await githubInstance.get('/work.json');
//   // const workData = await response.data();
//   console.log('static props')

//   return {
//     props: { workData }
//   }
// };