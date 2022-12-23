import styles from './Tags.module.scss';

function Tags() {
  return (
    <div className={styles.tags}>
      <ul>
        <li>Estrelas</li>
        <li>Galaxias</li>
        <li>Lua</li>
        <li>Planeta</li>
      </ul>
    </div>
  );
}

export default Tags;
