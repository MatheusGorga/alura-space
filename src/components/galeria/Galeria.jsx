import Tags from '../tags/Tags';
import styles from './Galeria.module.scss';
import fotos from './fotos.json';
import Cards from './cards/Cards';
import { useState } from 'react';

function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((valor) => valor.tag))];

  const fotoFilter = (tag) => {
    const novasfotos = fotos.filter((itens) => {
      return itens.tag === tag;
    });
    setItens(novasfotos);
  };

  return (
    <div className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} fotoFilter={fotoFilter} setItens={setItens} />
      <Cards fotos={itens} styles={styles} />
    </div>
  );
}

export default Galeria;
