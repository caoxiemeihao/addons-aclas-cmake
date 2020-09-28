const path = require('path');
const cp = require('child_process');
const aclas = require('./build/Release/aclas.node');

const host = '192.168.1.2';

aclas(
  {
    host,
    filename: path.join(__dirname, 'txt/PLU.txt'),
    dll_path: path.join(__dirname, 'dll/AclasSDK.dll'),
    type: 0x0000,
    extra: `C++|${host}`,
  },
  function (args) {
    console.log(args);
  });