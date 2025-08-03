import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl'; 
import Layout from '@theme/Layout';
import TypewriterEffect from '../components/TypewriterEffect';
import Translate, {translate} from '@docusaurus/Translate';

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
            poster={useBaseUrl('/img/thumbnail.png')} 
            aria-label={translate({
              id: 'homepage.video.ariaLabel',
              message: 'BookFusion introduction video',
              description: 'Aria label for the introduction video'
            })}
          >
            <source src={useBaseUrl('/videos/BookFusion-Introduction-Video.webm')} type="video/webm" /> 
            <Translate
              id="homepage.video.notSupported"
              description="Message shown when video is not supported">
              Your browser does not support the video tag.
            </Translate>
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
        title={translate({
        id: 'homepage.title',
        message: siteConfig.title,
        description: 'The title of the homepage'
      })}>
      <div className='homepage'>
        <HeroSection/>
      </div>
    </Layout>
  );
}