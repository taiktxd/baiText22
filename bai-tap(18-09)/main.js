var EBaiSo1 = document.querySelector(".baiSo1");
var EBaiSo2 = document.querySelector(".baiSo2");
var EBaiSo3 = document.querySelector(".baiSo3");
var EBaiSo4 = document.querySelector(".baiSo4");
var EBaiSo5 = document.querySelector(".baiSo5");
var EBaiSo6 = document.querySelector(".baiSo6");
var EBaiSo7 = document.querySelector(".baiSo7");
var EBaiSo8 = document.querySelector(".baiSo8");

var eQABT = document.querySelector(".QABaiTap");

var EListBT = [{ id: 1, htmlBai: "" }];

EBaiSo1.addEventListener("click", showBai1);
EBaiSo2.addEventListener("click", showBai2);
EBaiSo3.addEventListener("click", showBai3);
EBaiSo4.addEventListener("click", showBai4);

function showBai1() {
  var str = "";
  EListBT.map((index) => {
    str += `
          <div class="bai1 baiSo">
            <div class="tieuDe">
              <i class="fa fa-calculator"></i>
              <h1>Xuất 3 số theo thứ tự tăng dần</h1>
            </div>
            <div class="goiY">
              <span><i class="fa fa-lightbulb"></i>Gợi ý</span>
              <div class="cach1">
                <i class="fa fa-caret-right"></i>
                <span class="imgGoiY"
                  >Cách 1: Sử dụng các lệnh if else lồng nhau (mở rộng để xem
                  thêm)</span
                >
                <img src="./hinhAnh/Screenshot 2023-09-20 000359.png" alt="" />
              </div>
              <div class="cach1">
                <i class="fa fa-caret-right"></i>
                <span class="imgGoiY"
                  >Cách 2: Sử dụng các lệnh else if (mở rộng để xem thêm) Ép kiểu
                  dữ liệu của các giá trị sang kiểu số để xử lý vì các giá trị
                  nhận được từ form mặc định sẽ ở kiểu chuỗi.</span
                >
                <img src="./hinhAnh/2.png" alt="" />
              </div>
            </div>
            <div class="nhapVao">
              <input type="number" placeholder="Nhập số thứ nhất" id="so11" />
              <input type="number" placeholder="Nhập số thứ hai" id="so12" />
              <input type="number" placeholder="Nhập số thứ ba" id="so13" />
            </div>
            <a class="tinh">Sắp xếp</a>
            <output class="ketQua">&#128073;</output>
          </div>
          `;
  });

  eQABT.innerHTML = str;

  var eTinh = document.querySelector(".tinh");
  var eKetQua = document.querySelector(".ketQua");

  eTinh.addEventListener("click", tinhBai1);

  function tinhBai1() {
    var SoDau = document.querySelector("#so11").value;
    var SoHai = document.querySelector("#so12").value;
    var SoBa = document.querySelector("#so13").value;
    var So1 = Number(SoDau);
    var So2 = Number(SoHai);
    var So3 = Number(SoBa);
    if (!isNaN(So1) && !isNaN(So2) && !isNaN(So3)) {
      if (So1 < So2 && So2 < So3) {
        eKetQua.innerHTML = "Kết quả: " + So1 + ", " + So2 + ", " + So3;
      } else if (So1 < So3 && So3 < So2) {
        eKetQua.innerHTML = "Kết quả: " + So1 + ", " + So3 + ", " + So2;
      } else if (So2 < So1 && So1 < So3) {
        eKetQua.innerHTML = "Kết quả: " + So2 + ", " + So1 + ", " + So3;
      } else if (So2 < So3 && So3 < So1) {
        eKetQua.innerHTML = "Kết quả: " + So2 + ", " + So3 + ", " + So1;
      } else if (So3 < So1 && So1 < So2) {
        eKetQua.innerHTML = "Kết quả: " + So3 + ", " + So1 + ", " + So2;
      } else {
        eKetQua.innerHTML = "Kết quả: " + So3 + ", " + So2 + ", " + So1;
      }
    } else {
      eKetQua.innerHTML = "Vui lòng nhập đủ số để thực hiện sắp xếp.";
    }
  }
}

function showBai2() {
  var str = "";
  EListBT.map((index) => {
    str += `
        <div class="bai2 baiSo ">
          <div class="tieuDe">
            <i class="fa fa-calculator"></i>
            <h1>Chương trình "Chào hỏi"</h1>
          </div>
          <div class="goiY">
            <span
              ><i class="fa fa-lightbulb"></i>Gợi ý: <br />
              Nên tạo một dropdown để người dùng chọn thành viên cần gửi lời
              chào. Cách này sẽ hạn chế người dùng nhập sai nội dung. Mỗi thẻ
              option nên thêm value để dễ xử lý data sau khi lấy từ form. Nên sử
              dụng câu điều kiện if...else if... else. Hoặc dùng switch
              case</span
            >
            <div class="cach1">
              <i class="fa fa-caret-right"></i>
              <span class="imgGoiY">Dropdown HTML (mở rộng để xem thêm)</span>
              <img src="./hinhAnh/3.png" alt="" />
            </div>
          </div>
          <div class="nhapVao">
            <input type="text" placeholder="Chọn thành viên" id="thanhVien" />
          </div>
          <span class="chaoThanhVien">Gửi lời chào</span>
          <output class="ketQuaChao">&#128073;</output>
        </div>
        `;
  });
  eQABT.innerHTML = str;

  var chao = document.querySelector(".chaoThanhVien");
  var ketQua2 = document.querySelector(".ketQuaChao");

  chao.addEventListener("click", guiLoiChao);

  function guiLoiChao() {
    if (chao == "") {
      alert("vui long nhap ten vao:");
    } else {
      var EThanhVien = document.querySelector("#thanhVien").value;
      ketQua2.innerHTML = "Xin chào " + EThanhVien;
    }
  }
}

