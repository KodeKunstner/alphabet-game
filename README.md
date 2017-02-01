<img src=https://raw.githubusercontent.com/KodeKunstner/alphabet-game/master/icon.png width=96 height=96 align=right>

[![github](https://img.shields.io/badge/github-KodeKunstner/alphabet-game-blue.svg)](https://github.com/KodeKunstner/alphabet-game)
[![codeclimate](https://img.shields.io/codeclimate/github/KodeKunstner/alphabet-game.svg)](https://codeclimate.com/github/KodeKunstner/alphabet-game)
[![npm](https://img.shields.io/npm/v/alphabet-game.svg)](https://www.npmjs.com/package/alphabet-game)

# alfabet spil til Theodor

This is a bit of documentation, try 'Read' above. Code can be written as semi-literate code, see more here <https://en.wikipedia.org/wiki/Literate_programming>
    
    exports.meta = {
      id: 'alphabet-game',
      version: '0.0.1',
      npm: {}
    };
    var ss = require('solsort@0.1');
    ss.html(`
    <style>
    #alphabet {
    display: inline-block;
    width: 100%;
    height: 100%;
    background: red;
    }
    </style>
    <div id=alphabet
    >
    ${123}
    {ss.htmlEvent('hello')}
    "Hello world"
    </div>
    <center>
    `);