window.addEventListener("load", function() {

    var grid = document.getElementById('container');

    var containerWidth = document.getElementById('container').clientWidth;
    var containerHeight = document.getElementById('container').clientHeight;


    var leftSide = containerWidth * .5;
    var topHalf = containerHeight * .5;


    //show color function
    function follow(e){

        var x = e.offsetX;
        var y = e.offsetY;
        
        //topleft
        if (x <= leftSide && y < topHalf) {
            document.body.style.backgroundColor = "lightblue"; 
        }
        //bottomleft
        if (x <=leftSide && y > topHalf){
            document.body.style.backgroundColor = "lightgreen";
        }
        
        if (x > leftSide && y < topHalf){
            document.body.style.backgroundColor = "lightpink";
        }
        //bottomright
        if (x > leftSide && y > topHalf){
            document.body.style.backgroundColor = "darkblue";
        }
   
    }



    
    document.getElementById("container").addEventListener('mousemove', follow) 
  })

  window.addEventListener("resize", function(){
    var grid = document.getElementById('container');

    var containerWidth = document.getElementById('container').clientWidth;
    var containerHeight = document.getElementById('container').clientHeight;


    var leftSide = containerWidth * .5;
    var topHalf = containerHeight * .5;


    //show color function
    function follow(e){

        var x = e.offsetX;
        var y = e.offsetY;
        
        //topleft
        if (x <= leftSide && y < topHalf) {
            document.body.style.backgroundColor = "lightblue"; 
        }
        //bottomleft
        if (x <=leftSide && y > topHalf){
            document.body.style.backgroundColor = "lightgreen";
        }
        
        if (x > leftSide && y < topHalf){
            document.body.style.backgroundColor = "lightpink";
        }
        //bottomright
        if (x > leftSide && y > topHalf){
            document.body.style.backgroundColor = "darkblue";
        }
        
    }
    
    document.getElementById("container").addEventListener('mousemove', follow) 

  })