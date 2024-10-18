import { k } from "../kaboom";

export function getGameOver() {
  k.scene("gameover", (score) => {
    k.add([
      k.text("Game Over\n" + score, { align: "center" }),
      k.pos(k.center()),
      k.anchor("center"),
    ]);

    k.onMousePress(() => {
      k.go("game");
    });
  });
}
