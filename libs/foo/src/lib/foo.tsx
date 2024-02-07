import styles from './foo.module.scss';
import { Baz } from '@monoleasa-v/baz';

/* eslint-disable-next-line */
export interface FooProps {}

export function Foo(props: FooProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Foo!</h1>
      <Baz />
    </div>
  );
}

export default Foo;
