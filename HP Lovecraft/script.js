$(document).ready(function(){
    ScoreUpdate();
    // Shuffle();

    $('.btn-slice').click(function(){
        // console.log('Hi')
        $('#playSpace').html('<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="0">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="1">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="2">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="3">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="4">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="5">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="6">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="7">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="8">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="9">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="10">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="11">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="12">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="13">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="14">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="15">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="16">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="17">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="18">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="19">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="20">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="21">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="22">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="23">\n<img src = "Cardback2.jpg" class="card Back" alt="back of card" pos="24">');
        $('.card').fadeIn();
        Shuffle();
        ScoreUpdate();
        addListeners();
    })

    addListeners();
    // $('.card').click(function(){
    //     justClicked=this;
    //     // console.log('Hi')
    //     // console.log($(this).attr('pos'));
    //     // console.log(Deck[$(this).attr('pos')].name);
    //     // console.log(Deck[$(this).attr('pos')].src);
    //     $(this).fadeOut(0);
    //     setTimeout(function(){
    //         $(justClicked).attr('src', Deck[$(justClicked).attr('pos')].src)
    //     }, 10)
    //     $(this).fadeIn(2000);
    //     double(this);
    // })
}); 

function addListeners(){
    $('.card').click(function(){
        justClicked=this;
        // console.log('Hi')
        // console.log($(this).attr('pos'));
        // console.log(Deck[$(this).attr('pos')].name);
        // console.log(Deck[$(this).attr('pos')].src);
        $(this).fadeOut(0);
        setTimeout(function(){
            $(justClicked).attr('src', Deck[$(justClicked).attr('pos')].src)
        }, 10)
        $(this).fadeIn(2000);
        double(this);
    })
}



let score=0;
let timer=20000;

let justClicked;
let firstclicked=false;

function Shuffle(){
    timer=200000;
    firstclicked=false;
    lastClicked=null;
    score=0;
    let randomIndex, temp;
    for(let index=0;index<Deck.length;index++){
        randomIndex=Math.floor(Math.random()*Deck.length);
        temp=Deck[index];
        Deck[index]=Deck[randomIndex];
        Deck[randomIndex]=temp;
    }
    $('.card').addClass('Back'); 
    $('.card').attr('src','Cardback2.jpg');
}

let Deck=[
    {
        name:"Dog",
        src:"Monsters/Base/dog.jpg",
        // cardState:0,
    },
    {
        name:"Fisherman",
        src:"Monsters/Base/fisherman.jpg",
        // cardState:0,
    },
    {
        name:"Fishguy",
        src:"Monsters/Base/fishGuy.jpg",
        // cardState:0,
    },
    {
        name:"Gross Neck Guy",
        src:"Monsters/Base/grossNeck.jpg",
        // cardState:0,
    },
    {
        name:"Guy with legs",
        src:"Monsters/Base/legs.jpg",
        // cardState:0,
    },
    {
        name:"MouthDungeon",
        src:"Monsters/Base/MouthDungeon.jpg",
        // cardState:0,
    },
    {
        name:"Phallic beast",
        src:"Monsters/Base/phalic.jpg",
        // cardState:0,
    },
    {
        name:"Squid",
        src:"Monsters/Base/squidGuy.jpg",
        // cardState:0,
    },
    {
        name:"Squid Head",
        src:"Monsters/Base/squidHead.jpg",
        // cardState:0,
    },
    {
        name:"threeEyes",
        src:"Monsters/Base/threeEyes.jpg",
        // cardState:0,
    },
    {
        name:"Underwater Statue",
        src:"Monsters/Base/underWater.jpg",
        // cardState:0,
    },
    {
        name:"Mouth on head",
        src:"Monsters/Base/upMouth.jpg",
        // cardState:0,
    },
    {
        name:"Cthulhu",
        src:"Monsters/cthulhu/Cthulhu.jpg",
        // cardState:0,
    },
    {
        name:"Dog",
        src:"Monsters/Base/dog.jpg",
        // cardState:0,
    },
    {
        name:"Fisherman",
        src:"Monsters/Base/fisherman.jpg",
        // cardState:0,
    },
    {
        name:"Fishguy",
        src:"Monsters/Base/fishGuy.jpg",
        // cardState:0,
    },
    {
        name:"Gross Neck Guy",
        src:"Monsters/Base/grossNeck.jpg",
        // cardState:0,
    },
    {
        name:"Guy with legs",
        src:"Monsters/Base/legs.jpg",
        // cardState:0,
    },
    {
        name:"MouthDungeon",
        src:"Monsters/Base/MouthDungeon.jpg",
        // cardState:0,
    },
    {
        name:"Phallic beast",
        src:"Monsters/Base/phalic.jpg",
        // cardState:0,
    },
    {
        name:"Squid",
        src:"Monsters/Base/squidGuy.jpg",
        // cardState:0,
    },
    {
        name:"Squid Head",
        src:"Monsters/Base/squidHead.jpg",
        // cardState:0,
    },
    {
        name:"threeEyes",
        src:"Monsters/Base/threeEyes.jpg",
        // cardState:0,
    },
    {
        name:"Underwater Statue",
        src:"Monsters/Base/underWater.jpg",
        // cardState:0,
    },
    {
        name:"Mouth on head",
        src:"Monsters/Base/upMouth.jpg",
        // cardState:0,
    }
]

