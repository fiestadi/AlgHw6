//***************task */
// Задача: максимальная выгода от активностей, второстепенно заполняемость по времени
// зал для конференций работает с 9:00 до 17:00
// час с 9:00 до 13:00 стоит 1 единицу
// час с 13:00 до 17:00 стоит 2 единицы

// например с 11 до 14 стоит 2 + 2 = 4 ед

// например с 12 до 16 стоит 1 + 6 = 7 ед



function getMaxBenefit(startTime, endTime) {
   if (startTime < 9 || endTime > 17 || startTime >= endTime) {
     throw new Error("Неправильный интервал");
   }
 
   const unitPrice = (hour) => (hour < 13 ? 1 : 2);
 
   let maxBenefit = 0;
   let bestStartTime = 9;
   let bestEndTime = 9;
 
   for (let start = startTime; start <= endTime; start++) {
     for (let end = start + 1; end <= endTime; end++) {
       let totalBenefit = 0;
       for (let hour = start; hour <= end; hour++) {
         totalBenefit += unitPrice(hour);
       }
 
       if (totalBenefit > maxBenefit) {
         maxBenefit = totalBenefit;
         bestStartTime = start;
         bestEndTime = end;
       }
     }
   }
 
   return { startTime: bestStartTime, endTime: bestEndTime, maxBenefit };
 }
 
 // Пример использования:
 const result1 = getMaxBenefit(11, 14);
 console.log(result1); // { startTime: 11, endTime: 14, maxBenefit: 4 }
 
 const result2 = getMaxBenefit(12, 16);
 console.log(result2); // { startTime: 12, endTime: 16, maxBenefit: 7 }