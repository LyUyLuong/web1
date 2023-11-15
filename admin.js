

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
  localStorage.setItem("users", JSON.stringify(users));
}


localStorage.getItem("isLoggedIn", "false");
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

if (isAdmin === "false") {
  window.location.href = "index.html";
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
      const sl = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
      if (sl === true) {
        allProducts[index].deleted = "true";
        localStorage.setItem('myProducts', JSON.stringify(products));
        document.cookie = "reloadPageProduct=true;";
        alert("Xóa sản phẩm thành công!");
        location.reload();
      }
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

    allProducts = products[productId].filter(product => product.deleted === "false").reverse();
    currentPage = 1; // Reset trang về trang 1
    displayPage(currentPage);
    products[productId].reverse();
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
















// // script.js
// const openModalBtn = document.querySelector(".btn-add");
// const modal = document.getElementById("myModal");
// const closeBtn = document.querySelector(".close");
// const addProductForm = document.getElementById("addProductForm");
// // const imageInput = document.getElementById("image");

// const btnForm = document.getElementById("btnForm");


// // Mở modal khi nhấn nút "Thêm Sản Phẩm"
// openModalBtn.addEventListener("click", () => {

//   refreshForm();
//   btnForm.textContent = "Thêm sản phẩm";
//   modal.style.display = "block";
// });

// // Đóng modal khi nhấn nút "Đóng" hoặc bấm ngoài modal
// closeBtn.addEventListener("click", () => {
//   refreshForm();
//   modal.style.display = "none";
// });

// window.addEventListener("click", (event) => {
//   if (event.target == modal) {
//     refreshForm();
//     modal.style.display = "none";
//   }
// });

// // Xử lý sự kiện khi gửi form
// addProductForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Lấy thông tin sản phẩm từ form
//   const category = document.getElementById("category").value;
//   const productID = document.getElementById("productID").value;
//   const title = document.getElementById("title").value;
//   const imageFile = document.getElementById("image").files[0];
//   const imagePreview = document.getElementById("imagePreview");
  
//   const desc = document.getElementById("desc").value;
//   const price = document.getElementById("price").value;
//   const sale = document.getElementById("sale").value;
//   const status = document.getElementById("status").value;


//   // Kiểm tra xem đã chọn hình ảnh hay chưa
//   if (!imageFile) {
//     alert("Vui lòng chọn một hình ảnh.");
//     return;
//   }


//   /////

//   // var readerr = new FileReader();
//   // readerr.onload = (event) => {
//   //   imagePreview.src = e.target.result;

//   //   reader.readAsDataURL()
//   // };

//   ////


//   // Thêm sản phẩm vào mảng products
//   const newProduct = {
//     deleted: "false",
//     id: productID, // Sử dụng giá trị ID từ trường nhập liệu
//     title: title,
//     desc: desc,
//     price: price,
//     img: "",
//     sale: sale,
//     status: status,
//   };

//   // Tạo một đối tượng FileReader để đọc hình ảnh và cập nhật nguồn ảnh
//   const reader = new FileReader();
//   reader.onload = (event) => {
//     // newProduct.
//     newProduct.img = event.target.result;
//     imagePreview.scr = event.target.result;
//     console.log(event.target.result);


//     // Sau khi thêm sản phẩm, đóng modal và làm các công việc khác
//     modal.style.display = "none";

//     // Thêm sản phẩm vào mảng products dựa trên danh mục
//     if (products.hasOwnProperty(category)) {
//       products[category].push(newProduct);

//       // Lưu danh sách sản phẩm mới vào Local Storage
//       const productsJSON = JSON.stringify(products);
//       localStorage.setItem("myProducts", productsJSON);
//     } else {
//       console.error(`Danh mục "${category}" không tồn tại trong mảng sản phẩm.`);
//     }
//   };

//   if (btnForm.textContent == "Thêm sản phẩm") {
//     alert("Thêm sản phẩm thành công!");
//     document.cookie = "reloadPageProduct=true;";
//     location.reload();
//     reader.readAsDataURL(imageFile);
//   }
//   else {
//     alert("Sửa sản phẩm thành công!");
//     document.cookie = "reloadPageProduct=true;";
//     location.reload();
//     reader.readAsDataURL(imageFile);
//   }

//   localStorage.setItem("myProducts", JSON.stringify(products));


// });

// function adjustProduct(product) {
//   refreshForm();
//   const category = document.getElementById("category");
//   const productID = document.getElementById("productID");
//   const title = document.getElementById("title");
//   const imageFile = document.getElementById("image");
//   const desc = document.getElementById("desc");
//   const price = document.getElementById("price");
//   const sale = document.getElementById("sale");
//   const status = document.getElementById("status");




//   productID.value = product.id;
//   title.value = product.title;
//   imageFile.value = "";
//   desc.value = product.desc;
//   price.value = product.price;
//   sale.value = product.sale;
//   status.value = product.status;

//   modal.style.display = "block";
// }





// script.js
const openModalBtn = document.querySelector(".btn-add");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");
const addProductForm = document.getElementById("addProductForm");
const imageInput = document.getElementById("image");
const imagePreview = document.getElementById("imagePreview"); // Thêm dòng này
const btnForm = document.getElementById("btnForm");

// Mở modal khi nhấn nút "Thêm Sản Phẩm"
openModalBtn.addEventListener("click", () => {
  refreshForm();
  btnForm.textContent = "Thêm sản phẩm";
  modal.style.display = "block";
  handleImageChange();
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
  const productID = generateID(); // Sửa đây để sử dụng hàm generateID
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
    id: productID,
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
    imagePreview.src = event.target.result; // Sửa dòng này để hiển thị hình ảnh preview

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

  if (btnForm.textContent == "Thêm sản phẩm") {
    alert("Thêm sản phẩm thành công!");
    document.cookie = "reloadPageProduct=true;";
    location.reload();
    reader.readAsDataURL(imageFile);
  } else {
    alert("Sửa sản phẩm thành công!");
    document.cookie = "reloadPageProduct=true;";
    location.reload();
    reader.readAsDataURL(imageFile);
  }

  localStorage.setItem("myProducts", JSON.stringify(products));
});

function generateID() {
  return `lul${new Date().getTime()}`;
}




// function adjustProduct(product) {
//   refreshForm();
//   const category = document.getElementById("category");
//   const productID = document.getElementById("productID");
//   const title = document.getElementById("title");
//   const imageFile = document.getElementById("image");
//   const desc = document.getElementById("desc");
//   const price = document.getElementById("price");
//   const sale = document.getElementById("sale");
//   const status = document.getElementById("status");
//   const imagePreview = document.getElementById("imagePreview");

//   // Gán giá trị cho các trường trong form
//   category.value = getCategoryFromProduct(product); // Gọi hàm để lấy giá trị danh mục
//   productID.value = product.id;
//   title.value = product.title;
//   desc.value = product.desc;
//   price.value = product.price;
//   sale.value = product.sale;
//   status.value = product.status;

//   imagePreview.src = product.img; // Hiển thị hình ảnh của sản phẩm

//   btnForm.textContent = "Lưu thay đổi";

//   modal.style.display = "block";
// }

function adjustProduct(product) {
  refreshForm();
  const category = document.getElementById("category");
  const productID = document.getElementById("productID");
  const title = document.getElementById("title");
  const imageFile = document.getElementById("image");
  const desc = document.getElementById("desc");
  const price = document.getElementById("price");
  const sale = document.getElementById("sale");
  const status = document.getElementById("status");

  // Get the category based on the product title
  const productCategory = getCategoryFromProductByTitle(product.title);

  // Set the category in the form
  if (productCategory) {
    category.value = productCategory;
  } else {
    console.error(`Không tìm thấy danh mục cho sản phẩm có tiêu đề "${product.title}".`);
  }

  productID.value = product.id;
  title.value = product.title;
  desc.value = product.desc;
  price.value = product.price;
  sale.value = product.sale;
  status.value = product.status;

  imagePreview.src = product.img; // Hiển thị hình ảnh của sản phẩm

  btnForm.textContent = "Lưu thay đổi";

  modal.style.display = "block";
}


// Define a function to get the category from the product based on its title
function getCategoryFromProductByTitle(title) {
  // Duyệt qua các danh mục
  for (const category in products) {
    for (const product of products[category]) {
      // Kiểm tra xem title của sản phẩm có chứa title được đưa vào hay không (không phân biệt chữ hoa/chữ thường)
      if (product.id.toLowerCase().includes(title.toLowerCase())) {
        console.log(`Đã tìm thấy sản phẩm thuộc ${category}`);
        return category;
      }
    }
  }
  // Nếu không tìm thấy, in ra thông báo và trả về null
  console.log("Không tìm thấy danh mục chứa sản phẩm");
  return null;
}









// script.js
// ...
imageInput.addEventListener("change", handleImageChange);

function handleImageChange() {
  const selectedImage = imageInput.files[0];
  if (selectedImage) {
    const reader = new FileReader();
    reader.onload = (event) => {
      imagePreview.src = event.target.result;
    };
    reader.readAsDataURL(selectedImage);
  } else {
    // Nếu không có ảnh mới được chọn, cập nhật đường dẫn ảnh mặc định
    imagePreview.src = "./images/icon.png";
  }
}
// ...






function refreshForm() {
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



const btnOrders = document.querySelectorAll('.order-select');

btnOrders.forEach(function (btnOrder) {
  btnOrder.addEventListener("click", () => {
    for (var i = 0; i < btnOrders.length; i++) {
      btnOrders[i].classList.remove("active");
    }
    btnOrder.classList.add("active");
  });
});








var users = JSON.parse(localStorage.getItem("users"));

const productLookup = {};

for (const category in products) {
  for (const product of products[category]) {
    productLookup[product.title.toLowerCase()] = product;
  }
}

const orderList = document.getElementById("order-list");

const btnOrderLists = document.querySelectorAll(".order-select");



btnOrderLists.forEach(function (btnOrderList) {
  btnOrderList.addEventListener("click", () => {
    const orderStatus = btnOrderList.getAttribute("order-status");

    orderList.innerHTML = "";

    users.forEach(function (user) {
      const orderInfo = document.createElement("div");
      orderInfo.classList.add("order-info");

      const orderCusInfo = document.createElement("div");
      orderCusInfo.classList.add("order-cus-info");


      orderCusInfo.innerHTML = `
            <p>Người đặt hàng: <b>${user.fullName}</b></p>
            <p>Số điện thoại: <b>${user.phoneNumber}</b></p>
            <p>Địa chỉ: <b>${user.address}</b></p>
          `;
      orderInfo.appendChild(orderCusInfo);

      user.orderHistory.reverse().forEach(function (order, index) {
        if (order.status === orderStatus) {



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
            orderStatusElement.innerHTML = `
              Trạng thái đơn hàng: <b style="color: red;">${order.status}</b>
              <button class="btn-acceptOrder" data-order-id="${index}" data-user-id="${users.indexOf(user)}">Xác nhận</button>
            `;
          } else {
            orderStatusElement.innerHTML = `
              Trạng thái đơn hàng: <b style="color: green;">${order.status}</b>
            `;
          }

          orderItem.appendChild(orderStatusElement);
          orderInfo.appendChild(orderItem);
          orderList.appendChild(orderInfo);
        }

      });
    });

    const btnAcceptOrders = document.querySelectorAll(".btn-acceptOrder");
    btnAcceptOrders.forEach(function (btnAcceptOrder) {
      btnAcceptOrder.addEventListener("click", () => {
        const orderId = btnAcceptOrder.getAttribute("data-order-id");
        const userId = btnAcceptOrder.getAttribute("data-user-id");
        users[userId].orderHistory[orderId].status = "Đã xử lý";
        localStorage.setItem("users", JSON.stringify(users));
        document.cookie = "reloadPageOrder=true;";
        document.cookie = "reloadPageProduct=true;";
        document.cookie = "reloadPageCart=true;";
        alert("Xác nhận đơn hàng thành công!");
        location.reload();
      });
    });
  });
});







setInterval(reloadPage, 1000); // Check if the cookie value is true every second


function reloadPage() {
  const cookies = document.cookie.split(";"); // Get all cookies as an array
  let reloadPageAdmin = false;

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim(); // Remove any leading/trailing spaces
    if (cookie.startsWith("reloadPageAdmin=")) {
      reloadPage = cookie.substring("reloadPageAdmin=".length, cookie.length) === "true";
      break;
    }
  }

  if (reloadPage) {
    location.reload();
    document.cookie = "reloadPageAdmin=false"; // Set the cookie value to false
  }
}