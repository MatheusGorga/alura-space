import styles from './Menu.module.scss';

function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src='/assets/icones/home-ativo.png' alt='inicio' />
          <a href='/'>Inicio</a>
        </li>
        <li className={styles.menu__item}>
          <img
            src='/assets/icones/mais-curtidas-inativo.png'
            alt='mais curtidas'
          />
          <a href='/'>Mais Curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src='/assets/icones/mais-vistas-inativo.png' alt='mais vistas' />
          <a href='/'>Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src='/assets/icones/novas-inativo.png' alt='novas' />
          <a href='/'>Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img
            src='/assets/icones/surpreenda-me-inativo.png'
            alt='surpreenda-me'
          />
          <a href='/'>Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
