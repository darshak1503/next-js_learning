import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogItem}>
          <Link href={"/blogspot/Learn Nextjs"}>
            <h3>How to learn NextJs in 2022</h3>
          </Link>
          <p>
            Next. js provides an easy way to create dynamic pages and handle
            routing. It also includes some built-in features, such as support
            for server-side rendering and pre-rendering. This can make your
            application faster and more reliable.
          </p>
        </div>
        <div className={styles.blogItem}>
          <Link href={"/blogspot/Learn React-js"}>
            <h3>How to learn React Js in 2022</h3>
          </Link>
          <p>
            React is popular, it offers high-paying jobs, is easy to learn, and
            has many features. So if you are planning to learn React in 2022,
            then you should go for it.
          </p>
        </div>
        <div className={styles.blogItem}>
          <Link href={"/blogspot/Become a MERN Stack Developer"}>
            <h3>How to Become a MERN Stack Developer</h3>
          </Link>
          <p>
            MERN stack is powerful and is in demand for web technology. This
            technology is used to build dynamic web apps and websites. This tech
            stacks front end and back end are completely based on JavaScript
          </p>
        </div>
      </main>
    </div>
  );
};

export default blog;
