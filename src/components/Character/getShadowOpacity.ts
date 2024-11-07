import { getHSP } from "./getHSP"

export const getShadowOpacity = (color: string) => {
    const hsp = getHSP(color)
    return hsp > 127.5 ? 0.15 : 0.3
}