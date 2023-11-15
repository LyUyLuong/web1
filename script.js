
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
      orderHistory: [],
      admin: false
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
      orderHistory: [],
      admin: false
    },
    {
      username: "admin",
      email: "admin@gmail.com",
      password: "admin123",
      fullName: "LUL",
      address: "",
      phoneNumber: "",
      isLoggedIn: false,
      cart: [],
      orderHistory: [],
      admin: true
    }
    // Thêm các người dùng khác ở đây
  ];

  // Lưu danh sách người dùng tĩnh vào localStorage
  // localStorage.setItem("users", JSON.stringify(users));
  localStorage.seetItem("users", JSON.stringify(users));
}


// localStorage.getItem("isLoggedIn","false");
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

const btnUser = document.querySelector(".fa-user");
const btnRegister = document.getElementById("btnRegister");
const userMenuFalse = document.querySelector(".user-menu-false");
const userMenuTrue = document.querySelector(".user-menu-true");
const userMenuRegister = document.querySelector(".user-menu-register");

const btnAdmin = document.querySelector(".fa-gear");

btnAdmin.addEventListener("click", () => {
  window.location.href = "admin.html";
});



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

  if (!haveUser) {
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

function isValidPhoneNumber(phoneNumber) {
  // Sử dụng một biểu thức chính quy để kiểm tra số điện thoại
  const phonePattern = /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5|8|9]|9[0-4|6-9])[0-9]{7}$/;
  return phonePattern.test(phoneNumber);
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

btnLogin.addEventListener("click", () => {
  let userEmail = mailUser.value;
  let userPassword = passwordUser.value;

  if (!userEmail || !userPassword) {
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

    if (user.admin === true) {
      localStorage.setItem("isAdmin", "true");
    } else {
      localStorage.setItem("isAdmin", "false");
    }

    userMenuFalse.style.display = "none";
    userMenuTrue.style.display = "none";

  } else {
    // Đăng nhập thất bại
    alert("Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.");
  }
  document.cookie = "reloadPageProduct=true;";
  document.cookie = "reloadPageCart=true;";
  location.reload();
});

// Lấy trạng thái admin từ localStorage
const isAdmin = localStorage.getItem("isAdmin");

if (isAdmin === "true") {
  // Hiển thị nút Admin
  btnAdmin.style.display = "block";
}


btnLogout.addEventListener("click", () => {



  const user = users.find((user) => user.isLoggedIn === true);
  if (user) {
    user.isLoggedIn = false;
    // setCookie("isLoggedIn", "false", 7);
    localStorage.setItem("users", JSON.stringify(users));
    // Đăng xuất

    localStorage.setItem("isLoggedIn", "false");

    alert("Đăng xuất thành công!");

    // Xóa cookie để đánh dấu người dùng đã đăng xuất
    // setCookie("isLoggedIn", "false", 7);

    // Hiển thị nút đăng nhập và ẩn nút đăng xuất
    localStorage.setItem("isAdmin", "false");
    userMenuFalse.style.display = "none";
    userMenuTrue.style.display = "none";

  }
  document.cookie = "reloadPageProduct=true;";
  document.cookie = "reloadPageCart=true;";
  location.reload();
});







// Lấy tham chiếu đến nút hoặc liên kết mở tab mới
const openCartInNewTabButton = document.getElementById("btnCart");

