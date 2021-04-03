import React from "react"
import { DiscussionEmbed } from 'disqus-react';

import styles from "./index.module.css"

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={`${styles.wrapper} ${styles.block}`}>
          <div className={styles.headerLogoBlock}>
            <div className={styles.headerLogo} 
                 style={{backgroundImage: "url(https://source.unsplash.com/54x54/?star)"}}
            ></div>
            <div className={styles.headerTitle}>
              <p>Motivation</p>
              <p>Zone</p>
            </div>
          </div>
          <div className={styles.headerMenu}>
            <div className={styles.headerMenuList}>
              <ul>
                <li>Epic Music</li>
                <li>Gaming Music</li>
                <li>Game Trailers</li>
                <li>Fun</li>
                <li>Posters</li>
                <li>Videos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className={styles.mainContent}>
        <div className={`${styles.wrapper} ${styles.block}`}>
          <div className={styles.contentHeader}>
            <div className={styles.contentTitle}>Epic Music</div>
            <div className={styles.contentDescription}>
              Sometimes you need a kick of strength to continue the do.
              This motivation mix is meant to awaken your second breath, to power up to the limits... 
              Use it wise and the power of epico will be with you. 
            </div>
          </div>
          <div className={styles.contentItselfWrapper}>
            <div className={styles.contentItself}>
              <iframe width="844" height="477" src="https://www.youtube.com/embed/videoseries?list=PLKBdUrASEdD8jdTJxrm63J91hxfzw9yv6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className={styles.contentRelated}>
              <div className={styles.contentInlineTitle}>
                Related Content
              </div>
              <div className={styles.contentInlineFlex}>
                <div>
                  <iframe width="415" height="235" src="https://www.youtube.com/embed/videoseries?list=PLKBdUrASEdD-5wot4-YVN3XtLCpuQDrWn" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                  <iframe width="415" height="235" src="https://www.youtube.com/embed/videoseries?list=PLKBdUrASEdD8xL_Xi3VEFODpTdyJiasRl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div className={styles.contentComments}>
              <DiscussionEmbed
                  shortname='motivation-zone'
                  config={
                    {
                      //url: "",
                      identifier: "Epic Music",
                      title: "Epic Music",
                      language: 'en_US'
                    }
                  }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={`${styles.wrapper} ${styles.block}`}>
          <div>
            <ul className={styles.footerMenu}>
              <li>Home</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div>Motivation Zone</div>
        </div>
      </div>
    );
  }
}

export default class MZ extends React.Component {
  render() {
    return (
      <div className={styles.cover}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}
