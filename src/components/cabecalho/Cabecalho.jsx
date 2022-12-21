import styles from './Cabecalho.module.scss';

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <img src='/assets/logo.png' alt='' />

      <div className={styles.cabecalho__container}>
        <input
          className={styles.cabecalho__input}
          type='text'
          placeholder='O que voce procura'
        />
        <img src='/assets/search.png' alt='lupa' />
      </div>
    </header>
  );
}

export default Cabecalho;
