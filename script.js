
const emailInput = document.getElementById("emailInput");
const submitButton = document.querySelector(".emailPromo button");

submitButton.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    // The email address is valid, submit the form
    alert("Đăng ký thành công!");
    emailInput.value = "";
    // Add code to submit the form here
  } else {
    // The email address is invalid, display an error message
    alert("Địa chỉ email không hợp lệ. Vui lòng nhập địa chỉ email hợp lệ.");
  }
});

//------------------------------------HÀM XỬ LÝ ĐĂNG NHẬP--------------------------

// Lấy danh sách người dùng từ localStorage (nếu có)
var users = JSON.parse(localStorage.getItem("users"));

if (!users) {
  users = [
    {
      username: "user1",
      email: "user1@example.com",
      password: "password1",
      fullName: "Nguyễn Văn A",
      address: "123 Đường ABC, Quận XYZ, TP HCM",
      phoneNumber: "0123456789",
      isLoggedIn: false,
      cart: [],
      orderHistory: []
    },
    {
      username: "user2",
      email: "user2@example.com",
      password: "password2",
      fullName: "Trần Thị B",
      address: "456 Đường DEF, Quận UVW, TP HCM",
      phoneNumber: "0987654321",
      isLoggedIn: false,
      cart: [],
      orderHistory: []
    },
    // Thêm các người dùng khác ở đây
  ];

  // Lưu danh sách người dùng tĩnh vào localStorage
  localStorage.setItem("users", JSON.stringify(users));
}


localStorage.getItem("isLoggedIn","false");
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

const btnUser = document.querySelector(".fa-user");
const btnRegister = document.getElementById("btnRegister");
const userMenuFalse = document.querySelector(".user-menu-false");
const userMenuTrue = document.querySelector(".user-menu-true");
const userMenuRegister = document.querySelector(".user-menu-register");






// Lắng nghe sự kiện khi người dùng nhấp vào nút "Đăng ký"
const btnMakeRegister = document.getElementById("btnMakeRegister");
btnMakeRegister.addEventListener("click", () => {
  // Trích xuất dữ liệu từ các trường nhập liệu
  const email = document.getElementById("mailRegister").value.trim(); // Lấy email và loại bỏ dấu cách thừa
  const password = document.getElementById("passwordRegister").value;
  const fullName = document.getElementById("fullNameRegister").value;
  const address = document.getElementById("addressRegister").value;
  const phoneNumber = document.getElementById("phoneNumberRegister").value;

  // Kiểm tra tính hợp lệ của dữ liệu
  if (!email || !isValidEmail(email)) {
    alert("Email không hợp lệ. Vui lòng kiểm tra lại.");
    return;
  }

  if (!password || !isValidPassword(password)) {
    alert("Mật khẩu phải có ít nhất 6 ký tự.");
    return;
  }

  if (!fullName) {
    alert("Họ và tên không được để trống.");
    return;
  }

  if (!address) {
    alert("Địa chỉ không được để trống.");
    return;
  }

  if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
    alert("Số điện thoại không hợp lệ. Vui lòng kiểm tra lại.");
    return;
  }

  const haveUser = users.find((user) => user.email === email);

  if(!haveUser){
      // Tạo một đối tượng người dùng mới
  const newUser = {
    username: email.split("@")[0], // Lấy tên đăng nhập từ địa chỉ email
    email: email,
    password: password,
    fullName: fullName,
    address: address,
    phoneNumber: phoneNumber,
    isLoggedIn: false,
    cart: [], // Khởi tạo giỏ hàng rỗng cho người dùng mới
    orderHistory: [] // Khởi tạo lịch sử đặt hàng rỗng cho người dùng mới
  };

  // Thêm người dùng mới vào mảng users
  users.push(newUser);

  // Lưu lại mảng users đã cập nhật vào localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // Đặt lại giá trị của các trường nhập liệu
  document.getElementById("mailRegister").value = "";
  document.getElementById("passwordRegister").value = "";
  document.getElementById("fullNameRegister").value = "";
  document.getElementById("addressRegister").value = "";
  document.getElementById("phoneNumberRegister").value = "";

  alert(`Người dùng ${email} đã được đăng ký.`);
  userMenuRegister.style.display = "none";
  }
  else{
    alert("Email đã tồn tại");
  }


});

