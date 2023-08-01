// var elemenEmail = document.getElementById("email");
// var elemenPassword = document.getElementById("password");
// var elemenButton = document.getElementById("button");

// elemenButton.addEventListener("click", function dangNhap(event) {
//   //  event.preventDefault() ngăn chặn việc load trang
//   event.preventDefault();
//   console.log("Email: ", elemenEmail.value);
//   console.log("password:", elemenPassword.value);
// });

// elemenButton.addEventListener("click", function dangNhap(event) {
//   //  event.preventDefault() ngăn chặn việc load trang
//   event.preventDefault();
//   console.log("Email: ", elemenEmail.value);
//   console.log("password:", elemenPassword.value);
// });

/**
// b1 khai báo biến giá trị a, b 
 * b2 DOM tới 2 giá trị a,b

 * b3 tạo function cho từng thuật toán
 * b4 in ra kết quả  
 */

var elemenA = document.getElementById("a");
var elemenB = document.getElementById("b");
var elemenKetQua = document.getElementById("ket-qua");
var elemenCong = document.getElementById("cong");
var elemenTru = document.getElementById("tru");
var elemenNhan = document.getElementById("nhan");
var elemenChia = document.getElementById("chia");
var elemenReset = document.getElementById("reset");

elemenCong.addEventListener("click", function tinhToan(event) {
  event.preventDefault();
  var giaTriA = Number(elemenA.value);
  var giaTriB = Number(elemenB.value);
  var tong = giaTriA + giaTriB;
  elemenKetQua.innerHTML = tong;
});

elemenTru.addEventListener("click", function tinhToan(event) {
  event.preventDefault();
  var giaTriA = Number(elemenA.value);
  var giaTriB = Number(elemenB.value);
  var hieu = giaTriA - giaTriB;
  elemenKetQua.innerHTML = hieu;
});

elemenNhan.addEventListener("click", function tinhToan(event) {
  event.preventDefault();
  var giaTriA = Number(elemenA.value);
  var giaTriB = Number(elemenB.value);
  var tich = giaTriA * giaTriB;
  elemenKetQua.innerHTML = tich;
});

elemenChia.addEventListener("click", function tinhToan(event) {
  event.preventDefault();
  var giaTriA = Number(elemenA.value);
  var giaTriB = Number(elemenB.value);
  var thuong = giaTriA / giaTriB;
  elemenKetQua.innerHTML = thuong;
});

elemenReset.addEventListener("click", function tinhToan(event) {
  event.preventDefault();
  elemenA.value = "";
  elemenB.value = "";
  elemenKetQua.innerHTML = "";
});
