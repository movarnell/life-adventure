import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { generateMap, ID } from "../shared";
import {
  HAIR_COLORS,
  HAIR_TYPES,
  SKIN_COLORS,
} from "../components/Character/Hair/HAIR_TYPES";

const initialState = {
  map: generateMap(2, 2),
  money: 150,
  currentTime: 200,
  maxTime: 900,
  currentLocation: [0, 0] as [number, number],
  currentBuilding: "",
  appearance: {
    // Random for now
    hairType: HAIR_TYPES[Math.floor(Math.random() * HAIR_TYPES.length)],
    hairColor: HAIR_COLORS[Math.floor(Math.random() * HAIR_COLORS.length)],
    skinColor: SKIN_COLORS[Math.floor(Math.random() * SKIN_COLORS.length)],
    clothes: [],
  },
  happiness: 100,
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
      state.currentLocation = lot.centerLocation;
      state.currentBuilding = building.id;
    },
  },
});

export const gameReducer = gameSlice.reducer;

export const { moveCharacterToBuilding } = gameSlice.actions;

/***** Selectors *****/

export const selectMap = (state: RootState) => state.game.map;

export const selectBuilding = (id: ID | null) => (state: RootState) =>
  state.game.map.buildings.find((b) => b.id === id);

export const selectCharacterMoney = (state: RootState) => state.game.money;

export const selectCharacterTime = (state: RootState) => ({
  current: state.game.currentTime,
  max: state.game.maxTime,
});

export const selectCharacterAppearance = (state: RootState) =>
  state.game.appearance;

export const selectCharacterLocation = (state: RootState) =>
  state.game.currentLocation;

export const selectCharacterSkills = (state: RootState) => state.game.skills;
