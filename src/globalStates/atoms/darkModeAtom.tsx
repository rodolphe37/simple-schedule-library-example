import { atom } from "recoil";

const darkModeAtom = atom({
  key: "darkModeAtom",
  default:
    localStorage.getItem("theme") !== null
      ? localStorage.getItem("theme")
      : false,
});

export default darkModeAtom;
