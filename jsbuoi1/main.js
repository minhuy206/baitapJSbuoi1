// console.log("Hello World");
// console.log("Võ Minh Huy");

var username= 1+2;
console.log(username);

var address = "112 Cao Thang";
console.log("address: ",address);

var numberStudents = 40;
console.log(numberStudents);    
 
// Các loại toán tử

// +
var num1 = 10;  // number
var num2 = "5"; // string
var num12 = num1 + num2;
console.log("Tong:",num12)

// -
var num3 = 10;
var num4 = "5";
var num34 = num3 - num4;
console.log("Hieu: ", num34)


// * 
var num5 = 10;
var num6 = 5;
var num56 = num5 * num6;
console.log("tích:", num56)

// /
var num7 = 10;
var num8 = 5;
var num78 = num7 / num8;
console.log("thuong:", num78)

// %
var num9 = 15;
var num10 = 2; 
var num910= num9 % num10;
console.log("du:", num910);

// ++: tăng 1 đơn vị
var count = 0;
var newCount = count++;
console.log("newCount:",newCount)

// Hằng số (ES6)
// const
const PI = 3.14;

/**  Mô hình 3 khối
Đầu vào:
    Số thứ nhất:
    Số thứ hai:

Xử lí
    Số thứ nhất + Số thứ hai

Đầu ra
    In kết quả tổng:
*/


/* Đầu vào: 
    Cạnh góc vuông 1: a
    Cạnh góc vuông 2: b

Xử lí:
    Dùng công thức pytago: c^2 = a^2 + b^2;
    c = math.sprt(c^2)

Đầu ra: 
    cạnh góc vuông: ,c
*/

var a = 4;
var b = 3; 
var c = a*a + b*b;
c = Math.sqrt(c);
console.log("Cạnh huyền:", c)


/**
 * Bài 1:
 * Mô hình 3 khối:
 *  -Đầu vào: Tiền lương 1 ngày
 *            Số ngày làm
 * 
 *  - Xử lí: tiền lương nhân viên = (Tiền lương 1 ngày)*(Số ngày làm)
 * 
 *  -Đầu ra: tiền lương nhân viên
 */

var tienLuong1Ngay = 100;
var soNgayLam = 5;
var tienLuongNhanVien = tienLuong1Ngay*soNgayLam;
console.log("Tiền Lương:", tienLuongNhanVien);

/**
 * Bài 2:
 *  -Đầu vào: Số thứ nhất
 *                   hai
 *                   ba
 *                   bốn
 *                   năm
 * 
 *  -Xử lí: Giá trị trung bình của 5 số = ( (Số thứ nhất) * (Số thứ hai) * (Số thứ ba) * (Số thứ bốn) * (Số thứ năm) ) / 5
 * 
 *  -Đầu ra: Giá trị trung bình của 5 số
 */

var so1 = 1;
var so2 = 2;
var so3 = 3;
var so4 = 4;
var so5 = 5;
var giaTriTrungBinh = (so1 + so2 + so3 + so4 + so5)/5;
console.log("Giá trị trung bình của 5 số:", giaTriTrungBinh);

/**
 * Bài 3
 * Mô hình 3 khối:
 *  -Đầu vào: Giá USD
 *            Số lượng đổi
 * 
 *  -Xử lí: Số tiền sau khi quy đổi = (Giá USD) * (Số lượng đổi)
 * 
 *  -Đầu ra: Số tiền sau khi quy đổi
 */

var giaUSD = 23500;
var soLuong = 5;
var soTienSauKhiDoi = giaUSD * soLuong;
console.log("Số tiền sau khi quy đổi", soTienSauKhiDoi);

/**
 * Bài 4
 * Mô hình 3 khối:
 *  -Đầu vào: chiều dài
 *            chiều rộng
 *            
 * 
 *  -Xử lí: Diện tích = (chiều dài) * (chiều rộng)
 *          Chu vi = (chiều dài + chiều rộng) * 2
 * 
 *  -Đầu ra: Diện tích
 *           Chu vi
 */

var chieuDai = 5;
var chieuRong = 4;
var chuVi = (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;
console.log("Chu vi hcn:", chuVi);
console.log("Diện tích hcn:", dienTich);

/**
 * Bài
 * Mô hình 3 khối:
 *  -Đầu vào: Số có 2 chữ số
 *            
 *  -Xử lí: Số hàng đơn vị = (Số có 2 chữ số) % 10
 *          Số hàng chục = (Số có 2 chữ số) / 10
 *          Tổng 2 kí số vừa nhập = Số hàng đơn vị + Số hàng chục
 * 
 *  -Đầu ra: Tổng 2 kí số vừa nhập
 */

var soCo2ChuSo = 12;
var soHangDonVi = soCo2ChuSo % 10;
var soHangChuc = soCo2ChuSo / 10;
var tong2KiSoVuaNhap = soHangChuc + soHangDonVi;
console.log("Tổng 2 kí số vừa nhập:",tong2KiSoVuaNhap)
