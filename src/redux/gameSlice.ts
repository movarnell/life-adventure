import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';
import { generateMap, ID } from '../shared';

const initialState = {
    map: generateMap(2, 2),
    money: 150,
    currentTime: 200,
    maxTime: 900,
    currentLocation: [0, 0] as [number, number],
    currentBuilding: "0",
}

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    moveCharacterToBuilding: (state, action: PayloadAction<ID>) => {
      const building = state.map.buildings.find(b => b.id === action.payload)
      if(!building) return
      const lot = state.map.lots.find(l => l.id === building.lotId)
      if(!lot) return
      state.currentLocation = lot.centerLocation
      state.currentBuilding = building.id
    }
  }
});

export const gameReducer = gameSlice.reducer

export const { moveCharacterToBuilding } = gameSlice.actions

export const selectMap = (state: RootState) => state.game.map

export const selectBuilding = (id: ID | null) => (state: RootState) => state.game.map.buildings.find(b => b.id === id)


export const selectCharacterMoney = (state: RootState) => state.game.money

export const selectCharacterTime = (state: RootState) => ({ 
    current: state.game.currentTime, 
    max: state.game.maxTime 
})

export const selectCharacterLocation = (state: RootState) => state.game.currentLocation