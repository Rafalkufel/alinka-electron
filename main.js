const { app, BrowserWindow, ipcMain } = require('electron');

const DecisionCreate = require('./src/decision');
var { fixtures } = require('./fixtures/fixtures');
var getFullValues = require('./src/getFullValues');



app.on('ready', () => {
    let mainWindow = new BrowserWindow(
      {
        width: 800,
        height: 600,
        webPreferences: {
          backgroundThrottling: false
        }
      }
    );
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
// console.log(fixtures)
let data = getFullValues(fixtures);
// console.log(data)
ipcMain.on('print:value', (event) => {
  var doc = new DecisionCreate(data);
  doc.create();
  doc.save();
});
