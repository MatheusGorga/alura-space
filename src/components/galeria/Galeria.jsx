import Tags from '../tags/Tags';
import styles from './Galeria.module.scss';
import fotos from './fotos.json';
import Cards from './cards/Cards';

function Galeria() {
  return (
    <div className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards fotos={fotos} styles={styles} />
    </div>
  );
}

export default Galeria;
