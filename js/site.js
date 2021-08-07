//Get values from user
function getValues(){
    let fizzValue = document.getElementById("fizzNumber").value;
    let buzzValue = document.getElementById("buzzNumber").value;

    let resultList = [];

    let fizzNumber = parseInt(fizzValue);
    let buzzNumber = parseInt(buzzValue);

    if (Number.isInteger(fizzNumber) && Number.isInteger(buzzNumber)){
        resultList = doTheFizzBuzz(fizzNumber, buzzNumber);
        displayResults(resultList);
    }
    else
    {
        alert("You must enter a valid number!! Please try again!!");
    }
}


//get fizzbuzz results based on entered fizzNumber and buzzNumber
function doTheFizzBuzz(fizzNumber, buzzNumber){
    let output = [];

    for (let i = 1; i <= 100; i++){
        if (i % fizzNumber == 0 && i % buzzNumber == 0){
            output.push("FizzBuzz");
        } else if (i % fizzNumber == 0) {
                output.push("Fizz");
        } else if (i % buzzNumber == 0) {
            output.push("Buzz");
        } else {
            output.push(i.toString());
        }
    }
 
    return output;
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
