import styles from './Tags.module.scss';
import fotos from '../galeria/fotos.json';

function Tags({ fotoFilter, tags, setItens }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => fotoFilter(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItens(fotos)}>Todas</li>
      </ul>
    </div>
  );
}

export default Tags;
