import Card from './card/Card';

function Cards({ fotos, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {fotos.map((foto) => {
        return <Card key={foto.id} foto={foto} styles={styles} />;
      })}
    </ul>
  );
}

export default Cards;
