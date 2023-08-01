// in ra độ dài biến
var fullName = "Duong Tuan Tai";
console.log("fullName", fullName.length);

// in ra độ dài mảng
// vị trí mảng=  0       1       2        3
var listName = ["tai ", "win", "khai", "none"];
console.log("listName", listName.length);
console.log("giá trị theo thứ tự 1:", listName[1]);

var elementEleP = document.querySelector(".ele-p");
elementEleP.innerHTML = listName[1];
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
