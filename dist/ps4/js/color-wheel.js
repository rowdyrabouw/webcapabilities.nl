export const WIDTH = 1024;
export const HEIGHT = 800;
const SCALE = 5.5;
const MIDDLE_X = WIDTH / 2;
const MIDDLE_Y = HEIGHT / 2;
const LIGHTNESS = 0.5;

/**
 * Converts an angle in radians to an angle in degrees.
 * @param {number} rad The angle in radians
 * @returns {number} The angle in degrees
 */
function radianToDegree(rad) {
  return (rad * 180) / Math.PI;
}

/**
 * Returns the distance of the given point (x, y) from the center of the canvas.
 * @param x The relative horizontal value of the point
 * @param y The relative vertical value of the point
 * @returns {number} The distance from the center in pixels
 */
function getDistanceFromCenter(x, y) {
  const offsetX = Math.abs(MIDDLE_X - x);
  const offsetY = Math.abs(MIDDLE_Y - y);
  // We use the Pythagorean theorem (a² + b² = c²) to calculate the distance.
  return Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
}

/**
 * Returns the hsl color for the current cursor position.
 * @param {number} x The relative horizontal (x) position of the cursor on the canvas
 * @param {number} y The relative vertical (y) position of the cursor on the canvas
 * @returns {{h: number, s: number, l: number}} The hsl color for the current cursor position
 */
function getColorForPoint(x, y) {
  const dist = getDistanceFromCenter(x, y);

  // If the distance from the center is greater than the 100px radius * the scale, the cursor is not in the color wheel.
  // We return white as the color.
  if (dist > 100 * SCALE) return { h: 0, s: 0, l: 1 };

  // The saturation is the distance from the center divided by the scale.
  const s = dist / SCALE;
  // To find the hue base on the x value we have to reverse the following formula
  // x = MIDDLE_X + Math.cos(degreeToRadian(h)) * s * SCALE
  let h = radianToDegree(Math.acos((x - MIDDLE_X) / s / SCALE));
  // Since every x value has 2 possible colors (1 above and 1 below the vertical middle) we need to inverse the hue if
  // the point is lower than the vertical middle. 360 - h is the same as h * -1 (380° - 90° == -90° == 290°) but is
  // better for displaying the hue value.
  if (y > MIDDLE_Y) h = 360 - h;
  return { h, s: s / 100, l: LIGHTNESS };
}

/**
 * Converts an HSL color to the RGB notation.
 * @param {{h: number, s: number, l: number}} The hsl color to convert
 * @returns {{r: number, g: number, b: number}} The rgb notation
 */
function hslToRgb({ h, s, l }) {
  // This formula is documented at https://www.rapidtables.com/convert/color/hsl-to-rgb.html.
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  if (h < 60) return { r: (c + m) * 255, g: (x + m) * 255, b: m * 255 };
  if (h < 120) return { r: (x + m) * 255, g: (c + m) * 255, b: m * 255 };
  if (h < 180) return { r: m * 255, g: (c + m) * 255, b: (x + m) * 255 };
  if (h < 240) return { r: m * 255, g: (x + m) * 255, b: (c + m) * 255 };
  if (h < 300) return { r: (x + m) * 255, g: m * 255, b: (c + m) * 255 };
  return { r: (c + m) * 255, g: m * 255, b: (x + m) * 255 };
}

export function getColor(x, y) {
  const color = getColorForPoint(x, y);
  const rgb = hslToRgb(color);
  return [Math.floor(rgb.r), Math.floor(rgb.g), Math.floor(rgb.b)];
}
