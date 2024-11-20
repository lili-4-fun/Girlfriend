let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");
let cds = document.querySelectorAll(".cd-image");
let songDescription = document.getElementById("song-description");

// Define descriptions and titles for each song
let songDescriptions = {
  "songs/song1.mp3": {
    title: "Sweet - Cigarettes after sex",
    description: "This is one of the first songs I related to during our relationship. <br>\
    Every time I hear it now, i feel like crying. I remmember how it all started, what it felt like to fall in love with you,\
    what it felt like to feel loved by the sweetest girl i ever met. <br> Whenever i listen to it, i feel overwhelmed by love for you-every.single.time.\
     All my feelings for you come rushing back at the same time and i just melt or cry. <br> It will forever hold a special place in my heart.<br>\
   I think it perfectly describes the feelings i have for you,\
    now and at the start. I never in my life felt a love so pure and sweet. I love you my heaven."
  },
  "songs/song2.mp3": {
    title: "Iris - Goo Goo dolls",
    description: "I love this song so much. It resonates so much with the feeling of devotion i have for you. <br>\
    Falling in love with you changed me, i love you fearlesly, i love you with every inch of my being,\
    and i know that i would do anything for you. And i mean that. I feel my soul burning with the love i have for you.\
    I feel capable of going through hell and back just to be able to hear your voice. If i needed it, i would ruin myself\
    a million times just to be next to you.\
    I love you, I love you unconditionally."
  },
  "songs/song3.mp3": {
    title: "It had to be you - Frank Sinatra",
    description: "Oh i love this song. You must recognize where it is from?<br><br>\
    When i watched 'When harry met Sally' i instantly had the biggest crush on it.\
    I loved the scene, i loved the movie, i loved you...and then this song appeared.\
    It was just perfect to describe how i felt.\
    I can't help but feeling a sense of fate to meeting you. <br><br> You are all i ever wanted, all i ever waited for,\
    i didn't know it but i was lost without you. You truly are my life. "
  },
  "songs/song4.mp3": {
    title: "Dandelions - Ruth B",
    description: "All my wishes. All my wishes. ALL.<br><br>\
    Since the day that i met you, all my wishes were only about you. Every single one of them.<br> I didn't wish for\
    one thing other than spending forever with you, nothing else. <br><br> I pick up dandelions, i look up at the stars, at the moon,\
    i watch for angel numbers. I actually waited for my birthday, only for that.\
    You are my wish, my prayer. There is no me without you anymore, i will always love you "
  },
  "songs/song5.mp3": {
    title: "Until I found you - Stephen Sanchez",
    description: "It is like there was no love in my life before i met you,<br>\
    I didn't believe in love, i didn't know it was possible to feel this way about someone.\
    I always swore i wasn't made for love.<br> But here i am today, with the sweetest girl in\
    the world by my side.<br>I want to cry when i listen to this song, it is exactly what it feels\
    like to finally find your person, you ride or die. Your soulmate. The love of my life. I love you"
  }
};

btn.addEventListener("click", () => {
  if (state == false) {
    record.classList.add("on");
    toneArm.classList.add("play");
    setTimeout(() => {
      song.play();
    }, 1000);
  } else {
    record.classList.remove("on");
    toneArm.classList.remove("play");
    song.pause();
  }
  state = !state;
});

slider.addEventListener("input", (e) => {
  song.volume = Number(e.target.value);
});

// Add click event to each CD image
cds.forEach(cd => {
  cd.addEventListener("click", (e) => {
    let newSong = e.target.getAttribute("data-song");
    song.src = newSong;
    song.play();
    
    // Update the state to reflect the playing vinyl
    if (!record.classList.contains("on")) {
      record.classList.add("on");
      toneArm.classList.add("play");
      state = true;
    }

    // Update the paragraph for the song description with title and description
    const songInfo = songDescriptions[newSong] || { title: "A Special Song", description: "A song with a special memory." };
    songDescription.innerHTML = `<strong style="font-size: 24px; display: block; margin-bottom: 15px; color: #86469C;">${songInfo.title}</strong>${songInfo.description}`;
  });
});