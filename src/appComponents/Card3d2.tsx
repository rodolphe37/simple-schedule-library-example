import "./card-3d.css";
import Cover from "../assets/images/cards-example/force_mage-cover.jpg";
import MageTitle from "../assets/images/cards-example/force_mage-title.png";
import MageCharacter from "../assets/images/cards-example/force_mage-character.webp";

const Card3d2 = () => {
  return (
    <div>
      <a href="#" target="_blank">
        <div className="card-3d">
          <div className="wrapper-3d">
            <img src={Cover} className="cover-image-3d" />
          </div>
          <img src={MageTitle} className="title-3d" />
          <img src={MageCharacter} className="character-3d" />
        </div>
      </a>
    </div>
  );
};

export default Card3d2;
