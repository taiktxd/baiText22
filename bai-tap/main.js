/**bai 1 */
var elementBat = document.getElementById("bat");
var elementTat = document.getElementById("tat");
var elementHinhDenTat = document.getElementById("hinh-tat-den");
var elementHinhDenBat = document.getElementById("hinh-bat-den");

elementBat.addEventListener("click", function batTat(event) {
  event.preventDefault();
  elementHinhDenTat.classList.add("none");
  elementHinhDenTat.classList.remove("block");
  elementHinhDenBat.classList.add("block");
});

elementTat.addEventListener("click", function batTat(event) {
  event.preventDefault();
  elementHinhDenTat.classList.add("block");
  elementHinhDenBat.classList.remove("block");
});

/**bai 2 */

var elementEmail = document.getElementById("email");
var elementPass = document.getElementById("pass");
var elementDisabledPass = document.getElementById("disabled-pass");
var elementDisabledEmail = document.getElementById("disabled-email");

elementDisabledPass.addEventListener("click", function nhanNut(event) {
  event.preventDefault();
  elementPass.setAttribute("disabled", "");
  elementEmail.removeAttribute("disabled");
});

elementDisabledEmail.addEventListener("click", function nhanNut(event) {
  event.preventDefault();
  elementEmail.setAttribute("disabled", "");
  elementPass.removeAttribute("disabled");
});

/**bai 3 */

var elementTaiKhoan = document.getElementById("tai-khoan");
var elementMatKhau = document.getElementById("mat-khau");
var elementNutDangNhap = document.getElementById("nut-dang-nhap");
var elementThongBao = document.getElementById("thong-bao");
var elementPhanHoi = document.getElementById("phan-hoi");

elementNutDangNhap.addEventListener("click", function dangNhap(event) {
  event.preventDefault();
  elementPhanHoi.classList.add("bg-text");

  if (elementTaiKhoan.value === "" || elementMatKhau.value === "") {
    elementThongBao.innerHTML = "Vui lòng nhập đầy đủ thông tin";
  } else {
    elementThongBao.innerHTML =
      "Chào Mừng " +
      elementTaiKhoan.value +
      "Mật khẩu của bạn là" +
      elementMatKhau.value;
  }
});

// bài 4

var elementTien = document.getElementById("tien");
var elementTip = document.getElementById("tip");

var elementSoNguoi = document.getElementById("so-nguoi");
var elementNutTinh = document.getElementById("nut-tinh");
var elementHoaDon = document.getElementById("hoa-don");

elementNutTinh.addEventListener("click", function TinhTien(e) {
  e.preventDefault();
  var tinhTien =
    (elementTien.value * elementTip.value) / 100 / elementSoNguoi.value;
  elementHoaDon.innerHTML = "Số tiền mỗi người là: " + tinhTien + "$";
});
