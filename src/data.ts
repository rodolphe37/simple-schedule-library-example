import {
  getSchedulesByEventPlaceIdResponse,
  TeventTypeData,
} from "./dataTypes";

export const scheduleByEventPlace: getSchedulesByEventPlaceIdResponse = {
  schedules: [
    {
      id: "56a2bd7c-a898-4502-8414-fa4ace79e749",
      title: "Exemple de calendrier de type 'event'",
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
      id: "40f80dba-ab6c-4f71-8a4d-51ce439e9b44",
      title: "Exemple de calendrier de type 'event' vide",
      type: "event",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4, 5, 6],
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
      id: "f00b3838-4906-4549-a299-0ed334937ab3",
      title: "Exemple de calendrier  de type 'temp'",
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
      id: "0dabee1d-0d06-4245-9c2c-235d28817cd0",
      title: "Exemple de calendrier de type 'temp' vide",
      type: "temp",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4, 5, 6],
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
      id: "d86ae448-012e-4f87-a7e5-d8e667346ea6",
      title: "Exemple de calendrier de type 'calendar'",
      type: "calendar",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4, 5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "eventType_6",
            },
            {
              start: 600,
              instruction: "eventType_7",
            },
            {
              start: 960,
              instruction: "eventType_6",
            },
          ],
        },
      ],
    },
    {
      id: "61d6024f-8d18-43dc-8cdc-9c38c796b93b",
      title: "Exemple de calendrier de type 'calendar' vide",
      type: "calendar",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4, 5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "eventType_6",
            },
          ],
        },
      ],
    },
  ],
};

export const eventTypeData: TeventTypeData = {
  eventPlace_id: "b4514cca-bd0f-4876-a3c3-b77444c047b4",
  eventType_1: "12.5 Euros",
  eventType_2: "20 Euros",
  eventType_3: "21 Euros",
  eventType_4: "10 Euros",
  eventType_5: "6.5 Euros",
  eventType_6: "17 Euros",
  eventType_7: "15 Euros",
};
