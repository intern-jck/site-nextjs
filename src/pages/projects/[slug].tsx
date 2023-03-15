// import styles from '@/styles/Slug.module.scss';
import Carousel from '../../common/components/Carousel';
import type ProjectType from '../../interfaces/project';

type Props = {
  project: ProjectType,
}

export default function Mecha({ project }: Props) {
  return (
    <div className={'mecha-project'}>
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
