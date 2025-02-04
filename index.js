const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myResults = document.getElementById("myResults");

let age;

mySubmit.onclick = function displayText(){
    age = myText.value;
    age = Number(age);
    console.log(age)
    if (age > 25){
        if (age > 70){
            myResults.textContent = 'You are way to old and your brain is rotting'
        }
        else{
            myResults.textContent = 'Congrats your brain is at a great age, now you have no excuse'
        }
    }
    else{
        if (age == 0){
            myResults.textContent = 'Congrats on being born, now get ready for suffering'        
        }
        else if (age < 0){
            myResults.textContent = "You haven't even been born yet, lucky you"
        }
        else if (age > 0){
            myResults.textContent = "You've got a couple more years before you are smart enough"
        }
        else{
            myResults.textContent = "Bro, you didn't even put a number"
        }
    }
}
