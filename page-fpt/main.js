// list item

var elementItemList = document.querySelector(".item-list");

function addItem() {
  var listItem = [
    {
      id: 1,
      image:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png",
      name: "Điện thoại",
    },
    {
      id: 2,
      image:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-laptop.png",
      name: "Laptop",
    },
    {
      id: 3,
      image:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-pc.png",
      name: "PC",
    },
    {
      id: 4,
      image:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/icon-mtb-desk.png",
      name: "Máy tính bảng",
    },
    {
      id: 5,
      image:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-smart.png",
      name: "Thiết bị thông minh",
    },
    {
      id: 6,
      image:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-houseware.png",
      name: "Gia dụng",
    },
    {
      id: 7,
      image:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-apple-desk.png",
      name: "Apple",
    },
    {
      id: 8,
      image:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/destop-ic-samsung.png",
      name: "Samsung",
    },
    {
      id: 9,
      image:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-smartwatch.png",
      name: "Đồng hồ thông minh",
    },
    {
      id: 10,
      image:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-accessories.png",
      name: "Phụ kiện",
    },
    {
      id: 11,
      image:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-screen.png",
      name: "Màn hình",
    },
    {
      id: 12,
      image:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-tcdm.png",
      name: "Máy cũ",
    },
  ];

  var showBoxItem = "";

  listItem.map((item, index) => {
    var tenSP = item.name;
    var image = item.image;
    showBoxItem += `
        <div class="item-box">
        <div class="item-box-img">
          <img
            src="${item.image}"
            alt=""
          />
        </div>
        <span class="item-box-name">${item.name}</span>
      </div>
        `;
  });

  elementItemList.innerHTML = showBoxItem;
}

addItem();

// laptop

var elementListLaptop = document.querySelector(".list-laptop");
var listLaptop = [
  {
    id: 1,
    image:
      "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/16/638121568991277911_msi-gaming-gf63-thin-11-den-dd.jpg",
    sales: "Giảm 1.500.000đ",
    name: "MSI Gaming GF63 Thin 11SC-664VN i5-11400H",
    price: "14.990.000 ₫",
  },
  {
    id: 2,
    image:
      "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/24/638284697135459130_hp-pavilion-aero-13-bac-dd.jpg",
    sales: "Giảm 2.200.000đ",
    name: "Laptop HP Pavilion Aero 13-be2098AU R7-7735U (8C5K5PA)",
    price: "19.790.000đ",
  },
  {
    id: 3,
    image:
      "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/18/637728602789371579_acer-swift-3-sf314-43-r4x3-r5-5500u-bac-dd.jpg",
    sales: "Giảm 5.500.000đ",
    name: "Laptop Acer Swift 3 SF314-43-R4X3 R5 5500U (NX.AB1SV.004)",
    price: "15.490.000đ",
  },
  {
    id: 4,
    image:
      "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/10/638140638161724111_asus-tuf-gaming-fx517-den-dd-rtx-3050-dd.jpg",
    sales: "Giảm 5.00.000đ",
    name: "Asus TUF Gaming FX517ZC-HN077W i5 12450H",
    price: "18.990.000đ",
  },
];
function addLaptop() {
  var showLaptop = "";
  listLaptop.map((item, index) => {
    showLaptop += `
   <div class="item-laptop">
    <div class="box-laptop">
      <img src="${item.image}" alt="" style="width: 150px; height: 150px" />
    </div>
    <h3 class="name-item-laptop">${item.name}</h3>
    <span class="price-item-laptop">${item.sales}</span>
    <span class="box-laptop-item-1">Trả góp 0%</span>
    <span class="box-laptop-item-2">${item.price}</span>
  </div>
    `;
  });
  elementListLaptop.innerHTML = showLaptop;
}

addLaptop();

// add admin
var elementAddName = document.querySelector("#nameAdd");
var elementAddImg = document.querySelector("#imgAdd");
var elementAddPrice = document.querySelector("#priceAdd");
var elementAddSale = document.querySelector("#saleAdd");
var elementAddAll = document.querySelector("#addAll");

function addFull() {
  var newNameItem = elementAddName.value.toLowerCase();
  var newPriceItem = Number(elementAddPrice.value);
  var newImageItem = elementAddImg.value;
  var valueSales = Number(elementAddSale.value);

  var firstLetterString = newNameItem[0].toUpperCase() + newNameItem.slice(1);

  if (newNameItem && newPriceItem && newImageItem && elementAddSale) {
    var newItem = {
      //   id: listLaptop.length + 1,
      image: newImageItem,
      sales: valueSales,
      name: firstLetterString,
      price: newPriceItem,
    };
    listLaptop.push(newItem);
    addLaptop();
  } else {
    alert("Vui lòng nhập đầy đủ thông tin vào hệ thống");
  }
}

elementAddAll.addEventListener("click", addFull);

// add admin
