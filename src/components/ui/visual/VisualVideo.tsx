export const VisualVideo = (props: VisualIconProps) => {
  const videoName = props.id < 10 ? `0${props.id}` : `${props.id}`;
  return (
    <div className='visual__video' data-video={props.id}>
      <video
        playsInline
        src={`/video/visual_${videoName}.mp4`}
        loop
        autoPlay={true}
        muted
      ></video>
    </div>
  );
};

export interface VisualIconProps {
  id: number;
}
