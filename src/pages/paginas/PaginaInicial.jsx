import Banner from '../../components/banner/Banner';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Menu from '../../components/menu/Menu';
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
      </main>
      <Rodape />
    </>
  );
}

export default PaginaInicial;
