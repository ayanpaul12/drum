for (var i = 0; i <= document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        exp = this.innerHTML;
        switch (exp) {
            case "w":
                var m = new Audio("sounds/tom-1.mp3");
                m.play();
                break;
            case "a":
                var m = new Audio("sounds/tom-2.mp3");
                m.play();
                break;
            case "s":
                var m = new Audio("sounds/tom-3.mp3");
                m.play();
            case "d":
                var m = new Audio("sounds/tom-4.mp3");
                m.play();
                break;
            case "j":
                var m = new Audio("sounds/crash.mp3");
                m.play();
                break;
            case "k":
                var m = new Audio("sounds/kick-bass.mp3");
                m.play();
                break;
            case "l":
                var m = new Audio("sounds/snare.mp3");
                m.play();
                break;
            default:
                

        }
    });
}