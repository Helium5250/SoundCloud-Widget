import styles from './Notifier.module.scss';

import { useAppSelector } from 'app/hooks';
import { selectNotices } from 'app/noticeSlice';

const Notifier = () => {
  const notices = useAppSelector(selectNotices);

  return (
    <div id={styles.notifier}>
      {notices.slice(-5).map((notice, idx) => (
        <div key={idx} className={styles.notice}>
          {notice.msg}
        </div>
      ))}
    </div>
  );
};

export default Notifier;
