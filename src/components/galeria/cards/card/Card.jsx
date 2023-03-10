function Card({ foto, styles }) {
  return (
    <li key={foto.id} className={styles.galeria__card}>
      <img
        className={styles.galeria__imagem}
        src={foto.imagem}
        alt={foto.titulo}
      />
      <p className={styles.galeria__descricao}>{foto.titulo}</p>
      <div>
        <p>{foto.creditos}</p>
        <span>
          <img src='/assets/favorito.png' alt='icone para curtir' />
          <img src='/assets/open.png' alt='icone para abrir modal' />
        </span>
      </div>
    </li>
  );
}

export default Card;
