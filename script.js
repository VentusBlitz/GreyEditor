$('.block-tab').on('keydown', function(e) { 
  if (e.keyCode == 9) e.preventDefault(); 
});

//-------------------------------------------
jQuery(function($){
    $("[contenteditable]").focusout(function(){
        var element = $(this);        
        if (!element.text().trim().length) {
            element.empty();
        }
    });
});
//-------------------------------------------
/*var keywords = ["HTML","FROM","WHERE","LIKE","BETWEEN","NOT LIKE","FALSE","NULL","FROM","TRUE","NOT IN"];
// Keyup event
$("#html").on("keyup", function(e){
  // Space key pressed
  if (e.keyCode == 32){
    var newHTML = "";
    // Loop through words
    //$(this).text().replace(/[\s]+/g, " ").trim().split(" ").forEach(function(val){
    $(this).text().trim().split(" ").forEach(function(val){
      // If word is statement
      if (keywords.indexOf(val.trim().toUpperCase()) > -1)
        newHTML += "<span class='statement'>" + val +"&nbsp;</span>";
      else
        newHTML += "<span class='other'>" + val + "&nbsp;</span>"; 
    });
    $(this).html(newHTML);

    // Set cursor postion to end of text
    var child = $(this).children();
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(child[child.length-1], 1);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    this.focus();
  }
});*/
//-------------------------------------------
function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;

  document.body.onkeyup = function() {
    code.open();
    code.writeln(
      html.innerText +
        "<style>" +
        css.innerText +
        "</style>" +
        "<script>" +
        js.innerText +
        "</script>"
    );
    code.close();
  };
}

compile();