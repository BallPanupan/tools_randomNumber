let result;

let ftext = ['AA','BB','CC','DD','EE','FF','GG','HH',
'JJ','KK','LL','MM','NN','PP','QQ','RR','SS','TT','UU',
'VV','WW','XX','YY','ZZ']

function setting() {
    result = document.getElementById('result'); 
    console.log(result.value);
}

setting();



function randomNum() {
    let randomNumber = Math.floor(Math.random() * 99999999) + 1;

    if(randomNumber.toString().length != 8 ){
        randomNum()
    } else {
        updateResult(randomNumber);
    }

    return randomNumber;
}

function fandomFtext() {
    let randomF = Math.floor(Math.random() * 24);
    if(randomF > 24){
        fandomFtext()
    } else {
        return randomF;
    }
}


function updateResult(number) {
    //24
    result.value = ftext[fandomFtext()] + number;
    console.log(ftext[fandomFtext()] + number);
    
}



function clipboard() {
    result.select();
    navigator.clipboard.writeText(result.value);
}