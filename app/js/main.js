document.addEventListener("DOMContentLoaded", function(event) {
  smoothScroll.init({speed: 650})
  moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0');
  var closingTimeSpan = document.getElementById('js-timeUntilClosing')
  var callBtn = document.getElementById('js-call-btn')
  var schedule = [
    [0, 0],   // sun
    [10, 17], // mon
    [10, 17], // tues
    [10, 17], // wed
    [10, 17], // thurs
    [10, 17], // fri
    [0, 0]    // sat
  ]
  var getTimes = function() {
    var currentDate = moment(new Date()).tz('America/Los_Angeles')
    var untilClose = currentDate.to(currentDate.clone().set('hour', schedule[currentDate.day()][1]))
    if (untilClose.includes('ago')) {
      var untilOpen = currentDate.to(currentDate.clone().set('hour', schedule[currentDate.day() + 1][0]).set('day', currentDate.day() + 1))
      closingTimeSpan.innerText = `opens ${untilOpen}`
    }
    else {
      closingTimeSpan.innerText = `closes ${untilClose}`
    }

    if (closingTimeSpan.innerText.includes('opens')) {
      callBtn.disabled = true
      callBtn.innerText = 'The Locksmith is Sleeping'
    }
  }

  getTimes()
  setInterval(getTimes, 1000)

  callBtn.addEventListener('click', function(e) {
    var telA = document.createElement('a')
    telA.href = `tel:${[6, 1, 7, 3, '-', 1, 0, 3, '-', 0, 6, 3, '-', 1].reverse().join('')}`
    telA.click()
  })
})
