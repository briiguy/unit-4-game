







var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wordChosen = ""
var loses=0;
var wins=0;
var guessesR=5;
var guessedLetters=[];

wordChosen = letters[Math.floor(Math.random()*letters.length)]
console.log(wordChosen)

$('#start').click(function(){console.log('yeah')


$('#face').animate({
top:'0px',
opacity:'0'
},3000,function(){ 
    $('#face').remove()
    console.log('animation complete')})

    $('#america').animate({
        top:'0px',
        opacity:'0'
        },3000,function(){ 
            $('#america').remove()
            console.log('animation complete')})

$('#start').animate({
    top:'0px',
    opacity:'0'
    },2000,function(){ 
        
       
        $('#start').remove()
        console.log('animation complete')
    
    

        $('#asia').append('<img id="facesmall" src = "assets/smirk.png" >')
        $('#africa').append('    <h3>Guess what Letter Im thinking of</h3><h3 id="voice"></h3>')
        $('#africa').append('    <h3>Wins : </h3><h3 id="wins"></h3>')
        $('#africa').append('    <h3>Loses : </h3><h3 id="loses"></h3>')
        $('#africa').append('    <h3>Guesses left : </h3><h3 id="guesses-remaining">5</h3>')
        $('#africa').append('    <h3>Letters guessed : </h3><h3 id="already-guessed"></h3>')

      $('#wins').text(0)
      $('#loses').text(0)



        $('#facesmall').animate({
            
            opacity:'1',
            left:'100px',
            top
            },1000,function(){ 

           
                document.addEventListener("keypress", (event)=>{
                    
                    var userGuess=String.fromCharCode(event.keyCode);
                
                    if(wordChosen==userGuess){
                    // add to the right words array
                        wins++
                        $('#wins').text(wins)
                        $('#already-guessed').text("")
                        guessedLetters=[];
                        guessesR=5;
                        $('#guesses-remaining').text(guessesR)
                        wordChosen = letters[Math.floor(Math.random()*letters.length)]
                        console.log(wordChosen)
                        }
                    else {
                        guessedLetters.push(' '+userGuess)
                        guessesR--
                        
                        $('#guesses-remaining').text(guessesR)
                        $('#already-guessed').text(guessedLetters)
                        if(guessesR==0){
                            loses++;
                            $('#loses').text(loses)
                            $('#already-guessed').text("")
                            guessedLetters=[];
                            guessesR=5;
                            $('#guesses-remaining').text(guessesR)
                            wordChosen = letters[Math.floor(Math.random()*letters.length)]
                            console.log(wordChosen)
                        }
                    }
                    })









                










            })
    
    
    
    
    
    
    })

})








