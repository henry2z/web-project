const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = (num) => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  ref.forEach((arr) => {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });

  return res.join('');
};

const checkUserInput = () => {
  const input = numberInput.value;
  const inputInt = parseInt(input);

  if (!inputInt && inputInt !== 0) {
    output.innerText = "Please enter a valid number"
    return
  } else if (inputInt < 1) {
    output.innerText = "Please enter a number greater than or equal to 1"
    return
  } else if (inputInt >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999"
    return
  }

  output.innerText = convertToRoman(inputInt);
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});