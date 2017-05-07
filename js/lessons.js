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
