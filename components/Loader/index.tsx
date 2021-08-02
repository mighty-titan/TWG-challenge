import React from "react";
import styles from "./Loader.module.css";

const Loader = () => (
  <div className="d-flex justify-content-center align-items-center py-1">
    <p className="px-2 my-0">Loading</p>
    <div className={styles.loader} />
  </div>
);

export default Loader;
