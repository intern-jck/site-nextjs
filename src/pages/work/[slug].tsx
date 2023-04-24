import { Carousel, InfoPanel } from '@/common/components/';
import { getProject, getProjectPaths } from '@/modules/json';
import type { ProjectType } from '@/common/types/';
import styles from './WorkSlug.module.scss';

type Props = {
  project: ProjectType,
};

export default function WorkProjectComponent({ project }: Props) {
  // console.log('work comp', project.link)

  return (
    <>

      {/* <div className='page-header'>
        <h1>{project.name}</h1>
      </div> */}

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

    </>
  );
};

type ParamsType = {
  params: {
    slug: string,
  }
};

export async function getStaticProps({ params }: ParamsType) {
  // console.log('work static props', params)
  // console.log('got project', project.link)
  const project = await getProject(params.slug);
  return {
    props: { project }
  }
};

export async function getStaticPaths() {
  const projectPaths= await getProjectPaths();
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
