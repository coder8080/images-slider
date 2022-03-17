import "./card.styles.scss";

const Card = ({ title, image, active, id, changeActive }) => (
  <div
    className={`${id == active ? "active" : ""} card`}
    onClick={() => changeActive(id)}
  >
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="background"
    ></div>
    <div className="background"></div>
    <h3> {title}</h3>
  </div>
);

export default Card;
