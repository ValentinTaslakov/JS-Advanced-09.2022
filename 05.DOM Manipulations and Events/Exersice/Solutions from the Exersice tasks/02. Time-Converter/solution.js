function attachEventsListeners() {

    //console.log('TODO:...');
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');


    let buttons = document.querySelectorAll('#daysBtn, #hoursBtn, #minutesBtn, #secondsBtn');

    for (const button of buttons) {
        button.addEventListener('click', refactor);
    }


    function refactor(event) {

        switch (event.target.id) {
            case 'daysBtn': getTimeValue(Number(days.value)); break;
            case 'hoursBtn':
                days.value = Number(hours.value) / 24;
                getTimeValue(days.value); break;
            case 'minutesBtn':
                days.value = Number(minutes.value) / 1440;
                getTimeValue(days.value); break;
                case 'secondsBtn':
                days.value = Number(seconds.value) / 86400;
                getTimeValue(days.value); break;
       }
    }

    function getTimeValue(number) {
        hours.value = number * 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    }
}