// Thêm sự kiện click cho nút hoặc liên kết
openCartInNewTabButton.addEventListener("click", function () {
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
        { id: "yu11", title: "Hộp Thẻ Bài Yugioh M2 Duelist Box Dark World", desc: "123", price: "399,000", img: "./images/p11.webp", sale: "10", status: "active", deleted: "false" },

        { id: "yu12", title: "[ĐẶT TRƯỚC] Hộp Thẻ Bài Yugioh Valiant Smashers Booster Box - Chính Hãng Konami ", desc: `[ĐẶT TRƯỚC] Hộp Thẻ Bài Yugioh Valiant Smashers Booster Box - Chính Hãng Konami

        Ngày phát hành dự kiến: 16/11/2023
        
        Có hàng tại Việt Nam từ 10 ~ 12 ngày kể từ ngày phát hành`, price: "1,849,000", img: "./images/yu12.jpg", sale: "10", status: "active", deleted: "false" },


        { id: "yu13", title: "[ĐẶT TRƯỚC] Hộp Thẻ Bài Yugioh Maze Of Millennia Booster Box ", desc: ` [ĐẶT TRƯỚC] Hộp Thẻ Bài Yugioh Maze of Millennia Booster Box - Chính Hãng Konami

        Ngày phát hành dự kiến: 19/01/2024
        
        Có hàng tại Việt Nam từ 10 ~ 12 ngày kể từ ngày phát hành
        
        Mỗi hộp có 24 Booster Pack, mỗi pack có 7 lá bài`, price: "1,849,000", img: "./images/yu13.jpg", sale: "10", status: "active", deleted: "false" },


        { id: "yu14", title: "[ĐẶT TRƯỚC] Hộp Thẻ Bài Yugioh 2-Player Starter Set Structure Deck / Starter Deck ", desc: `[ĐẶT TRƯỚC] Hộp Thẻ Bài Yugioh 2-Player Starter Set

        Structure Deck / Starter Deck - Chính Hãng Konami - Phát hành tháng 01.2024
        Ngày phát hành dự kiến: 26/01/2024
        
        Có hàng tại Việt Nam từ 10 ~ 12 ngày kể từ ngày phát hành
        
        Mỗi hộp có 02 bộ bài hoàn chỉnh có thể chơi ngay, trong đó có:
        
        - 4 Ultra Rares
        - 40 Commons
        
        - 01 quyển sách 64 trang hướng dẫn cách chơi`, price: "549,000", img: "./images/yu14.webp", sale: "10", status: "active", deleted: "false" },


        { id: "yu15", title: "[ĐẶT TRƯỚC] Hộp Thẻ Bài Yugioh Phantom Nightmare Booster Box", desc: `[ĐẶT TRƯỚC] Hộp Thẻ Bài Yugioh Phantom Nightmare Booster Box

        Chính Hãng Konami - Phát hành tháng 02.2024
        
        Ngày phát hành dự kiến: 09/02/2024
        
        Có hàng tại Việt Nam từ 10 ~ 12 ngày kể từ ngày phát hành
        
        Mỗi hộp có 24 Booster Pack, mỗi pack có 9 lá bài`, price: "1,899,000", img: "./images/yu15.jpg", sale: "10", status: "active", deleted: "false" }
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
        { id: "th1", title: "Gói Thẻ Bài Yugioh 25th Anniversary Rarity Collection", desc: `Gói thẻ bài Yugioh 25th Anniversary Rarity Collection
        Chính hãng Konami
        Mỗi pack có 5 lá bài:
        - 2 Super Rares
        - 1 Secret Rare (25% cơ hội trúng Platinum Secret Rare hoặc Quarter Century Secret Rare)
        - 2 Ultra Rares (17% cơ hội trúng Collector's Rare hoặc Ultimate Rare)`, price: "109,000", img: "./images/th1.webp", sale: "8", status: "active", deleted: "false" },

        { id: "th2", title: "Gói Thẻ Bài Yugioh Age Of Overlord Booster Pack", desc: `Gói Thẻ Bài Yugioh Age of Overlord Booster Pack
        COMBO 3 PACK Special Edition - Chính Hãng Konami
        Mỗi gói gồm 03 booster packs, mỗi pack có 9 lá bài
        Phát hành 20.10.2023`, price: "169.000", img: "./images/th2.webp", sale: "13", status: "active", deleted: "false" },

        { id: "th3", title: "Hộp Thẻ Bài Yugioh M2 Beginner Box - GÓI MỞ RỘNG", desc: "Hộp thẻ bài Yugioh M2 Beginner Box - GÓI MỞ RỘNG - Speed Duel Streets of Battle City - Chính Hãng M2 DUEL Store", price: "279,000", img: "./images/th3.webp", sale: "10", status: "active", deleted: "false" },

        { id: "th4", title: "Hộp Thẻ Bài Yugioh M2 Beginner Box - YUGI MUTO DECK", desc: "Hộp thẻ bài Yugioh M2 Beginner Box - YUGI MUTO DECK - Speed Duel Streets of Battle City - Chính Hãng M2 DUEL Store", price: "189,000", img: "./images/th4.jpg", sale: "10", status: "active", deleted: "false" },

        { id: "th5", title: "Hộp Thẻ Bài Yugioh M2 Beginner Box - ARKANA DECK", desc: "Hộp thẻ bài Yugioh M2 Beginner Box - ARKANA DECK - Speed Duel Streets of Battle City - Chính Hãng M2 DUEL Store", price: "169.000", img: "./images/th5.webp", sale: "10", status: "active", deleted: "false" },

        { id: "th6", title: "Hộp Thẻ Bài Yugioh M2 Beginner Box - WEEVIL UNDERWOOD DECK", desc: `Hộp thẻ bài Yugioh M2 Beginner Box - WEEVIL UNDERWOOD DECK - Speed Duel Streets of Battle City

        Chính Hãng M2 DUEL Store`, price: "149,000", img: "./images/th6.webp", sale: "10", status: "active", deleted: "false" },

        { id: "th7", title: "Hộp Thẻ Bài Yugioh M2 Beginner Box - JOEY WHEELER DECK", desc: "Hộp thẻ bài Yugioh M2 Beginner Box - JOEY WHEELER DECK - Speed Duel Streets of Battle City - Chính Hãng M2 DUEL Store", price: "179,000", img: "./images/th7.webp", sale: "10", status: "active", deleted: "false" },

        { id: "th8", title: "Gói Thẻ Bài Yugioh Duelist Nexus Booster Pack - Chính Hãng", desc: `Gói thẻ bài Yugioh Duelist Nexus Booster Pack

        Chính hãng Konami - Phát Hành 28.07.2023
        
        Mỗi Booster Pack có 9 lá bài nguyên seal từ nhà sản xuất`, price: "89,000", img: "./images/th8.jpg", sale: "10", status: "active", deleted: "false" },

        { id: "th9", title: "Gói Thẻ Bài Yugioh Legendary Duelists: Soulburning Volcano", desc: `Gói Thẻ Bài Yugioh Legendary Duelists: Soulburning Volcano Booster Pack

        Chính Hãng Konami
        
        Yugioh Legendary Duelists: Soulburning Volcano là Booster Pack mới trong trò chơi thẻ bài Yu-Gi-Oh! (TCG), bao gồm các lá bài được sử dụng bởi các nhân vật Alito, Axel Brodie và Theodore Hamilton/Soulburner trong các series phim hoạt hình Yu-Gi-Oh!`, price: "139,000", img: "./images/th9.jpg", sale: "10", status: "active", deleted: "false" }

      ],
      phukien: [
        { id: "pk1", title: "Bọc Bài Yugioh Albaz - Ecclesia ", desc: `Bọc bài Yugioh Albaz - Ecclesia - Tri-Brigade Card Sleeves - Chính hãng Konami
        Mỗi gói bọc bài có 50 cái, nguyên seal từ nhà sản xuất
        Phát hành năm 2022`, price: "99,000", img: "./images/pk1.webp", sale: "11", status: "active", deleted: "false" },

        { id: "pk2", title: "Gói Dịch Vụ Bảo Vệ Lá Bài Cao Cấp M2 Ultra Protection", desc: `Gói dịch vụ bảo vệ lá bài cao cấp M2 Ultra Protection - M2UP

        M2 Ultra Protection là dịch vụ được cung cấp bởi M2 DUEL STORE giúp bạn bảo vệ lá bài được an toàn, xác thực, phục vụ cho việc bảo quản, trưng bày, giao dịch và vận chuyển. Áp dụng công nghệ sóng siêu âm tiên tiến để chống nước, độ ẩm và bụi bẩn làm hư hỏng lá bài của bạn.`, price: "99,000", img: "./images/pk2.png", sale: "10", status: "active", deleted: "false" },

        { id: "pk3", title: "Bọc Bài Japanese Size Matte Outer Sleeve - Trong Suốt ", desc: `Bọc bài Japanese Size Matte Outer Sleeve - Trong suốt - Chính Hãng Dragon Shield

        Mỗi hộp có 60 cái - Sản xuất tại Đan Mạch`, price: "198,000", img: "./images/pk3.webp", sale: "10", status: "active", deleted: "false" },

        { id: "pk4", title: "Bọc Bài Standard Size Perfect Fit Sealable Sleeves - CLEAR", desc: `Bọc bài Standard size: Dragon Shield Perfect Fit Sealable - 100 cái MÀU CLEAR TRONG SUỐT

        Phù hợp cho lá bài kích thước 63x88 mm như Pokemon, Magic, FOW`, price: "219,000", img: "./images/pk4.webp", sale: "10", status: "active", deleted: "false" },

        { id: "pk5", title: "Album Sưu Tập Yugioh Dark Magician Girl 9-Pocket Duelist Portfolio", desc: `Album sưu tập Yugioh Dark Magician Girl 9-Pocket Duelist Portfolio - Chính Hãng Konami

        Sức chứa 180 lá bài`, price: "549,000", img: "./images/pk5.jpg", sale: "10", status: "active", deleted: "false" },

        { id: "pk6", title: "Hộp Đựng Bài Yugioh Dark Magician Girl Card Case", desc: `Hộp đựng bài Yugioh Dark Magician Girl Card Case - Chính hãng Konami

        Sức chứa 70 lá bài Yugioh đã bọc với bọc bài chính hãng
        
        `, price: "179,000", img: "./images/pk6.jpg", sale: "10", status: "active", deleted: "false" },

        { id: "pk7", title: "Album Sưu Tập Pokemon Elite Series: Arceus 9-Pocket Zippered", desc: `Album sưu tập Pokemon Elite Series: Arceus 9-Pocket Zippered PRO-Binder - Chính hãng Ultra PRO

        * Trên album có thể có một số vết xước nhẹ hoặc vết trắng nhẹ ngay từ nhà sản xuất, không gây ảnh hưởng tới quá trình sử dụng
        
        * Sản phẩm album với thiết kế trang nhựa cố định sẽ có một tỉ lệ nhỏ gặp hiện tượng nhăn ở các trang album. Đây là hiện tượng bình thường, không ảnh hưởng tới quá trình sử dụng và biến mất sau một thời gian`, price: "1,399,000", img: "./images/pk7.jpg", sale: "10", status: "active", deleted: "false" },

        { id: "pk8", title: "Hộp Đựng Bài Trò Chơi Ngàn Năm - Tặng Kèm Bộ Xếp Hình Trò Chơi Ngàn Năm", desc: `HỘP ĐỰNG BÀI TRÒ CHƠI NGÀN NĂM - Millennium Puzzle - PHIÊN BẢN 2021

        TẶNG KÈM BỘ XẾP HÌNH TRÒ CHƠI NGÀN NĂM BÊN TRONG`, price: "549,000", img: "./images/pk8.jpg", sale: "10", status: "active", deleted: "false" },

        { id: "pk9", title: "Trang Album 9 Ô Rời Dành Cho Bìa Album - Chính Hãng BCW", desc: `Trang album rời (18 ô - 9 ô mỗi mặt) của hãng BCW - Dòng cao cấp cho người sưu tập chuyên nghiệp - 10 trang / sản phẩm`, price: "219,000", img: "./images/pk9.jpg", sale: "10", status: "active", deleted: "false" }

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
      if (product.title.toLowerCase().includes(searchValue) && product.status === "active" && product.deleted === "false") {
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
  productListSearch.innerHTML = "";

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
    if (user) {
      const productName = product.title; // Lấy tên sản phẩm
      const quantity = valueQuantityProductSearch; // Số lượng sản phẩm



      addCart(user, productName, quantity); // Gọi hàm để thêm sản phẩm vào giỏ hàng
    }
    else {
      alert("Chưa đăng nhập");
    }

  });
}



function addCart(user, productName, quantity) {
  var productExist = false;
  for (const category in products) {
    for (const product of products[category]) {
      if (product.title.toLowerCase().includes(productName.toLowerCase())) {
        productExist = true;
      }
    }
  }
  if (productExist) {
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

