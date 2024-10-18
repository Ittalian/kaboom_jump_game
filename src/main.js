import { k } from "./kaboom";
import { getGameOver } from "./scenes/game_over";
import { getGame } from "./scenes/game";

k.setGravity(980);
getGame();
getGameOver();
k.go('game');
