let timertext="Ph'nglui-mglw'nafh-Cthulhu-R'lyeh-wgah'nagl-fhtagn";
let timertxt2="In-his house-at-R'lyeh-dead-Cthulhu-waits-dreaming";
let output="";
for(let a=0;a<timertext.length;a++){
    output=`${output}<span class="timerhide${a} endhide">${timertext.charAt(a)}</span><span class="timershow${a} starthide">${timertxt2.charAt(a)}</span>`;
}
console.log(output);