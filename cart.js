
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

  // Kiểm tra tính hợp lệ của dữ liệu
  if (!isValidEmail(email)) {
    alert("Email không hợp lệ. Vui lòng kiểm tra lại.");
    return;
  }

  if (!isValidPassword(password)) {
    alert("Mật khẩu phải có ít nhất 6 ký tự.");
    return;
  }
  const haveUser = users.find((user) => user.email === email);

  if (!haveUser) {
    // Tạo một đối tượng người dùng mới
    const newUser = {
      email: email,
      password: password,
      isLoggedIn: false,
      cart: [] // Khởi tạo giỏ hàng rỗng cho người dùng mới
    };

    // Thêm người dùng mới vào mảng users
    users.push(newUser);

    // Lưu lại mảng users đã cập nhật vào localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Đặt lại giá trị của các trường nhập liệu
    document.getElementById("mailRegister").value = "";
    document.getElementById("passwordRegister").value = "";

    alert(`Người dùng ${email} đã được đăng ký.`);
    userMenuRegister.style.display = "none";
  }
  else {
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


btnRegister.addEventListener("click", () => {
  userMenuFalse.style.display = "none";
  userMenuRegister.style.display = "block";
});

btnUser.addEventListener("click", () => {
  if (isLoggedIn === false) {
    if (userMenuFalse.style.display === "none" && userMenuRegister.style.display === "none") {
      userMenuFalse.style.display = "block";
      userMenuRegister.style.display = "none"
    }
    else if (userMenuFalse.style.display === "none" && userMenuRegister.style.display === "block") {
      userMenuFalse.style.display = "block";
      userMenuRegister.style.display = "none"
    }
    else {
      userMenuFalse.style.display = "none";
      userMenuRegister.style.display = "none"
    }
  }
  else {
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

function handleLogin() {
  const userEmail = mailUser.value;
  const userPassword = passwordUser.value;

  if (!userEmail || !userPassword) {
    alert("Vui lòng nhập đầy đủ email và mật khẩu.");
    return;
  }

  const user = users.find((user) => user.email === userEmail && user.password === userPassword);

  if (user) {
    user.isLoggedIn = true;
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("users", JSON.stringify(users));

    alert(`Đăng nhập thành công! Chào mừng ${user.fullName} đến với trang web của chúng tôi.`);

    userMenuFalse.style.display = "none";
    userMenuTrue.style.display = "none";
  } else {
    alert("Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.");
  }
  document.cookie = "reloadPageProduct=true;";
  document.cookie = "reloadPageCart=true;";
  location.reload();
}

btnLogin.addEventListener("click", handleLogin);

function handleLogout() {
  const user = users.find((user) => user.isLoggedIn === true);
  user.isLoggedIn = false;

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("isLoggedIn", "false");

  alert(`Đăng xuất thành công! Tạm biệt ${user.fullName}, hẹn gặp lại.`);

  userMenuFalse.style.display = "none";
  userMenuTrue.style.display = "none";
  document.cookie = "reloadPageProduct=true;";
  document.cookie = "reloadPageCart=true;";
  location.reload();
}

btnLogout.addEventListener("click", handleLogout);










const user = users.find((user) => user.isLoggedIn === true);

if (user) {
  const cartUser = user.cart;
  const products = JSON.parse(localStorage.getItem("myProducts"));
  const productListSearch = document.getElementById("product-list");
  const menuConfirm = document.getElementById("menu-confirm");
  const cartHeader = document.getElementById("cart-header");

  const itemCart = [];

  cartUser.forEach((item, index) => {
    for (const category in products) {
      for (const product of products[category]) {
        if (product.title.toLowerCase().includes(item.productName.toLowerCase())) {
          itemCart.push({ product, quantity: item.quantity });
        }
      }
    }
  });
  displayFilteredProducts(itemCart);

  function displayFilteredProducts(filteredProducts) {
    // Xóa bỏ tất cả các sản phẩm hiện tại trong danh sách sản phẩm
    while (productListSearch.firstChild) {
      productListSearch.removeChild(productListSearch.firstChild);
    }

    // Hiển thị các sản phẩm đã lọc
    for (const item of filteredProducts) {
      const { product, quantity } = item; // Lấy thông tin sản phẩm và quantity

      const price = parseInt(product.price.replace(/,/g, ""));
      const sale = parseInt(product.sale);
      const priceBeforeSale = (price * (1 + sale / 100)).toFixed(0);
      const productItem = document.createElement("div");
      productItem.classList.add("product");
      productItem.innerHTML = `
        <div class="item-info">
          <img src="${product.img}" alt="${product.title}">
          <h4>${product.title}</h4>
        </div>
        <div class="item-quantity">
          <div class="form">
            <button class="decrease-button" data-product-id="${product.id}">-</button>
            <input type="text" name="quantity" id="quantity-${product.id}" value="${quantity}" min="1">
            <button class="increase-button" data-product-id="${product.id}">+</button>
          </div>
          <p><b><span class="delete-button" data-product-id="${product.id}">XÓA</span></b></p>
        </div>
        <div class="item-price">
          <p>${product.price}đ</p>
          <p><s>${priceBeforeSale}đ</s></p>
        </div>
      `;

      // ...

      // Trong sự kiện click cho nút tăng/giảm, sử dụng data-product-id để xác định sản phẩm
      const increaseButton = productItem.querySelector(`.increase-button[data-product-id='${product.id}']`);
      const decreaseButton = productItem.querySelector(`.decrease-button[data-product-id='${product.id}']`);
      const quantityInput = productItem.querySelector(`input[name='quantity'][id='quantity-${product.id}']`);
      const deleteButton = productItem.querySelector(`.delete-button[data-product-id='${product.id}']`);

      // Thêm sự kiện click cho nút tăng
      increaseButton.addEventListener("click", (event) => {
        const productId = event.target.getAttribute("data-product-id");
        const quantityInput = document.querySelector(`input[name='quantity'][id='quantity-${productId}']`);

        // Tăng giá trị input lên 1 đơn vị
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateCart(product.title, parseInt(quantityInput.value));
        updateTotalAmount();
      });

      // Thêm sự kiện click cho nút giảm
      decreaseButton.addEventListener("click", (event) => {
        const productId = event.target.getAttribute("data-product-id");
        const quantityInput = document.querySelector(`input[name='quantity'][id='quantity-${productId}']`);

        // Giảm giá trị input đi 1 đơn vị, nhưng không nhỏ hơn 1
        quantityInput.value = Math.max(parseInt(quantityInput.value) - 1, 1);
        updateCart(product.title, parseInt(quantityInput.value));
        updateTotalAmount();
      });

      deleteButton.addEventListener("click", () => {
        const productId = event.target.getAttribute("data-product-id");
        removeFromCart(product.title);
      });
      
      // Hàm để xóa sản phẩm khỏi giỏ hàng và cập nhật local storage
      function removeFromCart(productName) {
        const confirmed = window.confirm(`Bạn muốn xóa ${productName} phải không ?`);
      
        if (confirmed) {
          // User confirmed, proceed with the removal
          const existingCartItemIndex = user.cart.findIndex((item) => item.productName === productName);
      
          if (existingCartItemIndex !== -1) {
            // If the product exists in the cart, remove it
            user.cart.splice(existingCartItemIndex, 1);
            localStorage.setItem("users", JSON.stringify(users));
          }
      
          // Reload the page or update the cart display as needed
          document.cookie = "reloadPageProduct=true;";
          location.reload();
        }
      }
      

      productListSearch.appendChild(productItem);
    }

    updateTotalAmount();
  }

  function updateCart(productName, quantity) {
    const existingCartItem = user.cart.find((item) => item.productName === productName);

    if (existingCartItem) {
      // Cập nhật số lượng nếu sản phẩm đã tồn tại trong giỏ hàng
      existingCartItem.quantity = quantity;
    } else {
      // Thêm mới sản phẩm vào giỏ hàng nếu chưa tồn tại
      user.cart.push({ productName, quantity });
    }

    localStorage.setItem("users", JSON.stringify(users));

    // Thông báo thành công
    // alert("Sản phẩm đã được cập nhật trong giỏ hàng!");
    location.reload();  
  }

  function updateTotalAmount() {
    let totalAmount = 0;
    let amount = 0;
    for (const item of itemCart) {
      const { product, quantity } = item;
      const price = parseInt(product.price.replace(/,/g, ""));
      const totalPrice = price * quantity;
      amount += quantity;
      totalAmount += totalPrice;
    }

    // Cập nhật tổng số tiền trong phần tử menu-confirm
    menuConfirm.querySelector("p").textContent = `${totalAmount.toLocaleString()}đ`;
    cartHeader.querySelector("p").textContent = `${amount} Sản phẩm`;
    document.cookie = "reloadPageProduct=true;";
  }
}




// Get the necessary HTML elements
const productList = document.getElementById("product-list");
const menuConfirm = document.getElementById("menu-confirm");

// Add event listener for the "MUA HÀNG" button
menuConfirm.querySelector("button").addEventListener("click", () => {
  // Get the user who is currently logged in
  const user = users.find((user) => user.isLoggedIn === true);
  if(user){
    if(user.cart.length === 0) {
      alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm vào giỏ hàng trước khi đặt hàng.");
      return;
    }
    // Create an order object with the user's cart and total price
    const order = {
      user: user.username,
      cart: user.cart,
      totalPrice: calculateTotalPrice(user.cart),
      status: "Đang xử lý"
    };

    // Add the order to the user's order history
    user.orderHistory.push(order);

    // Clear the user's cart
    user.cart = [];

    // Save the updated user object to local storage
    localStorage.setItem("users", JSON.stringify(users));

    // Display a success message and refresh the page
    alert("Đặt hàng thành công!");
    document.cookie = "reloadPageAdmin=true;";
    document.cookie = "reloadPageProduct=true;";
    location.reload();
  }
  else{
    alert("Chưa đăng nhập");
  }
});




setInterval(reloadPage, 1000); // Check if the cookie value is true every second


function reloadPage() {
  const cookies = document.cookie.split(";"); // Get all cookies as an array
  let reloadPage = false;

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim(); // Remove any leading/trailing spaces
    if (cookie.startsWith("reloadPageCart=")) {
      reloadPage = cookie.substring("reloadPageCart=".length, cookie.length) === "true";
      break;
    }
  }

  if (reloadPage) {
    location.reload();
    document.cookie = "reloadPageCart=false"; // Set the cookie value to false
  }
}





// Function to calculate the total price of the cart
function calculateTotalPrice(cart) {
  let totalPrice = 0;
  for (const item of cart) {
    const product = findProductByName(item.productName);
    const price = parseInt(product.price.replace(/,/g, ""));
    totalPrice += price * item.quantity;
  }
  return totalPrice;
}

// Function to find a product by its name
function findProductByName(productName) {
  for (const category in products) {
    for (const product of products[category]) {
      if (product.title.toLowerCase() === productName.toLowerCase()) {
        return product;
      }
    }
  }
}

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





// Lấy danh sách người dùng từ localStorage
// let users = JSON.parse(localStorage.getItem("users"));

// Lấy thông tin người dùng hiện tại từ localStorage
// const currentUserEmail = localStorage.getItem("users");
const currentUser = users.find((user) => user.isLoggedIn === true);

// Hiển thị số lượng đơn hàng của người dùng
const orderCount = document.getElementById("order-count");
if (currentUser && currentUser.orderHistory) {
  orderCount.textContent = `${currentUser.orderHistory.length} Đơn`;
} else {
  orderCount.textContent = "0 Đơn";
}

// Hiển thị lịch sử đặt hàng của người dùng
const orderList = document.getElementById("order-list");

const productLookup = {};

for (const category in products) {
  for (const product of products[category]) {
    productLookup[product.title.toLowerCase()] = product;
  }
}

if (currentUser && currentUser.orderHistory && currentUser.orderHistory.length > 0) {
  currentUser.orderHistory.slice().reverse().forEach((order) => {
    const orderItem = document.createElement("div");
    orderItem.classList.add("product");

    const orderProductContainer = document.createElement("div");
    orderProductContainer.classList.add("item-info");

    let totalPrice = 0;

    order.cart.forEach((item) => {
      const product = productLookup[item.productName.toLowerCase()];

      if (product) {
        const orderProduct = document.createElement("div");
        orderProduct.innerHTML = `
          <img src="${product.img}" alt="${product.title}">
          <h4>${product.title}</h4>
          <p>${item.quantity} x ${product.price.toLocaleString()}đ</p>
        `;
        orderProductContainer.appendChild(orderProduct);
        totalPrice += item.quantity * product.price;
      }
    });

    orderItem.appendChild(orderProductContainer);

    const totalPriceElement = document.createElement("div");
    totalPriceElement.classList.add("item-price");
    totalPriceElement.innerHTML = `
      <p>Tổng tiền: ${order.totalPrice.toLocaleString()}đ</p>
    `;

    orderItem.appendChild(totalPriceElement);

    // Add order status
    const orderStatusElement = document.createElement("div");
    orderStatusElement.classList.add("item-status");

    if (order.status === "Đang xử lý") {
      orderStatusElement.innerHTML = `Trạng thái đơn hàng: <b style="color: red;">${order.status}</b>`;
    } else {
      orderStatusElement.innerHTML = `Trạng thái đơn hàng: <b style="color: green;">${order.status}</b>`;
    }

    orderItem.appendChild(orderStatusElement);
    // reverse(orderItem);
    orderList.appendChild(orderItem);
  });
} else {
  const noOrderItem = document.createElement("div");
  noOrderItem.classList.add("product");
  noOrderItem.textContent = "Bạn chưa từng đặt hàng.";
  orderList.appendChild(noOrderItem);
}