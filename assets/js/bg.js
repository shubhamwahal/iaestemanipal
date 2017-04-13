$(function() {
var body = $(‘body’);
var backgrounds = new Array(
‘url(8.jpg)’,
‘url(7.jpg)’
);
var current = 0;

function nextBackground() {
body.css(
‘background’,
backgrounds[current = ++current % backgrounds.length]
);

setTimeout(nextBackground, 10000);
}
setTimeout(nextBackground, 10000);
body.css(‘background’, backgrounds[0]);
});