/**
 * The additional properties included in a keyframe of a floating-point animation from Blender.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type BlenderFloatKeyframeData = {
  /**
   * The interpolation to the next keyframe.
   */
  readonly type: `constant` | `linear`;

  /**
   * The value to use from this keyframe onwards.
   */
  readonly value: number;
};
