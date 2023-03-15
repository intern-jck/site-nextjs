import Link from 'next/link';
import styles from '@/styles/Navbar.module.scss'

export default function NavBarComponent() {
  return (
    // <nav id='navbar' className={styles.navbar}>
    //   <Link href='/mecha'>Mechatronics</Link>
    //   <Link href='/photos'>Photos</Link>
    //   <Link href='/randd'>R&D</Link>
    //   <Link href='/login'>Contact</Link>
    // </nav>

    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href='/'>
          JCK SITE
        </Link>
      </div>

      <div className={styles.navMenu}>
        <ul>
          <li>
            <Link href='/mecha'>
              Mecha
            </Link>
          </li>
          <li>
            <Link href='/photos'>
              Photos
            </Link>
          </li>
          <li>
            <Link href='/randd'>
              R&D
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.hamMenu}>
        HAM
      </div>
    </nav>
  )
};

