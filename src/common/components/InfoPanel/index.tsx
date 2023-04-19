// import Link from 'next/link';
import styles from './InfoPanel.module.scss';
import type { ProjectType } from '@/common/types';

type Props = {
  project: ProjectType,
}

export default function InfoPanel({ project }: Props) {
  console.log('info panel', project)
  return (
    <div className={styles.infoPanel}>
      INFO
      <h3>{project.name}</h3>
      {/* <h3>{project.client}</h3> */}
      {/* <h3>{project.date}</h3> */}
      {/* <h3>{project.info}</h3> */}
    </div>
  );
};
