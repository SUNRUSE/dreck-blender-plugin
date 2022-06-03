/**
 * A keyframe in an animation from Blender.
 * @template TData Additional properties to include in the keyframe.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type BlenderKeyframe<TData> = {
  /**
   * The frame on which the keyframe starts.
   */
  readonly atFrame: number;
} & TData;
