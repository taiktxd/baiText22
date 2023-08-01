// for (i = 2; i <= 8; i++) {
//   if (i < 8) {
//     console.log("thứ: ", i);
//   } else {
//     console.log("chu nhat");
//   }
// }

var elementSo = document.getElementById("so");
var elementNut = document.getElementById("nut");
var elementIn = document.getElementById("in");

elementNut.addEventListener("click", function (event) {
  event.preventDefault();
  var count = 0;
  var content = " ";
  for (i = 1; i <= elementSo.value; i++) {
    count++;
    //1
    content = content + count + ",";
  }
  console.log("content : ", content);
  elementIn.innerText = content;
});
