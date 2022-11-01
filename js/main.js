var app = document.getElementById('typewriter');
console.log(app)

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .typeString("La gran capital de venezuela")
    .pauseFor(250)
    .start()