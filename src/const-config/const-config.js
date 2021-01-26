const gameConfig = {
  score: 0,
  inActionGenerateBallCount: 13,
  board: {
    size: 7,
    bkColor: 0xbbada0,
    firstBallCount: 10,
    cellSize: 100,
    ball: {
      size: 80,
      colors: ['0x1c4fff', '0xffcd40', '0xf16712', '0xd6de9f', '0x00c000'],
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
