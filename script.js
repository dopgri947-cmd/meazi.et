const botToken = "YOUR_BOT_TOKEN";
const chatId = "YOUR_CHAT_ID";

function order(item) {
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      chat_id: chatId,
      text: "New Order: " + item
    })
  });

  alert("Order sent!");
}
