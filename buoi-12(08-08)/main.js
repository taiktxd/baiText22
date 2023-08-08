var a = document.querySelector("#a").value;
var b = document.querySelector("#b").value;
var c = document.querySelector("#c").value;
var d = document.querySelector("#d").value;

function tinhTong(thamSo1, thamSo2, thamSo3, thamSo4) {
  console.log(
    "tong la: ",
    Number(thamSo1) + Number(thamSo2) + Number(thamSo3) + Number(thamSo4)
  );
}

tinhTong(a, b, c, d);
