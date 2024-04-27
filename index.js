
    function formatTime(number) {
      return number < 10 ? '0' + number : number;
    }

    function updateCurrentTime() {
      const now = new Date();
      const hours = formatTime(now.getHours());
      const minutes = formatTime(now.getMinutes());
      const seconds = formatTime(now.getSeconds());
      document.getElementById('currentTime').textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateCurrentTime, 1000);

    const alarmsArray = [];

    document.getElementById('setAlarm').addEventListener('click', function() {
      const alarmTime = document.getElementById('alarmTime').value;
      alarmsArray.push(alarmTime);

      const alarmSetDiv = document.querySelector('.alarm-set');
      alarmSetDiv.textContent = 'Alarm set for: ' + alarmTime;

      const alarmsList = document.getElementById('alarms');
      alarmsList.innerHTML = '';
      alarmsArray.forEach(function(alarm) {
        const listItem = document.createElement('li');
        listItem.textContent = alarm;
        alarmsList.appendChild(listItem);
      });

      // Convert alarm time to milliseconds
      const [alarmHours, alarmMinutes] = alarmTime.split(':');
      const now = new Date();
      const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmHours, alarmMinutes);
      const alarmTimestamp = alarmDate.getTime();

      // Set up the alarm
      const currentTime = now.getTime();
      const delay = alarmTimestamp - currentTime;
      if (delay > 0) {
        setTimeout(() => {
          alert('Alarm ringing!');
        }, delay);
      }
    });