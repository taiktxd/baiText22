var elementSoDau = document.getElementById("so-dau");
var elementSoCuoi = document.getElementById("so-cuoi");
var elementTong = document.getElementById("tong");
var elementHieu = document.getElementById("hieu");
var elementTich = document.getElementById("tich");
var elementThuong = document.getElementById("thuong");
var elementResset = document.getElementById("resset");
var elementKetQua = document.getElementById("ket-qua");
var elementMayTinh = document.getElementById("mayTinh");
var elementDoi = document.getElementById("doi");

elementDoi.addEventListener("click", function (event) {
  event.preventDefault;
  elementMayTinh.classList.toggle("tat-den");
});

elementTong.addEventListener("click", function (event) {
  event.preventDefault();
  var soDau = Number(elementSoDau.value);
  var soCuoi = Number(elementSoCuoi.value);
  var tong = soDau + soCuoi;
  elementKetQua.innerHTML = "Kết quả là: " + tong;
});

elementHieu.addEventListener("click", function (event) {
  event.preventDefault();
  var soDau = Number(elementSoDau.value);
  var soCuoi = Number(elementSoCuoi.value);
  var hieu = soDau - soCuoi;
  elementKetQua.innerHTML = "Kết quả là: " + hieu;
});

elementTich.addEventListener("click", function (event) {
  event.preventDefault();
  var soDau = Number(elementSoDau.value);
  var soCuoi = Number(elementSoCuoi.value);
  var tich = soDau * soCuoi;
  elementKetQua.innerHTML = "Kết quả là: " + tich;
});

elementThuong.addEventListener("click", function (event) {
  event.preventDefault();
  var soDau = Number(elementSoDau.value);
  var soCuoi = Number(elementSoCuoi.value);
  var thuong = soDau / soCuoi;
  elementKetQua.innerHTML = "Kết quả là: " + thuong;
});

elementResset.addEventListener("click", function (event) {
  elementSoDau.value = 0;
  elementSoCuoi.value = 0;
  elementKetQua.innerHTML = "0";
});

function tinhTong(a, b) {
  var tongC = a + b;
  console.log("tongC la: ", tongC);
}

tinhTong(3, 6);
