// var chieuDai = prompt("Vui long nhap chieu dai: ");
// var chieuRong = prompt("vui lonh nhap chieu rong: ");
// console.log("chieu dai : ", `${chieuDai}px`);

// var elementVuong = document.getElementById("vuong");
// elementVuong.style.height = `${chieuRong}px`;
// elementVuong.style.width = `${chieuDai}px`;
// elementVuong.style.backgroundColor = "red";

/**
 * B1 : thiet lap giao dien
 * B2 : lay thong tin nguoi dung
 * B3 : dom toi id 'box' de tuy bien
 */

// var thongTin = prompt("Vui Long nhap hinh ban muon: ");
// var elementBox = document.getElementById("box");
// if (thongTin === "hinh vuong") {
//   elementBox.classList.add("h-vuong");
// } else if (thongTin === "hinh chu nhat") {
//   elementBox.classList.add("h-chu-nhat");
// } else if (thongTin === "hinh tron") {
//   elementBox.classList.add("h-tron");
// } else {
//   alert("Vui long nhap lai");
// }

/**
 * B1 Lay Thong tin 2 so nguoi dung nhap
 * B2 so sanh 2 so do
 * B3 dom toi id 'span' de hien so lon nha
 */

// var soThuNhat = Number(prompt("Vui long nhap gia tri thu nhat: "));
// var soThuHai = Number(prompt("Vui long nhap gia tri thu 2: "));

// var elementSpan = document.getElementById("span");

// if (soThuNhat > 0 || soThuHai > 0) {
//   alert("ca hai dieu la so duong");
// }

/**
 * B1 lay thong tin (ten + tien vay)
 * B2 tinh tien phai tra = tienvay*1.5/100 + tien vay
 * B3 Dom toi cac gia tri can thay doi
 *
 */

// var user = prompt("Vui long nhap tien khach hang");
// var elementUser = document.getElementById("ten");
// elementUser.innerHTML = user;

// var tienVay = Number(prompt("So tien khac vay thang truoc la: "));
// var elementTienVay = document.getElementById("tien-vay");
// elementTienVay.innerHTML = tienVay;

// var tienThanhToan = (tienVay * 1.5) / 100 + tienVay;
// var elementTienTra = document.getElementById("tien-tra");
// elementTienTra.innerHTML = tienThanhToan;

/**
 * B1 lay thong tin (ten + gio lam + so tien theo gio)
 * B2 tinh tien phai tra
 *    neu gio lam it hon hoac bang 40h = sogio*sotientheogio
 *    neu gio lam lon hon 40h = 40*sotientheogio  + (sogiolam - 40)*sotientheogio*hesotangca
 *
 * B3 Dom toi cac gia tri can thay doi
 *
 */

var user = prompt("Nhap ten nhan vien: ");
var elementUser = document.getElementById("ten");
elementUser.innerHTML = user;

var soGioLam = Number(prompt("Vui lòng nhập số giờ nhân viên đó đã làm: "));
var elementSoGioLam = document.getElementById("so-gio");
elementSoGioLam.innerHTML = soGioLam;

if (soGioLam > 40) {
  var tienLuong = 10 * (40 + (soGioLam - 40) * 1.5);
} else {
  var tienLuong = 10 * soGioLam;
}

var elementTienLuong = document.getElementById("tien-tra");
elementTienLuong.innerHTML = tienLuong;
