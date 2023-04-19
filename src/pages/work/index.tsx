import type { ProjectType } from '@/common/types';
import { getProjects } from '../../modules/data';
import Card from '@/common/components/Card';
import styles from './Work.module.scss';

type Props = {
  projects: ProjectType[],
};

export default function Work({ projects }: Props) {
  console.log(projects)
  return (
    <div className='container'>

      <div className='page-header'>
        <h1>Work</h1>
      </div>

      <div className='page-content'>
        <div className={styles.workContent}>
          {
            projects.map((project, i) => {
              return (
                <Card
                  key={i}
                  cardTitle={project.name}
                  cardImage={project.photos[0]}
                  cardText={project.short}
                  cardLink={`/projects/${project.link}`}
                />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: { projects }
  }
}