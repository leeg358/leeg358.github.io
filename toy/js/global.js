window.addEventListener("load", function() {

    var containerWidth = document.getElementById('container').clientWidth;
    var containerHeight = document.getElementById('container').clientHeight;

    var leftRight = containerWidth*.5;
    var topBottom = containerHeight*.5;
    var leftRightQuarter = leftRight*.5;
    var topBottomQuarter = topBottom*.5;

    //store all .colors in array
    var colorList = [];
    (function(){
        var elements = document.getElementsByClassName("colors");
        for (var i=0; i < elements.length; i++){
            colorList.push(elements[i].innerHTML);
        }
    })();


   

    //show color function
    function follow(e){

        var x = e.offsetX;
        var y = e.offsetY;

        //grid
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
            document.getElementById("zero-color").style.display="block";
        }
        else{
            document.getElementById("zero-color").style.display="none";
        }

        //1 
        if (one == true && y < topBottomQuarter){
            document.getElementById("one-color").style.display="block";
        }
        else{
            document.getElementById("one-color").style.display="none";
        }
        //2
        if (two == true && y < topBottomQuarter){
            document.getElementById("two-color").style.display="block";
        }
        else{
            document.getElementById("two-color").style.display="none";
        }

        //3
        if (three == true){
            document.getElementById("three-color").style.display="block";
        }
        else{
            document.getElementById("three-color").style.display="none";
        }
        
        //4
        if (four == true && x < leftRightQuarter){
            document.getElementById("four-color").style.display="block";        
        }
        else{
            document.getElementById("four-color").style.display="none";
        }

        //5
        if (four == true && one == true){
            document.getElementById("five-color").style.display="block";
        }
        else{
            document.getElementById("five-color").style.display="none";
        }

        //6
        if (two == true && four == true){
            document.getElementById("six-color").style.display="block";        
        }
        else{
            document.getElementById("six-color").style.display="none";
        }
        //7
        if (four == true && x > leftRightQuarter*3){
            document.getElementById("seven-color").style.display="block";        
        }
        else{
            document.getElementById("seven-color").style.display="none";
        }
        //8
        if (eight == true && x < leftRightQuarter){
            document.getElementById("eight-color").style.display="block";
        }
        else{
            document.getElementById("eight-color").style.display="none";
        }
        //9
        if (eight == true && one == true){
            document.getElementById("nine-color").style.display="block";
        }
        else{
            document.getElementById("nine-color").style.display="none";
        }
        //10
        if (eight == true && two == true){
            document.getElementById("ten-color").style.display="block";
        }
        else{
            document.getElementById("ten-color").style.display="none";
        }
        //11
        if (eight == true && x > leftRightQuarter*3){
            document.getElementById("eleven-color").style.display="block";
        }
        else{
            document.getElementById("eleven-color").style.display="none";
        }
        //12
        if (twelve == true){
            document.getElementById("twelve-color").style.display="block";
        }
        else{
            document.getElementById("twelve-color").style.display="none";
        }
        //13
        if (one == true && thirteen == true){
            document.getElementById("thirteen-color").style.display="block";
        }
        else{
            document.getElementById("thirteen-color").style.display="none";
        }
        //14 
        if (two == true && thirteen == true){
            document.getElementById("fourteen-color").style.display="block";
        }
        else{
            document.getElementById("fourteen-color").style.display="none";
        }
        //15
        if (fifteen == true){
            document.getElementById("fifteen-color").style.display="block";
        }
        else{
            document.getElementById("fifteen-color").style.display="none";
        }
      
    }

    document.getElementById("container").addEventListener('mousemove', follow) 
  })











//resize

window.addEventListener("resize", function() {

    var containerWidth = document.getElementById('container').clientWidth;
    var containerHeight = document.getElementById('container').clientHeight;

    var leftRight = containerWidth*.5;
    var topBottom = containerHeight*.5;
    var leftRightQuarter = leftRight*.5;
    var topBottomQuarter = topBottom*.5;

    //store all .colors in array
    var colorList = [];
    (function(){
        var elements = document.getElementsByClassName("colors");
        for (var i=0; i < elements.length; i++){
            colorList.push(elements[i].innerHTML);
        }
    })();



    //show color function
    function follow(e){

        var x = e.offsetX;
        var y = e.offsetY;

        //grid
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
            document.getElementById("zero-color").style.display="block";
        }
        else{
            document.getElementById("zero-color").style.display="none";
        }

        //1 
        if (one == true && y < topBottomQuarter){
            document.getElementById("one-color").style.display="block";
        }
        else{
            document.getElementById("one-color").style.display="none";
        }
        //2
        if (two == true && y < topBottomQuarter){
            document.getElementById("two-color").style.display="block";
        }
        else{
            document.getElementById("two-color").style.display="none";
        }

        //3
        if (three == true){
            document.getElementById("three-color").style.display="block";
        }
        else{
            document.getElementById("three-color").style.display="none";
        }
        
        //4
        if (four == true && x < leftRightQuarter){
            document.getElementById("four-color").style.display="block";        
        }
        else{
            document.getElementById("four-color").style.display="none";
        }

        //5
        if (four == true && one == true){
            document.getElementById("five-color").style.display="block";
        }
        else{
            document.getElementById("five-color").style.display="none";
        }

        //6
        if (two == true && four == true){
            document.getElementById("six-color").style.display="block";        
        }
        else{
            document.getElementById("six-color").style.display="none";
        }
        //7
        if (four == true && x > leftRightQuarter*3){
            document.getElementById("seven-color").style.display="block";        
        }
        else{
            document.getElementById("seven-color").style.display="none";
        }
        //8
        if (eight == true && x < leftRightQuarter){
            document.getElementById("eight-color").style.display="block";
        }
        else{
            document.getElementById("eight-color").style.display="none";
        }
        //9
        if (eight == true && one == true){
            document.getElementById("nine-color").style.display="block";
        }
        else{
            document.getElementById("nine-color").style.display="none";
        }
        //10
        if (eight == true && two == true){
            document.getElementById("ten-color").style.display="block";
        }
        else{
            document.getElementById("ten-color").style.display="none";
        }
        //11
        if (eight == true && x > leftRightQuarter*3){
            document.getElementById("eleven-color").style.display="block";
        }
        else{
            document.getElementById("eleven-color").style.display="none";
        }
        //12
        if (twelve == true){
            document.getElementById("twelve-color").style.display="block";
        }
        else{
            document.getElementById("twelve-color").style.display="none";
        }
        //13
        if (one == true && thirteen == true){
            document.getElementById("thirteen-color").style.display="block";
        }
        else{
            document.getElementById("thirteen-color").style.display="none";
        }
        //14 
        if (two == true && thirteen == true){
            document.getElementById("fourteen-color").style.display="block";
        }
        else{
            document.getElementById("fourteen-color").style.display="none";
        }
        //15
        if (fifteen == true){
            document.getElementById("fifteen-color").style.display="block";
        }
        else{
            document.getElementById("fifteen-color").style.display="none";
        }
      
    }

    document.getElementById("container").addEventListener('mousemove', follow) 
  })