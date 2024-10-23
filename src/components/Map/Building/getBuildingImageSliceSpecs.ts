const SPECS = [
    {
        size: 1000,
        x: 0,
        y: 0,
    },
    {
        size: 650,
        x: -1 * (1000),
        y: -1 * (1000 - 650),
    },
    {
        size: 350,
        x: -1 * (1000 + 650),
        y: -1 * (1000 - 350),
    },
    {
        size: 200,
        x: -1 * (1000 + 650 + 350),
        y: -1 * (1000 - 200),
    }
]

export const getBuildingImageSliceSpecs = (tileSize: number) => {
    let spec = SPECS[SPECS.length - 1]
    for (let i = 0; i < SPECS.length; i++) {
        if (i + 1 < SPECS.length && tileSize > SPECS[i].size / 2) {
            spec = SPECS[i]
            break
        }
    }
    console.log(spec)
    const sizeScaler = (tileSize / spec.size)
    return {
        size: sizeScaler * 1000,
        x: sizeScaler * spec.x,
        y: sizeScaler * spec.y
    }
}