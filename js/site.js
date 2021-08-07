//Get values from user
function getValues(){
    let fizzValue = document.getElementById("fizzNumber").value;
    let buzzValue = document.getElementById("buzzNumber").value;

    let resultList = [];

    let fizzNumber = parseInt(fizzValue);
    let buzzNumber = parseInt(buzzValue);

    if (Number.isInteger(fizzNumber) && Number.isInteger(buzzNumber)){
        resultList = doTheFizzBuzzC(fizzNumber, buzzNumber);
        displayResults(resultList);
    }
    else
    {
        alert("You must enter a valid number!! Please try again!!");
    }
}


//get fizzbuzz results based on entered fizzNumber and buzzNumber
//Method 1
function doTheFizzBuzz(fizzNumber, buzzNumber){
    let outputArray = [];

    for (let i = 1; i <= 100; i++){
        if (i % fizzNumber == 0 && i % buzzNumber == 0){
            outputArray.push("FizzBuzz");
        } else if (i % fizzNumber == 0) {
            outputArray.push("Fizz");
        } else if (i % buzzNumber == 0) {
            outputArray.push("Buzz");
        } else {
            outputArray.push(i.toString());
        }
    }
 
    return outputArray;
}

//get fizz buzz result - method 2 using switch statement
function doTheFizzBuzzB(fizzNumber, buzzNumber){
    let outputArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <=100; i++){
        
        Fizz = i % fizzNumber == 0;
        Buzz = i % buzzNumber == 0;

        switch(true)
        {
            case Fizz && Buzz:{
                outputArray.push("FizzBuzz");
                break;
            }
            case Fizz: {
                outputArray.push("Fizz");
                break;
            }
            case Buzz: {
                outputArray.push("Buzz");
                break;
            }
            default:{
                outputArray.push(i);
                break;
            }
        }
    }

    return outputArray;
}

//Method 3 - get fizz buzz results - using conditional (ternary) operator -- one liner
function doTheFizzBuzzC(fizzNumber, buzzNumber){
    let outputArray = [];

    for(let i = 1; i <= 100; i++){
        let value = ((i % fizzNumber == 0 ? "Fizz" : "") + (i % buzzNumber == 0 ? "Buzz" : "") || i) ;
        outputArray.push(value);
    }

    return outputArray;
}

//display results
function displayResults(resultList){

    //get table body element from page
    let tablebody = document.getElementById("results");

    //get template row
    let templateRow = document.getElementById("fbTemplate");

    //clear the table first
    tablebody.innerHTML = "";

      for (let index = 0; index < resultList.length; index += 5){
        let tableRow = document.importNode(templateRow.content, true);

        //grab number of tds and put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(resultList[index]);
        rowCols[0].textContent = resultList[index];

        rowCols[1].classList.add(resultList[index+1]);
        rowCols[1].textContent = resultList[index+1];
        
        rowCols[2].classList.add(resultList[index+2]);
        rowCols[2].textContent = resultList[index+2];
       
        rowCols[3].classList.add(resultList[index+3]);
        rowCols[3].textContent = resultList[index+3];
       
        rowCols[4].classList.add(resultList[index+4]);
        rowCols[4].textContent = resultList[index+4];

        tablebody.appendChild(tableRow);
    }
}
