const buttonGrid = document.querySelector('.button-grid');
const heartScroll = document.getElementById('heartScroll');
const modalContent = document.querySelector('.modal-content');
let scrollTimeout;
const SCROLL_DELAY = 300; 

window.openModal = function(dayIndex) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const entry = journalEntries[dayIndex];

    modalText.innerHTML = `
        <div class="journal-title">${entry.title}</div>
        <div class="journal-content">${entry.content}</div>`;

    modal.classList.add('show');
    modal.style.display = 'flex';
    heartScroll.style.display = 'block';

    requestAnimationFrame(() => {
        modalContent.scrollTop = 0;
        updateHeartPosition();
    });
};

const journalEntries = [
    {
        title: " 💞 Journal Log 1: The Beginning",
        content: `<p>Welp, today: March 13th 2025, marks the first day of the challenge, huh…<br>
                    I really didn't expect that I’d follow through with it but it didn't sit right with me to do you dirty like that and then for everything to be back to normal without taking at least SOME sort of punishment.<br>
                    Although a bit extreme, I think I can afford to be sad for a month and then be happy later for reallll.<br>
                    (with you perhaps??? :3)<br>
                    Anyways, gosh knows how sad I was yesterday, I was pretty devastated not gonna lie.<br>
                    I started thinking of ways I could cope with this, or at least try to convince you that you really are my special pookie wookie, and I landed with making a website :D which is exactly what you’re seeing right now.<br>
                    <em>…well</em>, using the word “exactly” is a bit of a stretch, as I have just started developing it so I'm not even sure of the final outcome of it, and I also started taking some coding lessons in three languages: HTML, CSS and Javascript, and I’d like to think that my hard work is beginning to show on godddd.<br>
                    Enough of that though, the whole point of this blog style website is to fill you in about my life, how I’m doing, etc… to prove to you that no matter how far away we are from each other, there’s always going to be some sort of contact, even if it meant training a pigeon to send you a letter ;).</p>
                    <br><br>
                    <br><br>
                    <br><br>
                    <p>So, today was certainly a day alright:<br><br>
                    For one, I got to see you plenty of times, I was basking in the beauty for what I presumed would be the last time until the next semester, and it was ironic; You were wearing yellow, so you looked like the sun, and even though I wanted to stare for so long and even talk to you, I knew that I shouldn’t and that I couldn’t, but oh well.<br><br>
                    We also did an hour and a half of PE, I was really happy because I didn’t expect myself to do that well in Volleyball, as I had decided that it wasn’t for me last year when I barely got to improve and made the ball fly all the way to the roof at the end of year, but I was doing some really good plays with really good precision to boot, and also was no longer scared of the ball.<br>
                    My friend who played it with me a lot and tried coaching me before said that he was really proud of me, so I’m happy.<br>
                    Although my whole body felt sore by the end of it, and I was really thirsty.<br><br>
                    I’m not sure if it matters to you by the time you read this, but I got 17 in french, so that’s cool.</p>
                    <br><br>
                    <p>We played Uno in class!<br>
                    After I got kicked out of your class (totally didn’t come to sneak a lil peek or two or anything nope nope nope), we formed a party of 13 and started playing the game! We did 2 games and they were hella fun, since we kept playing until we had a loser instead of finishing with the first winner.<br>
                    <em>… I did get my butt handed to me, though…</em> It wasn’t pretty; I got hit with a +12 and immediately after it a +10, not only that, but all my cards were just number cards.<br>
                    I had no shot at victory with a deck of 20~ cards, so I decided to sabotage the person next to me, who was Amira. Yes, THAT Amira. She had 2 cards left.<br>
                    I was laughing my butt off at her, I was full on focusing on her and visualizing her cards, and I realized that she only had red and blue cards.<br>
                    So I put my cards to use and made it hell for her; Either by putting down yellow or green cards, giving her more cards, or downright just cancelling her turn.<br>
                    God I love being evil. I did win after that so that was cool.<br><br>
                    And then, I walked home with Fares and Nadjib, we were just yapping and yapping about the most random stuff on earth (mostly Fares bragging about his plays in Werewolf).<br>
                    My legs hurt a lot whilst walking, though. I already started having major pain by the time we got into school and it was way worse when I walked home.<br><br>
                    I did make it home though, so all’s good. (felt weird not taking a picture but what can I say)<br>
                    I immediately took a shower because duh. And then I lied down in bed for around an hour to rest.<br><br>
                    Then I got up, sat my butt down, and started learning to do the website. It's in its infancy stage, of course, it still will display this though!!<br><br>
                    It’s like 17:20 at the time, still a long time till I can drink so that’s unfortunate. I’m currently listening to a podcast and writing this stuff, maybe I’ll end it here for today. I miss you a lot and I still love you.<br>
                    I reckon I should at least add an update at night, since I plan on sleeping in around 8 hours.</p>`
    },
    {
        title: " 💞 Journal Log 2: A Nightmare And Changes",
        content: `<p><em>I slept.</em><br>
                    Technically, by the time I would’ve gotten around to writing an update to yesterday’s log, it was already March 14th, and I guess there’s no harm in adding the update here:</p>
                    <br><br>
                    <p>So, my brother made it home yesterday.<br>
                    Unfortunately for me that means I can not use my pc during the weekend, I hope that doesn’t spell any trouble for me when they invite me to play in the group chat, and I hope that by now you would have understood that too.<br>
                    My mom made a very yummy lunch/dinner, and she also made some sort of salty croissant? Won’t complain though, it tasted great.<br>
                    I got some work done on the website, and the prototype looks great.<br> 
                    It is basically fully functional by now, but I would like to add some more features; Maybe a different background which could be more aesthetic? Or custom made buttons for each day, and hell, even these journals might get some a little ak artistic touch too. I’ll look into adding some music and sound effects as well.<br>
                    I ate some yummy desserts too.</p>
                    <br><br>
                    <p>That was pretty much everything I did yesterday, for now I’ll go pray Duhr and then I’ll finish yapping about my early morning stuff<br>
                    LATERRRR</p>
                    <br><br>
                    <p><em>It’s already around 9pm as I’m writing this…</em><br>
                    I didn’t expect that it’d get this late without me writing anything, but I guess now I’ll do a full recap of today.</p>
                    <br>
                    <p>So, I was using my laptop in bed, right? I was apparently so tired that I slept without even noticing and my mom came to check on me and put everything away in their proper places.<br>
                    <em>( Thanks, mom. )</em></p>
                    <br>
                    <p>I then woke up feeling like broken legos for Suhor, and decided to only eat a little bit, drink like a camel, and then went right back to destroy my mattress.<br>
                    I didn’t immediately sleep, though. I was already pretty late in reading Quran ( I was at around page 202 ), and it is Friday, so I wanted to somehow someway get to Surat Al Kahf ( Spoiler alert: I made it 😛). I read for around half an hour and then honk mimimi’d.</p>
                    <br>
                    <p>I woke up at around 9 am feeling hella devastated, as I had a silly, sad dream. You could probably call it a nightmare.</p>
                    <br><br>
                    <p>In the dream, I was following pretty much real life, but I guess a bit into the future? Basically, I was writing these journals pretty much everyday, and making steady progress on the website.<br>
                    I was really happy with it.</p>
                    <br>
                    <p>All of a sudden, I fell deathly ill. I was coughing up blood like crazy and could barely get anything done. I was cursing the whole world because I couldn’t even focus on working on the website or writing these.<br>
                    Before I knew it, I was hospitalized. I don’t know what had come over me in the dream, but I didn’t want to tell you about it. I felt too bad knowing that I was dying.<br>
                    Thus, I entrusted the project to Lou. I knew I hadn’t much time left, so I made sure to explain to her everything and when to send this website to you, gave her the link, and then wrote up a few messages for the last remaining week on my deathbed, and then I died.</p>
                    <p>I had really assumed the dream was my reality. It felt so realistic: Everything from the happiness I got from writing the journals, the devastation from not being able to work on them anymore, and the guilt that overcame me at the end of it all when I couldn’t meet your expectations. I didn’t doubt it all for a second, I didn’t go lucid.<br>
                    <em>But I hadn’t woken up.</em> I just turned into a wandering spirit, a lost soul.<br>
                    <em>…well,</em> so much for lost, I knew who I was and I retained all my memories and feelings for one.</p>
                    <br>
                    <p>I was just biding my time, flying around and watching everyone from time to time, until it was April 12th.<br>
                    Are ya caught up in the story thus far? Pretty cool dream, yeah? WELL TOO BAD! Cause today ain’t your lucky day, pal, I woke up.<br>
                    Twasn’t my lucky day either, I had woken up feeling absolutely dreaded.</p>
                    <p>All the morale that I had going into this “challenge” was now all but destroyed, I’m now massively considering just chickening out of it on the day of your birthday. Heck, maybe I will.<br>
                    However, one thing I got out of it is that I massively, MASSIVELY adore your goofy ahh. My love for you remains unwavering, meaning I’m going to do my absolute bestest ( or maybe my second absolute bestest ) to appreciate you, and you only, by the end of this challenge, even if it ends prematurely.<br>
                    I realized that I have been taking you for granted for so long, so now I’m infinitely more determined to make this website a great thing! I hope that it might serve as some sort of token of goodwill from me to you… hehehe, Kimkim-san to Sisi-kun. You really are my special one of a kind pookie. I will make sure to treat you really well after this whole thing.<br>
                    Oh well, that was a good dream nonetheless, I felt very warm and fuzzy by the end of it all, so, no harm, right?</p>
                    <br><br>
                    <p>Anyways, after I woke up, everyone was asleep because it was 9 am and people do tend to sleep during Ramadan. I decided to read some Quran because Ion got anything better to do.<br>
                    I read it for around an hour and a half STRAIGHT, my top record yet, to this day. :D<br>
                    Actually saying to this day makes it sound wrong because it's a diary so SCRATCH THAT!!<br>
                    My mom then came to check on me when she woke up, so I decided to get my bum up as well and I went and prayed.<br>
                    …I then proceeded to go right back to bed because my legs still hurt like crazy. I booted up my laptop and then wrote up the start of this log.<br>
                    I didn’t write much, though. It was already getting pretty late and I had to go to the mosque.<br>
                    So I did. I went there and it ended relatively quickly, which was neato, I guess.</p>
                    <br>
                    <p>My dad decided to take my brother out for another test drive, so I stayed behind and met with some friends and we just yapped and yapped and yapped until it was around 3:30pm.</p>
                    <p>I got home, took a shower because hot damn I was STINKY. And then I went back to bed, and this time I decided that instead of finishing today’s log, I would read Quran until I made it to Surat Al Kahf, no pauses.<br>
                    God knows how many pauses I took, LOL. I was taking some slight breaks from time to time to watch reels, felt like an absolute asshole when I saw some of the reels that you liked, and also indulged in some highly intellectual conversations in some group chats that I’m in.<br>
                    I did make it to page 304 before Maghreb though, so that’s a win in my books.<br>
                    Still, never did I think that I would read an astounding 100 PAGES in a single day. I’m sure you would be proud of me.<br>
                    Oh yeah, I’m soon approaching the point where you planned on beginning your reading in Quran. I hope that you listened to my condition and are reading it.<br>
                    I wouldn’t find it weird either if you started doing a plethora of activities now that I’m not in the picture anymore, for a month. Your sleeping schedule has already seen some MAJOR improvements.<br>
                    …you still wake up hella late, though. ( you lazy cutie 💞 )</p>
                    <br>
                    <p>Nothing major happened from that point onwards; I had lunch, prayed, prayed again, brought dessert with me to bed, and I’m now writing this stuff at 10:23 pm.<br>
                    I guess one thing that could count is a loophole that I found. Technically, I’m not allowed to send you messages, right? So, I decided to just write notes only for you to see. I hope that you atleast saw one or two.<br>
                    ( And that the note with the song “IDGAF” isn’t directed to me, ahem. It really isn’t.)</p>
                    <br><br>
                   <p>Welp, I’m gonna end it here, I guess.<br>
                    I might continue learning how to code websites in order to be able to do quirky stuff later on.<br> 
                    But realistically, I’m probably just going to sleep.<br>
                    In that case, no matter how late you see this, I love you and I miss you so much. I genuinely wish I could talk to you right now.</p>
                    Sending you as many telepathic mwahs and hugs with your hair ties. 💞💞</p>
                    <br><br><br><br>
                   <p><em>( … am I supposed to sign off or something? )</em></p>`
    },
    
    // placeholder ak dont forget to update this shit 
    ...Array(28).fill().map((_, i) => ({
        title: `🌼 Day ${i + 3} 🌸`,
        content: `Today was an amazing day! or something idk yet`
    }))
];

