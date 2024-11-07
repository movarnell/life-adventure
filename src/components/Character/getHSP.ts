/**
 * Gets a measure of lightness or darkness called "HSP"
 * Higher numbers are lighter, lower numbers are darker
 * https://awik.io/determine-color-bright-dark-using-javascript/
 * 
 * @param color A color in RGB or Hex format
 * @returns an HSP number between 0 and 255
 */
export const getHSP = (color: string) => {
  let r, g, b, hsp;

  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    ([, r, g, b] = Array(color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    )));
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    const colorNum = +(
      "0x" + color.slice(1).replace(color.length < 5 ? /./g : "", "$&$&")
    );

    r = colorNum >> 16;
    g = (colorNum >> 8) & 255;
    b = colorNum & 255;
  }
  if(typeof r !== "number" || typeof g !== "number" || typeof b !== "number") return 0

  // HSP equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  return hsp
};
