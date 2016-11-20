(function () {
  // global vars used in all methods
  var cd = document.getElementById('countdown');
  if (!cd) {
    return;
  }
  var amount = cd.querySelector('.amount');
  var unit = cd.querySelector('.unit');
  var weddingDate = new Date(1504382400000);
  var gracePeriod = 60 * 60; // an hour
  // gracePeriod = Date.now(); // infinity

  doitdoitdoit();

  function doitdoitdoit() {
    var timeLeft = weddingDate - Date.now();
    // don't care about ms
    timeLeft /= 1000;

    if (timeLeft <= (0 - gracePeriod)) {
    // if (true) { // now
      renderPostWedding(timeLeft);
    } else {
      renderWeddingTimer(timeLeft);
    }
  }

  function renderPostWedding (timeLeft) {
    return render('It\'s Done!', '');
  }

  function renderWeddingTimer (timeLeft) {
    if (timeLeft < gracePeriod) {
      return render('NOW!', '');
    }
    // months
    if (timeLeft > 60 * 60 * 24 * (365 / 12)) {
      return render(timeLeft / 60 / 60 / 24 / (365 / 12), 'months')
    }
    // days
    if (timeLeft > 60 * 60 * 24) {
      return render(timeLeft / 60 / 60 / 24, 'days')
    }
    // hours
    render(timeLeft / 60 / 60, 'hours')
  }

  function render (amountText, unitText) {
    if (typeof amountText === 'number') {
      amountText = Math.round(amountText * 10) / 10;
    }
    amount.innerHTML = amountText;
    unit.innerHTML = unitText
  }

  // debugger;
}());
