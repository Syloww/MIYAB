let o = 0;

function dark() {
    const body = document.querySelector("body");

    if (o === 1) {
        console.log("nuit");
        document.querySelector("#dark").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
        body.style.backgroundColor = "#0f0f0f";
        body.style.setProperty('--color', 'rgba(44, 44, 44, 0.3)');
        o = o - 1;
    } else {
        console.log("jour");
        document.querySelector("#dark").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>';
        body.style.backgroundColor = "#444444";
        body.style.setProperty('--color', 'rgba(44, 44, 44, 0.3)');
        o = o + 1;
    }
}