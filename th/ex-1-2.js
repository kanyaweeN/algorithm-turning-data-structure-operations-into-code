/* 
ให้เขียน Function ที่ชื่อว่า sumOddNumber ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers
        1. numbers เป็น Array ที่บรรจุตัวเลข
    - Function นี้จะนำ numbers มาเลือกเฉพาะสมาชิกที่มีคุณสมบัติด้านล่างมาหาผลรวม  แล้ว Return ค่าออกมา
        - เป็นเลขคี่
        - หารด้วย 3 หรือ 5 ลงตัว
        - หารด้วย 11 ไม่ลงตัว
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
function sumOddNumber(numbers) {
  //แบบที่ 1 .filter() .reduce()
  //   return numbers
  //     .filter(
  //       (item) =>
  //         item % 2 != 0 && (item % 3 == 0 || item % 5 == 0) && item % 11 != 0
  //     )
  //     .reduce((acc, cur) => acc + cur);

  //แบบที่ 2
  //แบบ .reduce() อย่างเดียว
  return numbers.reduce((sum, num) => {
    if (num % 2 != 0 && (num % 3 == 0 || num % 5 == 0) && num % 11 != 0) {
      return sum + num;
    }
    return sum;
  }, 0);

  //ถ้าข้อมูลเยอะแบบที่ 2 ดีกว่า แบบที่ 1 เพราะว่า loop น้อยกว่า
  //แต่ถ้าข้อมูลน้อยใช้แบบที่ 1 ดีกว่า เพราะว่าเข้าใจง่าย
}

const numbers1 = [1, 2, 3, 5, 6, 8, 11, 13];
console.log(sumOddNumber(numbers1)); // 8 จาก [3, 5]

const numbers2 = [6, 8, 10, 15, 11, 19, 21, 20, 33, 55];
console.log(sumOddNumber(numbers2)); // 36 จาก [15, 21]
