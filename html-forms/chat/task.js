const side = document.querySelector(".chat-widget__side");
const chatWidjet = document.querySelector(".chat-widget");
side.addEventListener("click", () => chatWidjet.classList.add("chat-widget_active"));
const messages = document.querySelector( '.chat-widget__messages' );
const chatInput = document.getElementById("chat-widget__input");
let textMessage = "";
let messageText, messageTime, messageClient;
let date = new Date();
let i = 0;
const robotMessages = ["Я не знаю", "Вы меня смущаете", "Обратитесь к психиатру", "позвоните по номеру +7 (495) 570-25-11", "Вы не правы в этом вопросе",
"Я ничем не могу помочь", "Как дела?", "Что делаешь?"]

chatInput.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        textMessage = chatInput.value;
        if (textMessage != ""){
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">09:21</div>
            <div class="message__text">
            Добрый день, мы ещё не проснулись. Позвоните через 10 лет
            </div>
        </div>
        `;
        messageClient = messages.querySelectorAll(".message_client");
        messageText = messageClient.item(messageClient.length - 1).querySelector(".message__text");
        messageText.textContent = textMessage;
        messageTime = messageClient.item(messageClient.length - 1).querySelector(".message__time");
        messageTime.textContent = date.getHours() + ':' + date.getMinutes();
        chatInput.value = ' ';
        messages.innerHTML += `<div class="message">
        <div class="message__time">22:10</div>
        <div class="message__text">Добрый день!</div>
        </div>
        `
        messageRobot = messages.querySelectorAll(".message");
        messageTextRob = messageRobot.item(messageRobot.length - 1).querySelector(".message__text")
        messageTextRob.textContent = robotMessages[i%robotMessages.length];
        i++;
        } 

    }
})

