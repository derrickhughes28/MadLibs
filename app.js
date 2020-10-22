function createParagraph(){
var wordOne = document.getElementById('thingOne').value;
var wordTwo = document.getElementById('phrase').value;
var wordThree = document.getElementById('adj').value;
var wordFour = document.getElementById('person').value;
var wordFive = document.getElementById('verb').value;
var wordSix = document.getElementById('silly').value;
var wordSeven = document.getElementById('place').value;
var wordEight = document.getElementById('animal').value;
var wordNine = document.getElementById('color').value;
var wordTen = document.getElementById('things').value;






var paragraph =  '<p> Today I went to;' + wordEight + ' with ' + wordFive + '. While we were there,  we came across the cutest' + wordOne +  ' ballon animal' + wordTen " ." + 'His name was' + wordSeven + "and we instantly became best friends because we both love "+ wordFour + wordTwo + ' and ' wordSix + '.' " While talking about " + wordNine + " , " + " we both even said" + wordThree + 'at the same time. Jinx!'  '</p>'

console.log(paragraph);
    document.getElementById('answer').innerHTML = paragraph;
}