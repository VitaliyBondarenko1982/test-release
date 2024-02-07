import styles from './baz.module.scss';

/* eslint-disable-next-line */
export interface BazProps {}

export function Baz(props: BazProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to really Baz!</h1>
    </div>
  );
}

export default Baz;
