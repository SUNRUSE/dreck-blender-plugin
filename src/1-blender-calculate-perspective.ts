/**
 * Calculates a projection matrix for a perspective camera matching that which would be generated by Blender.
 * @param width The width of the viewport.
 * @param height The height of the viewport.
 * @param focalLength The focal length of the camera, in millimeters.
 * @param shiftX The amount of horizontal shift, where negative values are left and positive values are right.
 * @param shiftY The amount of vertical shift, where negative values are down and positive values are up.
 * @param clipStart The distance between the camera and the near clip plane.
 * @param clipEnd The distance between the camera and the far clip plane.
 * @param sensorSize The size of the sensor, in millimeters.
 * @param matrix The matrix to which to write the result.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function blenderCalculatePerspective(
  width: number,
  height: number,
  focalLength: number,
  shiftX: number,
  shiftY: number,
  clipStart: number,
  clipEnd: number,
  sensorSize: number,
  matrix: BlenderMatrix
): void {
  const greatestDimension = Math.max(width, height);

  const pixelSize = (sensorSize * clipStart) / focalLength / greatestDimension;

  const xOffset = shiftX * greatestDimension;
  const yOffset = shiftY * greatestDimension;

  const left = (width / -2 + xOffset) * pixelSize;
  const bottom = (height / -2 + yOffset) * pixelSize;
  const right = (width / 2 + xOffset) * pixelSize;
  const top = (height / 2 + yOffset) * pixelSize;

  const frustumWidth = right - left;
  const frustumHeight = top - bottom;
  const frustumDepth = clipEnd - clipStart;

  matrix[0] = (clipStart * 2) / frustumWidth;
  matrix[1] = 0;
  matrix[2] = (right + left) / frustumWidth;
  matrix[3] = 0;
  matrix[4] = 0;
  matrix[5] = (clipStart * 2) / frustumHeight;
  matrix[6] = (top + bottom) / frustumHeight;
  matrix[7] = 0;
  matrix[8] = 0;
  matrix[9] = 0;
  matrix[10] = -(clipEnd + clipStart) / frustumDepth;
  matrix[11] = (clipStart * clipEnd * -2) / frustumDepth;
  matrix[12] = 0;
  matrix[13] = 0;
  matrix[14] = -1;
  matrix[15] = 0;
}