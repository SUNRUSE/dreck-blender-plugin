/**
 * A scene within a collection from Blender.
 * @template TSceneName The names of the scenes within the collection.
 * @template TObjectName The names of the objects within the scene collection.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type BlenderScene<TSceneName extends string, TObjectName extends string> = {
  /**
   * The names of the objects in this scene.
   */
  readonly objectNames: ReadonlyArray<TObjectName>;

  /**
   * The names of the scenes which are children of this scene.
   */
  readonly sceneNames: ReadonlyArray<TSceneName>;
};
