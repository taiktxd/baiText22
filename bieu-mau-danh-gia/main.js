var elementTen = document.getElementById("ten");
var elementMNV = document.getElementById("maNV");
var elementTuoi = document.getElementById("tuoi");
var elementViTri = document.getElementById("viTri");
var elementDiem = document.getElementById("diem");
var elementIn = document.getElementById("in");
var elementKetQua = document.getElementById("ketQua");
var elementXuatTen = document.getElementById("xuatTen");
var elementXepLoai = document.getElementById("xepLoai");

elementIn.addEventListener("click", function (event) {
  event.preventDefault;
  elementKetQua.classList.add("d-flex");
  var diem = Number(elementDiem.value);
  if (diem > 8.5) {
    elementXuatTen.innerText = "Nhân viên: " + elementTen.value;
    elementXepLoai.innerText = "Xếp loại: Nhân viên xuất sắc";
  } else {
  }
});
