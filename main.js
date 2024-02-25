"use strict";
const check = document.querySelector(".myButton");
const myNum = document.querySelectorAll(".num");
const myInput = document.querySelectorAll(".myInput");
const again = document.querySelector(".again");
/////////////////////////////////////////////////////////////
const now = new Date(); //present date
const day = now.getDate(); // present day
const month = now.getMonth() + 1; //present month
const year = now.getFullYear(); //present year
///////////////////////////////////////////////////
const year2 = document.querySelector(".y");
const month2 = document.querySelector(".m");
const day2 = document.querySelector(".d");
//////////////////////////////////////////////////
function hide(yourClass) {
  yourClass.classList.add("hide");
}
function unHide(yourClass) {
  yourClass.classList.remove("hide");
}

check.addEventListener("click", function () { //check button event listener
  if (
    document.querySelector(".day").value === "" ||
    document.querySelector(".month").value === "" ||
    document.querySelector(".year").value === "" ||
    document.querySelector(".day").value > 31 ||
    document.querySelector(".month").value > 12
  ) {
    for (let i = 0; i < myNum.length; i++) {
      myNum[i].textContent = "--";
    }

    for (let i = 0; i < myInput.length; i++) {
      myInput[i].style.border = "solid #ff8282 2px";
    }
  } else {
    let ageY;
    ageY = year - document.querySelector(".year").value;
    if (document.querySelector(".month").value > month) {
      ageY = ageY - 1;
    } else if (
      document.querySelector(".month").value === month &&
      document.querySelector(".day") > day
    ) {
      ageY = ageY - 1;
    }
    year2.textContent = ageY;

    let month1;
    let monthY;
    if (month === Number(document.querySelector(".month").value)) {
      month1 = month - Number(document.querySelector(".month").value);
    } else {
      monthY = 12 - Number(document.querySelector(".month").value);
      month1 = monthY + month;
    }
    month2.textContent = month1;

    if (
      day === Number(document.querySelector(".day").value) &&
      month === Number(document.querySelector(".month").value)
    ) {
      day2.textContent = day - document.querySelector(".day").value;
    } else {
      day2.textContent = day;
    }

    hide(check);
    unHide(again);
  }
});

again.addEventListener("click", function () { //again button
  document.querySelector(".day").value = "";
  document.querySelector(".month").value = "";
  document.querySelector(".year").value = "";

  for (let i = 0; i < myInput.length; i++) {
    myInput[i].style.border = "solid hsl(0, 0%, 86%) 2px";
  }

  year2.textContent = 0;
  month2.textContent = 0;
  day2.textContent = 0;

  unHide(check);
  hide(again);
});
