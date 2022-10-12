function lockedProfile() {
    // console.log('TODO...')

    let radios = Array.from(document.querySelectorAll('input[type=radio]'));
    let buttons = Array.from(document.getElementsByTagName('button'));



    radios.forEach(r => r.addEventListener('input', lockOrUnlock));
    buttons.forEach(b => b.addEventListener('click', showMore));


    function lockOrUnlock(event) {

        if (event.target.value === "lock") {
            event.target.parentElement.getElementsByTagName('button')[0].disabled = true;

        } else {
            event.target.parentElement.getElementsByTagName('button')[0].disabled = false;
        }
    }

    function showMore(event) {
        let hidenData = event.target.parentElement.getElementsByTagName('div')[0];
        let radioLock = event.target.parentElement.querySelectorAll('input[type=radio]')[0];

        if (radioLock.checked) {
            return;
        }
        if (event.target.textContent === 'Show more') {
            hidenData.style.display = 'inline';
            event.target.textContent = 'Hide it';
        } else {
            hidenData.style.display = 'none';
            event.target.textContent = 'Show more';
        }
    }
}