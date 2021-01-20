const gameConfig = {
  score: 0,
  board: {
    size: 7,
    bkColor: 0xbbada0,
    firstBallCount: 3,
    cellSize: 100,
    ball: {
      size: 80,
      colors: {
        1: '0x1c4fff',
        2: '0xffcd40',
        3: '0xf16712',
        4: '0xd6de9f',
        5: '0x00c000',
      },
    },
  },
};

export function getGameConfig() {
  return gameConfig;
}

export function getColors() {
  return gameConfig.board.ball.colors;
}
