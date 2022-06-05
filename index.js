let newArray = [];
function writeCards (cards) {
    for (let i = 0; i < cards.length; i++) {
      
        newArray.push (`Thank you, ${cards[i]}, for the wonderful surprise gift!`); 
       
    }
    
}

function CountDown(integer){
  while (integer >= 0) {
    console.log(integer);
   integer--;
  }
}
CountDown(3);
