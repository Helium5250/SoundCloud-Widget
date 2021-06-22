import styles from './Searchbar.module.scss';
import React, { useState, useRef } from 'react';

import { useAppDispatch } from 'app/hooks';
import { searchForTracks } from 'app/soundcloudSlice';

import useEventListener from 'hooks/useEventListener';
import Button from 'components/Button';


export default function Searchbar() {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState('');
  const searchbar = useRef<null | HTMLInputElement>(null);

  const submitHandler = () => {
    dispatch(searchForTracks(input));
  };

  useEventListener(document.body, "keydown", (e) => {
    if (e.key === "/") {
      e.preventDefault();
      searchbar.current?.focus();
    }
  });

  return (
    <div className={styles.searchbar}>
      <input
        autoFocus
        placeholder='Search'
        ref={searchbar}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            submitHandler();
          }
        }}
      />

      <div className={styles.searchbarControl}>
        <Button
          className='material-icons'
          onClick={submitHandler}
        >
          search
        </Button>
        <Button
          className='material-icons'
          onClick={() => {
            setInput('');
            searchbar.current && searchbar.current.focus();
          }}
        >
          clear
        </Button>
      </div>

      <div className={styles.focusTip}>
        Press <code>/</code> to Focus
      </div>
    </div>
  );
}