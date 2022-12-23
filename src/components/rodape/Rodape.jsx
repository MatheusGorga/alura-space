import styles from './Rodape.module.scss';

function Rodape() {
  return (
    <div className={styles.rodape}>
      <section>
        <a href='/'>
          <img src='/assets/facebook.svg' alt='facebook' />
        </a>

        <a href='/'>
          <img src='/assets/instagram.svg' alt='instagram' />
        </a>

        <a href='/'>
          <img src='/assets/twitter.svg' alt='twitter' />
        </a>
      </section>
      <h3>Desenvolvido por Alura.</h3>
    </div>
  );
}

export default Rodape;
