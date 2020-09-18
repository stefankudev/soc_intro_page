document.addEventListener("DOMContentLoaded", function(event) {
    
    var app = document.getElementById('jobTitlesTypewriter');

    var typewriter = new Typewriter(app, {
    delay: 10,
    autoStart: true,
    loop: true,
    });

    typewriter
    .changeDeleteSpeed(2)
    .pauseFor(2000)
    .typeString('hmm...')
    .pauseFor(700)
    .deleteAll(2)
    .typeString('UI/UX Designer')
    .pauseFor(900)
    .deleteAll(2)
    .typeString('Photographer')
    .pauseFor(900)
    .deleteAll(2)
    .typeString('Gym Bunny')
    .pauseFor(400)
    .typeString('?')
    .pauseFor(1000)
    .typeString('<i> ...sometimes </i>')
    .pauseFor(700)
    .deleteAll(2)
    .typeString('Casual Gamer')
    .pauseFor(700)
    .deleteAll(2)
    .typeString('I like to travel')
    .pauseFor(800)
    .deleteChars(10)
    .typeString('d')
    .pauseFor(300)
    .typeString('*')
    .pauseFor(900)
    .typeString(' to travel')
    .pauseFor(700)
    .typeString('...')
    .pauseFor(200)
    .typeString(' before covid')
    .pauseFor(900)
    .typeString('...')
    .pauseFor(600)
    .typeString(' ')
    .pauseFor(600)
    .typeString(':')
    .pauseFor(600)
    .typeString('(')
    .pauseFor(1000)
    .deleteAll(2)
    .start()
  });

