import styles from '@/styles/Mecha.module.scss';
import Carousel from '../../components/Carousel';
import Card from '../../components/Card';
import type Project from '../../interfaces/project';
import { getProjects } from '../api/api';

type Props = {
  projects: Project[],
};

export default function Mecha({ projects }: Props) {
  console.log(projects)
  return (
    <>
      <div className={styles.mecha}>
        <h1>MECHATRONICS</h1>
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
      </div>
    </>
  )
}


export async function getStaticProps() {
  const projects = getProjects();
  // return {
  //   props: { projects }
  // }
  return {};
}