export const ModelEvents = Object.freeze({
  BallModel: {
    ActiveUpdate: 'BallModelActiveUpdate',
    TypeUpdate: 'BallModelTypeUpdate',
  },
  BoardModel: {
    ActionUpdate: 'BoardModelActionUpdate',
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
    ScoreUpdate: 'GameModelScoreUpdate',
    NextBallsUpdate: 'GameModelNextBallsUpdate',
    BoardUpdate: 'GameModelBoardUpdate',
  },
  NextBallsModel: {
    NextBallsUpdate: 'NextBallsModelNextBallsUpdate',
  },
  ObservableModel: {
    UuidUpdate: 'ObservableModelUuidUpdate',
  },
  ScoreModel: {
    ScoreUpdate: 'ScoreModelScoreUpdate',
  },
  Store: {
    GameUpdate: 'StoreGameUpdate',
  },
});
