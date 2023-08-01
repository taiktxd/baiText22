/**
 * nhap vao so tien so nguoi va tien tip
 * tinh tien chia ra moi nguoi
 * in ra ket qua
 */

var elementSoTien = document.getElementById("soTien");
var elementSoNguoi = document.getElementById("soNguoi");
var elementChonTip = document.getElementById("chonTip");
var elementTinh = document.getElementById("tinh");
var elementKetQua = document.getElementById("ketQua");

// elementTinh.addEventListener("click", function tinhTien(event) {
//   event.preventDefault;
//   var soTienMoiNguoi = "";
//   if ((elementChonTip.value = 30)) {
//     soTienMoiNguoi =
//       elementSoTien.value / elementSoNguoi.value +
//       (elementSoTien.value * 0.3) / elementSoNguoi.value;
//   } else if ((elementChonTip.value = 20)) {
//     soTienMoiNguoi =
//       elementSoTien.value / elementSoNguoi.value +
//       (elementSoTien.value * 0.2) / elementSoNguoi.value;
//   } else if ((elementChonTip.value = 15)) {
//     soTienMoiNguoi =
//       elementSoTien.value / elementSoNguoi.value +
//       (elementSoTien.value * 0.15) / elementSoNguoi.value;
//   } else if ((elementChonTip.value = 10)) {
//     soTienMoiNguoi =
//       elementSoTien.value / elementSoNguoi.value +
//       (elementSoTien.value * 0.1) / elementSoNguoi.value;
//   } else {
//     soTienMoiNguoi =
//       elementSoTien.value / elementSoNguoi.value +
//       (elementSoTien.value * 0.05) / elementSoNguoi.value;
//   }
//   elementKetQua.innerHTML = soTienMoiNguoi;
// });

elementTinh.addEventListener("click", function tinhTien(event) {
  event.preventDefault();

  if (!elementSoTien.value || !elementChonTip.value || !elementSoNguoi.value) {
    elementKetQua.innerHTML = "Vui long nhap day du thong tin";
  } else {
    var tongTienNhau = Number(elementSoTien.value);
    var tienTip = (tongTienNhau * elementChonTip.value) / 100;
    var soNguoi = Number(elementSoNguoi.value);
    var soTien = Number((tongTienNhau + tienTip) / soNguoi);
    elementKetQua.innerHTML = soTien;
    console.log("soTien: ", soTien);
  }
});
