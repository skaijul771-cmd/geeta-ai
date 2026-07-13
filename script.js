
function send() {
    let input = document.getElementById("msg");
    let chat = document.getElementById("chat");

    let msg = input.value.trim();

    if (msg === "") return;

    chat.innerHTML += `<div class="user">${msg}</div>`;

    let text = msg.toLowerCase();
    let reply = "";

    if (text.includes("नमस्ते") || text.includes("hello") || text.includes("hi")) {
        reply = "🙏 नमस्ते! मैं Geeta AI हूँ। मैं आपकी मदद के लिए तैयार हूँ।";
    } 
    else if (text.includes("तुम कौन हो")) {
        reply = "🤖 मैं Geeta AI हूँ। आपका अपना AI Assistant।";
    }
    else if (text.includes("समय")) {
        reply = "⏰ अभी समय: " + new Date().toLocaleTimeString("hi-IN");
    }
    else if (text.includes("डेट") || text.includes("तारीख")) {
        reply = "📅 आज की तारीख: " + new Date().toLocaleDateString("hi-IN");
    }
    else if (text.includes("धन्यवाद")) {
        reply = "😊 आपका स्वागत है!";
    }
    else if (text.includes("कैसे हो")) {
        reply = "मैं बिल्कुल ठीक हूँ। आप कैसे हैं?";
    }
    else {
        reply = "💡 अभी मैं सीख रही हूँ। जल्द ही OpenAI से जुड़कर आपके हर सवाल का स्मार्ट जवाब दूँगी।";
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
