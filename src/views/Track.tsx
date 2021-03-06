import styles from './Track.module.scss';
import { useState } from 'react';
import { SoundcloudTrack } from 'soundcloud';

import TrackCover from 'views/TrackCover';
import AddToPlaylist from 'views/AddToPlaylist';
import Button from 'components/Button';


function Track({
  track,
  play,
}: {
  track: SoundcloudTrack;
  play: () => void;
}) {
  const [showAddToPlaylist, setShowAddToPlaylist] = useState(false);

  return (
    <>
      <div
        className={styles.track}
      >
        <div className={styles.coverDiv}>
          <TrackCover track={track} />
          <Button
            className='material-icons'
            onClick={play}
          >
            play_arrow
          </Button>
        </div>

        <div className={styles.info}>
          <p className={styles.title}>
            {track.title}
          </p>
          <p className={styles.artist}>
            {track.user.username}
          </p>
        </div>

        <div className={styles.control}>
          <Button
            className='material-icons'
            onClick={() => setShowAddToPlaylist(true)}
          >
            add_box
          </Button>
        </div>
      </div>
      {
        (showAddToPlaylist) && (
          <AddToPlaylist
            track={track}
            hideAddToPlaylist={() => setShowAddToPlaylist(false)}
          />
        )
      }
    </>
  );
}

export default Track;