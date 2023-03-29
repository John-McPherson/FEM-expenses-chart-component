const myRequest = new Request('./assets/json/data.json');
let appData = {};
const d = new Date();
let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
let currentDay = days[d.getDay()];

fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
        appData = data;
        populateCards(appData)
    })
    .catch(console.error);

function populateCards(data) {
    let html = '';
    data.map((bar) => {
        if (bar) {
            let {
                day,
                amount
            } = bar;

            html += `<div class="day">
                    <div class="bar">
                        <div class="bar-filled ${(currentDay === day ? "current-day" : "")}" style="height:${amount * 1.33}%;" >
                        <p>$${amount}</p>
                        </div>
                    </div>
                    <p>${day}</p>
                </div>`
        }
    })
    document.getElementById('graph').innerHTML = html

}