<img src=https://raw.githubusercontent.com/KodeKunstner/alphabet-game/master/icon.png width=96 height=96 align=right>

[![github](https://img.shields.io/badge/github-KodeKunstner/alphabet-game-blue.svg)](https://github.com/KodeKunstner/alphabet-game)
[![codeclimate](https://img.shields.io/codeclimate/github/KodeKunstner/alphabet-game.svg)](https://codeclimate.com/github/KodeKunstner/alphabet-game)

# alfabet spil til Theodor

This is a bit of documentation, try 'Read' above. Code can be written as semi-literate code, see more here <https://en.wikipedia.org/wiki/Literate_programming>
    
    module.meta = {
      id: 'alphabet-game',
      version: '0.0.1',
      npmjs: {}
    };
    var da = require('direape@0.1');
    da.run(da.parent, 'appedit:html',`
    <center>
      <h1>Change me</h1>
      <p>Try to edit the code.</p>
      <p>Choose Edit above, and then<br>
         alter the code on the left side...</p>
      (vi keybindings is enabled,<br>
      so press <tt>i</tt> to insert)
    </center>
    ${Object.keys(require('lodash')).join('<br>')}
    `);