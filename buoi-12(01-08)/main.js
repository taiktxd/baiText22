// var elementIdH1 = document.getElementById("hello");
// var elementClassH1 = document.getElementsByClassName("h");
// console.log("elementIdH1 la ID", elementIdH1);
// console.log("elementClassH1 la class", elementClassH1);

// var contentH1 = elementIdH1.textContent;
// console.log("content contentH1", contentH1);
// console.log(" do dai content contentH1", contentH1.length);
// console.log(
//   " chu cai dau tien content contentH1",
//   contentH1[contentH1.length - 1]
// );

// var queryH1 = document.querySelector("h1");
// console.log("dom toi the h1:", queryH1);

// var elementTaiKhoan = document.querySelector("#taiKhoan");
// var elementMatKhau = document.querySelector("#matKhau");

// var contentTK = elementTaiKhoan.value;
// var contentMK = elementMatKhau.value;

// console.log(contentTK);
// console.log(contentMK);

var valueTk = "tai@gmail";
var elementTaiKhoan = document.querySelector("#taiKhoan");
elementTaiKhoan.value = valueTk;

var valueMk = "tai123";
var elementMatKhau = document.querySelector("#matKhau");
elementMatKhau.value = valueMk;

var divTong = document.querySelector("#tong");
var labelTK = document.querySelector("#label-tk");
var labelMK = document.querySelector("#label-mk");

divTong.style.backgroundColor = "blue";
divTong.style.padding = "20px";

labelTK.style.fontSize = "26px";
labelMK.style.fontSize = "26px";

elementTaiKhoan.style.width = "500px";
elementTaiKhoan.style.height = "50px";

elementMatKhau.style.width = "500px";
elementMatKhau.style.height = "50px";

divTong.classList.add("bg");
