// Rounting use in Navbar for switch in different pages.

import React from "react";
import styles from '../../styles/Home.module.css'
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.mainnavbar}>
      <nav className={styles.mainnav}>
        <ul>
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <li>Blogs</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li>Contacts</li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
