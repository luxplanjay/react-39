import { useEffect, useState } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export const Player = ({ url }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVideoLoaded(false);
  }, [url]);

  const showLoader = url && !isVideoLoaded;
  const playerSize = isVideoLoaded ? '100%' : 0;

  return (
    <>
      {showLoader && <h2>Загружаем видео...</h2>}
      {url && (
        <PlayerWrapper>
          <StyledPlayer
            url={url}
            width={playerSize}
            height={playerSize}
            onReady={() => setIsVideoLoaded(true)}
            controls
          />
        </PlayerWrapper>
      )}
    </>
  );
};