function ScoreUpdate(){
    $('#score').text(score);
}

// function TimerUpdate(){
//     $('#timer').text(timer);
// }

let lastClicked=null;
let screwtimeout,asycncausesissues;

function Cthulhu(){
    setTimeout(function(){
        $('.card').fadeOut();
        $('#playSpace').html('<p id="LoseText">Enkindled and renewed, Chtulhu elicits insanity upon you</p><img src="Monsters/cthulhu/cthulhu2.jpg">');
    }, 2000)
}

function double(current){
    firstclicked=true;
    // You picked Cthulhu. Bummer.
    if(Deck[$(current).attr('pos')].name === "Cthulhu"){
        firstclicked=false;
        Cthulhu();
    }
    // console.log('test');
    if(lastClicked===null){
        // console.log('also a test');
        lastClicked=current;
        // Deck[$(current).attr('pos')].cardState=1;
    }else{
        if($(current).attr('pos')!==$(lastClicked).attr('pos')){
            // console.log($(current).attr('pos'));
            // console.log($(lastClicked).attr('pos'));
            if (Deck[$(current).attr('pos')].name === Deck[$(lastClicked).attr('pos')].name){
                // console.log("they are the same");
                score++;
                ScoreUpdate();
                timer++;
                // TimerUpdate();
                // $(current).fadeOut(1000);
                // $(lastClicked).fadeOut(1000);
                if(score>11){
                    $('.card').fadeOut();
                    $('#playSpace').html('<p id="WinText">And into the eternal slumber he shall remain.</p>');
                }
                setTimeout(function(){
                    $(screwtimeout).attr('src', 'Blank.png');
                    $(asycncausesissues).attr('src', 'Blank.png');
                    $(screwtimeout).removeClass('Back'); 
                    $(asycncausesissues).removeClass('Back');
                }, 1500)
                // $(current).fadeIn(1000);
                // $(lastClicked).fadeIn(1000);
                // console.log($(current).attr('src'));
                // $(this).fadeOut(0);
                // setTimeout(function(){
                // 
                // }, 10)
            }
            else{
                // $(current).fadeOut(1000);
                // $(lastClicked).fadeOut(1000);
                // timer--;
                // TimerUpdate();
                // if(timer===0){
                //     setTimeout(function(){
                //         $('.card').fadeOut();
                //         $('#playSpace').html('<p id="LoseText">Sorry, you have angered the great Cthulhu!</p><img src="Monsters/cthulhu/cthulhu2.jpg">');
                //     }, 2000)
                setTimeout(function(){
                    $(screwtimeout).attr('src', 'Cardback2.jpg');
                    $(asycncausesissues).attr('src', 'Cardback2.jpg');
                }, 1500)
                // $(current).fadeIn(1000);
                // $(lastClicked).fadeIn(1000);
            }
            screwtimeout=lastClicked;
            asycncausesissues=current;
            lastClicked=null;
        }
    }
}

setInterval(() => {
    if(firstclicked&&timer>-1)
        timer--;
    console.log(timer);
    if(timer===0){
        $('.card').addClass('Back'); 
        $('img').attr('src','Monsters/cthulhu/Cthulhu.jpg');
        setTimeout(() => {
            Cthulhu();
        }, 2000);
    }
    setTimeout(() => {
    }, 500);
}, 500); 