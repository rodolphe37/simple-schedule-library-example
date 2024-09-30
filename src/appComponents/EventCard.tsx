import "./eventCard.css";

const EventCard = () => {
  return (
    <li className="card-event" aria-labelledby="event card">
      <div className="card__filter-event">
        <img
          className="card__photo-event"
          src="https://i1.sndcdn.com/artworks-000192685399-co64se-t500x500.jpg"
          alt="A man in colorful clothing with the sun behind him on a beach."
        />
      </div>
      <div className="card__container-event">
        <h2>Englewood</h2>
        <time>Friday, July 10 • 7:00PM</time>
        <p>
          Palm Beach, <abbr title="Florida">FL</abbr>
        </p>
        <a className="card__location-event" href="https://goo.gl/maps/dsPC54CdmnE2">
          Coral Sky Amphitheatre
        </a>
        <div className="card__buttons-event">
          <a
            href="#"
            className="card__buttons-event btn primary"
            role="button"
            aria-haspopup="false"
          >
            Details
            <div className="card__fill"></div>
          </a>
          <a
            href="#"
            className="card__buttons-event btn secondary"
            role="button"
            aria-haspopup="false"
          >
            Tickets
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </li>
  );
};

export default EventCard;
