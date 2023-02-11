const end_date = new Date(new Date('2023-10-20T20:09:06.128Z').toISOString()).getTime()
const today = new Date(new Date().toISOString()).getTime()
const card_container = document.getElementById("cardContainerView");
if(today < end_date){
    card_container.style.display = 'block';
    setInterval(() => {
        const date = new Date();
        const day = document.getElementById('DayView');
        const hour = document.getElementById('hourView');
        const minute = document.getElementById('minuteView');
        const second = document.getElementById('sescondView');
        day.innerText =  date.getDate();
        hour.innerText = date.getHours();
        minute.innerText = date.getMinutes();
        second.innerText = date.getSeconds();
    })
}else{
    const timer_view = document.getElementById("timeExpireView");
    timer_view.style.display = 'block'
}

timer_view.innerText = "10"
// setTimeout(() => {
//     card_container.style.display = 'none';
// },9000)