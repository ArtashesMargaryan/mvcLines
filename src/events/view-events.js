export const ViewEvents = Object.freeze({
  Game: {
    LoadComplete: 'GameLoadComplete',
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
