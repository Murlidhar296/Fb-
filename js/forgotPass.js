    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    const week_day = document.getElementById('weekday');
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    const dd = new Date();
    day.textContent = dd.getDate();
    console.log(day.textContent = dd.getDate());
    month.textContent =  dd.getMonth() + 1;
    year.textContent = dd.getFullYear();
    week_day.textContent = days[dd.getDay()];

    setInterval(() => {
        const d = new Date();
        time.innerHTML = d.toLocaleTimeString();
    },1000);



