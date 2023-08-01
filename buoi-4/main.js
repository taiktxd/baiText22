/**
 * b1 khai báo biến email pass
 * b2 dom tới email pass login
 * b3 nhấn vào login xuất hiện trang mới với điều kiện phải nhập email và pass
 */

var elementEmail = document.getElementById("email");
var elementPass = document.getElementById("pass");
var elementLogin = document.getElementById("login");

elementLogin.addEventListener("click", function dangNhap(event) {
  event.preventDefault();
  if (elementEmail.value !== "" && elementPass.value !== "") {
    window.location.href =
      "http://127.0.0.1:5500/buoi-2/thongtinnguoidung.html";
  } else {
    alert("Vui lòng nhập đầy đủ Email và mật khẩu.");
    elementEmail.value = "";
    elementPass.value = "";
  }
});
