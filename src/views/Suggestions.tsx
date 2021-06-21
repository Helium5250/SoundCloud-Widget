import styles from './Suggestions.module.scss';

import { useAppDispatch } from 'app/hooks';
import { searchForTracks } from 'app/soundcloudSlice';

import { getRandNumBetween } from 'utils/functions';


const searchTerms = ['DROELOE', 'Illenium', 'San Holo', 'Christian Loffler', 'REZZ', 'Lastlings', 'Porter Robinson', 'Madeon', 'Excision', 'Culture Shock', 'Vanic', 'Regard', 'William Black', 'MitiS', 'Koven', 'Dabin', 'Alok', 'Skan', 'Hybrid Minds', 'KSHMR', 'Robin Schulz'];

const colorList = ['hsl(272, 7%, 23%)', 'hsl(80, 1%, 20%)', 'hsl(312, 24%, 24%)', 'hsl(352, 33%, 45%)', 'hsl(300, 9%, 41%)', 'hsl(267, 21%, 7%)', 'hsl(359, 32%, 26%)', 'hsl(19, 39%, 41%)', 'hsl(207, 35%, 42%)', 'hsl(215, 43%, 25%)', 'hsl(352, 18%, 27%)', 'hsl(177, 29%, 34%)', 'hsl(193, 39%, 16%)', 'hsl(74, 24%, 32%)', 'hsl(130, 26%, 35%)', 'hsl(64, 14%, 36%)', 'hsl(171, 14%, 36%)'];


function Suggestions() {
  const dispatch = useAppDispatch();

  return (
    <div id={styles.suggestions}>
      {searchTerms.map((term) => {
        const randColor = colorList[getRandNumBetween(0, colorList.length)];
        return (
          <button
            style={{
              'backgroundColor': randColor
            }}
            onClick={() =>
              dispatch(searchForTracks(term))
            }
          >
            {term}
          </button>
        );
      })}
    </div>
  );
}

export default Suggestions;
