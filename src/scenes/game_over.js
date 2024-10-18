import { k } from '../kaboom';

export function getGameOver() {
	k.scene('gameover', () => {
		k.add([
			k.text('Game Over'),
			k.pos(k.center()),
			k.anchor('center'),
		]);
		k.onMousePress(() => {
			k.go('game');
		});
	});
}
