export type ID = string;

const TOP = 0 as const;
const RIGHT = 1 as const;
const BOTTOM = 2 as const;
const LEFT = 3 as const;

export type Direction = typeof TOP | typeof RIGHT | typeof BOTTOM | typeof LEFT;

export type Lot = {
  id: ID;
  buildingId: ID | null;
  roads: Array<ID | null>;
  lots: Array<ID | null>;
  centerLocation: [number, number];
};

export type Road = {
  id: ID;
  lots: Array<ID | null>;
  connectedRoads: {
    [index: number]: string[];
  };
  startLocation: [number, number];
  endLocation: [number, number];
};

export enum BuildingType {
    LIVING,
    WORKING,
    SHOPPING,
    EATING
}

export type Building = {
    id: ID;
    type: BuildingType;
    title: string;
    lotId: ID;
    image: string;
}

export type WorldMap = {
    lots: Lot[]
    roads: Road[]
    buildings: Building[]
}
