/* eslint-disable header/header */
import React from 'react';
import styles from './Support.module.css';

function Support() {
  return (
    <div>
      <div className={styles.support}>
        <h2>Love FIWL?</h2>
        <p>
          Here are a few ways that you can support our work. We deeply
          appreciate every bit of help.
        </p>
        <a
          href="https://github.com/fiwl-js/fiwl-js"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.supportGITHUB}>
          Star our Repository
        </a>
        <a
          href="https://ko-fi.com/fiwl_js"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.supportKOFI}>
          Support us on Ko-Fi
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.supportTWITTER}>
          Share on Twitter
        </a>
      </div>
    </div>
  );
}

export default Support;
