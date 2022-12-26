import Banner from '../../components/banner/Banner';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Galeria from '../../components/galeria/Galeria';
import Menu from '../../components/menu/Menu';
import Populares from '../../components/populares/Populares';
import Rodape from '../../components/rodape/Rodape';
import styles from './PaginaInicial.module.scss';

function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>

        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>

      <Rodape />
    </>
  );
}

export default PaginaInicial;
