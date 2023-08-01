// function chucNang(ten, tienNap, thanhPho) {
//   console.log("ten: ", ten);
//   console.log("tienNap: ", tienNap);
//   console.log("thanhPho: ", thanhPho);
// }

// chucNang("tai", "10000", "hue");

// function inRa(danhSachTraiCay) {
//   for (c = 0; c < danhSachTraiCay.length; c++) {
//     console.log("trai cay: ", danhSachTraiCay[c]);
//   }
// }

// inRa(["oi", "cam", "xoai", "buoi"]);

// function timSo(so, soToiThieu) {
//   var count = 0;
//   for (i = 1; i < so; i++) {
//     count = count + i;
//     console.log("i : ", i);
//     console.log("count : ", count);
//     // if (count > soToiThieu) {
//     //   console.log("i : ", i);
//     //   console.log("count : ", count);
//     // }
//   }
// }

// timSo(70, 2000);

// x= x^1+x^2+....+x^n
// = 1^1 +1^2+... +1^n

// function tinhSo(so, luyThua) {
//   for (i = 1; i <= luyThua; i++) {
//     // 2*
//   }
// }

// tinhSo(2, 3);
/**
 * Tính giai thừa của số n
 * 1*2*...*n
 * cho vòng lặp chạy thừ 1 đến n
 * i*i++ ; i = n thì thoát vòng lặp
 *
 */

// function tinhTong(so) {
//   var tong = 0;
//   for (i = 1; i <= so; i++) {
//     tong = tong + i;
//   }
//   console.log("tong cua chuot so la: ", tong);
// }

// tinhTong(10);

/**
 * nhap vao  1 so khi nhan thi in ra chuoi so roi tinh tong của chuoi so
 *
 */

var elementSo = document.getElementById("so");
var elementNut = document.getElementById("nut");
var elementKetQua = document.getElementById("ketQua");

elementNut.addEventListener("click", function nhapNut(event) {
  event.preventDefault;
  var tong = 0;
  for (i = 0; i <= elementSo.value; i++) {
    tong = tong + i;
  }
  elementKetQua.innerHTML = tong;
});
