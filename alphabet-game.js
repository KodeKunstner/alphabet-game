// # Sample app 
//
// This is a bit of documentation, try 'Read' above. Code can be written as semi-literate code, see more here <https://en.wikipedia.org/wiki/Literate_programming>

exports.meta = {
  id: 'alphabet-game',
  version: '0.0.1'
};
var ss = require('solsort@0.1');
var da = require('direape@0.1');

da.handle('key',  o => {
  var key = String.fromCharCode(o.keyCode).toUpperCase();
  console.log(key);
});
var letters = '';
for(var i = 0; i < 40*10; i++) {
  letters += String.fromCharCode(65 + Math.random() * 25 | 0);
  letters += ' ';
}


ss.html(['div',
         ['code',
          {style: {fontSize: 20,
                   display: 'inline-block',
                   width: '44ex'
                  }}, letters],
         ['br'],
  ['input', {
    value: '',
  autoFocus: true,
  onKeyDown: ss.event('key', {extract:'keyCode'})
}]]); 
console.log(da);