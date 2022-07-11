import React from 'react'
import styles from "../styles/Blog.module.css";
import Link from 'next/link';

const blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
   
    <div className={styles.blogItem}>
      <Link href = {'/blogspot/learn-nextjs'}>
      <h3>How to learn NextJs in 2022</h3></Link>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut numquam facilis est.</p>
    </div>
    <div className="blogItem">
      <h3>How to learn NextJs in 2022</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut numquam facilis est.</p>
    </div>
    <div className="blogItem">
      <h3>How to learn NextJs in 2022</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut numquam facilis est.</p>
    </div>
   </main>
   </div>
  )
}

export default blog