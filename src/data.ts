import {  getSchedulesByEventPlaceIdResponse } from "./entities/schedules";

export const scheduleByEventPlace: getSchedulesByEventPlaceIdResponse = {
  schedules: [
    {
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7",
      title: "Exemple de calendrier 1",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 360,
              instruction: "eco",
            },
            {
              start: 720,
              instruction: "comfort_1",
            },
            {
              start: 900,
              instruction: "comfort_2",
            },
            {
              start: 1020,
              instruction: "comfort_3",
            },
          ],
        },
        {
          days: [5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "comfort_4",
            },
            {
              start: 600,
              instruction: "frost_protection",
            },
          ],
        },
      ],
    },
    {
      id: "48a39d16-4acf-496c-a14d-106666dfd740",
      title: "Exemple de calendrier 2",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 360,
              instruction: "eco",
            },
            {
              start: 600,
              instruction: "comfort_1",
            },
            {
              start: 720,
              instruction: "comfort_2",
            },
            {
              start: 960,
              instruction: "comfort_3",
            },
          ],
        },
        {
          days: [5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 360,
              instruction: "comfort_4",
            },
          ],
        },
      ],
    },
    {
      id: "3b2d0394-38e6-437f-a844-4d1743e1a6de",
      title: "Salles d’activités – période scolaire – avec péri matin",
      day_slot_set: [
        {
          days: [0, 1, 3, 4],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 390,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "eco",
            },
            {
              start: 810,
              instruction: "comfort_2",
            },
            {
              start: 990,
              instruction: "away",
            },
          ],
        },
        {
          days: [2],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 390,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "away",
            },
          ],
        },
        {
          days: [5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
          ],
        },
      ],
    },
    {
      id: "996ed6f8-8d43-4fd0-9d82-264cec7070d8",
      title: "Salles d’activités – période scolaire – pas de péri",
      day_slot_set: [
        {
          days: [0, 1, 3, 4],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 450,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "eco",
            },
            {
              start: 810,
              instruction: "comfort_2",
            },
            {
              start: 990,
              instruction: "away",
            },
          ],
        },
        {
          days: [2],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 450,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "away",
            },
          ],
        },
        {
          days: [5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
          ],
        },
      ],
    },
    {
      id: "b112e8c6-8a03-420e-ba97-05aa41015f2c",
      title: "Salles d’activités – scolaire – péri + loisirs",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 390,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "eco",
            },
            {
              start: 810,
              instruction: "comfort_2",
            },
            {
              start: 1125,
              instruction: "away",
            },
          ],
        },
        {
          days: [5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
          ],
        },
      ],
    },
    {
      id: "1ee897ab-db32-4baf-b359-2e651590b778",
      title: "Salles d’activités – scolaire – péri matin + loisirs",
      day_slot_set: [
        {
          days: [0, 1, 3, 4],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 390,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "eco",
            },
            {
              start: 810,
              instruction: "comfort_2",
            },
            {
              start: 990,
              instruction: "away",
            },
          ],
        },
        {
          days: [2],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 390,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "eco",
            },
            {
              start: 1125,
              instruction: "away",
            },
          ],
        },
        {
          days: [5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
          ],
        },
      ],
    },
    {
      id: "d0adcc85-f8ab-4193-bc0b-f2b3966b4a28",
      title: "Salles d’activités – scolaire – péri matin + soir",
      day_slot_set: [
        {
          days: [0, 1, 3, 4],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 390,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "eco",
            },
            {
              start: 810,
              instruction: "comfort_2",
            },
            {
              start: 1125,
              instruction: "away",
            },
          ],
        },
        {
          days: [2],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 390,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "away",
            },
          ],
        },
        {
          days: [5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
          ],
        },
      ],
    },
    {
      id: "86ed18a5-8fc7-444a-b645-4aac7b57e581",
      title: "Salles d’activités – scolaire – péri soir + loisirs",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 450,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "eco",
            },
            {
              start: 810,
              instruction: "comfort_2",
            },
            {
              start: 1125,
              instruction: "away",
            },
          ],
        },
        {
          days: [5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
          ],
        },
      ],
    },
    {
      id: "414bc532-a6fc-4e14-b6b4-907f6e2406aa",
      title: "Salles de classe – période scolaire",
      day_slot_set: [
        {
          days: [0, 1, 3, 4],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 450,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "eco",
            },
            {
              start: 810,
              instruction: "comfort_2",
            },
            {
              start: 990,
              instruction: "away",
            },
          ],
        },
        {
          days: [2],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 450,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "away",
            },
          ],
        },
        {
          days: [5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
          ],
        },
      ],
    },
    {
      id: "e842a763-3621-40ae-8b5a-34471b15c983",
      title: "Salles de classe – période scolaire – avec péri soir",
      day_slot_set: [
        {
          days: [0, 1, 3, 4],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 450,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "eco",
            },
            {
              start: 810,
              instruction: "comfort_2",
            },
            {
              start: 1125,
              instruction: "away",
            },
          ],
        },
        {
          days: [2],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 450,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "away",
            },
          ],
        },
        {
          days: [5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
          ],
        },
      ],
    },
    {
      id: "5bfaefe7-a189-40de-bd8c-468bd4ff0e77",
      title: "Vacances – fermeture complète",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4, 5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "frost_protection",
            },
          ],
        },
      ],
    },
    {
      id: "55309be9-582d-4693-8155-3f8167b3ee30",
      title: "Vacances + loisirs",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
            {
              start: 390,
              instruction: "comfort_2",
            },
            {
              start: 720,
              instruction: "eco",
            },
            {
              start: 810,
              instruction: "comfort_2",
            },
            {
              start: 1125,
              instruction: "away",
            },
          ],
        },
        {
          days: [5, 6],
          time_slot: [
            {
              start: 0,
              instruction: "away",
            },
          ],
        },
      ],
    },
  ],
};

export const eventTypeData = {
  eventPlace_id: "e2076d6a-9d6d-4b93-9ce0-a41f04c38c40",
  away: 17,
  eco: 18,
  frost_protection: 15,
  comfort_1: 19,
  comfort_2: 20,
  comfort_3: 21,
  comfort_4: 22,
};
