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
          debug: {
            color: 0x000000,
          },
          cells: [
            {
              name: 'nextBall',
              bounds: { x: 0, y: 0, width: 0.5, height: 1 },
            },
            {
              name: 'score',
              bounds: { x: 0.5, y: 0, width: 0.5, height: 1 },
            },
          ],
        },
        {
          name: 'gameView',
          bounds: { x: 0.15, y: 0.2, width: 0.7, height: 0.7 },
          debug: {
            color: 0x000000,
          },
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
              name: 'nextBall',
              bounds: { x: 0, y: 0, width: 0.5, height: 1 },
            },
            {
              name: 'score',
              bounds: { x: 0.5, y: 0, width: 0.5, height: 1 },
            },
          ],
        },
        {
          name: 'gameView',
          bounds: { x: 0.1, y: 0.2, width: 0.8, height: 0.7 },
          debug: {
            color: 0x000000,
          },
        },
      ],
    }
  );
}
