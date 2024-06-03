import { DownArrow } from '@/components/ui/icon';
import { Section } from '@/components/ui/section';

const Video = () => {
  return (
    <Section className='video'>
      <h2 className='sound-only'>상단 비디오 영역</h2>
      <div className='video__container'>
        <video src='/video/main_video.mp4' loop autoPlay={true} muted></video>
      </div>
      <div className='video__title-container'>
        <p className='video__title'>Experience Worlds Unseen</p>
        <div className='video__info pc-only'>
          <p>Featured Reel ‘24</p>
          <button className='video__timer'>00:00</button>
        </div>
      </div>
      <button className='video__more'>
        Scroll for more <DownArrow />
      </button>
    </Section>
  );
};

export default Video;
