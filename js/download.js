
function unhover(element) {
    element.setAttribute('src', 'cypher/Licenses/btn%20sel-2.svg');
}

window.onload= function () {
    console.log("hi");
    document.querySelector("#button-div").addEventListener("click",ev => {
    const selected= ev.target.id;
    console.log(selected);
    if(selected==="create")
    {
        document.querySelector("#create").classList.add("active-button");
        document.querySelector("#refill").classList.remove("active-button");
        document.querySelector("#reenter").style.display="block";
        document.querySelector("#reenter2").style.display="block";
        document.querySelector(".login-text").textContent="Sign up, pay and download browser";
    }

    else if(selected==="refill")
    {
        document.querySelector("#refill").classList.add("active-button");
        document.querySelector("#create").classList.remove("active-button");
        document.querySelector("#reenter").style.display="none";
        document.querySelector("#reenter2").style.display="none";
        document.querySelector(".login-text").textContent="Login and pay";
    }
    });

    $('.select').click(function() {
        $('.signup').show();
        $(".cover").fadeTo(500, 0.8);

        return false;
    });


    $('.cover').click(function() {
        $('.signup').hide();
        $(".cover").fadeOut(500);


        return false;
    });
};