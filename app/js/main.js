document.addEventListener("DOMContentLoaded", function(event) {
  moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0');
  var closingTimeSpan = document.getElementById('js-timeUntilClosing')
  var callBtn = document.getElementById('js-call-btn')
  var schedule = [
    [10, 17],
    [10, 17],
    [10, 17],
    [10, 17],
    [10, 17],
    [-1, -1],
    [-1, -1]
  ]
  var getTimes = function() {
    var currentDate = moment(new Date()).tz('America/Los_Angeles')
    var untilClose = currentDate.to(currentDate.set('hour', schedule[currentDate.day()][1]), true)
    // var untilClose = schedule[currentDate.day()][1] - currentDate.hours()
    var untilOpen = schedule[currentDate.day()][0] - currentDate.hours()
    closingTimeSpan.innerText = untilClose <= 0 ? 'currently closed' : `closes in ${untilClose}`
    closingTimeSpan.innerText = untilOpen > 0 ? `opens in ${untilOpen} hours` : closingTimeSpan.innerText
    if (closingTimeSpan.innerText === 'currently closed') {
      callBtn.disabled = true
      callBtn.innerText = 'Locksmith is unavailable'
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
