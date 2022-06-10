describe(`blenderCalculateTransform`, () => {
  describe(`a`, () => {
    let matrix: BlenderMatrix;

    beforeAll(() => {
      matrix = [
        -40.05, -38.0, 81.23, 53.29, -34.88, -11.04, -89.47, 81.99, 74.0, 73.12,
        38.69, -99.93, 10.87, 26.05, -89.82, 14.7,
      ];

      blenderCalculateTransform(
        -1.059999942779541,
        1.3399999141693115,
        -3.0899999141693115,
        0.5218533873558044,
        -11.999137878417969,
        3.607595205307007,
        -1.9700000286102295,
        0.23000001907348633,
        2.440000057220459,
        matrix
      );
    });

    it(`populates the output matrix as expected`, () => {
      expect(matrix[0]).toBeCloseTo(1.4843193292617798);
      expect(matrix[1]).toBeCloseTo(0.03455393388867378);
      expect(matrix[2]).toBeCloseTo(-1.5618388652801514);
      expect(matrix[3]).toBeCloseTo(-1.059999942779541);
      expect(matrix[4]).toBeCloseTo(0.7465341687202454);
      expect(matrix[5]).toBeCloseTo(-0.205805242061615);
      expect(matrix[6]).toBeCloseTo(0.5759603977203369);
      expect(matrix[7]).toBeCloseTo(1.3399999141693115);
      expect(matrix[8]).toBeCloseTo(1.0584814548492432);
      expect(matrix[9]).toBeCloseTo(0.09669662266969681);
      expect(matrix[10]).toBeCloseTo(1.7839645147323608);
      expect(matrix[11]).toBeCloseTo(-3.0899999141693115);
      expect(matrix[12]).toBeCloseTo(0.0);
      expect(matrix[13]).toBeCloseTo(0.0);
      expect(matrix[14]).toBeCloseTo(0.0);
      expect(matrix[15]).toBeCloseTo(1.0);
    });
  });

  describe(`b`, () => {
    let matrix: BlenderMatrix;

    beforeAll(() => {
      matrix = [
        -40.05, -38.0, 81.23, 53.29, -34.88, -11.04, -89.47, 81.99, 74.0, 73.12,
        38.69, -99.93, 10.87, 26.05, -89.82, 14.7,
      ];

      blenderCalculateTransform(
        -1.059999942779541,
        1.3399999141693115,
        -3.0899999141693115,
        -0.5218533873558044,
        11.999137878417969,
        -3.607595205307007,
        -1.9700000286102295,
        0.23000001907348633,
        2.440000057220459,
        matrix
      );
    });

    it(`populates the output matrix as expected`, () => {
      expect(matrix[0]).toBeCloseTo(1.484320044517517);
      expect(matrix[1]).toBeCloseTo(-0.14462198317050934);
      expect(matrix[2]).toBeCloseTo(0.4688152074813843);
      expect(matrix[3]).toBeCloseTo(-1.059999942779541);
      expect(matrix[4]).toBeCloseTo(-0.7465350031852722);
      expect(matrix[5]).toBeCloseTo(-0.150446817278862);
      expect(matrix[6]).toBeCloseTo(-1.597272515296936);
      expect(matrix[7]).toBeCloseTo(1.3399999141693115);
      expect(matrix[8]).toBeCloseTo(-1.0584797859191895);
      expect(matrix[9]).toBeCloseTo(-0.09669668972492218);
      expect(matrix[10]).toBeCloseTo(1.7839655876159668);
      expect(matrix[11]).toBeCloseTo(-3.0899999141693115);
      expect(matrix[12]).toBeCloseTo(0.0);
      expect(matrix[13]).toBeCloseTo(0.0);
      expect(matrix[14]).toBeCloseTo(0.0);
      expect(matrix[15]).toBeCloseTo(1.0);
    });
  });

  describe(`c`, () => {
    let matrix: BlenderMatrix;

    beforeAll(() => {
      matrix = [
        -40.05, -38.0, 81.23, 53.29, -34.88, -11.04, -89.47, 81.99, 74.0, 73.12,
        38.69, -99.93, 10.87, 26.05, -89.82, 14.7,
      ];

      blenderCalculateTransform(
        -1.059999942779541,
        1.3399999141693115,
        -3.0899999141693115,
        0.5218533873558044,
        11.999137878417969,
        3.607595205307007,
        -1.9700000286102295,
        0.23000001907348633,
        2.440000057220459,
        matrix
      );
    });

    it(`populates the output matrix as expected`, () => {
      expect(matrix[0]).toBeCloseTo(1.484320044517517);
      expect(matrix[1]).toBeCloseTo(0.14462198317050934);
      expect(matrix[2]).toBeCloseTo(0.4688152074813843);
      expect(matrix[3]).toBeCloseTo(-1.059999942779541);
      expect(matrix[4]).toBeCloseTo(0.7465350031852722);
      expect(matrix[5]).toBeCloseTo(-0.150446817278862);
      expect(matrix[6]).toBeCloseTo(1.597272515296936);
      expect(matrix[7]).toBeCloseTo(1.3399999141693115);
      expect(matrix[8]).toBeCloseTo(-1.0584797859191895);
      expect(matrix[9]).toBeCloseTo(0.09669668972492218);
      expect(matrix[10]).toBeCloseTo(1.7839655876159668);
      expect(matrix[11]).toBeCloseTo(-3.0899999141693115);
      expect(matrix[12]).toBeCloseTo(0.0);
      expect(matrix[13]).toBeCloseTo(0.0);
      expect(matrix[14]).toBeCloseTo(0.0);
      expect(matrix[15]).toBeCloseTo(1.0);
    });
  });
});
