// var nutButtonTo = document.querySelector("#btnTo");
// var nutButtonNho = document.querySelector("#btnNho");
// var hinhVuong = document.querySelector("#hV");

// nutButtonNho.addEventListener("click", thuNho);

// function thuNho() {
//   hinhVuong.style.height = "100px";
//   hinhVuong.style.width = "100px";
// }

// nutButtonTo.addEventListener("click", phongto);

// function phongto() {
//   hinhVuong.style.height = "300px";
//   hinhVuong.style.width = "300px";
// }

// var nutTatDen = document.querySelector("#tatDen");
// var nutMoDen = document.querySelector("#moDen");
// var theBody = document.querySelector("body");

// nutTatDen.addEventListener("click", cheDoToi);

// function cheDoToi() {
//   theBody.classList.add("bg-toi");
// }

// nutMoDen.addEventListener("click", cheDoSang);

// function cheDoSang() {
//   theBody.classList.remove("bg-toi");
// }

// phan login
var emailLogIn = document.querySelector("#eMail");
var passLogIn = document.querySelector("#passWord");
var logIn = document.querySelector("#btn");

logIn.addEventListener("click", dangNhap);

function dangNhap() {
  var valueEmail = emailLogIn.value;
  var valuePass = passLogIn.value;
  if (valueEmail && valuePass) {
    alert("Dang nhap thanh cong");
    window.location.href = "https://www.facebook.com/?ref=tn_tnmn";
  } else {
    alert("Vui long nhap day du thong tin");
  }
}
