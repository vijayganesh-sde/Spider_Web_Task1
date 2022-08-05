document.addEventListener('keypress', function(event) {
    if(event.keyCode == 49) {
        generator_1();
    }
    else if(event.keyCode == 50) {
        generator_2();
    }
});
let arr=['웃','♀','⚲','⚬']
let d1={1:['웃','♀','⚲','⚬'],2:['웃','♀','⚲','⚬'],3:['웃','♀','⚲','⚬'],4:['웃','♀','⚲','⚬'],5:['웃','♀','⚲','⚬']}
let d2={1:['웃','♀','⚲','⚬'],2:['웃','♀','⚲','⚬'],3:['웃','♀','⚲','⚬'],4:['웃','♀','⚲','⚬'],5:['웃','♀','⚲','⚬']}   
function generator_1(){
    let rand_int=Math.floor(Math.random() * 5)+1;
    if (rand_int==1){
        if (d1[1].length>0){
            document.getElementById('p1_1').innerText=d1[1][d1[1].length-1]
            d1[1].pop()
        }
    }
    if (rand_int==2){
        if (d1[2].length>0){
            document.getElementById('p1_2').innerText=d1[2][d1[2].length-1]
            d1[2].pop()
        }
    }
    if (rand_int==3){
        if (d1[3].length>0){
            document.getElementById('p1_3').innerText=d1[3][d1[3].length-1]
            d1[3].pop()
        }
    }
    if (rand_int==4){
        if (d1[4].length>0){
            document.getElementById('p1_4').innerText=d1[4][d1[4].length-1]
            d1[4].pop()
        }
    }
    if (rand_int==5){
        if (d1[5].length>0){
            document.getElementById('p1_5').innerText=d1[5][d1[5].length-1]
            d1[5].pop()
        }
    }
    document.getElementById('p_turn').innerText="Player 2's Turn"
    if (d1[1].length==0 && d1[2].length==0 && d1[3].length==0 && d1[4].length==0 && d1[5].length==0){
        alert("Player 1 won🎉")
        document.getElementById('p_turn').innerText="Game Over"
    }
}
function generator_2(){
    let rand_int=Math.floor(Math.random() * 5)+1;
    if (rand_int==1){
        if (d2[1].length>0){
            document.getElementById('p2_1').innerText=d2[1][d2[1].length-1]
            d2[1].pop()
        }
    }
    if (rand_int==2){
        if (d2[2].length>0){
            document.getElementById('p2_2').innerText=d2[2][d2[2].length-1]
            d2[2].pop()
        }
    }
    if (rand_int==3){
        if (d2[3].length>0){
            document.getElementById('p2_3').innerText=d2[3][d2[3].length-1]
            d2[3].pop()
        }
    }
    if (rand_int==4){
        if (d2[4].length>0){
            document.getElementById('p2_4').innerText=d2[4][d2[4].length-1]
            d2[4].pop()
        }
    }
    if (rand_int==5){
        if (d2[5].length>0){
            document.getElementById('p2_5').innerText=d2[5][d2[5].length-1]
            d2[5].pop()
        }
    }
    document.getElementById('p_turn').innerText="Player 1's Turn"
    if (d2[1].length==0 && d2[2].length==0 && d2[3].length==0 && d2[4].length==0 && d2[5].length==0){
        alert("Player 2 won🎉")
        document.getElementById('p_turn').innerText="Game Over"
    }
}