var isScrolling = 0;
var timeoutId;

const tindon = document.querySelector('#tindon');
window.addEventListener("scroll", function () {
    tindon.style.display = "block";

    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
        tindon.style.display = "none";
    }, 500);
});

const btn = document.querySelectorAll('#btn');

btn.forEach(ele => {
    ele.addEventListener('mouseover', () => {
        ele.classList.add('on');
    })
    ele.addEventListener('mouseout', () => {
        ele.classList.remove('on');
    })
});




const tbody = document.querySelector('#tbody');
const venueEvent = document.querySelector('#event');

fetch("https://tindon.microcms.io/api/v1/event", {
    headers: {
        "X-MICROCMS-API-KEY": "IjdEpiSfHh8bBqHW8mvDSSghmo9pFdKIUgAu"
    }

})
    .then(res => res.json())
    .then(json => {
        for (i = 0; i < json.contents.length; i++) {
            const tr = document.createElement('tr');
            const tr2 = document.createElement('tr');

            const th = document.createElement('th');
            const tdMiddle = document.createElement('td');

            th.textContent = json.contents[i].teamName;
            tdMiddle.textContent = json.contents[i].middle;


            tbody.append(tr);
            tr.append(tdMiddle);



            // venueEvent.append(tr2);
            // tr2.append(th);
        }
    });
