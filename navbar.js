function f_scroll(){
    var navtoggle = document.getElementById("navtoggle");
    var toggle = document.getElementById("toggle");

    if(navtoggle.style.left == '0%')
    {
        navtoggle.style.left = '-100%';

        if(toggle.classList.contains("close"))
        {
            toggle.classList.remove("close");
        }
        else{
            toggle.classList.add("close");
        }
    }
}

function f_animate(){

    var navtoggle = document.getElementById("navtoggle");
    var toggle = document.getElementById("toggle");

    if(toggle.classList.contains("close"))
    {
        toggle.classList.remove("close");
        navtoggle.style.left = '-100%';
    }
    else{
        toggle.classList.add("close");
        navtoggle.style.left = '0%';
    }
}   