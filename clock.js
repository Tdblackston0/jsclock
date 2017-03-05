function setDate() {

    //time request
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();



    // setting the clock face to move properly and face the direction.
    const secondsDegrees = ((seconds / 60) * 360 + 90);
    const minutesDegrees = ((minutes / 60) * 360 + 90);
    const hoursDegrees = ((hours / 12) * 360 + 90);

    //Making the hand moves
    const secondHand = document.querySelector('.sec-hand')
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minuteHand = document.querySelector('.min-hand')
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hourHand = document.querySelector('.hour-hand')
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(secondsDegrees);
    document.getElementById('dclock').innerHTML = hours + ':' + minutes +':' + seconds;
    function checkTime(i) {

      if (i < 10) {
        i = '0' + i
      };
    }

  }
  setInterval(setDate, 1000);
