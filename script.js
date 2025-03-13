// Generate buttons
const buttonGrid = document.querySelector('.button-grid');

// Structured journal entries (30 days)
const journalEntries = [
    // Custom entries for first 5 days
    {
        title: "    Journal Log 1: The Beginning",
        content: `<p>Welp, today: March 13th 2025, marks the first day of the challenge, huh… 
                  <br>I really didn't expect that I’d follow through with it but it didn't sit right with me to do you dirty like that and then for everything to be back to normal without taking at least SOME sort of punishment
                  <br>Although a bit extreme, I think I can afford to be sad for a month and then be happy later for reallll. 
                  <br>( with you perhaps??? :3 )
                  <br>Anyways, gosh knows how sad I was yesterday, I was pretty devastated not gonna lie.
                  <br>I started thinking of ways I could cope with this, or at least try to convince you that you really are my special pookie wookie, and I landed with making a website :D which is exactly what you’re seeing right now
                  <br><em>…well</em>, using the word “exactly” is a bit of a stretch, as I have just started developing it so I'm not even sure of the final outcome of it, and I also started taking some coding lessons in three languages: HTML, CSS and Javascript, and I’d like to think that my hard work is beginning to show on godddd.
                  <br>Enough of that though, the whole point of this blog style website is to fill you in about my life, how I’m doing, etc… to prove to you that no matter how far away we are from each other, there’s always going to be some sort of contact, even if it meant training a pigeon to send you a letter ;).</p/
                  <br><br>
                  <br><br>
                  <br><br>
                  <p>So, today was certainly a day alright:
                  <br><br>
                  <br>For one, I got to see you plenty of times, I was basking in the beauty for what I presumed would be the last time until the next semester, and it was ironic; You were wearing yellow, so you looked like the sun, and even though I wanted to stare for so long and even talk to you, I knew that I shouldn’t and that I couldn’t, but oh well.
                  <br><br>
                  <br>We also did an hour and a half of PE, I was really happy because I didn’t expect myself to do that well in Volleyball, as I had decided that it wasn’t for me last year when I barely got to improve and made the ball fly all the way to the roof at the end of year, but I was doing some really good plays with really good precision to boot, and also was no longer scared of the ball. 
                  <br>My friend who played it with me a lot and tried coaching me before said that he was really proud of me, so I’m happy.
                  <br>Although my whole body felt sore by the end of it, and I was really thirsty.
                  <br><br>
                  <br>I’m not sure if it matters to you by the time you read this, but I got 17 in french, so that’s cool.</p>
                  <br><br>
                  <br>We played Uno in class!
                  <br>After I got kicked out of your class ( totally didn’t come to sneak a lil peek or two or anything nope nope nope ), we formed a party of 13 and started playing the game! We did 2 games and they were hella fun, since we kept playing until we had a loser instead of finishing with the first winner.
                  <br><em>… I did get my butt handed to me, though…</em> It wasn’t pretty; I got hit with a +12 and immediately after it a +10, not only that, but all my cards were just number cards.
                  <br>I had no shot at victory with a deck of 20~ cards, so I decided to sabotage the person next to me, who was Amira. Yes, THAT Amira. She had 2 cards left.
                  <br>I was laughing my butt off at her, I was full on focusing on her and visualizing her cards, and I realized that she only had red and blue cards.
                  <br>So I put my cards to use and made it hell for her; Either by putting down yellow or green cards, giving her more cards, or downright just cancelling her turn. 
                  <br>God I love being evil. I did win after that so that was cool.
                  <br><br>
                  <br>And then, I walked home with Fares and Nadjib, we were just yapping and yapping about the most random stuff on earth ( mostly Fares bragging about his plays in Werewolf )
                  <br>My legs hurt a lot whilst walking, though. I already started having major pain by the time we got into school and it was way worse when I walked home.
                  <br><br>
                  <br>I did make it home though, so all’s good. ( felt weird not taking a picture but what can I say )
                  <br>I immediately took a shower because duh. And then I lied down in bed for around an hour to rest
                  <br><br>
                  <br>Then I got up, sat my butt down, and started learning to do the website. It's in its infancy stage, of course, it still will display this though!!
                  <br><br>
                  <br>It’s like 17:20 at the time, still a long time till I can drink so that’s unfortunate. I’m currently listening to a podcast and writing this stuff, maybe I’ll end it here for today. I miss you a lot and I still love you 
                  <br>I reckon I should at least add an update at night, since I plan on sleeping in around 8 hours.</p>`
    },
    {
    // Placeholder entries for days 6-30
    ...Array(29).fill().map((_, i) => ({
        title: `🌼 Day ${i + 2} 🌸`,
        content: `Today was an amazing day! or something idk yet`
    }))
];

// Create buttons
buttonGrid.innerHTML = Array.from({length: 30}, (_, i) => 
    `<button class="day-btn" style="--i: ${i}" onclick="openModal(${i})">Day ${i + 1}</button>`
).join('');

// Modal functions
function openModal(dayIndex) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const entry = journalEntries[dayIndex];
    
    modalText.innerHTML = `
        <div class="journal-title">${entry.title}</div>
        <div class="journal-content">${entry.content}</div>
    `;
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};
