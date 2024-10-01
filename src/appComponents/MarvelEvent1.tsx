import "./marvel-event.css";

const MarvelEvent1 = () => {
  return (
    <div>
      <div className="card-marvel" id="hulk">
        <div className="card-marvel-image">
          <img src="https://res.cloudinary.com/dsgvp2wmj/image/upload/v1636769866/466-4665707_hulk-png-avengers-earths-mightiest-heroes-hulk-transparent-removebg-preview_hxdclj.png" />
        </div>
        <div className="card-marvel-text">
          <h2>MARVEL</h2>
          <p>
            COMICS
            <br />
            GROUP
          </p>
          <div>
            <div>
              <span>6.5</span>
              <span>&euro;</span>
            </div>
            <div>
              <span>each</span>
              <span>Monday & Tuesday</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarvelEvent1;
