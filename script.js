function send() {

  let input = document.getElementById("msg");
  let chat = document.getElementById("chat");

  let msg = input.value.trim();

  if (msg === "") return;

  chat.innerHTML += `<div class="user">${msg}</div>`;

  let text = msg.toLowerCase();
  let reply = "";

  if (text.includes("नमस्ते") || text.includes("hello")) {
    reply = "🙏 नमस्ते! मैं Geeta AI हूँ।";
  } else if (text.includes("तुम कौन हो")) {
    reply = "मैं Geeta AI हूँ, आपका AI सहायक हूँ।";
  } else if (text.includes("समय")) {
    reply = "⏰ " + new Date().toLocaleTimeString("hi-IN");
  } else if (text.includes("तारीख")) {
    reply = "📅 " + new Date().toLocaleDateString("hi-IN");
  } else {
    reply = "मैं अभी विकास के चरण में हूँ। जल्द ही AI से जुड़कर हर सवाल का उत्तर दूँगा।";
  }

  chat.innerHTML += `<div class="bot">${reply}</div>`;

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("msg").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      send();
    }
  });
});
