import styles from './Tags.module.scss';

function Tags() {
  return (
    <div className={styles.tags}>
      Busque por tags:
      <ul className={styles.tags__lista}>
        <li>Estrelas</li>
        <li>Galaxias</li>
        <li>Lua</li>
        <li>Planeta</li>
      </ul>
    </div>
  );
}

export default Tags;
