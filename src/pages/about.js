/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
// import clsx from 'clsx';
import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import Support from '../../components/Support';

// const features = [
//   {
//     title: 'Easy to Use',
//     imageUrl: 'img/undraw_docusaurus_mountain.svg',
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     imageUrl: 'img/undraw_docusaurus_tree.svg',
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     imageUrl: 'img/undraw_docusaurus_react.svg',
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({imageUrl, title, description}) {
//   const imgUrl = useBaseUrl(imageUrl);
//   return (
//     <div className={clsx('col col--4', styles.feature)}>
//       {imgUrl && (
//         <div className="text--center">
//           <img className={styles.featureImage} src={imgUrl} alt={title} />
//         </div>
//       )}
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

function Home() {
  // const context = useDocusaurusContext();
  // const {siteConfig = {}} = context;
  const contributors = [
    {username: 'Thor-x86', teamJob: 'Founder • Developer'},
    {username: 'yummyweb', teamJob: 'Developer • Maintainer'},
    {username: 'BraydenTW', teamJob: 'Designer • Developer'},
  ];
  const [team, setTeam] = useState([]);
  useEffect(() => {
    contributors.forEach(async (contributor) => {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${contributor.username}`,
      );
      const data = await res.json();
      const teamMember = {
        name: !data.name ? data.login : data.name,
        username: data.login,
        teamJob: contributor.teamJob,
        avatar: data.avatar_url,
        ghProfile: data.html_url,
      };
      setTeam((prevTeam) => [...prevTeam, teamMember]);
    });
  }, []);

  return (
    <Layout
      title="About"
      description="Description will go into a meta tag in <head />">
      <header className={styles.aboutBanner}>
        <div className="container">
          <div className={styles.aboutLogo} />
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
              <div className={styles.teamItem} key={member.name}>
                <img alt={member.name} src={member.avatar} />
                <h3>{member.name}</h3>
                <p className={styles.teamJob}>{member.teamJob}</p>
                <p>
                  <a
                    href={member.ghProfile}
                    target="_blank"
                    rel="noopener noreferrer">
                    @{member.username}
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