// Hàm kiểm tra tính hợp lệ của địa chỉ email
function isValidEmail(email) {
  // Sử dụng một biểu thức chính quy đơn giản để kiểm tra địa chỉ email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

// Hàm kiểm tra tính hợp lệ của mật khẩu
function isValidPassword(password) {
  return password.length >= 6;
}

function isValidPhoneNumber(phoneNumber) {
  // Sử dụng một biểu thức chính quy để kiểm tra số điện thoại
  const phonePattern = /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5|8|9]|9[0-4|6-9])[0-9]{7}$/;
  return phonePattern.test(phoneNumber);
}





btnRegister.addEventListener("click", ()=>{
  userMenuFalse.style.display = "none";
  userMenuRegister.style.display = "block";
});

btnUser.addEventListener("click", () => {
  if(isLoggedIn === false){
    if (userMenuFalse.style.display === "none" && userMenuRegister.style.display === "none") {
      userMenuFalse.style.display = "block";
      userMenuRegister.style.display = "none"
    } 
    else if(userMenuFalse.style.display === "none" && userMenuRegister.style.display === "block") {
      userMenuFalse.style.display = "block";
      userMenuRegister.style.display = "none"
    }
    else{
      userMenuFalse.style.display = "none";
      userMenuRegister.style.display = "none"
    }
  }
  else{
    if (userMenuTrue.style.display === "none") {
      userMenuTrue.style.display = "block";
    } else {
      userMenuTrue.style.display = "none";
    }
  }
  

});

const mailUser = document.getElementById("mailUser");
const passwordUser = document.getElementById("passwordUser");
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");

btnLogin.addEventListener("click", ()=>{
  let userEmail = mailUser.value;
  let userPassword = passwordUser.value;

  if(!userEmail || !userPassword){
    alert("Vui lòng nhập đầy đủ email và mật khẩu.");
    return; // Không thực hiện đăng nhập nếu thiếu thông tin
  }

  const user = users.find((user) => user.email === userEmail && user.password === userPassword);

  if (user) {
    // Đăng nhập thành công
    user.isLoggedIn = true;
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Đăng nhập thành công!");

    // Đặt cookie để lưu trạng thái đăng nhập trong 7 ngày (hoặc thời gian bạn muốn)
    // setCookie("isLoggedIn", "true", 7);

    // Hiển thị nút đăng xuất và ẩn nút đăng nhập
    userMenuFalse.style.display = "none";
    userMenuTrue.style.display = "none";
  
  } else {
    // Đăng nhập thất bại
    alert("Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.");
  }
  location.reload();
});

btnLogout.addEventListener("click", () => {



  const user = users.find((user) => user.isLoggedIn === true);
  if(user){
    user.isLoggedIn = false;
  // setCookie("isLoggedIn", "false", 7);
  localStorage.setItem("users", JSON.stringify(users));
  // Đăng xuất

  localStorage.setItem("isLoggedIn", "false");
  
  alert("Đăng xuất thành công!");

  // Xóa cookie để đánh dấu người dùng đã đăng xuất
  // setCookie("isLoggedIn", "false", 7);

  // Hiển thị nút đăng nhập và ẩn nút đăng xuất
  userMenuFalse.style.display = "none";
  userMenuTrue.style.display = "none";

  }
  location.reload();
});







// Lấy tham chiếu đến nút hoặc liên kết mở tab mới
const openCartInNewTabButton = document.getElementById("btnCart");

// Thêm sự kiện click cho nút hoặc liên kết
openCartInNewTabButton.addEventListener("click", function() {
  // URL của trang giỏ hàng
  const cartPageURL = "cart.html"; // Thay thế bằng URL của trang giỏ hàng thực tế

  // Mở tab mới và chuyển hướng đến trang giỏ hàng
  window.open(cartPageURL, "_blank");
});




// ----------------------------------------------------------------------------

// -------------------------------------------------------------


