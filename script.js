document.getElementById('open-widget').addEventListener('click', function() {
    document.getElementById('support-widget').style.display = 'block';
    this.querySelector('img').style.display = 'none';
});

document.getElementById('close-widget').addEventListener('click', function() {
    document.getElementById('support-widget').style.display = 'none';
    document.getElementById('open-widget').querySelector('img').style.display = 'block';
});



function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let [hours, minutes, seconds] = countdownElement.textContent.split(':').map(Number);
    let timeInSeconds = hours * 3600 + minutes * 60 + seconds;

    const interval = setInterval(() => {
        timeInSeconds--;

        const h = Math.floor(timeInSeconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((timeInSeconds % 3600) / 60).toString().padStart(2, '0');
        const s = (timeInSeconds % 60).toString().padStart(2, '0');

        countdownElement.textContent = `${h}:${m}:${s}`;

        if (timeInSeconds <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "00:00:00"; 
        }
    }, 1000);  
}

startCountdown();



mindbox = window.mindbox || function () { mindbox.queue.push(arguments); };
mindbox.queue = mindbox.queue || [];
mindbox('create', {
    endpointId: "lerna-b2c.WebsiteUZ"
});


window.webDevProject = true;



(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-MZTPRM5X');




document.getElementById('scrollButton').addEventListener('click', function () {
    document.getElementById('formZayafka').scrollIntoView({
        behavior: 'smooth'
    });
});