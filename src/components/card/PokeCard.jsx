import './Pokecard.css';

export default function Pokecard({image, name, type}) {
  return (
    <article className="pokecard">
      <img src={image} alt={name} className="pokecard-image" />
      <h3 className="pokecard-title">{name}</h3>
      <p className="pokecard-info">{type}</p>
    </article>
  );
}