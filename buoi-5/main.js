var elementTenHang = document.getElementById("ten-hang");
var elementSoLuong = document.getElementById("so-luong");
var elementDonGia = document.getElementById("don-gia");
var elementThanhTien = document.getElementById("thanh-tien");

var elementTenHangHai = document.getElementById("ten-hang-2");
var elementSoLuongHai = document.getElementById("so-luong-2");
var elementDonGiaHai = document.getElementById("don-gia-2");
var elementThanhTienHai = document.getElementById("thanh-tien-2");

var elementTienTra = document.getElementById("tien-tra");

var elementTinh = document.getElementById("tinh");

elementTinh.addEventListener("click", function hoaDon(event) {
  event.preventDefault();
  console.log(123);
  if (elementTenHang.value == "" && elementTenHangHai.value == "") {
    alert("Vui long nhap day du thong tin");
  } else if (elementTenHang.value && elementTenHangHai.value == "") {
    var hoaDon = Number(elementSoLuong.value * elementDonGia.value);
    elementThanhTien.innerHTML = hoaDon;
    elementTienTra.innerHTML = hoaDon;
  } else if (elementTenHang.value == "" && elementTenHangHai.value) {
    var hoaDonHai = Number(elementSoLuongHai.value * elementDonGiaHai.value);
    elementThanhTienHai.innerHTML = hoaDonHai;
    elementTienTra.innerHTML = hoaDonHai;
  } else {
    var hoaDon = Number(elementSoLuong.value * elementDonGia.value);
    elementThanhTien.innerHTML = hoaDon;
    var hoaDonHai = Number(elementSoLuongHai.value * elementDonGiaHai.value);
    elementThanhTienHai.innerHTML = hoaDonHai;
    var tongTien = Number(hoaDon + hoaDonHai);
    elementTienTra.innerHTML = tongTien;
  }
});