function showBai3() {
  var str = "";
  EListBT.map((index) => {
    str += `
        <div class="bai3 baiSo">
          <div class="tieuDe">
            <i class="fa fa-calculator"></i>
            <h1>Đếm số chẵn lẻ</h1>
          </div>
          <div class="goiY">
            <span
              ><i class="fa fa-lightbulb"></i>Gợi ý: <br />
              Để kiểm tra 1 số là chẵn hay lẻ thì ta đem số đó chia với 2. Nếu
              chia hết thì là số chẵn, ngược lại là số lẻ. (dùng toán tử %) Tạo
              biến để chứa giá trị khi đếm. Sau khi xác định được số đó chẵn
              hoặc lẻ thì tăng biến này lên 1 đơn vị (dùng các toán tử tăng:
              count++, count+=1 ) 🤔TIP: Chỉ cần đếm các số chẵn. Để xác định số
              lượng số lẻ ta chỉ cần lấy 3 trừ đi số lượng số chẵn đếm được (do
              chỉ nhập 3 số nguyên)</span
            >
          </div>
          <div class="nhapVao">
            <input type="number" placeholder="Nhập số thứ nhất" id="so31" />
            <input type="number" placeholder="Nhập số thứ hai" id="so32" />
            <input type="number" placeholder="Nhập số thứ ba" id="so33" />
          </div>
          <span
            class="dem"
            style="
              padding: 10px;
              background-color: antiquewhite;
              margin: 15px;
              display: inline-block;
              border-radius: 5px;
            "
            >Đếm</span
          >
          <output class="ketQua3">&#128073;</output>
        </div>
        `;
  });
  eQABT.innerHTML = str;

  var eTinh = document.querySelector(".dem");
  var eKetQua3 = document.querySelector(".ketQua3");

  eTinh.addEventListener("click", demChanLe);

  function demChanLe() {
    var SoDau = Number(document.querySelector("#so31").value);
    var SoHai = Number(document.querySelector("#so32").value);
    var SoBa = Number(document.querySelector("#so33").value);
    var chuoiSo = [SoDau, SoHai, SoBa];
    var soLuongChan = 0;
    for (i = 0; i < chuoiSo.length; i++) {
      var soHienThi = chuoiSo[i];
      if (soHienThi % 2 === 0) {
        soLuongChan++;
      }
      var soLuongLe = 3 - soLuongChan;
      eKetQua3.innerHTML =
        "Số chẳn là: " + soLuongChan + ". Số lẻ là: " + soLuongLe;
    }
  }
}

function showBai4() {
  var str = "";
  EListBT.map((index) => {
    str += `
        <div class="bai4 baiSo">
          <div class="tieuDe">
            <i class="fa fa-calculator"></i>
            <h1>Đoán hình tam giác</h1>
          </div>
          <div class="goiY">
            <span
              ><i class="fa fa-lightbulb"></i>Gợi ý: <br />
              Note: Chỉ cần xác định các loại tam giác cơ bản (vuông, đều, cân),
              các tam giác còn lại xếp loại là tam giác khác
            </span>
          </div>
          <div class="nhapVao">
            <input
              type="number"
              placeholder="Nhập độ dài cạnh thứ nhất"
              id="so41"
            />
            <input
              type="number"
              placeholder="Nhập độ dài cạnh thứ hai"
              id="so42"
            />
            <input
              type="number"
              placeholder="Nhập độ dài cạnh thứ ba"
              id="so43"
            />
          </div>
          <span
            class="doan"
            style="
              padding: 10px;
              background-color: antiquewhite;
              margin: 15px;
              display: inline-block;
              border-radius: 5px;
            "
            >Dự đoán</span
          >
          <output class="ketQua4">&#128073;</output>
        </div>
        `;
  });
  eQABT.innerHTML = str;

  var eTinh = document.querySelector(".doan");
  var eKetQua3 = document.querySelector(".ketQua4");

  eTinh.addEventListener("click", duDoanHinh);
  function duDoanHinh() {
    var a = Number(document.querySelector("#so41").value);
    var b = Number(document.querySelector("#so42").value);
    var c = Number(document.querySelector("#so43").value);
    if (a && b && c) {
      if (a + b > c && a + c > b && b + c > a) {
        if (a == b && b == c) {
          eKetQua3.innerHTML = "Hình tam giác trên là tam giác đều";
        } else if (a == b || a == c || b == c) {
          eKetQua3.innerHTML = "Hình tam giác trên là tam giác cân";
        } else if (
          c * c === a * a + b * b ||
          a * a === b * b + c * c ||
          b * b === a * a + c * c
        ) {
          eKetQua3.innerHTML = "Hình tam giác trên là tam giác vuông";
        }
      } else {
        alert(
          "Tam giác không thỏa mản điệu kiện tổng 2 cạnh luôn lớn hơn cạnh còn lại"
        );
      }
    } else {
      alert("Vui lòng nhập đầy đủ chiều dài các cạnh");
    }
  }
}
