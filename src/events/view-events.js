export const ViewEvents = Object.freeze({
  Game: {
    LoadComplete: 'GameLoadComplete',
    Retry: 'GameViewEventGameRetry',
    GameOver: 'GameViewEventGameOver',
  },
  GameView: {
    BoardCreationCommit: 'GameViewEventCreatedBoard',
  },
  BoardView: {
    CellCreateCommit: 'BoardViewCreateCell',
  },
  CellView: {
    CellCreatedCommit: 'BoardViewCreatedCell',
    CellSelectCommit: 'BoardViewSelectCell',
  },
});
