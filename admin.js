
function getProducts() {
  return localStorage.getItem("myProducts");
}


const btnSelects = document.querySelectorAll('.btn-select');

btnSelects.forEach(btn => {
  btn.addEventListener('click', () => {
    btnSelects.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
  })
})




const btnProducts = document.querySelectorAll('.btn-select');


btnSelects.forEach(function (btnSelect) {
  btnSelect.addEventListener("click", () => {
    for (var i = 0; i < btnSelects.length; i++) {
      btnSelects[i].classList.remove("active");
    }
    btnSelect.classList.add("active");
  });
});


function getProducts() {
  const savedProductsJSON = localStorage.getItem("myProducts");
  if (savedProductsJSON) {
    return JSON.parse(savedProductsJSON);
  }
  else {
    const staticProducts = {
      yughioh1: [
        { id: "yu1", title: "Hộp bài kỉ niệm 25 năm ", desc: "123", price: "1,690,000", img: "./images/p1.jpg", sale: "10", status: "inactive", deleted: "false" },
        { id: "yu2", title: "Hộp Thẻ Bài Yugioh Legend Of Blue Eyes White Dragon", desc: "123", price: "1,990,000", img: "./images/p2.jpg", sale: "15", status: "active", deleted: "false" },
        { id: "yu3", title: "Hộp Thẻ Bài Yugioh Invasion Of Chaos", desc: "123", price: "2,299,000", img: "./images/p3.jpg", sale: "17", status: "active", deleted: "false" },
        { id: "yu4", title: "Hộp Thẻ Bài Yugioh Metal Raiders", desc: "123", price: "1,990,000", img: "./images/p4.jpg", sale: "12", status: "active", deleted: "false" },
        { id: "yu5", title: "Hộp Thẻ Bài Yugioh Spell Ruler", desc: "123", price: "1,990,000", img: "./images/p5.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "yu6", title: "Hộp Thẻ Bài Yugioh Pharaoh’s Servant", desc: "123", price: "2,099,000", img: "./images/p6.jpg", sale: "19", status: "active", deleted: "false" },
        { id: "yu7", title: "Hộp Thẻ Bài Yugioh Battles Of Legend Monstrous Revenge", desc: "123", price: "169,000", img: "./images/p7.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "yu8", title: "Hộp Thẻ Bài Yugioh Wild Survivors", desc: "123", price: "1,899,000", img: "./images/p8.jpg", sale: "13", status: "active", deleted: "false" },
        { id: "yu9", title: "Hộp Thẻ Bài Yugioh Legendary Collection: 25th Anniversary Edition", desc: "123", price: "890,000", img: "./images/p9.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "yu10", title: "Hộp Thẻ Bài Yugioh Speed Duel GX: Duelists Of Shadows", desc: "123", price: "1,990,000", img: "./images/p10.webp", sale: "10", status: "active", deleted: "false" },
        { id: "yu11", title: "Hộp Thẻ Bài Yugioh M2 Duelist Box Dark World", desc: "123", price: "399,000", img: "./images/p11.webp", sale: "10", status: "active", deleted: "false" }
      ],
      pokemon: [
        { id: "po1", title: "Hộp Thẻ Bài Pokemon Sword & Shield ASTRAL RADIANCE", desc: "123", price: "1,499,000", img: "./images/y1.webp", sale: "10", status: "active", deleted: "false" },
        { id: "po2", title: "Hộp Thẻ Bài Pokemon Sword & Shield Battle Academy - Pikachu Mewtwo Và Charizard", desc: "123", price: "1,199,000", img: "./images/y2.webp", sale: "10", status: "active", deleted: "false" },
        { id: "po3", title: "Hộp Thẻ Bài Pokemon Battle Styles - Booster Box", desc: "123", price: "3,699,000", img: "./images/y3.webp", sale: "10", status: "active", deleted: "false" },
        { id: "po4", title: "Hộp Thẻ Bài Pokemon Sun & Moon - Alolan Sandslash Và Alolan Ninetales Trainer Kit", desc: "123", price: "449,000", img: "./images/y4.webp", sale: "10", status: "active", deleted: "false" },
        { id: "po5", title: "Gói Thẻ Bài Pokemon Scarlet & Violet PALDEA EVOLVED Booster Box", desc: "123", price: "3,290,000", img: "./images/y5.webp", sale: "10", status: "active", deleted: "false" },
        { id: "po6", title: "Gói Thẻ Bài Pokemon Scarlet & Violet OBSIDIAN FLAMES Booster Box", desc: "123", price: "3,290,000", img: "./images/y6.webp", sale: "10", status: "active", deleted: "false" },
        { id: "po7", title: "Hộp Thẻ Bài Pokemon Scarlet & Violet Miraidon Elite Trainer Box PURPLE", desc: "123", price: "1,499,000", img: "./images/y7.webp", sale: "10", status: "active", deleted: "false" },
        { id: "po8", title: "Hộp Thẻ Bài Pokemon Scarlet & Violet Koraidon Elite Trainer Box RED", desc: "123", price: "1,499,000", img: "./images/y8.webp", sale: "10", status: "active", deleted: "false" },
        { id: "po9", title: "Hộp Thẻ Bài Pokemon Sword & Shield Brilliant Stars Elite Trainer Box", desc: "123", price: "1,199,000", img: "./images/y9.webp", sale: "10", status: "active", deleted: "false" },
        { id: "po10", title: "Hộp Thẻ Bài Pokemon Scarlet & Violet ORIGINAL Booster Box", desc: "123", price: "2,990,000", img: "./images/y10.webp", sale: "10", status: "active", deleted: "false" }
      ],
      tonghop: [
        { id: "pk1", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "pk2", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "pk3", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "pk4", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "pk5", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "pk6", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "pk7", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "pk8", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "pk9", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" }
      ],
      phukien: [
        { id: "hh1", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "hh2", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "hh3", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "hh4", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "hh5", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "hh6", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "hh7", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "hh8", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        { id: "hh9", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" }
      ]
    };

    // Lưu biến tĩnh lên Local Storage để sử dụng lần sau
    const staticProductsJSON = JSON.stringify(staticProducts);
    localStorage.setItem("myProducts", staticProductsJSON);

    // Trả về biến tĩnh
    return staticProducts;
  }
}

//--------------------------------------DANH SÁCH SẢN PHẨM CHÍNH-------------------------
const products = getProducts();
let allProducts = [];
const itemsPerPage = 5; // Số lượng sản phẩm trên mỗi trang
let currentPage = 1; // Trang hiện tại



// Lấy ra các phần tử HTML cần thiết
const productList = document.getElementById("product-list");
const pagination = document.getElementById("pagination");

// Hàm để hiển thị sản phẩm theo trang
function displayPage(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  let productsToDisplay = allProducts.slice(startIndex, endIndex);

  // Kiểm tra nếu số sản phẩm trên trang không đủ 10, thêm sản phẩm ẩn

  const tableBody = document.querySelector('#product-list tbody');
  tableBody.innerHTML = ""; // Xóa nội dung hiện tại

  productsToDisplay.forEach(function (product) {
    const tableRow = document.createElement("tr");
    const price = parseInt(product.price.replace(/,/g, ""));
    const sale = parseInt(product.sale);
    const priceBeforeSale = (price * (1 + sale / 100)).toLocaleString("vi-VN");
    tableRow.classList.add("product");
    tableRow.innerHTML = `
      <td><img src="${product.img}" alt="${product.title}"></td>
      <td><h3>${product.title}</h3></td>
      <td>${price.toLocaleString()}đ</td>
      <td><button class="btnStatus" id="status-${product.id}" style="background-color: ${product.status === 'active' ? 'green' : 'red'}">${product.status}</button></td>
      <td>
        <div>
          <button class="btn-adjustProduct">Chỉnh sửa</button>
          <button class="btn-deleteProduct" data-product-id="${product.id}">Xóa</button>
        </div>
      </td>
    `;
    tableBody.appendChild(tableRow);

    const btnStatus = tableRow.querySelector(`#status-${product.id}`);

    btnStatus.addEventListener('click', () => {
      if (btnStatus.textContent === 'active') {
        btnStatus.textContent = 'inactive';
        btnStatus.style.backgroundColor = 'red';
        const index = allProducts.findIndex(p => p.id === product.id);
        allProducts[index].status = 'inactive';
        localStorage.setItem('myProducts', JSON.stringify(products));
        document.cookie = "reloadPageProduct=true;";
      }
      else {
        btnStatus.textContent = 'active';
        btnStatus.style.backgroundColor = 'green';
        const index = allProducts.findIndex(p => p.id === product.id);
        allProducts[index].status = 'active';
        localStorage.setItem('myProducts', JSON.stringify(products));
        document.cookie = "reloadPageProduct=true;";
      }

    });

    function deleteProduct(btnDeleteProduct) {
      const productId = btnDeleteProduct.getAttribute("data-product-id");
      const index = allProducts.findIndex(p => p.id === productId);
      allProducts[index].deleted = "true";
      localStorage.setItem('myProducts', JSON.stringify(products));
      document.cookie = "reloadPageProduct=true;";
      alert("Xóa sản phẩm thành công!");
      location.reload();
    }
    
    const btnDeleteProduct = tableRow.querySelector(".btn-deleteProduct");
    btnDeleteProduct.addEventListener("click", () => {
      deleteProduct(btnDeleteProduct);
    });
    

    const btnAdjustProduct = tableRow.querySelector(".btn-adjustProduct");

    btnAdjustProduct.addEventListener("click", () => {
      const productId = btnDeleteProduct.getAttribute("data-product-id");

      

      for (const category in products) {
        const productsInCategory = products[category];
        const index = productsInCategory.findIndex(p => p.id === productId);
        if (index !== -1) {
          productsInCategory.splice(index, 1);

        }
      }



      document.cookie = "reloadPageProduct=true;";
      adjustProduct(product);
      btnForm.textContent = "Sửa sản phẩm";
    });
  });






  // Tạo các nút phân trang
  const pageCount = Math.ceil(allProducts.length / itemsPerPage);
  pagination.innerHTML = "";
  for (let i = 1; i <= pageCount; i++) {
    const pageButton = document.createElement("button");
    pageButton.classList.add("btn-pagination");
    pageButton.textContent = ""; // Set the button text to the page number
    if (i === currentPage) {
      pageButton.classList.add("active"); // Add "active" class to the current page
    }
    pageButton.addEventListener("click", () => {
      currentPage = i;
      displayPage(currentPage);
    });
    pagination.appendChild(pageButton);
  }
}





btnProducts.forEach(function (btnProduct) {
  btnProduct.addEventListener("click", () => {
    const productId = btnProduct.getAttribute("product-id");

    allProducts = products[productId].filter(product => product.status === "active" && product.deleted === "false").reverse();
    products[productId].reverse();
    currentPage = 1; // Reset trang về trang 1
    displayPage(currentPage);
    products[productId].reverse();
  });
});

displayPage();





const btnProductMenu = document.getElementById("product-menu");
const productContent = document.getElementById("product-content");
const orderContent = document.getElementById("order-content");
const menuContentTitle = document.querySelector('.menu-content-title');
const h2Content = menuContentTitle.querySelector('h2');

btnProductMenu.addEventListener("click", () => {
  productContent.style.display = "block";
  orderContent.style.display = "none";
  h2Content.innerHTML = "Danh sách sản phẩm";

});

const btnOrderMenu = document.getElementById("order-menu");
btnOrderMenu.addEventListener("click", () => {
  productContent.style.display = "none";
  orderContent.style.display = "block";
  h2Content.innerHTML = "Danh sách đơn hàng";
});


const btnChoices = document.querySelectorAll('.btn-choice');

btnChoices.forEach(btn => {
  btn.addEventListener('click', () => {
    btnChoices.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
  })
})
















// script.js
const openModalBtn = document.querySelector(".btn-add");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");
const addProductForm = document.getElementById("addProductForm");
const imageInput = document.getElementById("image");
const imagePreview = document.getElementById("imagePreview");
const btnForm = document.getElementById("btnForm");


// Mở modal khi nhấn nút "Thêm Sản Phẩm"
openModalBtn.addEventListener("click", () => {
  
  refreshForm();
  btnForm.textContent = "Thêm sản phẩm";
  modal.style.display = "block";
});

// Đóng modal khi nhấn nút "Đóng" hoặc bấm ngoài modal
closeBtn.addEventListener("click", () => {
  refreshForm();
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    refreshForm();
    modal.style.display = "none";
  }
});

// Xử lý sự kiện khi gửi form
addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Lấy thông tin sản phẩm từ form
  const category = document.getElementById("category").value;
  const productID = document.getElementById("productID").value; 
  const title = document.getElementById("title").value;
  const imageFile = document.getElementById("image").files[0];
  const desc = document.getElementById("desc").value;
  const price = document.getElementById("price").value;
  const sale = document.getElementById("sale").value;
  const status = document.getElementById("status").value; 

  
  // Kiểm tra xem đã chọn hình ảnh hay chưa
  if (!imageFile) {
    alert("Vui lòng chọn một hình ảnh.");
    return;
  }

  // Thêm sản phẩm vào mảng products
  const newProduct = {
    deleted: "false",
    id: productID, // Sử dụng giá trị ID từ trường nhập liệu
    title: title,
    desc: desc,
    price: price,
    img: "",
    sale: sale,
    status: status,
  };

  // Tạo một đối tượng FileReader để đọc hình ảnh và cập nhật nguồn ảnh
  const reader = new FileReader();
  reader.onload = (event) => {
    newProduct.img = event.target.result;

    // Sau khi thêm sản phẩm, đóng modal và làm các công việc khác
    modal.style.display = "none";

    // Thêm sản phẩm vào mảng products dựa trên danh mục
    if (products.hasOwnProperty(category)) {
      products[category].push(newProduct);

      // Lưu danh sách sản phẩm mới vào Local Storage
      const productsJSON = JSON.stringify(products);
      localStorage.setItem("myProducts", productsJSON);
    } else {
      console.error(`Danh mục "${category}" không tồn tại trong mảng sản phẩm.`);
    }
  };

  if(btnForm.textContent == "Thêm sản phẩm"){
    alert("Thêm sản phẩm thành công!");
    document.cookie = "reloadPageProduct=true;";
    location.reload();
    reader.readAsDataURL(imageFile);
  }
  else{
    alert("Sửa sản phẩm thành công!");
    document.cookie = "reloadPageProduct=true;";
    location.reload();
    reader.readAsDataURL(imageFile);
  }

  localStorage.setItem("myProducts", JSON.stringify(products));


});

function adjustProduct(product){
  refreshForm();
  const category = document.getElementById("category");
  const productID = document.getElementById("productID"); 
  const title = document.getElementById("title");
  const imageFile = document.getElementById("image");
  const desc = document.getElementById("desc");
  const price = document.getElementById("price");
  const sale = document.getElementById("sale");
  const status = document.getElementById("status"); 


  


  productID.value = product.id;
  title.value = product.title;
  imageFile.value = ''; // Clear the value of the "image" input element
  desc.value = product.desc;
  price.value = product.price;
  sale.value = product.sale;
  status.value = product.status;

  modal.style.display = "block";
}




function refreshForm(){
  const category = document.getElementById("category");
  const productID = document.getElementById("productID"); 
  const title = document.getElementById("title");
  const imageFile = document.getElementById("image");
  const desc = document.getElementById("desc");
  const price = document.getElementById("price");
  const sale = document.getElementById("sale");
  const status = document.getElementById("status"); 

  category.value = "";
  productID.value = "";
  title.value = "";
  imageFile.value = "";
  desc.value = "";
  price.value = "";
  sale.value = "";
  status.value = "";
}





// var users = JSON.parse(localStorage.getItem("users"));

// users.forEach(function (user) {
//   user.orderHistory.forEach(function (order) {
//     if (order.status === "Đang xử lý") {
//       console.log(`User ${user.username} has an order with status "Đang xử lý".`);
//     }
//   });
// });