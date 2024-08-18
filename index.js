function randomLetter(){
    const alphabet = 'adcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];

}
const display = document.getElementById("display");

display.innerHTML=randomLetter();

document.getElementById('body').addEventListener('keyup',function(e){
    console.log(e.key);
        // if(display.innerHTML == e.key){
            //     console.log("ok");
                
            //  }else{
            //      console.log("No");
                
            // }
        }
    );