function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();

function currentTimeBarcelona() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh - 3 + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clockBarcelona").innerText = time;
  let t = setTimeout(function () {
    currentTimeBarcelona();
  }, 1000);
}
currentTimeBarcelona();

function currentTimeBrasilia() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh - 8 + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clockBrasilia").innerText = time;
  let t = setTimeout(function () {
    currentTimeBrasilia();
  }, 1000);
}
currentTimeBrasilia();

function currentTimeColombo() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + (mm + 30) + ":" + ss + " " + session;

  document.getElementById("clockColombo").innerText = time;
  let t = setTimeout(function () {
    currentTimeColombo();
  }, 1000);
}
currentTimeColombo();

function currentTimeMecca() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh - 2 + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clockMecca").innerText = time;
  let t = setTimeout(function () {
    currentTimeMecca();
  }, 1000);
}
currentTimeMecca();

function currentTimeAbuDhabi() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh - 1 + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clockAbuDhabi").innerText = time;
  let t = setTimeout(function () {
    currentTimeAbuDhabi();
  }, 1000);
}
currentTimeAbuDhabi();

function currentTimeMoscow() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh - 2 + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clockMoscow").innerText = time;
  let t = setTimeout(function () {
    currentTimeMoscow();
  }, 1000);
}
currentTimeMoscow();

function currentTimeWashington() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh - 9 + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clockWashington").innerText = time;
  let t = setTimeout(function () {
    currentTimeWashington();
  }, 1000);
}
currentTimeWashington();

function currentTimeParis() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh - 3 + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clockParis").innerText = time;
  let t = setTimeout(function () {
    currentTimeParis();
  }, 1000);
}
currentTimeParis();

function currentTimeShanghai() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + 3 + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clockShanghai").innerText = time;
  let t = setTimeout(function () {
    currentTimeShanghai();
  }, 1000);
}
currentTimeShanghai();

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
