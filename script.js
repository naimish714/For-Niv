let images = [
    "Photo01.jpg",
    "Photo02.jpg",
    "Photo03.jpg",
    "Photo04.jpg",
    "Photo05.jpg",
    "Photo06.jpg",
    "Photo07.jpg",
    "Photo08.gif"
];
let current = 0;

function nextImage() {
    current = (current + 1) % images.length;
    document.getElementById("slider").src = images[current];
}

let messages = [
  "Couldn't even have guessed what laid in front of us, when we first started out",
    "Time feels kinder with you",
    "I feel blessed to see and be part of this journey with you",
    "I love waking up knowing that you are mine",
    "I’m proud of the the person you are and I miss you so damn much",
    "I would 100% become a demon-king and roam the world in search for you for 800 years",
    "If I had been told the future held you, I would have walked toward it without hesitation.",
    "I wish you were here with me and we could go out again",
    "I can't wait to see you again, and start our life together",
    "I love you so much and I miss you so so much. Also my favourite pictures of us!"
];

let msgIndex = 0;

function showMessage() {
    if (msgIndex < messages.length) {
        document.getElementById("message").innerText = messages[msgIndex];
        msgIndex++;
    } else {
        document.getElementById("message").innerText = "Can't wait to make more memories!";
    }
}

function surprise() {
    alert("No matter the distance, I am yours. ❤️");

}



