function attachEventsListeners() {
    let btns = document.querySelectorAll("input[type=button]");
    for (let btn of btns) {
        btn.addEventListener("click", timeConverter);
        console.log(btn);
        
    };

    function timeConverter() {
        let id = this.attributes[0].nodeValue;

        if (id == "daysBtn") {
            convertFromDays();
        } else if (id == "hoursBtn") {
            convertFromHours();
        } else if (id == "minutesBtn") {
            convertFromMinutes();
        } else {
            convertFromSeconds();
        }

        function convertFromDays() {
            let days = document.getElementById("days").value;
            let hours = Number(days) * 24;
            document.getElementById("hours").value = hours;

            let minutes = hours * 60;
            document.getElementById("minutes").value = minutes;

            let seconds = minutes * 60;
            document.getElementById("seconds").value = seconds;
        };

        function convertFromHours() {
            let hours = document.getElementById("hours").value;
            let minutes = Number(hours) * 60;
            document.getElementById("minutes").value = minutes;

            let seconds = minutes * 60;
            document.getElementById("seconds").value = seconds;

            let days = Number(hours) / 24;
            document.getElementById("days").value = days;
        };

        function convertFromMinutes() {
            let minutes = document.getElementById("minutes").value;
            let seconds = Number(minutes) * 60;
            document.getElementById("seconds").value = seconds;

            let hours = Number(minutes) / 60;
            document.getElementById("hours").value = hours;

            let days = (Number(minutes) / 60) / 24;
            document.getElementById("days").value = days;
        };

        function convertFromSeconds() {
            let seconds = document.getElementById("seconds").value;
            let minutes = Number(seconds) / 60;
            document.getElementById("minutes").value = minutes;

            let hours = (Number(seconds) / 60) / 60;
            document.getElementById("hours").value = hours;

            let days = ((Number(seconds) / 60) / 60) / 24;
            document.getElementById("days").value = days;
        };
    };
}