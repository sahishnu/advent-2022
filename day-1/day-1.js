const fs = require('fs');

try {
  const input = fs.readFileSync('./input.txt', 'utf-8');

  const splitByElf = input.split("\n\n");
  let max = 0;

  const totalCaloriesPerElf = splitByElf.map(elf => {
    const splitByItem = elf.split("\n");
    const total = splitByItem.reduce((acc, cal) => {
      return acc + parseInt(cal);
    }, 0);

    if (total > max) {
      max = total;
    }
    return total;
  });

  totalCaloriesPerElf.sort();

  const sumHighest3 = totalCaloriesPerElf.slice(-3).reduce((acc, cal) => {
    return acc + cal
  }, 0);

  console.log("Highest calorie count: ", max);
  console.log("Sum of top 3 calorie counts: ", sumHighest3);
} catch(err) {
  console.error(err);
}