window.addEventListener("load", function() {

    var interview = document.getElementById('interview-link');
    var interviewOne = document.getElementById('interview-link-one');

    var allHtml = document.getElementById('all-html-link');
    var allHtmlOne = document.getElementById('all-html-link-one');

    var nametag = document.getElementById('nametag-link');
    var nametagOne = document.getElementById('nametag-link-one')

    var expressiveText = document.getElementById('expressive-text-link');
    var expressiveTextOne = document.getElementById('expressive-text-link-one');

    var abstractedWeb = document.getElementById('abstracted-web-link');
    var abstractedWebOne = document.getElementById('abstracted-web-link-one')

    var toy = document.getElementById('toy-link');
    var toyOne = document.getElementById('toy-link-one');



   

//show new font function

//INTERVIEW
interview.addEventListener("mouseenter", function(event){
    event.target.style.fontFamily = "Happy Times";
    event.target.innerHTML = "<em>interview</em> ➔";
})
interview.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "INTERVIEW ➔";
})
interviewOne.addEventListener("mouseenter", function(event){
    event.target.innerText = "interview";
    event.target.style.fontFamily = "Happy Times";
    event.target.style.fontStyle = "italic";
    event.target.style.fontSize= "4vw";
    event.target.style.lineHeight="0";
})
interviewOne.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerText = "INTERVIEW";
    event.target.style.fontStyle = "normal";
    event.target.style.fontSize= "3vw";
})

//ALL HTML
allHtml.addEventListener("mouseenter", function(event){
    event.target.style.fontFamily = "Happy Times";
    event.target.innerHTML = "<em>all html</em> ➔";
})
allHtml.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "ALL HTML ➔";
})
allHtmlOne.addEventListener("mouseenter", function(event){
    event.target.innerText = "all html";
    event.target.style.fontFamily = "Happy Times";
    event.target.style.fontStyle = "italic";
    event.target.style.fontSize= "4vw";
    event.target.style.lineHeight="0";
})
allHtmlOne.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerText = "ALL HTML";
    event.target.style.fontStyle = "normal";
    event.target.style.fontSize= "3vw";
})

//NAMETAG
nametag.addEventListener("mouseenter", function(event){
    event.target.style.fontFamily = "Happy Times";
    event.target.innerHTML = "<em>nametag</em> ➔";
})
nametag.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "NAMETAG ➔";
})
nametagOne.addEventListener("mouseenter", function(event){
    event.target.innerText = "nametag";
    event.target.style.fontFamily = "Happy Times";
    event.target.style.fontStyle = "italic";
    event.target.style.fontSize= "4vw";
    event.target.style.lineHeight="0";
})
nametagOne.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerText = "NAMETAG";
    event.target.style.fontStyle = "normal";
    event.target.style.fontSize= "3vw";
})

//EXRRESSIVE TEXT
expressiveText.addEventListener("mouseenter", function(event){
    event.target.style.fontFamily = "Happy Times";
    event.target.innerHTML = "<em>expressive text</em> ➔";
})
expressiveText.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "EXPRESSIVE TEXT ➔";
})
expressiveTextOne.addEventListener("mouseenter", function(event){
    event.target.innerText = "expressive text";
    event.target.style.fontFamily = "Happy Times";
    event.target.style.fontStyle = "italic";
    event.target.style.fontSize= "4vw";
    event.target.style.lineHeight="0";
})
expressiveTextOne.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerText = "EXPRESSIVE TEXT";
    event.target.style.fontStyle = "normal";
    event.target.style.fontSize= "3vw";
})

//ABSTRACTED WEB
abstractedWeb.addEventListener("mouseenter", function(event){
    event.target.style.fontFamily = "Happy Times";
    event.target.innerHTML = "<em>abstracted web</em> ➔";
})
abstractedWeb.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "ABSTRACTED WEB ➔";
})
abstractedWebOne.addEventListener("mouseenter", function(event){
    event.target.innerText = "abstracted web";
    event.target.style.fontFamily = "Happy Times";
    event.target.style.fontStyle = "italic";
    event.target.style.fontSize= "4vw";
    event.target.style.lineHeight="0";
})
abstractedWebOne.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerText = "ABSTRACTED WEB";
    event.target.style.fontStyle = "normal";
    event.target.style.fontSize= "3vw";
})



//TOY
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

