window.addEventListener("load", function() {

    var interview = document.getElementById('interview-link');
    var allHtml = document.getElementById('all-html-link');
    var nametag = document.getElementById('nametag-link');
    var expressiveText = document.getElementById('expressive-text-link');
    var abstractedWeb = document.getElementById('abstracted-web-link');

    var toy = document.getElementById('toy-link');
    var toyOne = document.getElementById('toy-link-one');



   

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
    event.target.innerText = "toy ➔";
    event.target.style.fontFamily = "Happy Times";
    event.target.style.fontStyle = "italic"
})

toy.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerText = "TOY ➔";
    event.target.style.fontStyle = "normal";
})

toyOne.addEventListener("mouseenter", function(event){
    event.target.innerText = "toy";
    event.target.style.fontFamily = "Happy Times";
    event.target.style.fontStyle = "italic";
    event.target.style.fontSize= "4vw";
    event.target.style.lineHeight="0";
})

toyOne.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerText = "TOY";
    event.target.style.fontStyle = "normal";
    event.target.style.fontSize= "3vw";
})



});

