import { Fragment } from "react/jsx-runtime";
import EventCard from "./appComponents/EventCard";
import Card3d2 from "./appComponents/Card3d2";
import Card3d1 from "./appComponents/Card3d1";
import FoodCard from "./appComponents/FoodCard";

export const contentForModal = [
    {
      id: "e842a763-3621-40ae-8b5a-34471b15c983",
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
      startTime: 900,
      eventTitle:"Englewood Concert",
      contentModal: (
        <Fragment>
          <h1 style={{ fontWeight: "bold", padding: 10 }}>
            Event du mardi à 15h info et réservation
          </h1>
          <EventCard />
        </Fragment>
      ),
    },
    {
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 4,
      eventType: "eventType_3",
      startTime: 1020,
      eventTitle:"Force mage game",
      contentModal: (
        <Fragment>
          <h1 style={{ fontWeight: "bold", padding: 10 }}>
            Event du vendredi à 17h00 info
          </h1>
          <Card3d2 />
        </Fragment>
      ),
    },
    {
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      day: 5,
      eventType: "eventType_4",
      startTime: 0,
      eventTitle:"Dark rider game",
      contentModal: (
        <Fragment>
          <h1 style={{ fontWeight: "bold", padding: 10 }}>
            Event du samedi à 00:00 info
          </h1>
          <Card3d1 />
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
            Event du lundi à 17:00 info
          </h1>
          <FoodCard />
        </Fragment>
      ),
    },
  ];
