document.getElementById("add").addEventListener("click", function(event) {
    event.preventDefault()//Prevent From Submission

    const num1= parseFloat(document.getElementById("num1").value);
    const num2= parseFloat(document.getElementById("num2").value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        document.getElementById("result").innerText =`The sum is: ${sum}`
    } else {
        document.getElementById("result").innerText ="Please enter valid numbers";
    }
});

document.getElementById("sub").addEventListener("click", function(event) {
    event.preventDefault()//Prevent Default Submision

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sub = num1 - num2;
        document.getElementById("result").innerText = `The anwser is: ${sub}`
    } else {
        document.getElementById("result").innerText = "Please enter valid numbers";
    }
});

document.getElementById("mult").addEventListener("click", function(event) {
    event.preventDefault()//Prevent Default Submision

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const mult = num1 * num2;
        document.getElementById("result").innerText = `The anwser is: ${mult}`
    } else {
        document.getElementById("result").innerText = "Please enter valid numbers";
    }
});

document.getElementById("divide").addEventListener("click", function(event) {
    event.preventDefault()//Prevent Default Submision

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const divide = num1 / num2;
        document.getElementById("result").innerText = `The anwser is: ${divide}`
    } else {
        document.getElementById("result").innerText = "Please enter valid numbers";
    }
});