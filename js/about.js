const about_slider= ()=>
{
    const data=
        [
            {
                heading:"The most accurate and complete setting for professionals",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },

            {
                heading:"Work with anti- detector has never been so simple",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },

            {
                heading:"convenient work with cookies",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },

            {
                heading:"The most accurate and complete setting for professionals",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },


            {
                heading:"The most accurate and complete setting for professionals",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },


            {
                heading:"The most accurate and complete setting for professionals",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },


            {
                heading:"The most accurate and complete setting for professionals",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },


            {
                heading:"The most accurate and complete setting for professionals",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },


            {
                heading:"The most accurate and complete setting for professionals",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },

        ];


    const text_switch=(id)=>
    {
        $('#slider-head').fadeOut(() => {
            $('#slider-head').text(data[id].heading)
        }).fadeIn();

        $('#slider-text').fadeOut(() => {
            $('#slider-text').text(data[id].text)
        }).fadeIn();
    };
    let slide=0;

    document.querySelector("#slider").addEventListener("click",ev=>{
        const id= ev.target.id;

        if(id==="right")
        {
            if(slide===9)
            {
                slide=0;
            }
            else if(slide===8)
            {
                slide=0;
            }
            else
                slide=slide+1;
            text_switch(slide);


        }
        else if (id==="left")
        {if(slide===0)
        {
            slide=8;
        }
        else
            slide=slide-1;
            text_switch(slide);

        }

    });


    const Removeclass = () => {
        document.querySelector("#main").classList.remove("active_nav");
        document.querySelector("#about").classList.remove("active_nav");
        document.querySelector("#documentation").classList.remove("active_nav");
        document.querySelector("#faq").classList.remove("active_nav");
    };


    const Removeclass2 = () => {
        document.querySelector("#about-2").classList.remove("active_nav");
        document.querySelector("#documentation-2").classList.remove("active_nav");
        document.querySelector("#faq-2").classList.remove("active_nav");
    };

    document.querySelector("#navbar").addEventListener("click", ev => {
        let selected = ev.target.id;
        if (selected == "main" || selected == "about" || selected == "documentation" || selected == "faq") {
            Removeclass();
            Removeclass2();
            document.getElementById(selected).classList.add("active_nav");
            selected = selected + "-2";
            document.getElementById(selected).classList.add("active_nav");
        }

    });

    document.querySelector("#navbar-2").addEventListener("click", ev => {
        let selected = ev.target.id;
        console.log(selected);
        if (selected == "about-2" || selected == "documentation-2" || selected == "faq-2") {
            Removeclass();
            Removeclass2();
            document.getElementById(selected).classList.add("active_nav");
            selected = selected.replace("-2","");
            document.getElementById(selected).classList.add("active_nav");


        }

    });
};

window.onload=about_slider;