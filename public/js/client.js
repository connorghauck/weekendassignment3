$(function(){

var numOne;
var numTwo;
var theCalculation;
var numArray = [];
var userInput = "";




appendIt();
$('form').on('click', 'button', function (){
    var $button = $(this);

    if ($button.attr('class') === 'buttonCalc'){

        //we store the input number when the user hits a calculation button bc we now know that the user is done inputting the individual digits
        //check if numOne has a number stored (on line 4 & 5, we initialize numOne and numTwo to null values)
        //if numOne is null, then we store the number that the user inputted into numOne
        //if numOne is NOT null, then store the number into numTwo
        numOne = userInput;
        userInput = "";
        theCalculation = $button.attr('id');

    //concatenate the numbers in the case that the user wants to input a double, triple, quad, etc digit number
    } else if($button.attr('class') === 'mathNum'){
        userInput = userInput + $button.attr('id');
    }
});

$('#subAndClear').on('click', '#submit', function(event){
    numTwo = userInput;
    userInput = "";
    var result = "numOne: "+numOne+" numTwo: "+numTwo;

    console.log(result)
    var theResult = {"numOne": numOne, "numTwo": numTwo};
    event.preventDefault();


//sends data to url
if (theCalculation === "add"){
    $.ajax({
        type: 'POST',
        url: '/calculate/add',
        data: theResult,
        success:  appendIt()
    });
} else if (theCalculation === "subtract"){
    $.ajax({
        type: 'POST',
        url: '/calculate/subtract',
        data: theResult,
        success:  appendIt()
    });
} else if (theCalculation === "divide"){
    $.ajax({
        type: 'POST',
        url: '/calculate/divide',
        data: theResult,
        success:  appendIt()
    });
} else if (theCalculation === "multiply"){
    $.ajax({
        type: 'POST',
        url: '/calculate/multiply',
        data: theResult,
        success:  appendIt()
    });
}
appendIt();

});//end of the click function

//subAndClear clears out the answer box
$('#subAndClear').on('click', '#clearButton', function (){
    $('#answer').empty();
});
});



function appendIt() {
    $.ajax({
        type: 'GET',
        url: '/calculate',
        success: function (result){
            // console.log(result);
            $('#answer').empty();
            $('#answer').text(result);
  }
});
}
