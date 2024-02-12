const Video = () => (
  <video
    controls
    controlsList="nodownload"
    preload=""
    className="rounded-moon-s-md"
  >
    <source src="https://s3.amazonaws.com/cdn.coingaming.io/videos/gettingStartedDesigners.mp4" />
    Sorry, your browser does not support embedded videos.
  </video>
);

export default Video;
