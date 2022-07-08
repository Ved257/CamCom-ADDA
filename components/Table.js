const color= document.getElementsByClassName('status');

for(let i=0;i<color.length;i++){
    if(color[i].innerHTML=='Completed'){
        color[i].style.backgroundColor='#29c40a';
    }
    else if(color[i].innerHTML=='Active'){
        color[i].style.backgroundColor='#05e2f2';
    }
    else if(color[i].innerHTML=='Failed'){
        color[i].style.backgroundColor='#dc3545';
    }
    else if(color[i].innerHTML=='Updated'){
        color[i].style.backgroundColor='rgb(255, 174, 0)';
    }
}