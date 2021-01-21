export const ModelEvents = Object.freeze({
  BallModel: {
    ActiveUpdate: 'BallModelActiveUpdate',
  },
  BoardModel: {
    CellsUpdate: 'BoardModelCellsUpdate',
    EmptyCellsUpdate: 'BoardModelEmptyCellsUpdate',
    DefaultBallsCellsUpdate: 'BoardModelDefaultBallsCellsUpdate',
  },
  CellModel: {
    SelectedUpdate: 'CellModelSelectedUpdate',
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
