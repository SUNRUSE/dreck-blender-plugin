describe(`blenderSampleFloatAnimation`, () => {
  /* istanbul ignore next */
  function randomKeyframeType() {
    return Math.random() >= 0.5 ? `constant` : `linear`;
  }

  function Scenario(
    description: string,
    animation: BlenderFloatAnimation,
    atFrame: number,
    expected: number
  ): void {
    describe(description, () => {
      let actual: number;

      beforeAll(() => {
        actual = blenderSampleFloatAnimation(animation, atFrame);
      });

      it(`returns the expected value`, () => {
        expect(actual).toEqual(expected);
      });
    });
  }

  Scenario(
    `before first keyframe constant`,
    {
      type: `animated`,
      keyframes: [
        {
          type: `constant`,
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),
          atFrame: 12,
          value: 19,
        },
        {
          type: randomKeyframeType(),
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    7,
    14
  );

  Scenario(
    `on first keyframe constant`,
    {
      type: `animated`,
      keyframes: [
        {
          type: `constant`,
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),
          atFrame: 12,
          value: 19,
        },
        {
          type: randomKeyframeType(),
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    8,
    14
  );

  Scenario(
    `between first and second keyframes constant`,
    {
      type: `animated`,
      keyframes: [
        {
          type: `constant`,
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),
          atFrame: 12,
          value: 19,
        },
        {
          type: randomKeyframeType(),
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    9,
    14
  );

  Scenario(
    `before first keyframe linear`,
    {
      type: `animated`,
      keyframes: [
        {
          type: `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),
          atFrame: 12,
          value: 19,
        },
        {
          type: randomKeyframeType(),
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    7,
    14
  );

  Scenario(
    `on first keyframe linear`,
    {
      type: `animated`,
      keyframes: [
        {
          type: `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),
          atFrame: 12,
          value: 19,
        },
        {
          type: randomKeyframeType(),
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    8,
    14
  );

  Scenario(
    `between first and second keyframes linear`,
    {
      type: `animated`,
      keyframes: [
        {
          type: `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),
          atFrame: 12,
          value: 19,
        },
        {
          type: randomKeyframeType(),
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    9,
    15.25
  );

  Scenario(
    `on second keyframe constant`,
    {
      type: `animated`,
      keyframes: [
        {
          type: randomKeyframeType(),
          atFrame: 8,
          value: 14,
        },
        {
          type: `constant`,
          atFrame: 12,
          value: 19,
        },
        {
          type: randomKeyframeType(),
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    12,
    19
  );

  Scenario(
    `between second and third keyframes constant`,
    {
      type: `animated`,
      keyframes: [
        {
          type: randomKeyframeType(),
          atFrame: 8,
          value: 14,
        },
        {
          type: `constant`,
          atFrame: 12,
          value: 19,
        },
        {
          type: randomKeyframeType(),
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    13,
    19
  );

  Scenario(
    `on second keyframe linear`,
    {
      type: `animated`,
      keyframes: [
        {
          type: randomKeyframeType(),
          atFrame: 8,
          value: 14,
        },
        {
          type: `linear`,
          atFrame: 12,
          value: 19,
        },
        {
          type: randomKeyframeType(),
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    12,
    19
  );

  Scenario(
    `between second and third keyframes linear`,
    {
      type: `animated`,
      keyframes: [
        {
          type: randomKeyframeType(),
          atFrame: 8,
          value: 14,
        },
        {
          type: `linear`,
          atFrame: 12,
          value: 19,
        },
        {
          type: randomKeyframeType(),
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    13,
    14.75
  );

  Scenario(
    `on third keyframe constant`,
    {
      type: `animated`,
      keyframes: [
        {
          type: randomKeyframeType(),
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),
          atFrame: 12,
          value: 19,
        },
        {
          type: `constant`,
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    16,
    2
  );

  Scenario(
    `between third and fourth keyframes constant`,
    {
      type: `animated`,
      keyframes: [
        {
          type: randomKeyframeType(),
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),

          atFrame: 12,
          value: 19,
        },
        {
          type: `constant`,
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    17,
    2
  );

  Scenario(
    `on third keyframe linear`,
    {
      type: `animated`,
      keyframes: [
        {
          type: randomKeyframeType(),
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),

          atFrame: 12,
          value: 19,
        },
        {
          type: `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    16,
    2
  );

  Scenario(
    `between third and fourth keyframes linear`,
    {
      type: `animated`,
      keyframes: [
        {
          type: randomKeyframeType(),
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),

          atFrame: 12,
          value: 19,
        },
        {
          type: `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    17,
    3
  );

  Scenario(
    `on final keyframe constant`,
    {
      type: `animated`,
      keyframes: [
        {
          type: randomKeyframeType(),
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),
          atFrame: 12,
          value: 19,
        },
        {
          type: `constant`,
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    23,
    7
  );

  Scenario(
    `after final keyframe constant`,
    {
      type: `animated`,
      keyframes: [
        {
          type: randomKeyframeType(),
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),

          atFrame: 12,
          value: 19,
        },
        {
          type: `constant`,
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    24,
    7
  );

  Scenario(
    `on final keyframe linear`,
    {
      type: `animated`,
      keyframes: [
        {
          type: randomKeyframeType(),
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),

          atFrame: 12,
          value: 19,
        },
        {
          type: `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    23,
    7
  );

  Scenario(
    `after final keyframe linear`,
    {
      type: `animated`,
      keyframes: [
        {
          type: randomKeyframeType(),
          atFrame: 8,
          value: 14,
        },
        {
          type: randomKeyframeType(),

          atFrame: 12,
          value: 19,
        },
        {
          type: `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: randomKeyframeType(),
          atFrame: 18,
          value: 4,
        },
        {
          type: randomKeyframeType(),
          atFrame: 23,
          value: 7,
        },
      ],
    },
    24,
    7
  );

  Scenario(
    `before single keyframe constant`,
    {
      type: `animated`,
      keyframes: [
        {
          type: `constant`,
          atFrame: 8,
          value: 14,
        },
      ],
    },
    7,
    14
  );

  Scenario(
    `on single keyframe constant`,
    {
      type: `animated`,
      keyframes: [
        {
          type: `constant`,
          atFrame: 8,
          value: 14,
        },
      ],
    },
    8,
    14
  );

  Scenario(
    `after single keyframe constant`,
    {
      type: `animated`,
      keyframes: [
        {
          type: `constant`,
          atFrame: 8,
          value: 14,
        },
      ],
    },
    9,
    14
  );

  Scenario(
    `before single keyframe linear`,
    {
      type: `animated`,
      keyframes: [
        {
          type: `linear`,
          atFrame: 8,
          value: 14,
        },
      ],
    },
    7,
    14
  );

  Scenario(
    `on single keyframe linear`,
    {
      type: `animated`,
      keyframes: [
        {
          type: `linear`,
          atFrame: 8,
          value: 14,
        },
      ],
    },
    8,
    14
  );

  Scenario(
    `after single keyframe linear`,
    {
      type: `animated`,
      keyframes: [
        {
          type: `linear`,
          atFrame: 8,
          value: 14,
        },
      ],
    },
    9,
    14
  );

  Scenario(
    `static`,
    {
      type: `static`,
      value: 7.3,
    },
    9,
    7.3
  );
});
