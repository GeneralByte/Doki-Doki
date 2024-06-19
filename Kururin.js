
    //varible
    var audioList = [
new Audio("audio/gululu.mp3"), new Audio("audio/gururu.mp3"), new Audio("audio/yhdl.mp3"), new Audio("audio/zqq.mp3"), new Audio("audio/kuruto.mp3"), new Audio("audio/kuru1.mp3"), new Audio("audio/kuru2.mp3"), new Audio("audio/zqql.mp3"),
    ];

    for (const audio of audioList) {
        audio.preload = "auto";
    }

    var firstSquish = true;
    //end varible

    //counter button
    function counterClick() {
        var counterElement = document.getElementById("counter");
        let temporaryCounter = localStorage.getItem('count')
        temporaryCounter++
        counterElement.innerHTML = temporaryCounter
        localStorage.setItem('count', temporaryCounter);

        playKuru();
        animateHerta();
    }

    function playKuru() {
        var audio;

        if (firstSquish) {
            firstSquish = false;
            audio = audioList[0].cloneNode();
        } else {
            var random = Math.floor(Math.random() * 8) + 1;
            audio = audioList[random].cloneNode();
        }

        audio.play();

        audio.addEventListener("ended", function () {
            this.remove();
        });
    }

    function animateHerta() {
        var counter_button = document.getElementById("counter-button");
        var id = null;

        var random = Math.floor(Math.random() * 2) + 1;
        var elem = document.createElement("img");
        elem.src = `img/hertaa${random}.gif`;
        elem.style.position = "absolute";
        elem.style.right = "-510px";
        elem.style.top = counter_button.getClientRects()[0].bottom + scrollY - 430 + "px"
        elem.style.zIndex = "-1";
        document.body.appendChild(elem);

        var pos = -510;
        var limit = window.innerWidth + 510;
        clearInterval(id);
        id = setInterval(frame, 12);
        function frame() {
            if (pos >= limit) {
                clearInterval(id);
                elem.remove()
            } else {
                pos += 20;
                elem.style.right = pos + 'px';
            }
        }
    }
    //end counter button
