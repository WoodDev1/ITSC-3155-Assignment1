export type Circle = {
  kind: "circle";
  radius: number;
};

export type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

export type Square = {
  kind: "square";
  sideLength: number;
};

export type Shape = Circle | Rectangle | Square;

export function calculateArea(shape: Shape): number {

    switch (shape.kind) 
    {
      case "circle":
        return (shape.radius * shape.radius) * 3.14159; // pi r^2
      case "rectangle":
        return shape.width * shape.height; // H * W
      case "square":
        return shape.sideLength * shape.sideLength; // length^2
    }

  return -1;
}
