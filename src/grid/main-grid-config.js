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
          name: 'gameView',
          bounds: { x: 0.15, y: 0.2, width: 0.7, height: 0.7 },

          padding: 0.01,
        },
      ],
    },
    {
      name: 'main',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          name: 'logo',
          bounds: { x: 0, y: 0, width: 1, height: 0.2 },
        },
      ],
    }
  );
}
