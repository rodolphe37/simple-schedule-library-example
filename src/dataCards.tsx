import { Fragment } from "react/jsx-runtime";
import EventCard from "./appComponents/EventCard";
import Card3d2 from "./appComponents/Card3d2";
import Card3d1 from "./appComponents/Card3d1";
import FoodCard from "./appComponents/FoodCard";
import MarvelEvent1 from "./appComponents/MarvelEvent1";
import MarvelEvent2 from "./appComponents/MarvelEvent2";

enum EeventTypes {
  food = "eventType_1",
  concert = "eventType_2",
  game_force = "eventType_3",
  game_dark = "eventType_4",
  lecture = "eventType_5",
  closed = "eventType_6",
}

export const contentForModal = [
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 0,
    eventType: EeventTypes.concert,
    startTime: 1230,
    eventTitle: "Englewood Concert",
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          Event de lundi à 20:30 et réservation
        </h1>
        <EventCard />
      </Fragment>
    ),
  },
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 3,
    eventType: EeventTypes.concert,
    startTime: 450,
    eventTitle: "Englewood Concert",
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          Event de jeudi à 07:30 et réservation
        </h1>
        <EventCard />
      </Fragment>
    ),
  },
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 1,
    eventType: EeventTypes.concert,
    startTime: 1020,
    eventTitle: "Englewood Concert",
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          Event du mardi à 17h info et réservation
        </h1>
        <EventCard />
      </Fragment>
    ),
  },
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 1,
    eventType: EeventTypes.game_force,
    startTime: 900,
    eventTitle: "Force mage game",
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          Event du mardi à 15h00 info
        </h1>
        <Card3d2 />
      </Fragment>
    ),
  },
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 4,
    eventType: EeventTypes.game_force,
    startTime: 480,
    eventTitle: "Force mage game",
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          Event du vendredi à 08h00 info
        </h1>
        <Card3d2 />
      </Fragment>
    ),
  },
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 5,
    eventType: EeventTypes.game_dark,
    startTime: 450,
    eventTitle: "Dark rider game",
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          Event du samedi à 07:30 info
        </h1>
        <Card3d1 />
      </Fragment>
    ),
  },
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 2,
    eventType: EeventTypes.game_dark,
    startTime: 495,
    eventTitle: "Dark rider game",
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          Event du mercredi à 08:15 info
        </h1>
        <Card3d1 />
      </Fragment>
    ),
  },
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 2,
    eventType: EeventTypes.game_dark,
    startTime: 900,
    eventTitle: "Dark rider game",
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          Event du mercredi à 15:00 info
        </h1>
        <Card3d1 />
      </Fragment>
    ),
  },
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 0,
    eventType: EeventTypes.lecture,
    eventTitle: "Marvel Conf",
    startTime: 600,
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          session de discussion sur les revues Marvel
        </h1>
        <MarvelEvent1 />
      </Fragment>
    ),
  },
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 0,
    eventType: EeventTypes.game_dark,
    startTime: 900,
    eventTitle: "Dark rider game",
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          Event du lundi à 15:00 info
        </h1>
        <Card3d1 />
      </Fragment>
    ),
  },
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 1,
    eventType: EeventTypes.lecture,
    eventTitle: "Marvel Conf",
    startTime: 600,
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          session de discution sur les revues Marvel
        </h1>
        <MarvelEvent2 />
      </Fragment>
    ),
  },
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 0,
    eventType: EeventTypes.food,
    eventTitle: "Food Party",
    startTime: 720,
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          Event du lundi à 12:00 info
        </h1>
        <FoodCard />
      </Fragment>
    ),
  },
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 1,
    eventType: EeventTypes.food,
    eventTitle: "Food Party",
    startTime: 720,
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          Event du mardi à 12:00 info
        </h1>
        <FoodCard />
      </Fragment>
    ),
  },
  {
    id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
    day: 2,
    eventType: EeventTypes.food,
    eventTitle: "Food Party",
    startTime: 720,
    contentModal: (
      <Fragment>
        <h1 style={{ fontWeight: "bold", padding: 10 }}>
          Event du lundi à 12:00 info
        </h1>
        <FoodCard />
      </Fragment>
    ),
  },
];
