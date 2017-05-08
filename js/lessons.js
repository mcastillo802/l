// Starts off with start.txt
$.get('js/text_files/start.txt', function(results){
    $("#consoleText").empty();
    $("#consoleText").html(results);
});

// Files are numbered 1-n, so initializing with 0 will make the first file 1
var numberOfFiles = 3;
var currentText = 0;

// Get txt file
function getText(index) {
    if(index > numberOfFiles) {
        index = 1;
    }
    if(index < 1) {
        index = numberOfFiles;   
    }
    currentText = index;
    $("#consoleText").empty();
    $.get('js/text_files/' + index + '.txt', function(text){
        $("#consoleText").html(text);
    });
}

$("#next").on("click", function(){
    currentText++;
    getText(currentText)
});

$("#prev").on("click", function(){
    currentText--;
    getText(currentText);
});

$("#run").on("click", function(){
    eval( editor2.getValue() + editor3.getValue() );
});

var lesson = $("#consoleText") // cached for performance
var editor = $("#editorWrap")// ditto ^^
var pLesson = document.getElementById("consoleText");
var preLesson = pLesson.getElementByTagName('pre');
var codeLesson = pLesson.getElementByTagName('code');


setInterval(function() { 
    var scaleSource1 = lesson.width(),
        scaleSource2 = editor.width(),
        scaleFactor = 0.35,                     
        maxScale = 600,
        minScale = 30; //Tweak these values to taste

    var fontSize1 = scaleSource1 * scaleFactor; //Multiply the width of the body by the scaling factor:
    var fontSize2 = scaleSource2 * scaleFactor; //Multiply the width of the body by the scaling factor:

    if (fontSize1 > maxScale) fontSize1 = maxScale;
    if (fontSize1 < minScale) fontSize1 = minScale; //Enforce the minimum and maximums
    if (fontSize2 > maxScale) fontSize2 = maxScale;
    if (fontSize2 < minScale) fontSize2 = minScale; //Enforce the minimum and maximums 
    
    lesson.css({"font-size": fontSize1 + '%'});
    editor.css({"font-size": fontSize2 + '%'});
    preLesson.css({"font-size": fontSize1 + '%'});
    codeLesson.css({"font-size": fontSize1 + '%'});
    
}, 15);
