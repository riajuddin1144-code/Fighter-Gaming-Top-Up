function pay() {
  alert("+88014xx-xxxxxx");
}
function getTime() {
  let now = new Date();
  return now.toLocaleTimeString();
}

function addOrder(name, amount) {
  let list = document.getElementById("orderList");
  let item = document.createElement("li");

  item.innerText = name + " - " + amount + " 💎 ✔️ (" + getTime() + ")";
  
  list.prepend(item); // নতুনটা উপরে দেখাবে
}

// Demo auto orders (প্রতি 3 সেকেন্ডে নতুন order)
setInterval(() => {
  let names = ["Riaj", "Sajid", "Fahim", "Alamin"];
  let diamonds = ["100", "310", "520", "1060"];

  let randomName = names[Math.floor(Math.random() * names.length)];
  let randomDiamond = diamonds[Math.floor(Math.random() * diamonds.length)];

  addOrder(randomName, randomDiamond);
}, 3000);
}
