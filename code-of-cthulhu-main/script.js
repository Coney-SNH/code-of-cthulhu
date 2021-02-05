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
let timer=1200;
let letterstotal=50;
let letter=letterstotal;

let justClicked;
let firstclicked=false;
let interval=Math.floor(timer/letter);

function Shuffle(){
    letter=letterstotal;
    timer=1200;
    interval=Math.floor(timer/letterstotal)
    $('.starthide').hide();
    $('.endhide').show();
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
    for(let index=0;index<Deck.length;index++){
        Deck[index].cardState=0;
    }
    $('.card').addClass('Back'); 
    $('.card').attr('src','Cardback2.jpg');
}

let Deck=[
    {
        name:"Dog",
        src:"Monsters/Base/dog.jpg",
        cardState:0,
    },
    {
        name:"Fisherman",
        src:"Monsters/Base/fisherman.jpg",
        cardState:0,
    },
    {
        name:"Fishguy",
        src:"Monsters/Base/fishGuy.jpg",
        cardState:0,
    },
    {
        name:"Gross Neck Guy",
        src:"Monsters/Base/grossNeck.jpg",
        cardState:0,
    },
    {
        name:"Guy with legs",
        src:"Monsters/Base/legs.jpg",
        cardState:0,
    },
    {
        name:"MouthDungeon",
        src:"Monsters/Base/MouthDungeon.jpg",
        cardState:0,
    },
    {
        name:"Phallic beast",
        src:"Monsters/Base/phalic.jpg",
        cardState:0,
    },
    {
        name:"Mouth and Tentacle",
        src:"Monsters/Base/tentaMouthTacle.jpg",
        cardState:0,
    },
    {
        name:"Squid Head",
        src:"Monsters/Base/squidHead.jpg",
        cardState:0,
    },
    {
        name:"threeEyes",
        src:"Monsters/Base/threeEyes.jpg",
        cardState:0,
    },
    {
        name:"Underwater Statue",
        src:"Monsters/Base/underWater.jpg",
        cardState:0,
    },
    {
        name:"Mouth on head",
        src:"Monsters/Base/upMouth.jpg",
        cardState:0,
    },
    {
        name:"Cthulhu",
        src:"Monsters/cthulhu/Cthulhu.jpg",
        cardState:0,
    },
    {
        name:"Dog",
        src:"Monsters/Base/dog.jpg",
        cardState:0,
    },
    {
        name:"Fisherman",
        src:"Monsters/Base/fisherman.jpg",
        cardState:0,
    },
    {
        name:"Fishguy",
        src:"Monsters/Base/fishGuy.jpg",
        cardState:0,
    },
    {
        name:"Gross Neck Guy",
        src:"Monsters/Base/grossNeck.jpg",
        cardState:0,
    },
    {
        name:"Guy with legs",
        src:"Monsters/Base/legs.jpg",
        cardState:0,
    },
    {
        name:"MouthDungeon",
        src:"Monsters/Base/MouthDungeon.jpg",
        cardState:0,
    },
    {
        name:"Phallic beast",
        src:"Monsters/Base/phalic.jpg",
        cardState:0,
    },
    {
        name:"Mouth and Tentacle",
        src:"Monsters/Base/tentaMouthTacle.jpg",
        cardState:0,
    },
    {
        name:"Squid Head",
        src:"Monsters/Base/squidHead.jpg",
        cardState:0,
    },
    {
        name:"threeEyes",
        src:"Monsters/Base/threeEyes.jpg",
        cardState:0,
    },
    {
        name:"Underwater Statue",
        src:"Monsters/Base/underWater.jpg",
        cardState:0,
    },
    {
        name:"Mouth on head",
        src:"Monsters/Base/upMouth.jpg",
        cardState:0,
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
        $('#playSpace').html('<p id="LoseText">Chtulhu awakens, eliciting insanity within you</p><img src="Monsters/cthulhu/cthulhu2.jpg">');
    }, 2000)
    // Chtulhu awakens, eliciting insanity within you
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
        // #A7231Asole.log('also a test');
        lastClicked=current;
        // Deck[$(current).attr('pos')].cardState=1;
    }else{
        if($(current).attr('pos')!==$(lastClicked).attr('pos')){
            // console.log($(current).attr('pos'));
            // console.log($(lastClicked).attr('pos'));
            if (Deck[$(current).attr('pos')].name === Deck[$(lastClicked).attr('pos')].name){
                // console.log("they are the same");
                if(Deck[$(current).attr('pos')].cardState===0){
                    Deck[$(current).attr('pos')].cardState=1;
                    Deck[$(lastClicked).attr('pos')].cardState=1;
                    score++;
                    ScoreUpdate();
                    timer+=30;
                }
                // TimerUpdate();
                // $(current).fadeOut(1000);
                // $(lastClicked).fadeOut(1000);
                if(score>11){
                    firstclicked=false;
                    $('.card').fadeOut();
                    $('#playSpace').html('<p id="WinText">Having found and removed the legions of Cthulhu. The world can rest easy for another evening. Ctlhulhu remains dreaming.</p>');
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
            else if(Deck[$(current).attr('pos')].cardState===0){
                // $(current).fadeOut(1000);
                // $(lastClicked).fadeOut(1000);
                // timer--;
                // TimerUpdate();
                // if(timer===0){
                //     setTimeout(function(){
                //         $('.card').fadeOut();
                //         $('#playSpace').html('<p id="LoseText">Sorry, you have angered the great Cthulhu!</p><img src="Monsters/cthulhu/cthulhu2.jpg">');
                //     }, 2000)
                timer-=20;
                setTimeout(function(){
                    $(screwtimeout).attr('src', 'Cardback2.jpg');
                    $(asycncausesissues).attr('src', 'Cardback2.jpg');
                }, 1500)
                // $(current).fadeIn(1000);
                // $(lastClicked).fadeIn(1000);
            }
            else{
                setTimeout(function(){
                    $(screwtimeout).attr('src', 'Blank.png');
                    $(asycncausesissues).attr('src', 'Blank.png');
                }, 1500)
            }
            screwtimeout=lastClicked;
            asycncausesissues=current;
            lastClicked=null;
        }
    }
}

function timerUpdate(){
    // $('#timer').text(timer);
    for(;letter*interval>timer;letter--){
        let element=".timershow"+(letterstotal-letter);
        let elementhide=".timerhide"+(letterstotal-letter);
        $(elementhide).fadeOut(1000);
        $(element).fadeIn(1000);

        //additional things to impliment. Time the fade in of each letter so it almost feels like they fade in one after another
    }
    //impliment a way to have letters fade out if timer is higher again, maybe with some buffer room, like two letters or so
    //add in another string to the timer to see if you could get it more accurate?
    //Also, formulas for calculating interval currently only works really well with divisors of the timer. There may be a way to have it work with a better range of nums using some sort of rounding?
}

setInterval(() => {
    if(firstclicked&&timer>-1)
        timer--;
        timerUpdate();
    console.log(timer);
    if(timer<0&&firstclicked){
        firstclicked=false;
        $('.card').addClass('Back'); 
        $('img').attr('src','Monsters/cthulhu/Cthulhu.jpg');
        setTimeout(() => {
            Cthulhu();
        }, 2000);
    }
    setTimeout(() => {
    }, 500);
}, 500); 