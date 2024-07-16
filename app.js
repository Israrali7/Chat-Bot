var autoMsgList = [
  { name: "bot", msg: "how are you" },
  { name: "bot", msg: "how may i help you" },
  { name: "bot", msg: "are you busy today?" },
  { name: "bot", msg: "Thank You" },
];

var messagesList = [
  { name: "ahmed", msg: "hello" },
  { name: "bot", msg: "Yes" },
  { name: "ahmed", msg: "there?" },
  { name: "bot", msg: "yes" },
  { name: "ahmed", msg: "okay, I'll call you" },
];

// Function to handle sending a message
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message !== '') {
    const chatMessages = document.querySelector('.chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    
    // Get a random message from autoMsgList
    const randomIndex = Math.floor(Math.random() * autoMsgList.length);
    const botMessage = autoMsgList[randomIndex].msg;

    // Add the bot name and message
    messageElement.textContent = `${autoMsgList[randomIndex].name}: ${botMessage}`;
    chatMessages.appendChild(messageElement);
    messageInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

        // Add the Person name and message
        messageElement.textContent = `Your:${messageInput.textContent}`;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Event listeners
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});
