export const ModelEvents = Object.freeze({
  BoardModel: {
    CellsUpdate: 'BoardModelCellsUpdate',
    EmptyCellsUpdate: 'BoardModelEmptyCellsUpdate',
    DefaultBallsCellsUpdate: 'BoardModelDefaultBallsCellsUpdate',
  },
  CellModel: {
    RowUpdate: 'CellModelRowUpdate',
    ColUpdate: 'CellModelColUpdate',
    BallUpdate: 'CellModelBallUpdate',
    CellSizeUpdate: 'CellModelCellSizeUpdate',
  },
  GameModel: {
    BoardUpdate: 'GameModelBoardUpdate',
  },
  ObservableModel: {
    UuidUpdate: 'ObservableModelUuidUpdate',
  },
  Store: {
    GameUpdate: 'StoreGameUpdate',
  },
});
