const currentDate = new Date();

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
      text = 'Happy Weekend!😁';
      break;
      
   default:
      text = 'Looking forward to the Weekend!🙂';
}

document.getElementById('time').innerHTML = currentHour + ':' + currentMinute;

document.getElementById('date').innerHTML= day + '&nbsp ' + month + ' ' + currentMonthDay + ', ' + currentYear;

document.getElementById('greeting2').innerHTML = text;
