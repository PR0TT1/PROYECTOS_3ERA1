console.log("Hamburger Icon  cargando...");
(function () {
    const MAIN_OBJ= {
        init: function () {
            this.eventHandlers();

        },
        eventHandlers: function() {
            document.querySelector(".hamburger-icon").addEventListener("click", function(){
                document.querySelector(".menu-container").classList.toggle("menu-open");
            });
        }
    };
    MAIN_OBJ.init();

})