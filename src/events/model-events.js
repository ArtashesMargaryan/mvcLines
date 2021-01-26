export const ModelEvents = Object.freeze({
  BallModel: {
    ActiveUpdate: 'BallModelActiveUpdate',
    TypeUpdate: 'BallModelTypeUpdate',
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
    NextBallsUpdate: 'GameModelNextBallsUpdate',
    BoardUpdate: 'GameModelBoardUpdate',
  },
  NextBallsModel: {
    NextBallsUpdate: 'NextBallsModelNextBallsUpdate',
  },
  ObservableModel: {
    UuidUpdate: 'ObservableModelUuidUpdate',
  },
  Store: {
    GameUpdate: 'StoreGameUpdate',
  },
});
