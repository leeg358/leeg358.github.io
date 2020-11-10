window.addEventListener("load", function() {

    var grid = document.getElementById('container');

    var containerWidth = document.getElementById('container').clientWidth;
    var containerHeight = document.getElementById('container').clientHeight;

    var leftRight = containerWidth*.5;
    var topBottom = containerHeight*.5;
    var leftRightQuarter = leftRight*.5;
    var topBottomQuarter = topBottom*.5;

    


    //show color function
    function follow(e){

        var x = e.offsetX;
        var y = e.offsetY;

        var zero = x < leftRightQuarter && y < topBottomQuarter;
        var one = x > leftRightQuarter && x < leftRight; 
        var two = x > leftRight && x < leftRightQuarter*3;
        var three = x > leftRightQuarter*3 && y < topBottomQuarter;
        var four = y > topBottomQuarter && y < topBottom;
        var eight = y > topBottom && y < topBottomQuarter*3;
        var twelve = x < leftRightQuarter && y > topBottomQuarter*3;
        var thirteen = y > topBottomQuarter*3;
        var fifteen = x > leftRightQuarter*3 && y > topBottomQuarter*3;
        

        //0
        if (zero == true) {
           console.log("0");
        }

        //1 
       if (one == true && y < topBottomQuarter){
            console.log("1") ;
        }
    
        //2
        if (two == true && y < topBottomQuarter){
            console.log("2");
        }

        //3
        if (three == true){
            console.log("3");
        }
        
        //4
        if (four == true && x < leftRightQuarter){
            console.log("4");
        }

        //5
        if (four == true && one == true){
            console.log("5");
        }
        //6
        if (two == true && four == true){
            console.log("6");
        }
        //7
        if (four == true && x > leftRightQuarter*3){
            console.log("7");
        }
        //8
        if (eight == true && x < leftRightQuarter){
            console.log("8");
        }
        //9
        if (eight == true && one == true){
            console.log("9");
        }
        //10
        if (eight == true && two == true){
            console.log("10");
        }
        //11
        if (eight == true && x > leftRightQuarter*3){
            console.log("11");
        }
        //12
        if (twelve == true){
            console.log("12");
        }
        //13
        if (one == true && thirteen == true){
            console.log("13");
        }
        //14 
        if (two == true && thirteen == true){
            console.log("14");
        }
        //15
        if (fifteen == true){
            console.log("15");
        }
      
    }

    document.getElementById("container").addEventListener('mousemove', follow) 
  })