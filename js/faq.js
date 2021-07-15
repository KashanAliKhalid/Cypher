window.onload= function () {
    document.querySelector("#questions").addEventListener("click",evt => {

        const check=evt.target.id;
        if(check.includes("plus"))
        {

            const range1=check.length;
            const range2= check.length-2;
            const number= check.slice(range2,range1);
            const answerid= "#answer"+number;
             let src=document.getElementById(check).src;
             src=src+"";
             if(src.includes("plus"))
             {
                 document.getElementById(check).src="cypher/FAQ/minus%20btn.svg";
             }
             else
             {
                 document.getElementById(check).src="cypher/FAQ/plus%20btn.svg";
             }


            $(answerid).slideToggle();
        }

        });

    document.querySelector("#category").addEventListener("click",(evt)=>
    {
        const type= evt.target.id;
        if(type=="general")
        {
            document.getElementById("main-img").src="cypher/FAQ/general.svg";
            document.getElementById("main-head").textContent="General";
            document.getElementById("q-1").textContent="What is Cypher?";
            document.getElementById("q-2").textContent="How can i use the geolocation?";
            document.getElementById("q-3").textContent="How do i know if i have the latest version?";
            document.getElementById("q-4").textContent="How do i know if i have the latest version?";
            document.getElementById("question4").style.display="block";
            document.getElementById("answer-1").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
                "                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n" +
                "                        nisi ut aliquip ex ea commodo consequat";
            document.getElementById("answer-2").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
                "                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n" +
                "                        nisi ut aliquip ex ea commodo consequat";
            document.getElementById("answer-3").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
                "                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n" +
                "                        nisi ut aliquip ex ea commodo consequat";
            document.getElementById("answer-4").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
                "                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n" +
                "                        nisi ut aliquip ex ea commodo consequat";



        }

        else if(type=="problem")
        {
            document.getElementById("main-img").src="cypher/FAQ/problem.svg";
            document.getElementById("main-head").textContent="Problem Solving";
            document.getElementById("question4").style.display="none";

            document.getElementById("q-1").textContent="What is Cypher?";
            document.getElementById("q-2").textContent="How can i use the geolocation?";
            document.getElementById("q-3").textContent="How do i know if i have the latest version?";
            document.getElementById("answer-1").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
                "                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n" +
                "                        nisi ut aliquip ex ea commodo consequat";
            document.getElementById("answer-2").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
                "                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n" +
                "                        nisi ut aliquip ex ea commodo consequat";
            document.getElementById("answer-3").textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
                "                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n" +
                "                        nisi ut aliquip ex ea commodo consequat";

        }
    })
};