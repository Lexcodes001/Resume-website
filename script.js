var currentDate = new Date();

const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

document.getElementById('time').innerHTML = currentDate.getHours() + ':' + currentDate.getMinutes();



document.getElementById('date').innerHTML= days[currentDate.getDay()] + ' ' + months[currentDate.getUTCMonth()] + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear();

