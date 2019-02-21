import rover from "./app";

test("A rover is created with initial position and direction", () => {
  expect(rover()).toEqual({
    x: 0,
    y: 0,
    direction: "N"
  });
});

// ['f']
test.skip("The rover can move forward", () => {});

// ['b']
test.skip("The rover can move backward", () => {});

// ['f', 'f']
test.skip("The rover can move forward twice", () => {});
