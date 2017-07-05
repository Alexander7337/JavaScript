function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let timer = null;
    let time = 0;

    //Events
    startBtn.on('click', function() {
        timer = setInterval(tick, 1000);
    });

    stopBtn.on('click', function() {
        clearInterval(timer);
    });

    function tick() {
        time++;

        if (time == 60) {
            let currMin = +$('#minutes').text() + 1;

            if (currMin == 60) {
                let currH = +$('hours').text() + 1;

                if (currH == 24) {
                    currH = 0;
                };
                currH = '0' + currH;
                hours.text(currH.slice(-2));
                currMin = 0;
            };

            currMin = '0' + currMin;
            minutes.text(currMin.slice(-2));
            time = 0;
        };

        seconds.text((('0' + time).slice(-2)));
    };
}
