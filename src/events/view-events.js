export const ViewEvents = Object.freeze({
  Game: {
    LoadComplete: 'GameLoadComplete',
    Retry: 'GameRetry',
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
