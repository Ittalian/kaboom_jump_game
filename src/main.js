import { k } from "./kaboom";

k.setGravity(980);

k.add([
  k.rect(25, 25),
  k.pos(80, 160),
  k.color(50, 50, 255),
  k.outline(2),
  k.area(),
  k.body({ isStatic: true }),
]);
