/**
 * An animation from Blender.
 * @template TValue The type of value animated.
 * @template TKeyframeData Additional properties to include in the animation's keyframes.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type BlenderAnimation<TValue, TKeyframeData> =
  | {
      /**
       * Identifies the type of animation.
       */
      readonly type: `static`;

      /**
       * The constant value.
       */
      readonly value: TValue;
    }
  | {
      /**
       * Identifies the type of animation.
       */
      readonly type: `animated`;

      /**
       * The keyframes within the animation.
       */
      readonly keyframes: ReadonlyArray<BlenderKeyframe<TKeyframeData>>;
    };
