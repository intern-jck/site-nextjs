import { Carousel, InfoPanel } from '@/common/components/';
import { getProject, getProjectPaths } from '@/modules/data';
import type { ProjectType } from '@/common/types/';
import styles from './WorkProject.module.scss';

type Props = {
  project: ProjectType,
};

export default function WorkProjectComponent({ project }: Props) {
  console.log('work comp', project.link)

  return (
    <div className='container'>

      <div className='page-header'>
        <h1>{project.name}</h1>
      </div>

      <div className='page-content'>
        <div className={styles.projectContent}>
          <div className={styles.workProjectCarousel}>
            <Carousel slides={project.photos} />
          </div>
          <div className={styles.workProjectInfoPanel}>
            <InfoPanel project={project} />
          </div>
        </div>
      </div>

    </div>
  );
};

type ParamsType = {
  params: {
    slug: string,
  }
};

export async function getStaticProps({ params }: ParamsType) {
  console.log('work static props', params)
  const project = await getProject(params.slug);
  console.log('got project', project.link)
  return {
    props: { project }
  }
};

export async function getStaticPaths() {
  const projectPaths = await getProjectPaths();
  return {
    paths: projectPaths.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  }
};