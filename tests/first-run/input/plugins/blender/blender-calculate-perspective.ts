describe(`blenderCalculatePerspective`, () => {
  describe(`tall`, () => {
    let matrix: BlenderMatrix;

    beforeAll(() => {
      matrix = [
        -40.05, -38.0, 81.23, 53.29, -34.88, -11.04, -89.47, 81.99, 74.0, 73.12,
        38.69, -99.93, 10.87, 26.05, -89.82, 14.7,
      ];

      blenderCalculatePerspective(
        1170,
        1576,
        24.87,
        2,
        -1.09,
        2,
        5,
        36,
        matrix
      );
    });

    it(`populates the output matrix as expected`, () => {
      expect(matrix[0]).toBeCloseTo(1.8589433431625366);
      expect(matrix[1]).toBeCloseTo(0.0);
      expect(matrix[2]).toBeCloseTo(5.388033866882324);
      expect(matrix[3]).toBeCloseTo(0.0);
      expect(matrix[4]).toBeCloseTo(0.0);
      expect(matrix[5]).toBeCloseTo(1.3800532817840576);
      expect(matrix[6]).toBeCloseTo(-2.179999828338623);
      expect(matrix[7]).toBeCloseTo(0.0);
      expect(matrix[8]).toBeCloseTo(0.0);
      expect(matrix[9]).toBeCloseTo(0.0);
      expect(matrix[10]).toBeCloseTo(-2.3333332538604736);
      expect(matrix[11]).toBeCloseTo(-6.666666507720947);
      expect(matrix[12]).toBeCloseTo(0.0);
      expect(matrix[13]).toBeCloseTo(0.0);
      expect(matrix[14]).toBeCloseTo(-1.0);
      expect(matrix[15]).toBeCloseTo(0.0);
    });
  });

  describe(`wide`, () => {
    let matrix: BlenderMatrix;

    beforeAll(() => {
      matrix = [
        -40.05, -38.0, 81.23, 53.29, -34.88, -11.04, -89.47, 81.99, 74.0, 73.12,
        38.69, -99.93, 10.87, 26.05, -89.82, 14.7,
      ];

      blenderCalculatePerspective(
        1576,
        1170,
        24.87,
        2,
        -1.09,
        2,
        5,
        36,
        matrix
      );
    });

    it(`populates the output matrix as expected`, () => {
      expect(matrix[0]).toBeCloseTo(1.3800532817840576);
      expect(matrix[1]).toBeCloseTo(0.0);
      expect(matrix[2]).toBeCloseTo(4.0);
      expect(matrix[3]).toBeCloseTo(0.0);
      expect(matrix[4]).toBeCloseTo(0.0);
      expect(matrix[5]).toBeCloseTo(1.8589433431625366);
      expect(matrix[6]).toBeCloseTo(-2.93647837638855);
      expect(matrix[7]).toBeCloseTo(0.0);
      expect(matrix[8]).toBeCloseTo(0.0);
      expect(matrix[9]).toBeCloseTo(0.0);
      expect(matrix[10]).toBeCloseTo(-2.3333332538604736);
      expect(matrix[11]).toBeCloseTo(-6.666666507720947);
      expect(matrix[12]).toBeCloseTo(0.0);
      expect(matrix[13]).toBeCloseTo(0.0);
      expect(matrix[14]).toBeCloseTo(-1.0);
      expect(matrix[15]).toBeCloseTo(0.0);
    });
  });
});
