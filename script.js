function topup() {
  let uid = document.getElementById("uid").value;
  let diamond = document.getElementById("diamonds").value;
  let msg = document.getElementById("msg");

  if (uid === "" || diamond === "") {
    msg.innerHTML = "❌ Please enter UID and select diamonds!";
    msg.style.color = "red";
  } else {
    msg.innerHTML = "✅ Demo Success! (No real top-up)";
    msg.style.color = "lime";
  }
}
