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
import styles from './styles.module.css';

import Support from '../../components/Support';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

const team = [
  {
    name: 'Athaariq "Eric" Ardhiansyah',
    teamJob: 'Founder • Developer',
    avatar:
      'https://avatars1.githubusercontent.com/u/30412448?s=460&u=a54e2bab174032caaf40f0a28fb753affdcab7d1&v=4',
    ghProfile: 'https://github.com/Thor-x86',
  },
  {
    name: 'Antariksha Verma',
    teamJob: 'Developer • Maintainer',
    avatar:
      'https://avatars2.githubusercontent.com/u/33229117?s=460&u=4b71b49dc448424e65a1c37bd6655cddc8185ef9&v=4',
    ghProfile: 'https://github.com/antriksh123',
  },
  {
    name: 'Brayden W',
    teamJob: 'Designer • Developer',
    avatar:
      'https://avatars0.githubusercontent.com/u/47185402?s=460&u=a8110a698e221877bac03471b80a8d430c22af05&v=4',
    ghProfile: 'https://github.com/BraydenTW',
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
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
    <Layout
      title={`About`}
      description="Description will go into a meta tag in <head />">
      <header className={styles.aboutBanner}>
        <div className="container">
          <div className={styles.aboutLogo}></div>
          <br />
          <br />
          <h1 className="hero__title">About Us</h1>
          <p className={styles.aboutParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel
            exercitationem, aliquid voluptates explicabo recusandae labore
            similique corrupti, facilis dignissimos eum nihil distinctio esse
            voluptas.
          </p>
        </div>
      </header>
      <main>
        <div className={styles.aboutMain}>
          <h2 className={styles.teamTitle}>Meet the Team</h2>
          <div className={styles.team}>
            {team.map((member) => (
              <div className={styles.teamItem} key={member.ghProfile}>
                <img alt={member.name} src={useBaseUrl(member.avatar)} />
                <h3>{member.name}</h3>
                <p className={styles.teamJob}>{member.teamJob}</p>
                <p>
                  <a
                    href={member.ghProfile}
                    target="_blank"
                    rel="noopener noreferrer">
                    @{member.ghProfile.replace('https://github.com/', '')}
                  </a>
                </p>
              </div>
            ))}
          </div>
          <Support />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
