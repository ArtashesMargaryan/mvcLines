function LP(l, p) {
  return window.innerWidth > window.innerHeight ? l : p;
}

export function mainGridConfig() {
  return LP(
    {
      name: 'main',

      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          name: 'title',
          bounds: { x: 0.15, y: 0.0, width: 0.7, height: 0.19 },
          cells: [
            {
              name: 'nextBalls',
              bounds: { x: 0.2, y: 0, width: 0.3, height: 1 },
            },
            {
              name: 'retry',
              bounds: { x: 0.5, y: 0, width: 0.1, height: 1 },
            },
            {
              name: 'score',
              bounds: { x: 0.6, y: 0, width: 0.3, height: 1 },
            },
          ],
        },
        {
          name: 'gameView',
          bounds: { x: 0.15, y: 0.2, width: 0.7, height: 0.7 },

          cells: [
            {
              name: 'gameOver',
              bounds: { x: 0.1, y: 0.2, width: 0.8, height: 0.6 },
            },
          ],
        },
      ],
    },
    {
      name: 'main',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          name: 'title',
          bounds: { x: 0.1, y: 0.0, width: 0.8, height: 0.19 },
          debug: {
            color: 0x000000,
          },
          cells: [
            {
              name: 'nextBalls',
              bounds: { x: 0, y: 0, width: 0.4, height: 1 },
            },
            {
              name: 'retry',
              bounds: { x: 0.4, y: 0, width: 0.2, height: 1 },
            },
            {
              name: 'score',
              bounds: { x: 0.6, y: 0, width: 0.4, height: 1 },
            },
          ],
        },
        {
          name: 'gameView',
          bounds: { x: 0.15, y: 0.2, width: 0.7, height: 0.7 },
          debug: {
            color: 0x000000,
          },
          cells: [
            {
              name: 'gameOver',
              bounds: { x: 0.4, y: 0.4, width: 0.2, height: 0.2 },
            },
          ],
        },
      ],
    }
  );
}
