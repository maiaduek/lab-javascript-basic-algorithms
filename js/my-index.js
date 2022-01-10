// Iteration 1: Names and Input
console.log("I'm ready!");

let hacker1 = "Maia";
console.log("The driver\'s name is " + hacker1);

let hacker2 = "Manny";
console.log("The navigator\'s name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log("It looks like driver has longer name")
} else if (hacker2.length > hacker1.length) {
  console.log("It looks like navigator has longer name")
} else {
  console.log("Both have equally long names")
}

// Iteration 3: Loops


let hacker1upper = ""
for(i = 0; i < hacker1.length; i++) {
  hacker1upper += hacker1[i].toUpperCase() + " "
}
console.log(hacker1upper);

let hacker2reverse = ""
for(i = hacker2.length - 1; i >= 0; i--) {
  hacker2reverse += hacker2[i]
}
console.log(hacker2reverse);

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

for(let i = 0; i < hacker1.length; i++) {
  let index1 = alphabet.indexOf(hacker1[i]);
  let index2 = alphabet.indexOf(hacker2[i]);

  if (index1 === index2) {
    continue;
  } else if (index1 < index2) {
    console.log(hacker1 + " goes first!")
    break;
  } else if (index1 > index2) {
    console.log(hacker2 + " goes first!")
    break;
  } else {
    console.log("What?! You have the same name!")
  }
}

// BONUS 1

let loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. n\
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). n\
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."

let arr = loremIpsum.split(" ");

let loremIpsumWords = arr.length
console.log(loremIpsumWords)

let counter = 0;
for(let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === "e") {
    if (loremIpsum[i+1] === "t") {
      counter += 1
    }
  }
}
console.log(counter);

// BONUS 2


let phraseToCheck = "racecar";
phrase = [];

for (let i = 0; i < phraseToCheck.length; i++) {
  if (!alphabet.includes(phraseToCheck[i])) {
    continue
  } else {
    phrase.push(phraseToCheck[i].toLowerCase())
  }
}

let phraseReverse = phrase.reverse()
phrase === phraseReverse

