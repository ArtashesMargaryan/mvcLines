const gameConfig = {
  score: 0,
  inActionGenerateBallCount: 3,
  board: {
    size: 8,
    bkColor: 0xbbada0,
    firstBallCount: 3,
    cellSize: 100,
    ball: {
      size: 80,
      // colors: ['0x1c4fff', '0xffcd40', '0x00c000'],
      colors: ['0x1c4fff', '0xffcd40', '0xbd0498', '0x00c000', '0xf16712', '0xd6de9f', '0x00c000'],
    },
  },
};

export function getGameConfig() {
  return gameConfig;
}

export function getColors() {
  return gameConfig.board.ball.colors;
}

export function getCellSize() {
  return gameConfig.board.cellSize;
}

export function getNextBallsCount() {
  return gameConfig.inActionGenerateBallCount;
}
