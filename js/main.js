document.addEventListener("DOMContentLoaded", function(event) {
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

  setInterval(function() {
    var currendDate = new Date()
    var untilClose = schedule[currendDate.getDay()][1] - currendDate.getHours()
    var untilOpen = schedule[currendDate.getDay()][0] - currendDate.getHours()
    closingTimeSpan.innerText = untilClose <= 0 ? 'currently closed' : `closes in ${untilClose} hours`
    closingTimeSpan.innerText = untilOpen > 0 ? `opens in ${untilOpen} hours` : closingTimeSpan.innerText
    if (closingTimeSpan.innerText === 'currently closed') {
      callBtn.disabled = true
      callBtn.innerText = 'Locksmith is unavailable'
    }
  }, 1000)

  callBtn.addEventListener('click', function(e) {
    var telA = document.createElement('a')
    telA.href = `tel:${[6, 1, 7, 3, '-', 1, 0, 3, '-', 0, 6, 3, '-', 1].reverse().join('')}`
    telA.click()
  })
})
