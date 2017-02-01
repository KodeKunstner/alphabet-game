// # alfabet spil til Theodor
//
// This is a bit of documentation, try 'Read' above. Code can be written as semi-literate code, see more here <https://en.wikipedia.org/wiki/Literate_programming>

exports.meta = { id: 'alphabet-game' };
var ss = require('solsort@0.1');
var letters = 'abcdefghijklmnopqrstuvwxyz';
var letter = letters[(Math.random() * letters.length) | 0];
ss.handle('letter', o => console.log('letter', o));

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
onclick=${ss.htmlEvent('letter')}
>

<h1>${letter}</h1>
<input autofocus onkeydown=${ss.htmlEvent('letter')}>
${123}

"Hello world"
</div>
`);
}

ui();
  