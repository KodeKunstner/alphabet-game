<img src=https://raw.githubusercontent.com/KodeKunstner/alphabet-game/master/icon.png width=96 height=96 align=right>

[![github](https://img.shields.io/badge/github-KodeKunstner/alphabet-game-blue.svg)](https://github.com/KodeKunstner/alphabet-game)
[![codeclimate](https://img.shields.io/codeclimate/github/KodeKunstner/alphabet-game.svg)](https://codeclimate.com/github/KodeKunstner/alphabet-game)

# alfabet spil til Theodor

This is a bit of documentation, try 'Read' above. Code can be written as semi-literate code, see more here <https://en.wikipedia.org/wiki/Literate_programming>
    
    exports.meta = { id: 'alphabet-game' };
    var ss = require('solsort@0.1');
    var da = require('direape@0.1');
    
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    function randomLetter() {
      return letters[(Math.random() * letters.length) | 0];
    }
    da.setJS(['letter'], da.getJS(['letter'], randomLetter()));
    ss.handle('letter', o => {
      console.log('letter', o);
      da.setJS(['letter'], randomLetter());
      ui();
    });
    
    function ui() {
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
    
    <h1>${da.getJS(['letter'])}</h1>
    <input autofocus onkeydown=${ss.htmlEvent('letter')}>
    </div>
    `);
    }
    
    ui();
      