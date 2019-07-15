
var god = god;





function dialog (content,alltext){
var everytext=alltext;
//take from 
   
        
    $('#dialog').text('');
    var dialogs = [content]  
    initial = 0;
    individual = dialogs[initial].split('');

function createDiag ( dialog ) {

  for(i = 0; i < dialog.length; i++) {
    (function(i){
        
      setTimeout(function(){
        $('#dialog').text($('#dialog').text() +   dialog[i]);
        if (i == dialog.length-1 ) {
          $('#dialog').prepend('<div id="arrow"><p id="enter"></p></div>');
          Mousetrap.bind('enter', function() {
            if (dialogs[initial+1]) {
              $('#dialog').text('');
              initial += 1;
              individual = dialogs[initial].split('');
              createDiag( individual );
            }
          });
        }
      }, 5*i);  
    
    }(i));
    
  }

}

createDiag( individual );







}



// everything above is just text box

setTimeout(function(){ 
    
    
alert("I AM A PAGE");



var timer = new Audio('eb_sfx_archive/yell.wav');
timer.volume = 1;
timer.play()

}, 60000);


var clickMorph = new Audio('eb_sfx_archive/enterbattle.wav');
clickMorph.volume = 1;









var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wordChosen = ""
var loses=0;
var wins=0;
var guessesR=5;
var guessedLetters=[];

wordChosen = letters[Math.floor(Math.random()*letters.length)]
console.log(wordChosen)



// //////////////////////////
// ///POST TITLE SCREEN//////
// //////////////////////////

//blueprint for animations
function speaking(){
$('#facesmall').animate({
    
    },500,function(){
        })
    }


// here we go animation, post title screen



function timesync (lol){





}


$('#start').click(function(){console.log('after title')
var audio = new Audio('eb_sfx_archive/strangepsi.wav');
var audio2 = new Audio('eb_sfx_archive/enterbattle.wav');
audio.volume = 0.2;
        audio.play();
    var amount=180;
$('#face').animate({
width:'100px',
height:'100px',
left:'385px',
top:'430px',
transform: 'rotate(180deg)'
},2000,function(){ 
    
    console.log('animation complete')})

    $('#america').animate({
        top:'0px',
        opacity:'0'
        },1000,function(){ 
            
            console.log('animation complete')})

$('#start').animate({
    top:'0px',
    opacity:'0'
    },2000,function(){ 
        $('#asia').append('<img id="facesmall" src = "assets/smirk.png" >')
        $('#clip').remove()
        $('#logo').remove()
        $('#titlecard').remove()
        $('#america').animate({opacity:1})
        // var audio = new Audio('../../eb_sfx_archive/teleport.wav');
        // audio.play();
        $('#face').css('z-index','30')
        $('#start').remove()
        
    
    /*<div id="marquee"><div id="text">Your Text</div></div> */

        
        speaking()
        $('#africa').append('    <div id="marquee"><div id="text"></div></div><h3 id="voice"></h3>')
        $('#america').append('<img class="hero morpheus" placeholder="Morpheus" style="position:fixed;" id="morpheusID" src="assets/morphIcon.png"></img>')
        $('#america').append('<img class="hero einstein" style="position:fixed;" id="einID" src="assets/einIcon.png"></img>')
        $('#america').append('<img class="hero donald" style="position:fixed;" id="donaldID" src="assets/donald.png"></img>')
        $('#face').addClass('hero mrface')
        // $('#america').append('<img class="hero morpheus" style="position:fixed;" id="morpheusID" src="assets/morphIcon.png"></img>')
        // $('#text').text('LOL WASSUP DUDE PICK A CHARACTER?')
        // $('#africa').append('    <img>Wins : </img><img class="wins" src = "./assets/brain.png">BRAIN</img>')
        // $('#africa').append('    <img>Loses : </img><img id="loses" ></img>')
        // $('#africa').append('    <img>Guesses left : </img><img id="guesses-remaining">5</img>')
        // $('#africa').append('    <img>Letters guessed : </img><img id="already-guessed"></img>')
        $('#africa').append('<div id="dialog"></div>')
        dialog('pick a fucking character you nerd')
      
        var hero = ''
        $('.hero').mousedown(function(){
          
            hero=this;
        })
        
        $('.hero').mouseup(function(){
            
            $(this).removeClass('hero')
            hero=this
            console.log(this)
            dialog(this.className)
            $('.hero').animate({
            
                opacity:'0',
                left:'2000px',
                top
                },1200,function(){
                    $('.hero').remove()
                    console.log(hero)



                  
                    $(hero).animate({
                        position:'fixed',
                        left:'100px',
                        top:'100px',
                        
    


                    },function(){
                        $(hero).addClass('shaker')
                        setTimeout(function(){$(hero).removeClass('shaker')
                        $('#enter').css('opacity','1')
                    
                    }, 2000)
                        $(hero).unbind()
                        if(hero.id=='morpheusID'){
                            $(hero).addClass('morpheusFace')}
                        if(hero.id=='einID'){
                            $(hero).addClass('einsteinFace')
                        }





                        














                    })
               
                    $('#facesmall').animate({
                        left:'500px'
                    },1000,function(){console.log('lol')})

                    // $('#text').text('this will be funny')


                    
                })


//still post titlescreen
//music

            console.log('cl')
            clickMorph.volume=0.7
            clickMorph.play();
           
            
              setTimeout(function(){
                  
                var theme1 = new Audio('tendasCave.mp3');
                
                
                theme1.play()
            
            }, 3000)
    
        })



        $('#facesmall').animate({
            
            opacity:'1',
            left:'100px',
            top
            },500,function(){
                $('#facesmall').addClass( "smirkSpeak" );
                setTimeout(function(){  }, 1000);
                
            })
    
    
    
    
    
    
    })

})






