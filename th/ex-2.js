/* 
ให้เขียน Function ที่ชื่อว่า reverseText ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ text
        1. text เป็น String ที่บรรจุข้อความ
    - Function นี้จะนำ text มาสลับตัวอักษรจากหลังไปหน้า แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
function reverseText(text) {
  return text.split("").reverse().join("").toLowerCase();
}

let text1 = "Techup";
console.log(reverseText(text1)); // puhcet

let text2 = "Hello World!!";
console.log(reverseText(text2)); // !!dlrow olleh
