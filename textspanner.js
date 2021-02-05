let timertext="Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn";
let output="";
for(let a=0;a<timertext.length;a++){
    output=`${output}<span class="timer${a} hiddentext">${timertext.charAt(a)}</span>`;
}
console.log(output);