const btnSelects = document.querySelectorAll(".btn-select");

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
        {id: "yu1", title: "Hộp bài kỉ niệm 25 năm ", desc: "123", price: "1,690,000", img: "./images/p1.jpg", sale: "10", status: "inactive", deleted: "false" },
        {id: "yu2", title: "Hộp Thẻ Bài Yugioh Legend Of Blue Eyes White Dragon", desc: "123", price: "1,990,000", img: "./images/p2.jpg", sale: "15", status: "active", deleted: "false" },
        {id: "yu3", title: "Hộp Thẻ Bài Yugioh Invasion Of Chaos", desc: "123", price: "2,299,000", img: "./images/p3.jpg", sale: "17", status: "active", deleted: "false" },
        {id: "yu4", title: "Hộp Thẻ Bài Yugioh Metal Raiders", desc: "123", price: "1,990,000", img: "./images/p4.jpg", sale: "12", status: "active", deleted: "false" },
        {id: "yu5", title: "Hộp Thẻ Bài Yugioh Spell Ruler", desc: "123", price: "1,990,000", img: "./images/p5.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "yu6", title: "Hộp Thẻ Bài Yugioh Pharaoh’s Servant", desc: "123", price: "2,099,000", img: "./images/p6.jpg", sale: "19", status: "active", deleted: "false" },
        {id: "yu7", title: "Hộp Thẻ Bài Yugioh Battles Of Legend Monstrous Revenge", desc: "123", price: "169,000", img: "./images/p7.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "yu8", title: "Hộp Thẻ Bài Yugioh Wild Survivors", desc: "123", price: "1,899,000", img: "./images/p8.jpg", sale: "13", status: "active", deleted: "false" },
        {id: "yu9", title: "Hộp Thẻ Bài Yugioh Legendary Collection: 25th Anniversary Edition", desc: "123", price: "890,000", img: "./images/p9.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "yu10", title: "Hộp Thẻ Bài Yugioh Speed Duel GX: Duelists Of Shadows", desc: "123", price: "1,990,000", img: "./images/p10.webp", sale: "10", status: "active", deleted: "false" },
        {id: "yu11", title: "Hộp Thẻ Bài Yugioh M2 Duelist Box Dark World", desc: "123", price: "399,000", img: "./images/p11.webp", sale: "10", status: "active", deleted: "false" }
      ],
      pokemon: [
        {id: "po1", title: "Hộp Thẻ Bài Pokemon Sword & Shield ASTRAL RADIANCE", desc: "123", price: "1,499,000", img: "./images/y1.webp", sale: "10", status: "active", deleted: "false" },
        {id: "po2", title: "Hộp Thẻ Bài Pokemon Sword & Shield Battle Academy - Pikachu Mewtwo Và Charizard", desc: "123", price: "1,199,000", img: "./images/y2.webp", sale: "10", status: "active", deleted: "false" },
        {id: "po3", title: "Hộp Thẻ Bài Pokemon Battle Styles - Booster Box", desc: "123", price: "3,699,000", img: "./images/y3.webp", sale: "10", status: "active", deleted: "false" },
        {id: "po4", title: "Hộp Thẻ Bài Pokemon Sun & Moon - Alolan Sandslash Và Alolan Ninetales Trainer Kit", desc: "123", price: "449,000", img: "./images/y4.webp", sale: "10", status: "active", deleted: "false" },
        {id: "po5", title: "Gói Thẻ Bài Pokemon Scarlet & Violet PALDEA EVOLVED Booster Box", desc: "123", price: "3,290,000", img: "./images/y5.webp", sale: "10", status: "active", deleted: "false" },
        {id: "po6", title: "Gói Thẻ Bài Pokemon Scarlet & Violet OBSIDIAN FLAMES Booster Box", desc: "123", price: "3,290,000", img: "./images/y6.webp", sale: "10", status: "active", deleted: "false" },
        {id: "po7", title: "Hộp Thẻ Bài Pokemon Scarlet & Violet Miraidon Elite Trainer Box PURPLE", desc: "123", price: "1,499,000", img: "./images/y7.webp", sale: "10", status: "active", deleted: "false" },
        {id: "po8", title: "Hộp Thẻ Bài Pokemon Scarlet & Violet Koraidon Elite Trainer Box RED", desc: "123", price: "1,499,000", img: "./images/y8.webp", sale: "10", status: "active", deleted: "false" },
        {id: "po9", title: "Hộp Thẻ Bài Pokemon Sword & Shield Brilliant Stars Elite Trainer Box", desc: "123", price: "1,199,000", img: "./images/y9.webp", sale: "10", status: "active", deleted: "false" },
        {id: "po10", title: "Hộp Thẻ Bài Pokemon Scarlet & Violet ORIGINAL Booster Box", desc: "123", price: "2,990,000", img: "./images/y10.webp", sale: "10", status: "active", deleted: "false" }
      ],
      tonghop: [
        {id: "pk1", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "pk2", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "pk3", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "pk4", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "pk5", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "pk6", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "pk7", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "pk8", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "pk9", title: "hộp bài kỉ niệm 25 năm 3", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" }
      ],
      phukien: [
        {id: "hh1", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "hh2", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "hh3", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "hh4", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "hh5", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "hh6", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "hh7", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "hh8", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" },
        {id: "hh9", title: "hộp bài kỉ niệm 25 năm 4", desc: "123", price: "169.000", img: "./images/p1.jpg", sale: "10", status: "active", deleted: "false" }
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
let activeProducts = [];
const itemsPerPage = 10; // Số lượng sản phẩm trên mỗi trang
let currentPage = 1; // Trang hiện tại

const btnProducts = document.querySelectorAll(".btn-select");
const scBottom = document.querySelector(".sc-bottom");

// Lấy ra các phần tử HTML cần thiết
const productList = document.getElementById("product-list");
const pagination = document.getElementById("pagination");

// Hàm để hiển thị sản phẩm theo trang
function displayPage(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  let productsToDisplay = activeProducts.slice(startIndex, endIndex);

  // Kiểm tra nếu số sản phẩm trên trang không đủ 10, thêm sản phẩm ẩn
  if (productsToDisplay.length < itemsPerPage) {
    const hiddenProductsCount = itemsPerPage - productsToDisplay.length;
    const hiddenProducts = Array(hiddenProductsCount).fill({
      title: "",
      price: "",
      img: "",
      sale: "",
    });
    productsToDisplay = productsToDisplay.concat(hiddenProducts);
  }

  productList.innerHTML = ""; // Xóa nội dung hiện tại

  productsToDisplay.forEach(function (product) {
    const listItem = document.createElement("div");

    if (product.title == "") {
      listItem.classList.add("product-hidden");
      listItem.innerHTML = `
      <img src="${product.img}" alt="${product.title}">
      <h4>${product.title}</h4>
      <p> ${product.price}</p>
      <p> ${product.sale}</p>
    `;
    }
    else {
      const price = parseInt(product.price.replace(/,/g, ""));
      const sale = parseInt(product.sale);
      const priceBeforeSale = (price * (1 + sale / 100)).toLocaleString("vi-VN");
      listItem.classList.add("product");
      listItem.innerHTML = `
        <img src="${product.img}" alt="${product.title}">
        <h5>${product.title}</h5>
        <div class="product-price">
            <p>${price.toLocaleString()} đ</p>
            <p><s>${priceBeforeSale.toLocaleString()} đ</s></p>
        </div>
      
    `;
    }

    productList.appendChild(listItem);
  });




  // Tạo các nút phân trang
  const pageCount = Math.ceil(activeProducts.length / itemsPerPage);
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
    activeProducts = products[productId].filter((product) => product.status === "active" && product.deleted === "false").reverse();
    currentPage = 1; // Reset trang về trang 1
    displayPage(currentPage);
  });
});

displayPage();

//----------------------------------------------------------------------------------------


// ---------------------------ĐOẠN THANH SEARCH SẢN PHẨM--------------------------

// Lấy tham chiếu đến các phần tử HTML
const searchForm = document.querySelector(".inner-search form");
const searchInput = document.querySelector("#searchInput");
const productListSearch = document.getElementById("product-list-search");

// Bắt sự kiện input trên ô tìm kiếm
searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.trim().toLowerCase();
  if (searchValue === "") {
    // Nếu ô tìm kiếm trống, ẩn danh sách sản phẩm
    productListSearch.style.display = "none";
  } else {
    filterProducts(searchValue);
  }
  // Gọi hàm để lọc sản phẩm và hiển thị kết quả
});

searchForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn chặn form gửi đi

  const searchValue = searchInput.value.trim().toLowerCase();
  if (searchValue === "") {
    // Ẩn danh sách sản phẩm nếu không có nội dung tìm kiếm
    productListSearch.style.display = "none";
  } else {
    filterProducts(searchValue);
  }
  // Gọi hàm để lọc sản phẩm và hiển thị kết quả
});




document.addEventListener("click", function (event) {
  // Kiểm tra xem sự kiện click có xảy ra bên ngoài phần tìm kiếm không
  if (!(searchForm.contains(event.target) || productListSearch.contains(event.target))) {
    // Ẩn phần trình bày sản phẩm nếu click xảy ra bên ngoài
    productListSearch.style.display = "none";
  }
  else {
    productListSearch.style.display = "block";
  }
});





function filterProducts(searchValue) {
  // Lấy danh sách sản phẩm từ localStorage hoặc từ nguồn dữ liệu của bạn
  // const products = getProducts();

  // Tạo một mảng để lưu các sản phẩm đã lọc
  const filteredProducts = [];

  // Duyệt qua các sản phẩm và kiểm tra xem sản phẩm có chứa giá trị tìm kiếm không
  for (const category in products) {
    for (const product of products[category]) {
      if (product.title.toLowerCase().includes(searchValue) && product.status=== "active" && product.deleted === "false") {
        // Nếu sản phẩm thỏa mãn điều kiện, thêm vào mảng filteredProducts
        filteredProducts.push(product);
      }
    }
  }

  // Gọi hàm để hiển thị danh sách sản phẩm đã lọc
  displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
  // Xóa bỏ tất cả các sản phẩm hiện tại trong danh sách sản phẩm
  // while (productListSearch.firstChild) {
  //   productListSearch.removeChild(productListSearch.firstChild);
  // }
  productListSearch.innerHTML="";

  // Hiển thị các sản phẩm đã lọc
  for (const product of filteredProducts) {
    const price = parseInt(product.price.replace(/,/g, ""));
    const sale = parseInt(product.sale);
    const priceBeforeSale = (price * (1 + sale / 100)).toLocaleString("vi-VN");
    const productItem = document.createElement("div");
    productItem.classList.add("product-1");
    productItem.innerHTML = `
        <img src="${product.img}" alt="">
        <span>
            <h4>${product.title}</h4>
            <div>
              <p>${price.toLocaleString()} đ</p>
              <p><s>${priceBeforeSale.toLocaleString()} đ</s></p>
            </div>
        </span>
        `;
    productListSearch.appendChild(productItem);
  }

  // Hiển thị phần tìm kiếm
  productListSearch.style.display = "block";
}



