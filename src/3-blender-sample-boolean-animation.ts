/**
 * Samples a given boolean animation from Blender at a given point in time.
 * @param animation The animation to sample.
 * @param atFrame The point in time at which to sample the animation.
 * @return The value of the animation at the specified time.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function blenderSampleBooleanAnimation(
  animation: BlenderBooleanAnimation,
  atFrame: number
): boolean {
  if (animation.type === `static`) {
    return animation.value;
  } else {
    for (let i = 0; i < animation.keyframes.length - 1; i++) {
      const previousKeyframe = animation.keyframes[
        i
      ] as BlenderKeyframe<BlenderBooleanKeyframeData>;

      const nextKeyframe = animation.keyframes[
        i + 1
      ] as BlenderKeyframe<BlenderBooleanKeyframeData>;

      if (
        previousKeyframe.atFrame <= atFrame &&
        nextKeyframe.atFrame > atFrame
      ) {
        return previousKeyframe.value;
      }
    }

    const firstKeyframe = animation
      .keyframes[0] as BlenderKeyframe<BlenderBooleanKeyframeData>;

    if (atFrame < firstKeyframe.atFrame) {
      return firstKeyframe.value;
    } else {
      const lastKeyframe = animation.keyframes[
        animation.keyframes.length - 1
      ] as BlenderKeyframe<BlenderBooleanKeyframeData>;

      return lastKeyframe.value;
    }
  }
}
