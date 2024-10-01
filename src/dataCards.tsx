import { Fragment } from "react/jsx-runtime";
import EventCard from "./appComponents/EventCard";
import Card3d2 from "./appComponents/Card3d2";
import Card3d1 from "./appComponents/Card3d1";
import FoodCard from "./appComponents/FoodCard";
import MarvelEvent1 from "./appComponents/MarvelEvent1";
import MarvelEvent2 from "./appComponents/MarvelEvent2";

export const contentForModal = [
    {
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 0,
      eventType: "eventType_2",
      startTime: 1230,
      eventTitle:"Englewood Concert",
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
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 3,
      eventType: "eventType_2",
      startTime: 450,
      eventTitle:"Englewood Concert",
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
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 1,
      eventType: "eventType_2",
      startTime: 1020,
      eventTitle:"Englewood Concert",
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
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 1,
      eventType: "eventType_3",
      startTime: 900,
      eventTitle:"Force mage game",
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
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 4,
      eventType: "eventType_3",
      startTime: 480,
      eventTitle:"Force mage game",
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
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 5,
      eventType: "eventType_4",
      startTime: 450,
      eventTitle:"Dark rider game",
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
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 2,
      eventType: "eventType_4",
      startTime: 495,
      eventTitle:"Dark rider game",
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
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 2,
      eventType: "eventType_4",
      startTime: 900,
      eventTitle:"Dark rider game",
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
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 0,
      eventType: "eventType_5",
      eventTitle:"Marvel Conf",
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
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 0,
      eventType: "eventType_4",
      startTime: 900,
      eventTitle:"Dark rider game",
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
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 1,
      eventType: "eventType_5",
      eventTitle:"Marvel Conf",
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
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 0,
      eventType: "eventType_1",
      eventTitle:"Food Party",
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
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 1,
      eventType: "eventType_1",
      eventTitle:"Food Party",
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
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 2,
      eventType: "eventType_1",
      eventTitle:"Food Party",
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