// -------------------------------------------------------------------------------

//----------------------------------BOX MODAL CHO PRODUCT-----------------
const productListSearchModal = document.getElementById("product-list-search");
const productModalSearch = document.getElementById("productModalSearch");
const modalContentSearch = document.getElementById("modal-content-search");
const closeBtnSearch = document.querySelector(".close-search");

// Hàm để hiển thị modal với thông tin chi tiết sản phẩm
function openSearchModal(product) {
  const price = parseInt(product.price.replace(/,/g, ""));
  const sale = parseInt(product.sale);
  const priceBeforeSale = (price * (1 + sale / 100)).toLocaleString("vi-VN");
  modalContentSearch.innerHTML = `
  <div class="content-modal">
  <img src="${product.img}" >
  <div > 
    <div class="desc">
      <h4> ${product.title}</h4>
      <p> ${product.desc}</p>
    </div>

    <div class="price">
      <p>${price.toLocaleString()} đ</p>
      <p><s>${priceBeforeSale.toLocaleString()} đ</s></p>
    </div>
      

    <span>
      <div class="input-product">
        <button id="minusProductsSearch">-</button>
        <input type="text" id="quantitySearch" name="quantity" value="1" min="1">
        <button id="plusProductsSearch">+</button>
      </div>
      <button class="addProducts" data-product-id="${product.id}" id="addProductsSearch">Thêm vào giỏ hàng</button>
    </span>

  </div>
</div>
  `;

  productModalSearch.style.display = "block";

  const minusProductsSearch = document.getElementById("minusProductsSearch");
  const quantityProductSearch = document.getElementById("quantitySearch");
  let valueQuantityProductSearch = parseInt(quantityProductSearch.value);
  const plusProductsSearch = document.getElementById("plusProductsSearch");
  const addProductsSearch = document.getElementById("addProductsSearch");

  minusProductsSearch.addEventListener("click", () => {
    if (valueQuantityProductSearch > 1) {
      valueQuantityProductSearch--;
      quantityProductSearch.value = valueQuantityProductSearch;
    }
    console.log(valueQuantityProductSearch);
  });

  quantityProductSearch.addEventListener("input", () => {
    valueQuantityProductSearch = parseInt(quantityProductSearch.value);
    console.log(valueQuantityProductSearch);
  });

  plusProductsSearch.addEventListener("click", () => {
    valueQuantityProductSearch += 1;
    quantityProductSearch.value = valueQuantityProductSearch;
    console.log(valueQuantityProductSearch);
  });

  addProductsSearch.addEventListener("click", () => {
    const user = users.find((user) => user.isLoggedIn === true); // Tìm người dùng đang đăng nhập
    if(user){
      const productName = product.title; // Lấy tên sản phẩm
      const quantity = valueQuantityProductSearch; // Số lượng sản phẩm

    
      
      addCart(user, productName, quantity); // Gọi hàm để thêm sản phẩm vào giỏ hàng
    }
    else{
      alert("Chưa đăng nhập");
    }

  });
}



