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


let intViewportWidth = window.innerWidth;
if(window.innerWidth > 768){   

//show new font function

//INTERVIEW


//window.onload=function(){


interview.addEventListener("mouseenter", function(event){
    event.target.style.fontFamily = "Happy Times";
    event.target.innerHTML = "<em>interview</em> ➔";

    document.getElementById("interview-image").style.opacity = "100";
})
interview.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "INTERVIEW ➔";

    document.getElementById("interview-image").style.opacity = "0";
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

    document.getElementById("allhtml-image").style.opacity = "100";
})
allHtml.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "ALL HTML ➔";

    document.getElementById("allhtml-image").style.opacity = "0";
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

    document.getElementById("nametag-image").style.opacity = "100";

})
nametag.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "NAMETAG ➔";

    document.getElementById("nametag-image").style.opacity = "0";
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

    document.getElementById("expressivetext-image").style.opacity = "100";
})
expressiveText.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "EXPRESSIVE TEXT ➔";

    document.getElementById("expressivetext-image").style.opacity = "0";
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

    document.getElementById("abstractedweb-image").style.opacity = "100";

})
abstractedWeb.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "ABSTRACTED WEB ➔";

    document.getElementById("abstractedweb-image").style.opacity = "0";
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
    event.target.style.fontFamily = "Happy Times";
    event.target.innerHTML = "<em>toy</em> ➔";

    document.getElementById("toy-image").style.opacity = "100";

})
toy.addEventListener("mouseleave", function(event){
    event.target.style.fontFamily = "helvetica";
    event.target.innerHTML = "TOY ➔";

    document.getElementById("toy-image").style.opacity = "0";
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

}}

);

