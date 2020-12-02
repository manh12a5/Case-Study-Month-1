let images =
    [
        "image/My-Tam.jpg", "image/Donald-Trump.jpg", "image/Nguyen-Xuan-Phuc.jpg",
        "image/Joe-Biden.jpg", "image/Huan-hoa-hong.png", "image/Tran-Dan.jpg",
        "image/me.jpg"
    ]
let answers =
    [
        "Mỹ Tâm", "Donald Trump", "Nguyễn Xuân Phúc",
        "Joe Biden", "Huấn hoa hồng", "Trần Dần",
        "Dũng"
    ]
let arr =
    [
        "* Gồm 5 chữ. \n " +
        "- Là nữ ca sĩ, nhạc sĩ và diễn viên người Việt Nam, sinh ra tại Đà Nẵng.",

        "* Gồm 11 chữ. \n " +
        "- Là đương kim Tổng thống Hoa Kỳ thứ 45. Trước đó, ông nổi tiếng với vai trò là một tỷ phú, doanh nhân, nhà sản xuất chương trình truyền hình.",

        "* Gồm 14 chữ. \n " +
        "- Là một lãnh đạo Đảng và Nhà nước, chính trị gia Việt Nam. Ông hiện là Ủy viên Bộ Chính trị Ban Chấp hành Trung ương khóa XII, Bí thư Ban Cán sự Đảng Chính phủ, Thủ tướng Chính phủ của nước Cộng hoà xã hội chủ nghĩa Việt Nam, Phó Chủ tịch Hội đồng quốc phòng và an ninh Việt Nam, Đại biểu Quốc hội Việt Nam khóa XIV thuộc Đoàn Đại biểu Quốc hội thành phố Hải Phòng. Ông cũng là Chủ tịch Hội nghị cấp cao ASEAN (từ 2020).",

        "* Gồm 8 chữ. \n" +
        "- Là một chính trị gia người Mỹ và là tổng thống đắc cử của Hoa Kỳ. Sau khi đánh bại tổng thống đương nhiệm Donald Trump trong cuộc bầu cử tổng thống Hoa Kỳ năm 2020, ông sẽ được nhậm chức tổng thống thứ 46 vào ngày 20 tháng 1 năm 2021. \n" +
        "- Là thành viên của Đảng Dân chủ, ông từng là Phó Tổng thống thứ 47 của Hoa Kỳ dưới chính quyền tổng thống Barack Obama từ năm 2009 đến năm 2017. \n" +
        "- Ông là Thượng nghị sĩ Hoa Kỳ đại diện tiểu bang Delaware từ năm 1973 đến năm 2009.",

        "* Gồm 11 chũ. \n " +
        "- Là một nhân vật nổi tiếng, có sức ảnh hưởng trên mạng xã hội và cũng là một hiện tượng mạng xã hội được cư dân mạng biết đến thông qua việc liên tục xuất hiện trong các buổi livestream trên Facebook, qua những hình ảnh, video tỏ vẻ ngông nghênh, ăn chơi, khoe tài sản và nhiều phát ngôn gây sốc, thường xuyên tụ tập các đối tượng xăm trổ, tóc nhuộm, chửi bới, gây hấn với những giang hồ mạng khác... \n" +
        "- Những hành vi này đã khiến dư luận lo lắng giới trẻ sẽ bị ảnh hưởng.",

        "* Gồm 7 chữ. \n" +
        "- Ông là Quốc Sư Hoa Kỳ \n" +
        "- Đệ Nhất Nhà Tiên Tri Vũ Trụ \n" +
        "- Cố Vấn Tối Cao Tham Mưu Đặc Biệt Tổng Thống Obama \n" +
        "- Chủ Tịch Mặt Trận Mỹ Việt Hoa Hải Ngoại.",

    ]
let point = 0;
let indexPhoto = 0;

//Kiểm tra đáp án với cách dùng mảng
function check() {
    //Gán để tăng và giảm điểm, check mảng với nhau
    let a = document.getElementById("question").value;
    let x;
    for (let i = 0; i < images.length; i++) {
        if (a === answers[i]) {
            x = 0;
        }
    }
    if (x === 0) {
        //Tăng điểm, check mảng
        alert("Chính xác");
        document.getElementById("name").value = "CHÍNH XÁC";
        point += 10;
        document.getElementById("total").value = ("Điểm: " + point);
    } else {
        //Giảm điểm, check mảng
        alert("Bạn trả lời sai");
        document.getElementById("name").value = "Gợi ý (Tên phải riêng viết hoa)";
        point -= 10;
        document.getElementById("total").value = ("Điểm: " + point);
    }
    if (point > 40) {
        // Thắng cuộc và trở về trang Start
        alert("BẠN ĐÃ THẮNG TRÒ CHƠI");
        alert("Quay trở về trang chính");
        location.replace("http://localhost:63342/Code/Month1/Case%20Study%20Month%201/Start.html?_ijt=fghf6dgjke77lpnd8r41fj34rd");
    } else if (point < -40) {
        // Thua cuộc và trở về trang Start
        alert("BẠN ĐÃ THUA CUỘC");
        alert("Quay trở về trang chính");
        location.replace("http://localhost:63342/Code/Month1/Case%20Study%20Month%201/Start.html?_ijt=fghf6dgjke77lpnd8r41fj34rd");
    }
}

//Random đổi ảnh
function next() {
    let b = document.getElementById("question").value;
    let y;
    for (let i = 0; i < images.length; i++) {
        if (b === answers[i]) {
            y = 0;
        }
    }
    if (y !== 0) {
        alert("Bạn phải trả lời đúng trước khi chuyển câu hỏi");
    } else {
        if (indexPhoto === images.length - 1) {
            indexPhoto = 0;
        } else {
            indexPhoto = Math.floor(Math.random() * images.length)
        }
        document.getElementById("test").src = images[indexPhoto];
        document.getElementById("question").value = "";
        document.getElementById("name").value = "";
    }
}

//Gợi ý với ảnh
function suggest() {
    alert(arr[indexPhoto]);
}

// let indexPhoto1 = answers.length -1;
// function back() {
//     document.getElementById("test").src = images[indexPhoto1];
//     if (indexPhoto1 === 0) {
//         indexPhoto1 = answers.length -1;
//     } else {
//         indexPhoto1 -= 1;
//     }
// document.getElementById("question").value = "";
// document.getElementById("name").innerText = "..........";

// }

//Cài đặt thời gian
let s = 60;
setInterval(function () {
    document.getElementById("time").value = "Time: " + s + " Giây";
    s--;
    if (s === 0) {
        alert("BẠN ĐÃ THUA CUỘC");
        alert("Quay trở về trang chính");
        location.replace("http://localhost:63342/Code/Month1/Case%20Study%20Month%201/Start.html?_ijt=fghf6dgjke77lpnd8r41fj34rd");
    }
}, 1000);

//Reset
function resetValue() {
    document.getElementById("question").value = "";
    document.getElementById("name").value = "";
}

//Trở về
function returnValue() {
    location.replace("http://localhost:63342/Code/Month1/Case%20Study%20Month%201/Start.html?_ijt=fghf6dgjke77lpnd8r41fj34rd");
}