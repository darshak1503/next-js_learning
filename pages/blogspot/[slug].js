import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>{slug}</h1>
          <hr />
          <p>
            Next. js provides an easy way to create dynamic pages and handle
            routing. It also includes some built-in features, such as support
            for server-side rendering and pre-rendering. This can make your
            application faster and more reliable.
          </p>
        </main>
      </div>
    </>
  );
};

export default slug;
