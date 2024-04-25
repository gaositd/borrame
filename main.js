//console.log("Starting electron server");
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // window.loadFile('index.html');
  window.loadURL('https://www.youtube.com/watch?v=ir9yaSgbOdY');
};

app.whenReady()
  .then(() => { createWindow(); })
  .catch(() => { throw new Error;});