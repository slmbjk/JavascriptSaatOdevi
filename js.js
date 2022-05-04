let hebele = document.querySelector("#myName")

let saat = document.querySelector("#clock")

let myName = prompt("Lütfen Adınızı Girin");


hebele.innerHTML = myName;

function formatTime(i) {
    if (i<10) {return '0'+i}
    return i;
}

function startTime() {
    let today = new Date();
    let hour = formatTime(today.getHours());
    let minute = formatTime(today.getMinutes());
    let second = formatTime(today.getSeconds());
    const days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let day = days[today.getDay()];

    saat.innerHTML = (hour+":"+minute+ ":"+second+"  "+day);
} setInterval(startTime,1000);

