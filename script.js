let images = [
    "images/Photo01.jpg",
    "images/Photo02.jpg",
    "images/Photo03.jpg",
    "images/Photo04.jpg",
    "images/Photo05.jpg",
    "images/Photo06.jpg",
    "images/Photo07.jpg"
    "images/Photo08.gif"
];
let current = 0;

function nextImage() {
    current = (current + 1) % images.length;
    document.getElementById("slider").src = images[current];
}

let messages = [
  "Couldn't even have guessed what laid in front of us!",
    "Hahahaha, the first time we took a picture together intentionally",
    "I feel blessed to see and be part of this journey with you",
    "I love waking up knowing that you are mine",
    "I’m proud of the the person you are and I miss you so damn much",
    "I would 100% become a demon-king and roam the world in search for you for 800 years"
    "I wish you were here with me and we could go out again"
    "I can't wait to see you again, and start our life together",
    "I love you so much and I miss you so so much. Also my favourite pictures of us"
];

let msgIndex = 0;

function showMessage() {
    if (msgIndex < messages.length) {
        document.getElementById("message").innerText = messages[msgIndex];
        msgIndex++;
    } else {
        document.getElementById("message").innerText = "Okay now stop being greedy 😌";
    }
}

function surprise() {
    alert("No matter the distance, I am yours. ❤️");
}