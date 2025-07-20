import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TypewriterEffect from '../components/TypewriterEffect';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HeroSection() {
  return (
    <div className='parent'>
      <div className='left'>
        <h1 className="hero__title">
          <span><TypewriterEffect className="typewriter-hero" /></span>
        </h1>
      </div>
      <div className='right'>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
    <video
      style={{
        width: "100%",
        maxWidth: "500px",
        height: "auto",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
      }}
      controls
      poster='/img/thumbnail.png'
    >
      <source src="/videos/BookFusion Introduction Video.mp4" type="video/mp4" />
    </video>
  </div>
</div>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}>
        <div className='homepage'>
          <HeroSection/>
        </div>
    </Layout>
  );
}
