import { videos } from "../data/videos";
import VideoList from "../components/VideoList";

export default function VideosPage() {
  return (
    <div className="content-narrow">
      <h1 className="text-3xl font-bold mb-8">Videos</h1>
      <VideoList videos={videos} />
    </div>
  );
}

