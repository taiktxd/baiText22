/**
 * Kiểu dữ liệu:
 * String: 'abc0123'
 * Number: 01234
 * boolear: true, false
 * Object :
 */

var tenNhanVien = prompt("vui lòng nhập tên nhân viên: ");
var nhapMNV = prompt("vui lòng nhập mã nhân viên : ");
var tuoiNV = prompt("vui lòng nhập tuổi nhân viên: ");
var gioiTinh = prompt("vui lòng nhập giới tính nhân viên: ");

var nhanVien = {
  maNhanVien: nhapMNV,
  ten: tenNhanVien,
  tuoi: Number(tuoiNV),
  isBoy: gioiTinh,
};

var suaTenNhanVien = prompt("Đổi lại tiên nhân viên: ");
nhanVien.ten = suaTenNhanVien;

if (nhanVien.tuoi > 18) {
  alert("nhân viên đủ tuổi vị thành niên");
} else if (nhanVien.tuoi > 0 && nhanVien.tuoi <= 18) {
  alert("Nhân viên chưa đủ vị thành niên");
} else {
  alert("Vui lòng nhập tuổi nhân viên");
}

console.log("nhanVien: ", nhanVien);
console.log("suaTenNhanVien: ", suaTenNhanVien);
