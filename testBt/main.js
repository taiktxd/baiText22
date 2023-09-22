const arr = [33, 14, 26, 12, 13, 7, 9, 10, 205, 379, 418, 1];

const baiA = document.querySelector("#ketQuaA");
const baiB = document.querySelector("#ketQuaB");
const baiC = document.querySelector("#ketQuaC");
const baiD = document.querySelector("#ketQuaD");
const baiE = document.querySelector("#ketQuaE");
const baiF = document.querySelector("#ketQuaF");
const baiG = document.querySelector("#ketQuaG");
const baiH = document.querySelector("#ketQuaH");
const btnT = document.querySelector("#tim");

btnT.addEventListener("click", sapXep);

function sapXep() {
  //bài a
  arr.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  baiA.textContent = arr;

  //bài b
  arr.sort(function (c, d) {
    if (c > d) return -1;
    if (c < d) return 1;
    return 0;
  });
  baiB.textContent = arr;

  //bài c, không  tận dụng dãy số baiA được
  //bài d, chung code có thể tận dụng
  function xepSoChanLe() {
    let soChan = [];
    let soLe = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        soChan.push(arr[i]);
      } else {
        soLe.push(arr[i]);
      }
    }
    soChan.sort(function (a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
    soLe.sort(function (c, d) {
      if (c > d) return -1;
      if (c < d) return 1;
      return 0;
    });
    baiC.textContent = soChan;
    baiD.textContent = soLe;
  }
  xepSoChanLe();

  // bai e
  let tongSo = 0;
  for (i = 0; i < arr.length; i++) {
    tongSo += arr[i];
  }
  baiE.textContent = tongSo;

  // bai f

  const max_val = arr.reduce(function (accumulator, element) {
    return accumulator > element ? accumulator : element;
  });
  baiF.textContent = max_val;

  // bai g
  const min_val = arr.reduce(function (accumulator, element) {
    return accumulator < element ? accumulator : element;
  });
  baiG.textContent = min_val;
  //bai h
  arr.sort(function (a, b) {
    return b - a;
  });

  const soLonThuHai = arr[1];
  baiH.textContent = soLonThuHai;
}
