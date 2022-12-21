import styles from './Banner.module.scss';

function Banner() {
  return (
    <div className={styles.banner}>
      <h1>A galeria mais completa do espaço</h1>
      <img src='/assets/banner.png' alt='A galeria mais completa do espaço' />
    </div>
  );
}

export default Banner;
