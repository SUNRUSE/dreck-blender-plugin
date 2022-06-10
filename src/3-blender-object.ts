/**
 * An object within a scene collection from Blender.
 * @template TObjectName The names of the objects within the scene collection.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type BlenderObject<TObjectName extends string> = {
  /**
   * The location of the object relative to its parent on the X, Y and Z axes respectively.
   */
  readonly location: readonly [
    BlenderFloatAnimation,
    BlenderFloatAnimation,
    BlenderFloatAnimation
  ];

  /**
   * The rotation of the object relative to its parent about the X, Y and Z axes respectively, in radians.
   */
  readonly rotation: readonly [
    BlenderFloatAnimation,
    BlenderFloatAnimation,
    BlenderFloatAnimation
  ];

  /**
   * The scale of the object relative to its parent about the X, Y and Z axes respectively.
   */
  readonly scale: readonly [
    BlenderFloatAnimation,
    BlenderFloatAnimation,
    BlenderFloatAnimation
  ];

  /**
   * When true, the object is visible at runtime.  When false, the object is not visible at runtime.
   */
  readonly rendered: BlenderBooleanAnimation;

  /**
   * The names of the objects which are children of this object.
   */
  readonly children: ReadonlyArray<TObjectName>;
};
