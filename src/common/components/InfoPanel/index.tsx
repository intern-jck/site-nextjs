import styles from '@/styles/InfoPanel.module.scss';
import Link from 'next/link';
import type { ProjectType } from '../../types/ProjectType';

type Props = {
  project: ProjectType,
}

export default function InfoPanel({ project }: Props) {
  return (
    <div className={styles.infoPanel}>
      INFO
      <h3>{project.name}</h3>
      <h3>{project.client}</h3>
      <h3>{project.date}</h3>
      <h3>{project.info}</h3>
    </div>
  );
};
