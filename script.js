function goAway(){
    let myelement = document.querySelector("#removepopup");
    myelement.remove();
}

function changeTemp(select){
    let myelement = document.querySelectorAll("#changeNumber")
    if(select.value == "celsius"){
        for(let i = 0; i < myelement.length; i++){
            let temp = parseInt(myelement[i].innerText);
            temp = (temp - 32)*.5556;
            console.log(temp);
            myelement[i] = temp + "°";
            console.log(myelement[i]);
        }
    }
    if(select.value == "Fahrenheight"){
        for(let i = 0; i < myelement.length; i++){
            let temp = parseInt(myelement[i].innerText);
            temp = (temp*(9/5)) + 32;
            console.log(temp);
            myelement[i] = temp + "°";
            console.log(myelement[i]);
        }
    }
}