window.onload = function ()
{
    document.getElementById('ddcontent').style.visibility="hidden";
}


function f_dropdownEnter(x){
    var ddc = document.getElementById("ddcontent");
    var dd = document.getElementById("dd");
    var ddtxt = document.getElementById("ddtxt");

    if(ddc.style.visibility != "hidden"){

        ddc.style.visibility = "hidden";
        ddc.style.opacity = "0";

        dd.style.backgroundColor = "";
        dd.style.borderRadius = "";

        ddtxt.style.color = "";

        
        if(document.documentElement.clientWidth < 968 || x==0){
            var css = '.dropdown:hover{border-radius: 10px; background-color:var(--orange);}.dropdown:hover a{cursor: pointer;color:white;} .dropdowncontent{background:var(--orange);}'; 
        }
        else{
            var css = '.dropdown:hover{border-radius: 10px; background-color: white ;}.dropdown:hover a{cursor: pointer;color:var(--blue);}'; 
        }

        var style = document.createElement('style');

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        if(document.getElementsByTagName('style')[0]==null)
        {
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        else{
            
        }
        
    }
    else{
        ddc.style.visibility = "visible";
        ddc.style.opacity = "1";
        ddc.style.display = "flex";
        ddc.style.flexDirection = "column";
        ddc.style.justifyContent = "space-evenly";
        ddc.style.alignItems = "flex-start";


        if(document.documentElement.clientWidth < 968 || x==0){ 
            ddc.style.backgroundColor = "#FF7C1C";
            ddc.getElementsByTagName("a")[0].style.color = "white";
            ddc.getElementsByTagName("a")[1].style.color = "white";
            dd.style.backgroundColor = "#FF7C1C";
            ddtxt.style.color = "white"; 
        }
        else if(document.documentElement.clientWidth < 1360 && window.matchMedia("(max-aspect-ratio: 7/4)"))
        {
            ddc.style.backgroundColor = "white";
            ddc.getElementsByTagName("a")[0].style.color = "#1D0067";
            ddc.getElementsByTagName("a")[1].style.color = "#1D0067";
            dd.style.backgroundColor = "#FF7C1C";
            ddtxt.style.color = "white";
        }
        else
        {
            dd.style.backgroundColor = "white";
            ddtxt.style.color = "#1D0067";
        }
        dd.style.borderRadius = "10px";
     }

}