var elementTen = document.getElementById("ten");
var elementToan = document.getElementById("toan");
var elementLy = document.getElementById("ly");
var elementHoa = document.getElementById("hoa");
var elementInTen = document.getElementById("scan-ten");
var elementHocLuc = document.getElementById("hoc-luc");

var elementXet = document.getElementById("xet");
// neu day du thong tin thi tinh diem trung binh roi xet hoc luc
// xet hoc luc >= 8.5 la gioi; 6.5 =< kha < 8.5 ; .....
/**
 * 1 một trong 3 môn người dùng không nhập thì show ra alert
 * 2 tính tổng 3 môn
 * 3 nếu tổng 3 môn lớn hơn hoặc bằng 8.5 thì xếp loại giỏi
 * 4 nếu tổng 3 môn từ 6.5 đến nhỏ hơn 8.5 thì là khá
 * 5 điểm tổng 3 môn từ 5 đến nhỏ hơn 6.5 thì là trung binh
 * 6 còn lại là yếu
 */

elementXet.addEventListener("click", function xepLoai(event) {
  event.preventDefault();
  if (
    elementTen.value === "" ||
    elementToan.value === "" ||
    elementLy.value === "" ||
    elementHoa.value === ""
  ) {
    alert("Vui lòng nhập đầy đủ thông tin của sinh viên cần xét!");
  } else {
    elementInTen.innerHTML = elementTen.value;
    var tongDiem =
      (Number(elementToan.value) +
        Number(elementLy.value) +
        Number(elementHoa.value)) /
      3;
    console.log("tongDiem", tongDiem);
    if (tongDiem >= 8.5) {
      elementHocLuc.innerHTML = "Giỏi";
    } else if (tongDiem >= 6.5 && tongDiem < 8.5) {
      elementHocLuc.innerHTML = "Khá";
    } else if (tongDiem >= 5 && tongDiem < 6.5) {
      elementHocLuc.innerHTML = "Trung Bình";
    } else {
      elementHocLuc.innerHTML = "Yếu";
    }
  }
});