heartScroll.style.animation = 'heartbeat-idle 2s infinite';

buttonGrid.innerHTML = Array.from({length: 30}, (_, i) => 
    `<button class="day-btn" style="--i: ${i}" onclick="openModal(${i})">Day ${i + 1}</button>`
).join('');

function updateHeartPosition() {
    const container = document.getElementById('journalContainer');
    const content = document.getElementById('journalContent');
    const heart = heartScroll;
    
    // Get accurate heights
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const heartHeight = heart.offsetHeight;
    
    // Calculate movement range
    const startY = 20; // Top padding
    const endY = container.clientHeight - heartHeight - 20; // Bottom padding
    
    // Calculate position
    const scrollPercentage = scrollTop / scrollHeight;
    const newY = startY + (scrollPercentage * (endY - startY));
    
    heart.style.top = `${newY}px`;
    
    // Animation handling
    clearTimeout(scrollTimeout);
    heart.style.animation = 'heartbeat-scroll 0.5s infinite';
    
    scrollTimeout = setTimeout(() => {
        heart.style.animation = 'heartbeat-idle 2s infinite';
    }, SCROLL_DELAY);
}

// Attach to correct container
const journalContainer = document.getElementById('journalContainer');
journalContainer.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateHeartPosition);
});

let isScrolling;
modalContent.addEventListener('scroll', () => {
    window.cancelAnimationFrame(isScrolling);
    isScrolling = window.requestAnimationFrame(updateHeartPosition);
});

window.addEventListener('resize', updateHeartPosition);

 

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};
