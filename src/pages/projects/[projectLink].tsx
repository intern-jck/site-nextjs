import Carousel from '@/common/components/Carousel';
import type { ProjectType } from '@/common/types';
import styles from './Project.module.scss';

type Props = {
  project: ProjectType,
}

export default function Project({ project }: Props) {
  
  return (
    <div className={styles.project}>
      {/* <Carousel slides={[
        'https://iili.io/638tAF.jpg',
        'https://iili.io/638Y4p.jpg',
        'https://iili.io/6387GR.md.jpg'
      ]} /> */}
      <h2>{project.name}</h2>
      <Carousel slides={project.photos} />
    </div>
  )
}
