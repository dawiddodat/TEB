const elClick = document.getElementById('click');
const elDoubleClick = document.getElementById('doubleClick');
const elMouseOver = document.getElementById('mouseOver');
const color = document.getElementById('color');

let elDisplayBlock = document.getElementById('display');
let elDisplayText = document.getElementById('displayText');

elClick.addEventListener('click',function() {
  elDisplayBlock.style.background = color.value;
  elDisplayText.innerHTML = 'click ';
});

elDoubleClick.addEventListener('dblclick',function() {
  elDisplayBlock.style.background = color.value;
  elDisplayText.innerHTML = 'doubleClick ';
});

elMouseOver.addEventListener('mouseover', function(){
  elDisplayBlock.style.background = color.value;
  elDisplayText.innerHTML = 'mouseOver ';
});
