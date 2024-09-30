import "./card-3d.css";
import darkRiver from "../assets/images/cards-example/dark_rider-cover.jpg";
import DarkTitle from "../assets/images/cards-example/dark_rider-title.png";
import DarkCharacter from "../assets/images/cards-example/dark_rider-character.webp";

const Card3d1 = () => {
  return (
    <div>
      <a href="#" target="_blank">
        <div className="card-3d">
          <div className="wrapper-3d">
            <img src={darkRiver} className="cover-image-3d" />
          </div>
          <img src={DarkTitle} className="title-3d" />
          <img src={DarkCharacter} className="character-3d" />
        </div>
      </a>
    </div>
  );
};

export default Card3d1;
