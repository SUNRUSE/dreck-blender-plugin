/**
 * A collection of scenes from Blender.
 * @template TSceneName The names of the scenes within the collection.
 * @template TObjectName The names of the objects within the scene collection.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type BlenderSceneCollection<
  TSceneName extends string,
  TObjectName extends string
> = {
  /**
   * The scenes within the collection.
   */
  readonly scenes: {
    readonly [TName in TSceneName]: BlenderScene<TSceneName, TObjectName>;
  };

  /**
   * The names of the scenes at the root level.
   */
  readonly rootSceneNames: ReadonlyArray<TSceneName>;

  /**
   * The objects within the scene collection.
   */
  readonly objects: {
    readonly [TName in TObjectName]: BlenderObject<TObjectName>;
  };
};
