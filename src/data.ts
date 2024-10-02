import {
  getSchedulesByEventPlaceIdResponse,
  TcolorCellByEvents,
  TeventsTextColor,
  TeventTypeData,
} from "./dataTypes";

export const scheduleByEventPlace: getSchedulesByEventPlaceIdResponse = {
  schedules: [
    {
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      title: "Exemple de calendrier d'évènements",
      type: "event",
      day_slot_set: [
        {
          days: [0],
          time_slot: [
            {
              start: 0,
              instruction: "eventType_6",
            },
            {
              start: 600,
              instruction: "eventType_5",
            },
            {
              start: 720,
              instruction: "eventType_1",
            },
            {
              start: 900,
              instruction: "eventType_4",
            },
            {
              start: 1230,
              instruction: "eventType_2",
            },
            {
              start: 1380,
              instruction: "eventType_6",
            },
          ],
        },
        {
          days: [1],
          time_slot: [
            {
              start: 0,
              instruction: "eventType_6",
            },
            {
              start: 600,
              instruction: "eventType_5",
            },
            {
              start: 720,
              instruction: "eventType_1",
            },
            {
              start: 900,
              instruction: "eventType_3",
            },
            {
              start: 1020,
              instruction: "eventType_2",
            },

            {
              start: 1380,
              instruction: "eventType_6",
            },
          ],
        },
        {
          days: [2],
          time_slot: [
            {
              start: 0,
              instruction: "eventType_6",
            },
            {
              start: 495,
              instruction: "eventType_4",
            },
            {
              start: 720,
              instruction: "eventType_1",
            },
            {
              start: 900,
              instruction: "eventType_4",
            },
            {
              start: 1215,
              instruction: "eventType_6",
            },
          ],
        },
        {
          days: [3],
          time_slot: [
            {
              start: 0,
              instruction: "eventType_6",
            },
            {
              start: 450,
              instruction: "eventType_2",
            },
            {
              start: 900,
              instruction: "eventType_6",
            },
          ],
        },
        {
          days: [4],
          time_slot: [
            {
              start: 0,
              instruction: "eventType_6",
            },

            {
              start: 480,
              instruction: "eventType_3",
            },
            {
              start: 1380,
              instruction: "eventType_6",
            },
          ],
        },
        {
          days: [5],
          time_slot: [
            {
              start: 0,
              instruction: "eventType_6",
            },
            {
              start: 450,
              instruction: "eventType_4",
            },
            {
              start: 1020,
              instruction: "eventType_6",
            },
          ],
        },
        {
          days: [6],
          time_slot: [
            {
              start: 0,
              instruction: "eventType_6",
            },
          ],
        },
      ],
    },
    {
      id: "48a39d16-4acf-496c-a14d-106666dfd740",
      title: "Exemple de calendrier  de températures",
      type: "temp",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4],
          time_slot: [
            {
              start: 0,
              instruction: "eventType_6",
            },
            {
              start: 360,
              instruction: "eventType_5",
            },
            {
              start: 600,
              instruction: "eventType_1",
            },
            {
              start: 720,
              instruction: "eventType_2",
            },
            {
              start: 960,
              instruction: "eventType_3",
            },
          ],
        },
        {
          days: [5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "eventType_6",
            },
            {
              start: 360,
              instruction: "eventType_4",
            },
          ],
        },
      ],
    },
    {
      id: "5bfaefe7-a189-40de-bd8c-468bd4ff0e77",
      title: "Vacances – fermeture complète",
      type: "calendar",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4, 5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "eventType_7",
            },
          ],
        },
      ],
    },
  ],
};

export const eventTypeData: TeventTypeData = {
  eventPlace_id: "e2076d6a-9d6d-4b93-9ce0-a41f04c38c40",
  eventType_1: "12.5 Euros",
  eventType_2: "20 Euros",
  eventType_3: "21 Euros",
  eventType_4: "10 Euros",
  eventType_5: "6.5 Euros",
  eventType_6: "17 Euros",
  eventType_7: "15 Euros",
};

// the default order of colors in the array is: [eventType_1, eventType_2 , eventType_3", eventType_4",
//  eventType_5, eventType_6, eventType_7]
export const colorCellByEvents: TcolorCellByEvents = [
  "#FFF2C4",
  "#FED7AD",
  "#DBFFE2",
  "#F6D1FF",
  "#A0ABC0",
  "#EDF0F7",
  "#B0DCFF",
];
// the default order of colors in the array is: [eventType_1, eventType_2 , eventType_3", eventType_4",
//  eventType_5, eventType_6, eventType_7]
export const eventsTextColor: TeventsTextColor = [
  "#B99100",
  "#D46E00",
  "#00B51E",
  "#F134F7",
  "#FFFFFF",
  "#a0abc0",
  "#0196EC",
];
