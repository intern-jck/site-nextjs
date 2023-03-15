import styles from '@/styles/Mecha.module.scss';
import type { ProjectType } from '../../common/types/ProjectType';
// import { getProjects } from '../api/api';
import { getProjects } from '../../modules/Data';

// import Carousel from '../../components/Carousel';
import Card from '../../common/components/Card';

type Props = {
  projects: ProjectType[],
};

export default function Mecha({ projects }: Props) {
  // console.log('mecha', projects)
  return (
    <div className='container'>

      <div className='page-header'>
        <h1>MECHATRONICS</h1>
      </div>

      {/* <Card
        projectId={1}
        projectName='proj-test'
        projectImage={'https://iili.io/638tAF.jpg'}
        viewHandler={() => console.log('proj test')}
      /> */}

      {/* <Carousel slides={[
        'https://iili.io/638tAF.jpg',
        'https://iili.io/638Y4p.jpg',
        'https://iili.io/6387GR.md.jpg'
      ]} /> */}

      <div className='page-content'>
        <div className={styles.mechaContent}>
          {
            projects.map((project, i) => {
              // const card: object = {
              //   cardId: i,
              //   cardTitle: project.name,
              //   cardImage: project.photos[0],
              //   clickHandler: console.log('test')
              // }
              return < Card
                key={i}
                cardId={project.link}
                cardTitle={project.name}
                cardImage={project.photos[0]}
                cardText={project.short}
                clickHandler={() => console.log(project.link)}
              // card={card}
              />
            })
          }
        </div>
      </div>

    </div>
  )
}


export async function getStaticProps() {
  const projects = await getProjects();
  // console.log(projects)
  return {
    props: { projects }
  }
}