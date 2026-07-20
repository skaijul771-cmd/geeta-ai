
async function reply() {
  const input = document.getElementById("message");
  const msg = input.value.trim();

  if (!msg) return;

  addMessage(msg, "user");
  input.value = "";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: msg
      })
    });

    const data = await response.json();

    addMessage(data.reply || "कोई उत्तर नहीं मिला।", "bot");

  } catch (error) {
    addMessage("❌ सर्वर से कनेक्ट नहीं हो पाया।", "bot");
  }
}
function addMessage(text, sender) {
  const chatBox = document.getElementById("chatBox");

  const message = document.createElement("div");
  message.className = sender;
  message.innerText = text;

  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}
