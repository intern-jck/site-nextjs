import type { ProjectType } from '../../common/types/ProjectType';
import { getProjects } from '../../modules/data';
import Card from '../../common/components/Card';
import styles from '@/styles/Mecha.module.scss';

type Props = {
  projects: ProjectType[],
};

export default function Work({ projects }: Props) {
  return (
    <div className='container'>

      <div className='page-header'>
        <h1>Work</h1>
      </div>

      <div className='page-content'>
        <div className={styles.mechaContent}>
          {
            projects.map((project, i) => {
              return (
                <Card
                  key={i}
                  cardId={project.link}
                  cardTitle={project.name}
                  cardImage={project.photos[0]}
                  cardText={project.short}
                  cardSlug={project.link}
                  clickHandler={() => console.log(project.link)}
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