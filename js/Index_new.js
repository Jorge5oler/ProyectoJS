function openMenu(){
    document.getElementById("mainmenu").style.width="480px";
    document.getElementById("mainmenu").style.display="flex";
    document.getElementById("mainmenu").style.height="1000px";
    document.getElementById("openmenu").style.display="none";
}

function closeNav(){
    document.getElementById("mainMenu").style.width="0px";
    document.getElementById("mainMenu").style.transition="0.9s all";
    window.location.reload();
}