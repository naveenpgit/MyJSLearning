let messages = ['Hi', 'Helloo', 'HowAreYou?'];

// (function () {
//     setInterval(function () {
//         console.log(messages.shift());
//     }, 6000);
// })();


let myFirstPromise = new Promise((resolve, reject) => {
    setInterval(function () {
        console.log("asdasdasdsa");
        resolve("Success!"); // Yay! Everything went well!
    }, 1000);
});

myFirstPromise.then((successMessage) => {
    console.log("Yay! " + successMessage);
});