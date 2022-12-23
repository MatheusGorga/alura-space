import Tags from '../tags/Tags';
import styles from './Galeria.module.scss';

function Galeria() {
  return (
    <div className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul></ul>
    </div>
  );
}

export default Galeria;
