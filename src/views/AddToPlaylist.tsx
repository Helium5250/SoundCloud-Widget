import styles from './AddToPlaylist.module.scss';
import { SoundcloudTrack } from 'soundcloud';

import { useAppSelector, useAppDispatch } from 'app/hooks';
import { selectPlaylistsAsArray, createPlaylist, addToPlaylist } from 'app/playlistSlice';

import PlaylistOverview from 'views/PlaylistOverview';
import Button from 'components/Button';
import Form from 'components/Form';
import { useState } from 'react';


function AddToPlaylist({
  track,
  hideAddToPlaylist
}: {
  track: SoundcloudTrack;
  hideAddToPlaylist: () => void;
}) {
  const dispatch = useAppDispatch();
  const playlists = useAppSelector(selectPlaylistsAsArray);
  const [showNewPlaylist, setShowNewPlaylist] = useState(false);

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        hideAddToPlaylist();
      }}
    >
      <div className={styles.addToPlaylist}>
        <div className={styles.titleDiv}>
          <p>
            Add to...
          </p>
          <Button
            className='material-icons'
            onClick={() => hideAddToPlaylist()}
          >
            close
          </Button>
        </div>
        {(
          showNewPlaylist
        ) ? (
          <Form
            className={styles.newPlaylistForm}
            inputItems={{
              playlistName: {
                placeholder: 'Playlist Name',
                required: true,
                autoFocus: true
              }
            }}
            submitFn={(inputItems) => {
              dispatch(createPlaylist(inputItems.playlistName));
              setShowNewPlaylist(false);
            }}
          >
            <div className={styles.btns}>
              <Button
                styledAs='bigWhite'
                onClick={() => setShowNewPlaylist(false)}
              >
                Cancel
              </Button>
              <Button
                styledAs='bigWhite'
                type='submit'
              >
                Create
              </Button>
            </div>
          </Form>
        ) : (
          <>
            <div className={styles.playlists}>
              {(playlists).map((playlist, idx) =>
                <PlaylistOverview
                  key={idx}
                  playlist={playlist}
                  clickHandler={() => dispatch(addToPlaylist({ playlist, track }))}
                />
              )}
            </div>
            <Button
              styledAs='bigWhite'
              onClick={() => setShowNewPlaylist(true)}
            >
              <span className='material-icons'>
                add
              </span>
              New Playlist
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default AddToPlaylist;