function addCart(user, productName, quantity){
  var productExist = false;
  for (const category in products) {
    for (const product of products[category]) {
      if (product.title.toLowerCase().includes(productName.toLowerCase())) {
        productExist = true;
      }
    }
  }
  if(productExist){
    console.log("Có SẢN PHẨM");
    const existingCartItem = user.cart.find((item) => item.productName === productName);

    if (existingCartItem) {
      // Cập nhật số lượng nếu sản phẩm đã tồn tại trong giỏ hàng
      existingCartItem.quantity += quantity;
    } else {
      // Thêm mới sản phẩm vào giỏ hàng nếu chưa tồn tại
      user.cart.push({ productName, quantity });
    }

    localStorage.setItem("users", JSON.stringify(users));

    // Thông báo thành công
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
    productModalSearch.style.display = "none"; // Ẩn modal sau khi thêm sản phẩm vào giỏ hàng
    document.cookie = "reloadPageCart=true;";
    location.reload();

  }
  else {
  // Không tìm thấy sản phẩm
  alert("Sản phẩm không tồn tại.");
  }
}

setInterval(reloadPage, 1000); // Check if the cookie value is true every second

document.cookie = "reloadPageProduct=false";

function reloadPage() {
  const cookies = document.cookie.split(";"); // Get all cookies as an array
  let reloadPage = false;

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim(); // Remove any leading/trailing spaces
    if (cookie.startsWith("reloadPageProduct=")) {
      reloadPage = cookie.substring("reloadPageProduct=".length, cookie.length) === "true";
      break;
    }
  }

  if (reloadPage) {
    location.reload();
    document.cookie = "reloadPageProduct=false"; // Set the cookie value to false
  }
}



  



// Hàm để đóng modal
function closeSearchModal() {
  productModalSearch.style.display = "none";
}

productListSearchModal.addEventListener("click", (event) => {
  const clickedProduct = event.target.closest(".product-1");
  if (clickedProduct) {
    const productName = clickedProduct.querySelector("h4").textContent; // Lấy tên sản phẩm
    const searchValue = searchInput.value.trim().toLowerCase();

    // Duyệt qua sản phẩm trong mảng products
    for (const category in products) {
      for (const product of products[category]) {
        if (product.title.toLowerCase() === productName.toLowerCase()) {
          // Tìm thấy sản phẩm đã bấm và lấy thông tin của nó
          openSearchModal(product)
        }
      }
    }
  }
});

// Xử lý sự kiện khi người dùng nhấp vào nút đóng modal
closeBtnSearch.addEventListener("click", closeSearchModal);

// Xử lý sự kiện khi người dùng nhấp vào nền đen để đóng modal
window.addEventListener("click", (event) => {
  if (event.target === productModalSearch) {
    closeSearchModal();
  }
});


// -------------------------------------------------------------

//--------------------------------------------------------------------------
//---------------------------------------MÃ SẢN PHẨM MỚI--------------------

// const products = getProducts();
let activeYughiohProducts = products.yughioh1.filter(product => product.status === "active" && product.deleted === "false").reverse();
let activePokemonProducts = products.pokemon.filter(product => product.status === "active" && product.deleted === "false").reverse(); // Thêm danh sách sản phẩm Pokemon

