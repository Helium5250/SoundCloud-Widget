import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import SoundCloudAPI from './utils/SCAPI';
import Searchbar from './components/searchbar';
import Spinner from './components/spinner';
import MiniPlayer from './components/miniplayer';
import Track from './components/track';

function App() {
  const API_ID = 'cd9be64eeb32d1741c17cb39e41d254d';
  const player = useRef();

  useEffect(() => {
    SoundCloudAPI.init(API_ID);
  }, []);

  const [status, setStatus] = useState('coldStart');
  const [tracks, setTracks] = useState([]);

  const fetchTracks = (input) => {
    setStatus('fetching');
    SoundCloudAPI.getTracks(input, data => {
      setStatus('fetched');
      setTracks(data);
    });
  };

  const [currentTrack, setCurrentTrack] = useState();
  const [duration, setDuration] = useState(0);

  useEffect(() => currentTrack && (
    async () => {
      setPause(true);
      player.current = await SoundCloudAPI.getPlayer(currentTrack.id);
      setPause(false);
      
      player.current.play();
      player.current.on('play-start',
        () => setDuration(player.current.getDuration())
      );
    }
  )(), [currentTrack]);

  const [timestamp, setTimestamp] = useState(0);
  useEffect(() => {
    const timestampTimer = setInterval(() => {
      player.current && setTimestamp(player.current.currentTime());
    }, 1000);
    return () => clearInterval(timestampTimer);
  }, []);

  const [pause, setPause] = useState(false);
  useEffect(() => player.current && (
    pause ? player.current.pause() : player.current.play()
  ), [pause]);

  const renderResult = () => {
    switch (status) {
      case 'fetching':
        return <Spinner />;
      case 'fetched':
        return tracks.length === 0
          ? <div id='noResult'>No Result :(</div>
          : tracks.map((track, index) => (
            <Track
              key={index}
              info={{
                title: track.title,
                artist: track.user.username,
                imgURL: track.artwork_url?.replace(/large(?=.jpg)/i, 'small')
              }}
              play={() => setCurrentTrack(tracks[index])}
            />
          ));
      default:
        return;
    }
  };

  return <>
    <Searchbar returnInput={fetchTracks} />
    <div id='searchResults'>
      {renderResult()}
    </div>
    {currentTrack && (
      <MiniPlayer
        info={{
          trackId: currentTrack.id,
          title: currentTrack.title,
          artist: currentTrack.user.username,
          timestamp: timestamp,
          duration: duration,
          imgURL: currentTrack.artwork_url?.replace(/large(?=.jpg)/i, 't500x500')
        }}
        pause={pause}
        onPause={() => setPause(pause => !pause)}
        skip={(next) => setCurrentTrack((currentTrack) => {
          const currentTrackIndex = tracks.indexOf(currentTrack);
          const nextTrackIndex = next ? currentTrackIndex + 1 : currentTrackIndex - 1;
          return tracks[nextTrackIndex] || currentTrack;
        })}
      />
    )}
  </>;
};

export default App;
