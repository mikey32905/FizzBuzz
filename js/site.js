//Get values from user
function getValues(){
    let fizzValue = document.getElementById("fizzNumber").value;
    let buzzValue = document.getElementById("buzzNumber").value;

    let numberList = getNumberList();

    let fizzNumber = parseInt(fizzValue);
    let buzzNumber = parseInt(buzzValue);

    if (Number.isInteger(fizzNumber) && Number.isInteger(buzzNumber)){
        displayResults(fizzNumber, buzzNumber, numberList);
    }
    else
    {
        alert("You must enter a valid number!! Please try again!!");
    }



}



//Get list of numbers
function getNumberList(){
    let output = [];

    for (let i = 1; i <= 100; i++){
        output.push(i);
    }

    return output;
}


//display results
function displayResults(fizzNumber, buzzNumber, numberList){
    let templateRows = "";

    templateRows += `<tr>`;
    for (let i = 0; i < numberList.length; i++){
        let number = numberList[i];

        if (i % 5 == 0)
        {
            templateRows += `</tr><tr>`
        }

        if (number % fizzNumber == 0 && number % buzzNumber == 0){
            templateRows += `<td>FizzBuzz</td>`;
        } else {
            if (number % fizzNumber == 0){
                templateRows += `<td>Fizz</td>`;
            }else if (number % buzzNumber == 0) {
                templateRows += `<td>Buzz</td>`;
            } else {
                templateRows += `<td>${number}</td>`;
            }

        }

        document.getElementById("results").innerHTML = templateRows;
    }
}
