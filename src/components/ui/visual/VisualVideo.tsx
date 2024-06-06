export const VisualVideo = (props: VisualIconProps) => {
  const videoName = props.id < 10 ? `0${props.id}` : `${props.id}`;
  return (
    <div className='visual__video' data-video={props.id}>
      <div className='visual__video-inner'>
        <video
          playsInline
          src={`/video/visual_${videoName}.mp4`}
          loop
          autoPlay={true}
          muted
          data-video={props.id}
        ></video>
      </div>
    </div>
  );
};

export interface VisualIconProps {
  id: number;
}
