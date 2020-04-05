        // Dropdown menu created with assistance from following links;
        // https://stackoverflow.com/questions/641857/javascript-window-resize-event
        // https://www.w3schools.com/howto/howto_js_dropdown.asp

        let dropbtn = document.getElementById("dropbtn");
        let dropmenu = [document.getElementsByTagName("li")[0], document.getElementsByTagName("li")[1], document.getElementsByTagName("li")[2], document.getElementsByTagName("li")[3]]

        function dropFunction() {

            for (let i = 0; i < dropmenu.length; i++) {
                dropmenu[i].style.display = "flex";
            }
        }
       
        window.onclick = function(event) {

            if (!event.target.matches("#dropbtn") && (!event.target.matches("nav ul li")) && (!event.target.matches("nav ul li a")) && window.innerWidth < 640) {
                for (let i = 0; i < dropmenu.length; i++) {
                dropmenu[i].style.display = "none";
                }
            }
        }

        window.addEventListener("resize", function(event) {
            if (window.innerWidth >= 640) {
                for (let i = 0; i < dropmenu.length; i++) {
                dropmenu[i].style.display = "flex";
                }
            }
            else if (window.innerWidth < 640) {
                for (let i = 0; i < dropmenu.length; i++) {
                dropmenu[i].style.display = "none";
                }
            }
        })