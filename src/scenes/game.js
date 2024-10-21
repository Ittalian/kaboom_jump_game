import { k } from "../kaboom";

export function getGame() {
  k.scene("game", () => {
    const player = k.add([
      k.rect(25, 25),
      k.pos(80, 160),
      k.color(50, 50, 255),
      k.outline(2),
      k.area(),
      k.body({
        jumpForce: 800,
        gravityScale: 2,
      }),
      "player",
    ]);

    k.add([
      k.sprite('upAllow', {width: 50, height: 50}),
      k.pos(k.width() - 80, k.height() - 120),
      k.anchor("botright"),
      k.area(),
      "jumpButton",
    ]);

    k.add([
      k.rect(k.width(), 40),
      k.pos(0, k.height() - 40),
      k.color(150, 100, 50),
      k.area(),
      k.body({ isStatic: true }),
    ]);

    const score = k.add([k.text(0), k.pos(24, 24), { count: 0 }]);

    function spawn() {
      const color = getRandomColor();
      const rect = getRandomRect();
      k.add([
        rect,
        k.pos(k.width(), k.height() - 40),
        k.outline(2),
        color,
        k.move(k.LEFT, 400),
        k.anchor("botleft"),
        k.area(),
        k.offscreen({ destroy: true }),
        "box",
      ]);

      k.wait(k.rand(0.6, 1.5), spawn);
    }

    function getRandomColor() {
      return k.color(k.rand(0, 255), k.rand(0, 255), k.rand(0, 255));
    }

    function getRandomRect() {
      return k.rect(40, rand(30, 80));
    }

    k.onClick("jumpButton", () => {
      if (player.isGrounded()) player.jump();
    });

    k.onCollide("player", "box", (p, b) => {
      k.addKaboom(p.pos);
      k.go("gameover", score.count);
    });

    score.onUpdate(() => {
      score.text = score.count++;
    });

    spawn();
  });
}
