import { useState } from 'react';
import { VideoList } from 'components/VideoList/VideoList';
import { Player } from 'components/Player/Player';
import videos from '../videos.json';

export const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div style={{ padding: 24 }}>
      <h1>Selected video: {selectedVideo}</h1>
      <VideoList videos={videos} onSelect={setSelectedVideo} />
      <Player url={selectedVideo} />
    </div>
  );
};
