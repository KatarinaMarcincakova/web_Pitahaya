var mySidebar = document.getElementById("mySidebar");

function menu_open() {
    if (mySidebar.style.display == 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

function menu_close() {
    mySidebar.style.display = 'none';
}