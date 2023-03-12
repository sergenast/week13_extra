function formatDate() {
    let date1 = new Date(2023, 2, 12, 17, 22, 00);
    let date2 = new Date();
    let diff = Number(date2) - Number(date1);

    if (diff < 1000) {
        console.log('Прямо сейчас');
    } else if (diff < 60000) {
        console.log(`${Math.round(diff/1000)} секунд назад`);
    } else if (diff < 3600000) {
        console.log(`${Math.round(diff/1000/60)} минут назад`);
    } else {
        console.log(date1.getDate() + '.' + (date1.getMonth() + 1) + '.' + date1.getFullYear() + " " + date1.getHours() + ":" + date1.getMinutes());
    }
}

document.getElementById('button').addEventListener('click', formatDate);