import Bangs from "./Bangs";
import Bob from "./Bob";
import Bun from "./Bun";
import Curly from "./Curly";
import Parted from "./Parted";
import Pigtails from "./Pigtails";
import Short from "./Short";

export const HAIR_COMPONENTS = { 
    Bangs,
    Bob,
    Bun,
    Curly,
    Parted,
    Pigtails,
    Short
}

export const HAIR_TYPES = Object.keys(HAIR_COMPONENTS) as HairType[]

export type HairType = keyof typeof HAIR_COMPONENTS

export type HairProps = {
    color: string
    strokeWidth: number | string
    shadowOpacity: number | string
}

export const SKIN_COLORS = [
    "#EDC4B3",
    "#E6B8A2",
    "#DEAB90",
    "#D69F7E",
    "#CD9777",
    "#C38E70",
    "#B07D62",
    "#9D6B53",
    "#8A5A44",
    "#774936",
  ]
  
  export const HAIR_COLORS = [
    "#8c75bc",
    "#3f4773",
    "#302216",
    "#bc758c",
    "#bca775",
    "#8abc75",
    "#ac5433",
  ]