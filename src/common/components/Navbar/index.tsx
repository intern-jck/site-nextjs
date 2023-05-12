import Link from 'next/link';
import styles from './Navbar.module.scss'

import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBarComponent() {

  function toggleMenu(event: React.MouseEvent<HTMLButtonElement>) {
    const navMenu = document.getElementById(styles.navMenu);
    navMenu ?  navMenu.classList.toggle(styles.showMenu) : null;
  };

  function closeMenu(event: React.MouseEvent<HTMLAnchorElement>) {
    const navMenu = document.getElementById(styles.navMenu);
    navMenu ?  navMenu.classList.remove(styles.showMenu) : null;
  }

  return (
    <nav className={styles.navbar}>

      <div className={styles.hamMenu}>
        <button onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>

      <ul id={styles.navMenu} className={styles.navMenu}>
        <li>
          <Link href='/work' onClick={closeMenu}>
            Work
          </Link>
        </li>
        <li>
          <Link href='/photos' onClick={closeMenu}>
            Photos
          </Link>
        </li>
        <li>
          <Link href='/randd' onClick={closeMenu}>
            R&D
          </Link>
        </li>
        <li>
          <Link href='/contact' onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  )
};

