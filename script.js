const list1 = document.getElementById('list1');
const topcontent1 = document.getElementById('top-content1');
const list2 = document.getElementById('list2');
const topcontent2 = document.getElementById('top-content2');
const list3 = document.getElementById('list3');

list1.style.visibility = 'hidden';
list1.style.display = 'none'
list2.style.visibility = 'hidden';
list2.style.display = 'none'


var isClicked = false;
var isClicked1 = false;
var isClicked2 = false;
var isClicked3 = false;


topcontent1.addEventListener('click', function () {
  if (!isClicked) {
    list1.style.visibility = 'visible';
    list1.style.display = 'block';
    isClicked = true;
  } else {
    list1.style.visibility = 'hidden';
    list1.style.display = 'none';
    isClicked = false;
  }
});

topcontent2.addEventListener('click', function () {
  if (!isClicked1) {
    list2.style.visibility = 'visible';
    list2.style.display = 'block';
    isClicked1 = true;
  } else {
    list2.style.visibility = 'hidden';
    list2.style.display = 'none';
    isClicked1 = false;
  }
});

