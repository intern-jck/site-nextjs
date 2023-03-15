import Carousel from '../../common/components/Carousel';
import InfoPanel from '../../common/components/InfoPanel';

import styles from '@/styles/Project.module.scss';
import { getProject, getProjectPaths } from '../../modules/Data';
import type { ProjectType } from '../../common/types/ProjectType';

type Props = {
  project: ProjectType,
}

export default function Project({ project }: Props) {
  console.log('project', project.link)

  return (
    <div className='container'>

      <div className='page-header'>
        <h1>{project.name}</h1>
      </div>

      <div className='page-content'>
        <div className={styles.projectContent}>
          <Carousel slides={project.photos} />
          <InfoPanel project={project} />
        </div>
      </div>

    </div>
  );
}

type ParamsType = {
  params: {
    slug: string,
  }
}

export async function getStaticProps({ params }: ParamsType) {
  const project = await getProject(params.slug);
  console.log('got project', project.link)
  return {
    props: { project }
  }
}

export async function getStaticPaths() {
  const projectPaths = await getProjectPaths();
  console.log('paths', projectPaths)
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
}