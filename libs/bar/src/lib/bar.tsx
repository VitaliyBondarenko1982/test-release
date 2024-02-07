import styles from './bar.module.scss';
import { Baz } from '@test-release/baz';

/* eslint-disable-next-line */
export interface BarProps {}

export function Bar(props: BarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Bar!</h1>
      <Baz />
    </div>
  );
}

export default Bar;
