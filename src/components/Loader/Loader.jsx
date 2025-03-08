import { SyncLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <SyncLoader loading={true} color="#4fa94d" />
    </div>
  );
};
export default Loader;
