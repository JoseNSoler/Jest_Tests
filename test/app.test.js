import * as app from "../src/app";
import * as math from "../src/math";
import {jest} from '@jest/globals';


math.add = jest.fn();
math.subtract = jest.fn();

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});