import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { generateMap, ID } from "../shared";
import {
  HAIR_COLORS,
  HAIR_TYPES,
  SKIN_COLORS,
} from "../components/Character/Hair/HAIR_TYPES";

const initialState = {
  money: 150,
  happiness: 100,
  eatenToday: false,
  map: generateMap(2, 2),
  time: {
    current: 200,
    max: 900,
  },
  location: {
    coordinates: [0, 0] as [number, number],
    buildingId: "",
  },
  appearance: {
    // Random for now
    hairType: HAIR_TYPES[Math.floor(Math.random() * HAIR_TYPES.length)],
    hairColor: HAIR_COLORS[Math.floor(Math.random() * HAIR_COLORS.length)],
    skinColor: SKIN_COLORS[Math.floor(Math.random() * SKIN_COLORS.length)],
    clothes: [],
  },
  skills: {
    charisma: 4, // red - better at making friends and getting jobs
    athleticism: 0, // orange - increased time bar
    creativity: 3, // yellow - faster at getting promoted
    caretaking: 0, // green - better care of plants, pets, children
    intelligence: 2, // blue - faster at taking classes
    practicality: 0, // purple - faster at home repairs and extensions
    cooking: 1, // black - able to make more, better food
  },
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    moveCharacterToBuilding: (state, action: PayloadAction<ID>) => {
      const building = state.map.buildings.find((b) => b.id === action.payload);
      if (!building) return;
      const lot = state.map.lots.find((l) => l.id === building.lotId);
      if (!lot) return;
      state.location.coordinates = lot.centerLocation;
      state.location.buildingId = building.id;
    },
  },
});

export const gameReducer = gameSlice.reducer;

export const { moveCharacterToBuilding } = gameSlice.actions;

/***** Selectors *****/

export const selectBuilding = (id: ID | null) => (state: RootState) =>
  state.game.map.buildings.find((b) => b.id === id);

export const selectMoney = (state: RootState) => state.game.money;
export const selectTime = (state: RootState) => state.game.time;
export const selectMap = (state: RootState) => state.game.map;
export const selectAppearance = (state: RootState) => state.game.appearance;
export const selectLocation = (state: RootState) => state.game.location;
export const selectSkills = (state: RootState) => state.game.skills;

export const selectLocationBuilding = (state: RootState) =>
  state.game.location.buildingId
    ? state.game.map.buildings.find(
        (b) => b.id === state.game.location.buildingId
      )
    : null;
