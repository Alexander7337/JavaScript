    function attachGradientEvents() {
        let box = document.getElementById("gradient");
        box.addEventListener("mousemove", calcPercent);
        box.addEventListener("mouseout", eracePercent);

        function calcPercent(event) {
            let percent = event.offsetX / (event.target.clientWidth - 1);
            percent = Math.trunc(percent * 100);
            document.getElementById("result").textContent = percent + "%";
        };

        function eracePercent() {
            document.getElementById("result").textContent = "";
        }
    };