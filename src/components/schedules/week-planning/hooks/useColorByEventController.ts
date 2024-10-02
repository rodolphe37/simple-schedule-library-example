

const useColorByEventController = () => {
   
  enum eventInstructionNamesFr {
    eventType_1 = "Présence 1",
    eventType_2 = "Présence 2",
    eventType_3 = "Présence 3",
    eventType_4 = "Présence 4",
    eventType_5 = "Éco",
    eventType_6 = "Absence",
    eventType_7 = "Hors gel",
  }

  const eventInstructionNameFr = (str: string) => {
    return eventInstructionNamesFr[str as keyof typeof eventInstructionNamesFr];
  };
  enum eventInstructionNamesUs {
    eventType_1 = "Presence 1",
    eventType_2 = "Presence 2",
    eventType_3 = "Presence 3",
    eventType_4 = "Presence4",
    eventType_5 = "Reduce",
    eventType_6 = "Away",
    eventType_7 = "Frost protection",
  }

  const eventInstructionNameUs = (str: string) => {
    return eventInstructionNamesUs[str as keyof typeof eventInstructionNamesUs];
  };

  return {
    eventInstructionNameFr,
    eventInstructionNameUs,
  };
};

export default useColorByEventController;
