window.addEventListener("load", function() {

    var interview = document.getElementById('interview');
    var allHtml = document.getElementById('all-html');
    var nametag = document.getElementById('nametag');
    var expressiveText = document.getElementById('expressive-text');
    var abstractedWeb = document.getElementById('abstracted-web');
    var toy = document.getElementById('toy');


   

//show new font function


interview.addEventListener("mouseenter", function(event){
    event.target.style.fontFamily = "Happy Times";
    event.target.innerHTML = "<em>interview</em> ➔";
})

interview.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "INTERVIEW ➔";
})

allHtml.addEventListener("mouseenter", function(event){
    event.target.style.fontFamily = "Happy Times";
    event.target.innerHTML = "<em>all html</em> ➔";
})

allHtml.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "ALL HTML ➔";
})


nametag.addEventListener("mouseenter", function(event){
    event.target.style.fontFamily = "Happy Times";
    event.target.innerHTML = "<em>nametag</em> ➔";
})

nametag.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "NAMETAG ➔";
})

expressiveText.addEventListener("mouseenter", function(event){
    event.target.style.fontFamily = "Happy Times";
    event.target.innerHTML = "<em>expressive text</em> ➔";
})

expressiveText.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "EXPRESSIVE TEXT ➔";
})

abstractedWeb.addEventListener("mouseenter", function(event){
    event.target.style.fontFamily = "Happy Times";
    event.target.innerHTML = "<em>abstracted web</em> ➔";
})

abstractedWeb.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "ABSTRACTED WEB ➔";
})

toy.addEventListener("mouseenter", function(event){
    event.target.style.fontFamily = "Happy Times";
    event.target.innerHTML = "<em>toy</em> ➔";
})

toy.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "TOY ➔";
})



})