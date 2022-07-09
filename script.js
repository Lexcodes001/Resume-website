const currentDate = new Date();

if (currentDate.getHours() > 11) {
      document.getElementById('meridian').innerHTML = 'PM';
} else {
      document.getElementById('meridian').innerHTML = 'AM';
}

if (currentDate.getHours() < 10) {
   text1 = 'Good Morning!';
} else if (currentDate.getHours() < 18) {
   text1 = 'Good Day!';
} else {
   text1 = 'Good Evening!';
}

const HH = currentDate.getHours() > 12 ? (currentDate.getHours() - 12) : currentDate.getHours();

const MM = currentDate.getMinutes();

const MD = currentDate.getDate();

const currentHour = HH < 10 ? ('0' + HH) : HH;

const currentMinute = MM < 10 ? ('0' + MM) : MM;

const currentMonthDay = MD < 10 ? ('0' + MD) : MD;

const currentDay = currentDate.getDay();

const currentMonth = currentDate.getMonth();

const currentYear = currentDate.getFullYear();

switch (currentDay) {
   case 0:
      day = 'SUNDAY';
      break;
   
   case 1:
      day = 'MONDAY';
      break;
      
   case 2:
      day = 'TUESDAY';
      break;
      
   case 3:
      day = 'WEDNESDAY';
      break;
      
   case 4:
      day = 'THURSDAY';
      break;
      
   case 5:
      day = 'FRIDAY';
      break;
      
   case 6:
      day = 'SATURDAY';
}

switch (currentMonth) {
   case 0:
      month = 'Jan';
      break;
   
   case 1:
      month = 'Feb';
      break;
      
   case 2:
      month = 'Mar';
      break;
      
   case 3:
      month = 'Apr';
      break;
      
   case 4:
      month = 'May';
      break;
      
   case 5:
      month = 'June';
      break;
      
   case 6:
      month = 'July';
      break;
      
   case 7:
      month = 'Aug';
      break;
      
   case 8:
      month = 'Sept';
      break;
      
   case 9:
      month = 'Oct';
      break;
      
   case 10:
      month = 'Nov';
      break;
      
   case 11:
      month = 'Dec';
}

switch (currentDay) {
   case 0:
   case 6:
      text2 = 'ENJOY the Weekend!';
      break;
      
   default:
      text2 = 'Looking forward to the Weekend!';
}

document.getElementById('time').innerHTML = currentHour + ':' + currentMinute;

document.getElementById('date').innerHTML= day + '&nbsp ' + month + ' ' + currentMonthDay + ', ' + currentYear;

document.getElementById('greetingOne').innerHTML = text1 + '<br>' + text2;
