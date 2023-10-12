// Code your solutions in this file

const names = [
    "Guadalupe", 
    "Ollie", 
    "Aki"]

function writeCards(names){

    const messages = [];
    for (let i=0 ; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}
function countDown(num){
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}

console.log(writeCards(names));
countDown(5);

