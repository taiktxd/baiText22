var soCanTinh = Number(prompt("Vui lòng nhập số cần tính: "));
var soHangDonVi = Math.floor(soCanTinh % 10);

var soHangChuc = Math.floor(soCanTinh / 10);

var tongDaySo = soHangDonVi + soHangChuc;
alert("Tổng của dãy số là: " + tongDaySo);
