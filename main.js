const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 450,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    resizable: false
  })
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile('./public/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
