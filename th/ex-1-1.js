/* 
ให้เขียน Function ที่ชื่อว่า calculateTempt ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ tempt
        1. tempt เป็น Array ที่บรรจุตัวเลขค่าอุณหภูมิในหน่วยองศาฟาเรนไฮต์
    - Function นี้จะนำสมาชิกแต่ละตัวใน tempt มาแปลงเป็นตัวเลขค่าอุณหภูมิในหน่วยองศาเซลเซียสด้วยสูตรด้านล่าง และ Return ค่าออกมา
        - เราสามารถแปลงค่าอุณหภูมิจากหน่วยองศาฟาเรนไฮต์ ไปเป็นหน่วยองศาเซลเซียสด้วยสูตร celsius = (fahrenheit - 32) * 5 / 9
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
function calculateTempt(tempt) {
  return tempt.map((item) => ((item - 32) * 5) / 9);
}

const tempt1 = [14.0, 15.8, 24.8, 32.0];
console.log(calculateTempt(tempt1)); // [ -10, -9, -4, 0 ]

const tempt2 = [14.0, 32.0, 41.0, -13.0, -9.4];
console.log(calculateTempt(tempt2)); // [ -10, 0, 5, -25, -23 ]
