import React from "react";
import { useRouter } from "next/router";
import styles from '../../styles/BlogPost.module.css';

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Title of the page {slug}</h1>
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam nemo at
        architecto quis labore fuga ea deleniti dolores, eaque voluptatibus
        consequuntur neque.
      </div>
      </main>
    </div>
  );
};

export default slug;
