const chatBox = document.getElementById("chatBox");

window.onload = function () {
  chatBox.innerHTML =
    localStorage.getItem("geeta_chat") ||
    `<div class="bot">🙏 नमस्ते! मैं Geeta AI हूँ।</div>`;
};

function saveChat() {
  localStorage.setItem("geeta_chat", chatBox.innerHTML);
}

function addMessage(text, type) {
  chatBox.innerHTML += `<div class="${type}">${text}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  saveChat();
}

function reply() {
  const input = document.getElementById("message");
  const msg = input.value.trim();

  if (!msg) return;

  addMessage(msg, "user");

  input.value = "";

  setTimeout(() => {
    let ans = "🤖 मैं अभी Free Version में हूँ। जल्द ही OpenAI से जुड़कर और स्मार्ट बनूँगी।";

    const t = msg.toLowerCase();

    if (t.includes("नमस्ते") || t.includes("hello")) {
      ans = "🙏 नमस्ते! आपका स्वागत है।";
    } else if (t.includes("समय")) {
      ans = "🕒 " + new Date().toLocaleTimeString("hi-IN");
    } else if (t.includes("तारीख")) {
      ans = "📅 " + new Date().toLocaleDateString("hi-IN");
    }

    addMessage(ans, "bot");
  }, 500);
}

document
  .getElementById("message")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      reply();
    }
  });

function startVoice() {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Voice Input इस ब्राउज़र में उपलब्ध नहीं है।");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "hi-IN";

  recognition.onresult = function (event) {
    document.getElementById("message").value =
      event.results[0][0].transcript;
  };

  recognition.start();
}
