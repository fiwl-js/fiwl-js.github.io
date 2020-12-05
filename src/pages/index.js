/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

import Support from '../../components/Support';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/code_development.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, rem
        veniam incidunt optio accusantium facilis.
      </>
    ),
  },
  {
    title: 'Layouting System',
    imageUrl: 'img/web_development.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        tempore dolore perspiciatis iusto optio iure, tempora at culpa?
      </>
    ),
  },
  {
    title: 'Lightweight',
    imageUrl: 'img/innovation.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dicta
        inventore repellat aliquid repellendus.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4 text--center', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title={`Home`} description="Desc">
      <header className={styles.heroBanner}>
        <div className="container">
          <img
            alt="Docusaurus with Keytar"
            src={useBaseUrl('img/logo.png')}
            width="140"
          />
          <br />
          <br />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={styles.getStarted} to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className={styles.quickstart}>
          <div>
            <h2>Get started in seconds</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure
              vero eius maiores, eligendi excepturi laudantium.
            </p>
            <p>
              To create a project called <code>myapp</code>, run this command:
            </p>
            <CodeBlock className="language-sh">
              npx create-fiwl-app myapp
            </CodeBlock>
          </div>
          <div>
            <img alt="Demo" src={useBaseUrl('img/demo.gif')} width="100%" />
          </div>
        </div>
        <Support />
      </main>
    </Layout>
  );
}

export default Home;