let currentYughiohPage = 1; // Trang hiện tại cho Yu-Gi-Oh
let currentPokemonPage = 1; // Trang hiện tại cho Pokemon
const productsPerPage = 2; // Số lượng sản phẩm trên mỗi trang

// Lấy ra các phần tử HTML cần thiết cho cả hai loại sản phẩm
const newYughiOhProductList = document.getElementById("sc-products-1");
const newYughiohPagination = document.getElementById("paginationNewProduct-1");
const newPokemonProductList = document.getElementById("sc-products");
const newPokemonPagination = document.getElementById("paginationNewProduct-2");

// Hàm để hiển thị sản phẩm theo trang cho Yu-Gi-Oh
function displayYughiohProductPage(pageNumber) {
  const startIndex = (pageNumber - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  let productsToDisplay = activeYughiohProducts.slice(startIndex, endIndex);

  // Kiểm tra nếu số sản phẩm trên trang không đủ 2, thêm sản phẩm ẩn
  if (productsToDisplay.length < productsPerPage) {
    const hiddenProductsCount = productsPerPage - productsToDisplay.length;
    const hiddenProducts = Array(hiddenProductsCount).fill({
      title: "",
      price: "",
      img: "",
      sale: "",
    });
    productsToDisplay = productsToDisplay.concat(hiddenProducts);
  }

  newYughiOhProductList.innerHTML = ""; // Xóa nội dung hiện tại

  productsToDisplay.forEach(function (product) {
    const listItem = document.createElement("div");

    if (product.title === "") {
      listItem.classList.add("product-hidden");
      listItem.innerHTML = `
        <img src="${product.img}" alt="${product.title}">
        <h4>${product.title}</h4>
        <p>${product.price}</p>
        <p>${product.sale}</p>
      `;
    } else {
      const price = parseInt(product.price.replace(/,/g, ""));
      const sale = parseInt(product.sale);
      const priceBeforeSale = (price * (1 + sale / 100)).toLocaleString("vi-VN");

      listItem.classList.add("product");
      listItem.innerHTML = `
        <img src="${product.img}" alt="${product.title}">
        <h5>${product.title}</h5>
        <div class="product-price">
          <p>${price.toLocaleString()} đ</p>
          <p><s>${priceBeforeSale.toLocaleString()} đ</s></p>
        </div>
      `;
    }

    newYughiOhProductList.appendChild(listItem);

    
    
    
  });

  // Tạo các nút phân trang cho Yu-Gi-Oh
  const yughiohProductPageCount = Math.ceil(activeYughiohProducts.length / productsPerPage);
  newYughiohPagination.innerHTML = "";
  for (let i = 1; i <= 4; i++) { // Thay đổi số lần lặp dựa trên số trang thực tế
    const pageButton = document.createElement("button");
    pageButton.textContent = ""; // Đặt số trang vào nút
    if (i === currentYughiohPage) {
      pageButton.classList.add("active"); // Thêm class "active" cho nút hiện tại
    }
    else {
      pageButton.classList.remove("active");
    }
    pageButton.addEventListener("click", () => {
      currentYughiohPage = i;
      displayYughiohProductPage(currentYughiohPage);
    });
    newYughiohPagination.appendChild(pageButton);
  }
}

// Hàm để hiển thị sản phẩm theo trang cho Pokemon
function displayPokemonProductPage(pageNumber) {
  const startIndex = (pageNumber - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  let productsToDisplay = activePokemonProducts.slice(startIndex, endIndex);

  // Kiểm tra nếu số sản phẩm trên trang không đủ 2, thêm sản phẩm ẩn
  if (productsToDisplay.length < productsPerPage) {
    const hiddenProductsCount = productsPerPage - productsToDisplay.length;
    const hiddenProducts = Array(hiddenProductsCount).fill({
      title: "",
      price: "",
      img: "",
      sale: "",
    });
    productsToDisplay = productsToDisplay.concat(hiddenProducts);
  }

  newPokemonProductList.innerHTML = ""; // Xóa nội dung hiện tại

  productsToDisplay.forEach(function (product) {
    const listItem = document.createElement("div");

    if (product.title === "") {
      listItem.classList.add("product-hidden");
      listItem.innerHTML = `
        <img src="${product.img}" alt="${product.title}">
        <h4>${product.title}</h4>
        <p>${product.price}</p>
        <p>${product.sale}</p>
      `;
    } else {
      const price = parseInt(product.price.replace(/,/g, ""));
      const sale = parseInt(product.sale);
      const priceBeforeSale = (price * (1 + sale / 100)).toLocaleString("vi-VN");

      listItem.classList.add("product");
      listItem.innerHTML = `
        <img src="${product.img}" alt="${product.title}">
        <h5>${product.title}</h5>
        <div class="product-price">
          <p>${price.toLocaleString()} đ</p>
          <p><s>${priceBeforeSale.toLocaleString()} đ</s></p>
        </div>
      `;
    }

    newPokemonProductList.appendChild(listItem);
  });

  // Tạo các nút phân trang cho Pokemon
  const pokemonProductPageCount = Math.ceil(activePokemonProducts.length / productsPerPage);
  newPokemonPagination.innerHTML = "";
  for (let i = 1; i <= 4; i++) { // Thay đổi số lần lặp dựa trên số trang thực tế
    const pageButton = document.createElement("button");
    pageButton.textContent = ""; // Đặt số trang vào nút
    if (i === currentPokemonPage) {
      pageButton.classList.add("active"); // Thêm class "active" cho nút hiện tại
    }
    else {
      pageButton.classList.remove("active");
    }
    pageButton.addEventListener("click", () => {
      currentPokemonPage = i;
      displayPokemonProductPage(currentPokemonPage);
    });
    newPokemonPagination.appendChild(pageButton);
  }
}

displayYughiohProductPage(currentYughiohPage);
displayPokemonProductPage(currentPokemonPage);

function autoDisplayNewProduct() {
  if (currentYughiohPage > 3) {
    currentYughiohPage = 1;
  } else {
    currentYughiohPage++;
  }

  if (currentPokemonPage > 3) {
    currentPokemonPage = 1;
  } else {
    currentPokemonPage++;
  }

  displayYughiohProductPage(currentYughiohPage);
  displayPokemonProductPage(currentPokemonPage);
}

setInterval(autoDisplayNewProduct, 3000);



//---------------------------------------------------------------------------------------
// ------------------------------------------BOX MODAL SẢN PHẨM MỚI-----------------------

newYughiOhProductList.addEventListener("click", (event) => {
  const clickedProduct = event.target.closest(".product");
  if (clickedProduct) {
    const productName = clickedProduct.querySelector("h5").textContent; // Lấy tên sản phẩm
    const searchValue = searchInput.value.trim().toLowerCase();

    // Duyệt qua sản phẩm trong mảng products
    for (const category in products) {
      for (const product of products[category]) {
        if (product.title.toLowerCase() === productName.toLowerCase()) {
          // Tìm thấy sản phẩm đã bấm và lấy thông tin của nó
          openSearchModal(product)
        }
      }
    }
  }
});

newPokemonProductList.addEventListener("click", (event) => {
  const clickedProduct = event.target.closest(".product");
  if (clickedProduct) {
    const productName = clickedProduct.querySelector("h5").textContent; // Lấy tên sản phẩm
    const searchValue = searchInput.value.trim().toLowerCase();

    // Duyệt qua sản phẩm trong mảng products
    for (const category in products) {
      for (const product of products[category]) {
        if (product.title.toLowerCase() === productName.toLowerCase()) {
          // Tìm thấy sản phẩm đã bấm và lấy thông tin của nó
          openSearchModal(product)
        }
      }
    }
  }
});

const productListModal = document.getElementById("product-list");
productListModal.addEventListener("click", (event) => {
  const clickedProduct = event.target.closest(".product");
  if (clickedProduct) {
    const productName = clickedProduct.querySelector("h5").textContent; // Lấy tên sản phẩm
    const searchValue = searchInput.value.trim().toLowerCase();

    // Duyệt qua sản phẩm trong mảng products
    for (const category in products) {
      for (const product of products[category]) {
        if (product.title.toLowerCase() === productName.toLowerCase()) {
          // Tìm thấy sản phẩm đã bấm và lấy thông tin của nó
          openSearchModal(product)
        }
      }
    }
  }
});

