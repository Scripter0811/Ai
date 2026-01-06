function getAIResponse(message) {
    message = message.toLowerCase();

    if (message.includes("hi") || message.includes("hello")) {
        return "Hey! How can I help you today?";
    }

    if (message.includes("help")) {
        return "Sure! Tell me what you need help with.";
    }

    if (message.includes("who are you")) {
        return "I'm your custom AI bot!";
    }

    if (message.includes("bye")) {
        return "Goodbye! Come back anytime.";
    }

    return "I'm not sure how to respond to that yet, but I'm learning!";
}

function sendMessage() {
    let input = document.getElementById("userInput");
    let messages = document.getElementById("messages");

    if (input.value.trim() === "") return;

    let userMessage = input.value;

    messages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

    let aiReply = getAIResponse(userMessage);

    setTimeout(() => {
        messages.innerHTML += `<p><strong>AI:</strong> ${aiReply}</p>`;
        messages.scrollTop = messages.scrollHeight;
    }, 500);

    input.value = "";
}
