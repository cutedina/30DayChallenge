const { OverlayScrollbars } = OverlayScrollbarsGlobal;
const buttonGrid = document.querySelector('.button-grid');

const memories = [
  "Click this text for the memories to cycle through! If you get back here, then you've cycled through all of them.",
  "Remember when we first one? It was so fricken out of nowhere, like I was at my grandparents and you just message me like dat, and then we kept on yapping for days after I found out how much of a sigma alpha wolf male you are. That's not what I want to talk about, though, I only brought this up to talk about how freaky we were during the first few weeks, like... PEGGING??? heh.",
  "Remember 11/11? I remember how by that point, I was already sure of my ever growing crush on you, and despite knowing the fact that you don't like dating, I still decided to shoot my shot for the first time, because I thought that you are rad as CRAP dude!!! I felt my soul leaving my body writing that. Yeah okay even before confessing to you I was stressed as all heck, and Lou was encouraging me to confess to you and stuff, and then I was even more stressed after I screwed it up, because I realized I went in to propose with absolutely zero planning. But I kinda don't regret anything from it, to be honest. Your letter made me super duper happy even though it was sort of a rejection. I still have it, in fact!",
  "Remember my trip to Oran? I was really not happy about going there, but man, you made that trip so amazing for me,  I was super happy just texting you all the time, even though I should've been revising for that history test we had, but I still chose to yap with you instead and I still occassionally think about it too. It was also the first time we had a long call, at night! An hour long call!!! I think it was during here that the daily goodnights started getting very long too, right?",
  "Remember our dumdum Instagram and Discord calls? The calls in which we used to talk about god knows what. WHAT DID WE EVEN TALK ABOUT???? probably me being lovey dovey and you being all hateful ong. I still really enjoyed the calls, though. We did all kinds of singing, hell, I sang a lot there, too! And it was also the birth of some silly jokes, like the trumpet.",
  "Remember the French test? I will never believe how lucky I got to get you paper there, I was more happy about that than anything, and didn't even focus on the test. I'm sure her reaction in your class must've been a shock to you.",
  "Remember how I used to call you every single day after exams? It was relieving just getting to hear you talk after them darn stressing exams, and also not relieving hearing you talk about how badly you screwed them up. And then two weeks later I hear about how you got 19.72/20... Okay, DINA... Oh! I'm not sure if I told you about this, but it was during this that my mom finally got suspicious of me hanging around with a girl, see, I wanted to call you back after talking to you the day we did physics, because you told me on call that you absolutely screwed up the exams. So, I went home, put my bags down, dialed you up and told my mom I was going to my friend's house. Then she kept questioning me and all of a sudden my phone just went 'Votre correspondant ne reponds pas...' and I just froze there, and then went out. I still called you.",
  "Remember you giving me your hairtie? I love that thing to pieces, oh my god. I worked super duper hard to get it, which is such a big lie, because I only had to give you so many snacks and beg for millenia for you to give it to me. 10/10 Though, I'm never getting rid of it, especially now I've been wearing it so much on my wrist instead of my forearm.",
  "Remember new years? I wrote you such a long message that day because I had started getting more conscious about the fact that maybe I was being crappy to you for so long, so I tried to do my best with it and pour my little heart into it, and I'm glad you took your time reading it and were stoked about it! It even netted me my second matching pfp with you, and also the opportunity to watch Horimiya with you, which I loved so so much!! <3",
  "Remember the hieroglyphics? It's crazy to think that we would've stayed such smol simple friends if you didn't go ahead and look for ways to translate it.",
  "Remember Valentine's day? I'm super happy with how it turned out, because that was something I had planned FOREVER, man. I was super super super super super super super glad that you didn't block me right afterwards. JOKE I KNOW YOU'RE NOT EVIL, JUST A LITTLE MEANIE.",
  "Remember playing Yandere Sim together for like, 2 days? Yeah, probably not the prettiest end to it, but I hope that we can get back to playing it soon!!",
  "Remember playing Among Us together? And how fun Together and Dress to Impress were? oh wait, those were like week.",
  "Remember how we watched Horimiya: The Lost Pieces??? Oh wait, that's soon >:)"
];

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
  {
    title: " 💞 Journal Log 3: Gore Aftermath",
    content: ` <p>Alrighty, it do be late at night now, like 11pm lol.<br>
                    I should have written this beforehand but GOD was I busy today.<br>
                    This is gonna be the shortest log in a veeeeery long time so rest easy, I'll just talk briefly about my day to update you and then I'll sleep.. maybe.</p>
                    <br><br>
                    <p>Alright so, I ended up sleeping at 3 am. Yes, that late.<br>
                    And you might be wondering what the hell was I doing up that late, and to that I say, this website.<br>
                    Yeah okay so, I had this brilliant idea to make a heart emoji that scrolls along with these journals, one that beats fast as you scroll and stuff.<br>
                    It's a really good idea, unfortunately my lack of knowledge in these languages massively hindered its creation.<br>
                    I had gotten it to work, only outside of the journals themselves which was stupid. I then tried using AI to help with it but they were already building off a really wrong idea so it didn't lead anywhere.<br>
                    I got frustrated and slept.</p>
                    <br>
                    <p>I woke up for Suhor a bit late and ate up, then went right back to bed cause why the heck not.</p>
                    <br><br>
                    <p>My mom later woke me up because she and my dad planned on going out to buy some clothes. It was raining for a while which meant that we stayed home a bit longer than expected, and then once it stopped, my brother didn’t want to wake up no matter how much we called for him, leaving my mom to decide that she’s not going with him.</p>
                    <br>
                    <p>So, we pulled up in da car to Hassiba.<br>
                    I really like the place since I found some cool shops for my classic shenanigans.<br>
                    Anyways I decided to switch things up this time around and I bought clothes in beige, because, I don't know, colors and stuff. I wasn’t the proudest of it ‘cause I kinda did it solely to satisfy my dad’s nagging, but it’s overall good. 7.5/10.<br>
                    I'm also going to buy a new pair of shoes like my current ones, but brown, and a brown belt to match with the outfit. That might bring it up to a solid.. 8/10.<br>
                    I look like a park ranger wearing em though so that's neat.</p>
                    <br><br>
                    <p>We got back home at around 2 pm, and I immediately got to work on the website.<br>
                    I worked on it, and I worked, and I worked.<br>
                    I didn't take the slightest break trying to get the heart thing to work.<br>
                    WELL TOO BAD, I'm a dumbass and I couldn't make it work even after spending a total of 12 hours on that thing.<br>
                    Seriously, though, no amount of words could do justice to how frustrated I’m feeling because of it.<br>
                    Not that I don’t wanna do it or anything, it’s just that I’m currently too inexperienced with web development and web design, so the approach I tried for making the heart actually scroll, in the correct place, whilst being animated to boot, ended up being a complete and utter dud.<br>
                    I might have to consider just making the heart scroll but not beat, which is so sad.</p>
                    <br><br>
                    <p>Either way at the time of writing this the website is hella broken, I'll fix it ASAP tomorrow. I hope that by the time you receive this website the heart thing's gonna be there.</p>
                    <br>
                    <p>Speaking of, I'm currently planning on delivering this site to you on your birthday. It is the smallest thing I can offer you as a gift so my apologies in advance.<br>
                    Nothing else of note happened today, really. MY MOM DID MAKE TACOS FOR LUNCH, THOUGH!!!! YUMMY YUMMERS. 😋</p>
                    <br>
                    <p>Aside from that I did the usual shower; Take my brother to his school and everything else.</p>
                    <br>
                    <p>I wonder if you went to the thing they told us about.</p>
                    <br><br>
                    <p>Goddamn it's 11:45 pm and we're both still up, what a buncha losers, am I right?<br>
                    Wait, nevermind that, you went around 15 minutes ago. Still a buncha losers.<br>
                    Just kidding, you really shoulda blocked me there, pal. Because it's paining me more than anything to not be able to message you all the time.</p>
                    <br><br><br>
                    <p>I miss you so heckin’ much, goodnight.</p>`
  },
  {
    title: " 💞 Journal Log 4: Man, screw the titles",
    content: ` <p>Holy crap it’s been 4 days.<br>
                    I’m writing this at 2:34 pm. It hasn’t been long since I got home so it’s not yet time for lunch. I do be thirsty as heck. ( and hungry hehehe )</p>
                    <br><br>
                    <p>I’m in a really good mood with how today went, plus I managed to get the heart to work!!<br>
                    Not exactly working the way I had intended it to, but it’s a good step in the right direction. I’ll talk about it in more detail once I get to that point in the diary. It’s in its very early phase so by the time I get to it, I hope that I added more stuff to it.</p>
                    <br><br>
                    <p>Hmm, I am kind of writing these and assuming you’d know all the context, so maybe I should add some for both future you and future me.</p>
                    <br><br>
                    <p>Alright, alright. Today’s a Sunday, right? The last week of school too, I hadn’t assumed that you’d come to school so that was cool.</p>
                    <br><br>
                    <p>Oh, silly me! I’m getting ahead of myself, teehee!<br>
                    Well, well, I woke up for Suhor as usual and DIDN’T go back to sleep, YEAAAAAH LEVELING UP BIG TIME AM I RIGHT?? OR AM I RIGHT???<br>
                    Is what I’d say if I actually didn’t sleep.. Well, ya see… I didn’t wash my hair yesterday like a silly goose, so I wanted to wash it today early in the morning so I can go to school without looking like crap.<br>
                    But I made a slight miscalculation, namely going back to bed and doom scrolling for the billionth time. I slept minutes before I had intended to wake my lazy butt up and get busy.</p>
                    <br><br>
                    <p>Ended up oversleeping, but I still managed to get everything done in time including picking out my clothes so that was cool. Speaking of, I haven’t worn this shirt in ages, you know, the red and black button-down shirt? Yeah, I haven’t worn it ever since November or something like that, back when you took a picture of me all the way from your class. That sure was a fun time.<br>
                    I’m still confused on why you showed it to your mother, though. 😛</p>
                    <br><br>
                    <p>Ah, right. You sure were <em>green</em> today, huh? Still, that green outfit looked great on you, super cool with how you’re keeping your hair more down as of recently. I’m not sure which one I prefer but it’s not like I ever had a say in this, yeah? You’re still hella pretty all the way.<br>
                    …can I by any chance call you my four-leaf clover? Cause you’re my lucky find :)</p>
                    <br><br>
                    <p>Okay, that’s corny, I agree with that much.</p>
                    <br><br>
                    <p>Back on topic, I love it so much when we don’t study like this, this is the only part I enjoy about school; I just wanna go to school, grab a chair and chill with my buddies. Gosh, that’s bliss.<br>
                    I’m not sure why the Arabic teacher still tries to teach us, when over half the class isn’t present.<br>
                    At least the Physics teacher didn’t care the slightest bit that I was the only one in class not writing, not sure if it’s nepotism.<br>
                    NOT GONNA COMPLAIN, THOUGH!!! I spent the good part of like 40 minutes just yoinking papers at Hichem, who by the by, was coincidentally writing on the board. ( The coincidence part is a lie, she saw him wearing his cap and made him write on the board, hehe. )</p>
                    <br><br>
                    <p>Morning classes went by just fine, and I was planning on saying my goodbyes for the semester. But nooo, everyone decided it’s a good time to actually come to class. So I caved in and also went to class since no one wanted to skip with me anymore.<br>
                    Wasn’t all in vain, in fact, we played Uno again!<br>
                    Yeah, so, we would’ve had empty periods from 11:45 am until 2 pm, right? But the English teacher is so magnanimous, so she “babysat” us during the first period. I say babysat because we immediately started playing Uno.<br>
                    My grudge and wrath against Amira still goes strong!! I purposefully plopped myself down right next to her so I could absolutely screw with her whole life, on god.<br>
                    I’m treating it like it’s a life-long grudge, but no, just two dummies messing with each other. I managed to make her lose twice so that’s cool.<br>
                    Sadly, the 45 minutes went by too fast, and it was already time for us to leave.<br>
                    HAFIDA THOUGH!!! THE CLUTCH!!! THE MARVELOUS PLAYS!!! OH WHAT A SAVE!!!<br>
                    Yeah, she told us that was can stay in class if we have no one to pick us up, SO IT’S BACK TO ROUND 2 BABYYY!!!<br>
                    I was kinda upset with her earlier because she kept nagging me about my… what’s the white thingy that we have to wear called?? Either way, I guess she made it up unknowingly. She would’ve been cursed by my endless wrath had she not done that, wise choice.<br>
                    This time, we decided to play with the 0-7 rule; it’s a rule where if you put down a number 7 card, you have to switch your deck with someone else’s deck, and if you put down a 0, all the decks get passed around from person to person depending on the direction of the game. It’s basically a rule made solely to wreak havoc; a chaos pandora’s box.<br>
                    I, too, am very magnanimous, so I listened to Amira’s pleas to not absolutely crap on her, and we decided to team. A legendary duo.<br>
                    Unfortunately, the game got cut short by none other than HAFIDA THAT *****. Sorry, trying my best not to curse. But god damn that was annoying, she made us stop playing when she saw us.<br>
                    Why, you might ask? Oh, you’re so silly! The answer is so obvious: It’s because <em>we were gambling…</em> That upsets me so much I want to bang my head against the wall.</p>
                    <br><br>
                    <p>But gosh, I love that game. I want to finish what we had started so I’m currently trying to convince everyone in the group chat to play it on Roblox, I know a super fun game there that has so many different rules and themes to choose from! I hope it goes well.</p>
                    <br><br>
                    <p>…It didn’t go well…<br>
                    Not only did Fares do a Fares, but I also had no idea what issues you had in the game. And then no one else wanted to play.<br>
                    That sucked. It was nice that we at the very least played a few scuffed games of Among Us.<br>
                    What sucked even more is the fact that you joined the call to tell me not to send you snaps anymore. Thing is, I sent those snaps to everyone, not just you, so it completely crossed my mind that you were being spammed by me.</p>
                    <br><br>
                    <p>Still, this really does put a wrench in my plans. I don’t even think that you’ll take kindly to this website anymore… Here I was planning on doing some silly stuff just to be able to talk to you or see you.<br>
                    Like messaging you two days before you have to take your vitamin D, so I can act like I don’t know when it will be even though I do, and after you’ll say “In 2 days”, I would text you the day after to remind you that it would be tomorrow, and then on the day, I would remind you in Suhor. Or sending you this website on the day of your birthday, so that even if we don’t talk, you might be able to see my progress for the following two weeks.<br>
                    Or even going to your class from time to time just to see you. But I’m guessing you want to fully cut contact for a month... Do you just want me to disappear from your life?<br>
                    I don’t really know anymore. I think I’ll take a break from writing.</p>
                    <br><br>
                    <p>I’ll finish this later.</p>
                    <br><br><br>
                    <p>I’m in bed now.</p>
                    <br><br>
                    <p>I really didn’t expect anything like that to happen. You sounded so upset at just the fact that I dared do something with you.<br>
                    That did switch my mood, true, but it didn’t leave me completely demotivated from working on the website. I had enough drive in me to finish what I had started earlier today.<br>
                    I think I’ve finished up work on the heart. I’m not sure if I’ll ever pick it back up, but as of now, it’s just a pink heart that has a little glow to it and scrolls pretty fluidly. On pc, at least. My tests on my phone didn’t go any better so I’m totally giving up making it work there.<br>
                    See, I had great ambitions to animate the heart; to make it beat whilst idle, and beat even more intensely whilst scrolling, and to shake violently whilst being hovered over. It’s what I spent so long working on, after all.<br>
                    But I realized that with the way I wrote my spaghetti code, it wasn’t possible. It’s either it scrolls or it animates; no in-between.</p>
                    <br><br>
                    <p>I took the tough decision of cutting out the animations.</p>
                    <br><br>
                    <p>I was going to consider beginning work on the art for the website, but I didn’t have any inspirations, nor the drive to just start drawing some buttons and the background and stuff.</p>
                    <br><br>
                    <p>My dad’s aunt came to have lunch with us, but I was already so out of it.<br>
                    I’m so tired. I’ll try and see to it so that I try to ignore your presence tomorrow. I’ll work harder on the website.</p>
                    <br><br>
                    <p>Just don’t be upset at me anymore.</p>`
  },
  {
    title: " 💞 Journal Log 5",
    content: ` <p>Sheesh, I can taste the negative energy from yesterday just by glancing at the way I worded stuff.<br>
                    Well, that doesn’t matter anymore, because it’s a new day, and it’s a new me… maybe.</p>
                    <br><br>
                    <p>Well, well, it’s the fifth entry in the Journal Logs, so that means it’s the sixth day that we’ve cut contact. Yup, the math adds up beautifully.<br>
                    Seriously though, I totally should’ve made a Journal Log 0, like, as a prologue. Actually, that should’ve been Journal Log 1. Oh well, missed opportunity. Wait, hold on, <em>does that mean Journal Log 30 will be after April 12th</em>??? I’m not even gonna think about it anymore.</p>
                    <br><br>
                    <p>Either way, I can’t tell whether time is flying or taking its sweet sweet time, because, gosh, it sure feels that way.<br>
                    I just wanna talk to you again, one more time.<br>
                    I regret everything that I have done, and that I haven’t done, to upset you. I wish I could just turn back time or something and fix it. This is hell.<br>
                    I oughta take some punishment for my mistakes, in fact, I won’t dwell on this any longer, I should let all my emotions boil up so that I can write a truly heartfelt <em>Journal Log 16</em>. ( Oh, the marvelous foreshadowing! )</p>
                    <br><br>
                    <p>Wait, what am I supposed to talk about then?? Truly a conundrum for the modern age.<br>
                    Right, I’ll just yap about today.</p>
                    <br><br>
                    <p>YAP SESSION: COMMENCE!!</p>
                    <br><br>
                    <p>Right, right. So, Monday. I’m thinking of skipping the talk about Suhor, because at this point, I’m just waking up, eating, and sleeping.</p>
                    <br><br>
                    <p>I also saw my cat walking on the street and he came running up to me so I gave him some head pats and chin scratches.<br>
                    Pat pat pat :3</p>
                    <br><br>
                    <p>ONTO SCHOOL!! Yeah okay so, I genuinely didn’t expect a single person to come to school.<br>
                    Sounds dumb, yes. But I wholeheartedly believed that maybe only 5-10 people would come, not close to 20.<br>
                    It was still hella fun though, the History teacher is a goat for letting us play one of my favorite board games ever, one that is so great I want to play it all the time.</p>
                    <br><br>
                    <p>..Yeah, it’s Uno.<br>
                    I do be sounding like a broken record speaking about it, but MAN is the game fun to play with enough people.<br>
                    Anyways, we played it again. We put two tables together and squeezed ourselves all together to play.<br>
                    I’m not sure how many of the people that played with us you know, but there was Nadjib, Hichem, Sizziani (@hs_kurma, the guy in the group chat that calls me baddiewi or badihwi), Amira, Cilia, The twins Bel9adi, and honorable mention: Me 👅<br>
                    ( More commonly known as Akram, Ak, Ak-47, Akku-chan, Kerrouma or KimKim )<br>
                    It was really fun with all the chaos happening at the same time. Fares did try killing me a bunch of times so that’s awesome.<br>
                    Oh yeah, seeing Hichem laughing at the door and then seeing you standing there gave me a real scare.<br>
                    No matter, though. You looked really blue and pretty today, all that’s missing is for you to wear red tomorrow since you wore yellow on Thursday, green yesterday ( Sunday ), and blue today!<br>
                    Ah well, playing was fun until idara came and ruined our day. They made us get all separated and stuff so that was mega lame.<br>
                    We invoked the wrath of the enemies of fun, I guess.<br>
                    I was coerced into not coming that evening, because a bunch of kids from my class were saying that if I skip, they’ll skip as well.<br>
                    Couldn’t see you that evening, but I hope I can tomorrow :)</p>
                    <br><br>
                    <p>Little bit of a timeskip here, but we ended up playing Among Us :D<br>
                    Sadly, you were asleep or something, not sure which. But it was a lotta fun!! I was the impostor 3 times in a row and was just goofing around altogether, I lowkey killed Maya as well on accident but it worked out in the end.<br>
                    I did get ganged up on by both Maya and Lina though, so that’s something.</p>
                    <br><br>
                    <p>I didn’t do work on the website today, I’ve just been trying out random stuff from the course and also looking at people’s journeys with making websites. I also tried looking at different art styles and stuff because I do be garbage at art.<br>
                    I want to draw a few stuff for you :D</p>
                    <br><br>
                    <p>Whoopsy daisy. I’m now in bed despite how early it is. ( Ahem 10 pm )<br>
                    I kind of fought with my dad, again. But I’ll get to it later.</p>
                    <br><br>
                    <p>So, we had lunch. My mom made a really yummy lunch despite how simplistic it was, though at this point, I only look forward to lunch so I can drink my heart out ( Grape flavored IFruit is so goated ).</p>
                    <br><br>
                    <p>After that, dad went to his room and I went to my office/gaming room. Mom was cleaning the kitchen after we had finished everything.<br>
                    A little while before Isha, she came to me crying asking me to come help.<br>
                    So, for context, she was “deep cleaning” the glass top gas stove, and at some point, all four igniters on the stove started sparking electricity.<br>
                    In short, water leaked through somewhere somehow and introduced a short circuit.<br>
                    I shut off the circuit breaker for the stove, and told her that it’s fine, as long as my dad doesn’t find out, we’ll just dry it out with a blow dryer tomorrow. Besides, she can just turn on the fire using a lighter since the gas works just fine.<br>
                    …She told my dad, and he went ballistic.<br>
                    Started yelling at her and stuff like he ever did anything, berating her to her face whilst she broke down crying. And then to add insult to injury, he started berating her, loudly, to my face:<br>
                    “Your mom is so useless, so replaceable”<br>
                    “I didn’t want to tell you this, but you should know that your mom is the worst possible example for you” and stuff like that.</p>
                    <br><br>
                    <p>That pissed me off. Rightfully so.<br>
                    Anyways a few fights and stuff happened and I ended up going to bed.<br>
                    Can’t be a true diary if I don’t talk crap about my dad at least once.</p>
                    <br><br>
                    <p>Kind of sad how you lot tried playing Among Us, but couldn’t organize yourselves, lame.<br>
                    I’ll try organizing stuff tomorrow so that we can play together, I wanna talk to you again :P</p>
                    <br><br>
                    <p>Anyways, I do be tired from all this, so I’m going to sleep. I wonder if I’ll see you tomorrow.</p>`
  },
  {
    title: " 💞 Journal Log 6",
    content: ` <p>Writing this right after Isha.<br>
                    I’m in a super good mood today, everything was nice. I got some inspiration for the website so I’m gonna look into the stuff tomorrow. I even fixed some little bugs that were happening with the text rendering.</p>
                    <br><br>
                    <p>I’m really happy that I got to interact with you a lot today :3</p>
                    <br><br>
                    <p>So so sososososososo:<br>
                    I really didn’t expect to go to school today. I had “agreed” beforehand with the others that we wouldn’t go today, so I went back to bed after Suhor fully expecting to sleep.<br>
                    And well, I did, but my silly ahh forgot to turn off my alarm for 9 am, so I ended up waking up early, and as bored as I was, I decided to check my phone and lo and behold, my friends are in class?? OUR CLASSES DIDN’T EVEN START YET.<br>
                    Out of sheer boredom, I decided to get ready for school, and then I headed there. Amira and Nadjib came as well.<br>
                    Once we got in, we were 6 kids in some random class, and yet the Science teacher still decided to teach us like we were a full class. Fun.<br>
                    There goes our plan to just fool around in class until 11:30 am.<br>
                    No matter though, because we had Islamic education after that, surely he won’t give us a lesson.<br>
                    ..He gave us a lesson.<br>
                    I admit though, it was a relatively fun one. We just began the lesson on divorce so it was interesting learning about it.</p>
                    <br><br>
                    <p>Probably the biggest surprise was seeing you leaving school, I didn’t even know that you were there to begin with. You did zoom past me though, huh.<br>
                    Sadly, no red outfit today. ( there goes the dream. I still made sure to stare, gotta appreciate beauty. )</p>
                    <br><br>
                    <p>Anywho, I ended up going home as soon as possible, I just took Nadjib with me and we bolted straight home. We did talk a bunch on the way so that’s neato.</p>
                    <br><br>
                    <p>Upon making it home, my old man wasn’t here so I grabbed my mom’s hair dryer and made sure to dry up the stove, even though enough time had passed for it to have dried up. ( Not to mention the fact that my mom was cooking with literal fire, so yeah. )<br>
                    I turned back on the circuit breaker and it worked just fine. My mom was super relieved and happy, and I was left confused as to why he can’t ever think rationally for once in his life.</p>
                    <br><br>
                    <p>I had a lot of fun playing with you after that. We did Among Us, remember? I’m gonna make sure to enjoy these little play sessions as much as possible, because they’re pretty much the only times where I can talk to you.<br>
                    That does remind me, I’m planning on messaging you for the first time in a week tomorrow. Even though I know that you took your vitamins on Friday, and that you’re supposed to take them two days from now on Saturday, I’ll pretend like I don’t know to squeeze out just the extra day of talking to you. I hope you won’t be mad that I “forgot” and even more mad when you’re reading this.<br>
                    <em>...Seriously though, a week has passed already??</em><br>
                    Back on topic, it was pretty fun playing with everyone. I accidentally swore to god that it wasn’t me when you died the first round, even though I meant it as a joke because I thought that Maya was the impostor and that her plan was to pin it on me saying something like “He wants you all to believe that he would never kill her!”.<br>
                    Was funny seeing you tweaking out after I got voted out, though.<br>
                    I’m surprised you weren’t impostor a single time, I guess you are just a goody two shoes in the end. I did want to see whether you would kill me or not if you ended up being an impostor at some point. Maybe later at night we’ll see, when everyone comes back and we play again.<br>
                    I did vow to myself that I wouldn’t kill you if I did end up being the impostor, because we were vouching for each other a lot and stuff.<br>
                    ..Nah, I just didn’t want to kill you, no tactical advantage for me out of it.<br>
                    I was so close to winning that one game where I accused Samy of being it, and where Lina was being very suspicious. I still ended up losing because I played too aggressively in the end. Icarus flew too close to the sun, I guess.<br>
                    What I didn’t expect was the total baby tantrum crash out from Samy, like come on nobody complained when they died or got voted off, and besides, I placed reasonable suspicion on you and you didn’t disprove it which got you deported back to Mexico. No point being immature about it.<br>
                    You handled it pretty awesomely though! Can’t expect anything less from you, THE ALPHAAAA!!!</p>
                    <br><br>
                    <p>After that, I got pretty bored, so I was just scrolling around and replying to my messages and the like.<br>
                    I did go run some errands, though. My grandma sent me to buy soft drinks and seasoning and jambo and milk.<br>
                    I can’t tell if I was just tired or if Ramadan cooked me up, but I forgot half the stuff she told me to buy 5 minutes after she did. Two trips to the grocery store it is, then.<br>
                    Second one wasn’t all a waste, though. I saw a cute stray kitty just basking in the sunlight and rolling around on the sidewalk, so I made sure to give him the certified ak pet pet pet treatment. All da headpats and chin strokes for the cutest kitties.</p>
                    <br><br>
                    <p>Oh yeah, I decided to message Hichem to play with him. I’ve never played with him before ( aside from one time when he was still together with Lou ), but I was so bored that some part of me decided that I could probably beat him in some game he plays a lot.<br>
                    It’s a fighting game in roblox, I know that gang used to play it alot, and it’s anime based so I guess they like that kind of stuff.<br>
                    Either way, I had fun playing with him. I did get tossed around at first because I had no idea how the game worked, but after I got the hang of it, I did really well.<br>
                    Samou joined us too, and with less than an hour of playtime, I was already sweeping the floor with him so that was a great ego boost.</p>
                    <br><br>
                    <p>That’s pretty much everything that I did today, I will admit I’m already being very lazy because of the break and whatever. OH! I guess I won’t go to school tomorrow, since you’re not going either, or at least I assume that you won’t, based on the first semester.</p>
                    <br><br>
                    <p>I won’t be able to see you anymore :(</p>
                    <br><br>
                    <p>Also, I’m guessing they aren’t going to play anything today, so I might as well go to bed nice and early today.<br>
                    Nighty night cutie patootie 💞💞</p>
                    <br><br><br>
                    <p>…Telepathic kiss? :3</p>`
  },
  {
    title: " 💞 Journal Log 7",
    content: ` <p>Well, I’m very bored.<br>
                    I gotta admit, I haven’t been this bored in a while. Ah well, it <em>is</em> pretty early, so I guess that is subject to change.</p>
                    <br><br>
                    <p>Brighten up, Ak!!!<br>
                    Alright!!!!</p>
                    <br><br>
                    <p>Hi there, dear reader whom I love and adore very much!!<br>
                    I have to say, though… You just couldn’t have been more off the mark about the fact that I will cease to see you in a romantic light if I just stopped talking to you. These feelings are so strong that not talking to you is just making ‘em stronger. Out of the frying pan, into the fire, I guess.<br>
                    Heh… I guess I just really like you then, huh?<br>
                    <em>Corny.</em></p>
                    <br><br>
                    <p>Anywho, it hasn’t been long since I woke up, and I woke up feeling like crap. Probably bad sleep after Suhor.<br>
                    It doesn’t help either that I immediately went to my pc after getting out of bed, after scrolling for a bit on my phone.</p>
                    <br><br>
                    <p>I really didn’t do anything, I just read Quran for a bit. I’m so happy about the fact that I’m not that far away from the point where you’re supposed to start ( if you haven’t started yet, that is ), so I finally reached you :)</p>
                    <br><br>
                    <p>I’m going to watch some Youtube, I guess.</p>
                    <br><br>
                    <p>I Just finished a 2 hour gaming session with Hichem :D<br>
                    We played the same game as yesterday starting from 12pm, and Manale was there as well!<br>
                    I think I’ve gotten plenty good at the game, as I’m able to go toe to toe with Tsu even though he knows the mechanics way more than I do, and I can wash the floor with Manale, heheh.</p>
                    <br><br>
                    <p>Oo, my brother won’t be coming this weekend, that’s nice. Now I can play for the next whole week. Yay.</p>
                    <br><br>
                    <p>Thinking about him made me play a game that he really likes. I watched him play it for a few hours but never understood the lore behind it, plus it was very late at night, close to 3 am. I didn’t finish it but I sure as heck had fun.<br>
                    It’s such an interesting game, it’s called Katana Zero. I’m sure that it doesn’t interest you the slightest bit, but I’ll try to explain it briefly:<br>
                    Okay, so, Katana Zero is a 2D action platformer, it takes place in a dystopian city called New Mecca ( just thought it’s funny so I should mention it). The main protagonist is a psychopath; He is sort of a samurai assassin with the ability to manipulate time ( Slow motion, rewind time and stuff ), which he uses to predict the outcome of events and avoid death. In short, he’s immortal. He has no recollection of his past, so he sees a psychiatrist, who asks him about his dreams every night, and gives him some contracts of who to kill and who to kidnap and stuff like that, before administering him some <em>medicine.</em> He gains notoriety as “The Dragon” from his mass murders, and slowly begins to unravel his past through the game.<br>
                    It’s REALLY a fun game for me, my only nitpick about it is that the dialogue is sometimes way too long, I wish there was just a rush mode where I can go and kill like a maniac.<br>
                    Both my brother and I thought that the game would be about a samurai dude in a futuristic world, who is haunted by nightmares and maybe something else, but DANG, we didn’t expect this story. 10/10 game.</p>
                    <br><br>
                    <p>I’m not even finished with the game so I have to make some time for it soon. Maybe some other  games as well, I’ll see to it.</p>
                    <br><br>
                    <p>Oo, I just came across a song I used to really like a few years back; It’s called Reincarnation Apple by PinocchioP. Yes yes, if you decide to listen to it it’s probably going to sound unusual, but I think that’s the part that I like. The animation also looks hella good, like a fever dream of sorts.<br>
                    I hope that in a few years I get recommended Mushoku Tensei once more, genuinely one of my favorite stories that I have read as a guy who never reads stuff. I will read it again at some point, I promise myself. It’s like 60-70 THOUSAND words per volume, so in total I would have over 2 MILLION words to read. EEE I'M SO EXCITED FOR SOMETHING THAT HASN'T EVEN HAPPENED YET!</p>
                    <br><br>
                    <p>A little bit of a timeskip here, this is right after we finished our Gartic Phone games!<br>
                    I may have lied a bit about the fact that I was going to bed, I just merely wished to finish writing today’s entry in the L O G.<br>
                    Sosososo, I super duper enjoyed playing with you today, I’m glad we had so much fun in Among Us and stuff; Sadly you weren’t the impostor a single time, but you did get the seeker once. Also god DAMN that mode is scary, like from the music to the setting to the BEEPING when the seeker is close. 10/10 mode, would be infinitely better on call as well.<br>
                    As for Gartic Phone… YOU FREAK, I didn’t know you were like that, though the drawings were really good, I was laughing my butt off the whole time at the prompts and the drawings we did. I had a lot of fun :)<br>
                    I even had a dream today where we played a bunch of random roblox games together and talked a whole bunch, so I’m glad to see that something like that happened.</p>
                    <br><br>
                    <p>Okay, you lot just finished absolutely leaking da crap out of my old pictures. Can’t say I’m really happy that she did that; had the roles been reversed, everyone would’ve gone ballistic, but hey, can’t have what you want in this world. Not every man gets his wish.<br>
                    Though for that one specific picture, I WASN’T CRYING!!! Seriously, I was just laying back thinking of how much I had fucked up in the physics test and Mehdi took a W picture of me.<br>
                    I should’ve gone to sleep before any of this had happened. No, in fact, I should’ve gone to sleep before any of what’s happening happened. This fucking gore shit knocked the ever fucking living lights out my will to sleep. I was so sleepy but now I genuinely want to die. I don’t think I’m going to be able to sleep <em>at all</em>. What a joke.<br>
                    I really should say this in the group chat now that you’re fighting them there, but I don’t really wanna intrude with your business. I know that it’s probably a lost cause because I tried stopping certain people once from watching gore, but they’re literally a lost cause. I also know that you’re going to be massively upset at me, and that this group chat is going to be barely holding onto life from now on, but I don’t want to deal with this, not now, not ever.<br>
                    Seriously, what the fuck??? It’s gore, god damn it. It's real, living people who’ve had families and friends and entire years of experience in life, being recorded in their helpless state, and they watch that? What do you gain from watching it? Do you get off from seeing the life being driven out of their eyes? Do you enjoy seeing people driven into such corners mentally and physically that their only choice is to take their own lives? I’m genuinely so disgusted by them. I know that I am no greater than the next person, but I don’t watch gore; just because I can, doesn’t mean I should. Hell, if I have the time for that, I’d rather go do something useful with my life, read Quran or watch a fun show; laugh at jokes, not people’s demise.</p>
                    <br><br>
                    <p>I can’t sleep at all. My whole fun night ended off on such a shit note. It’s way past midnight, and Suhor, even, so all this talk should be in the next log, but I can’t be bothered at all anymore, my mood is in fucking shambles.</p>
                    <br><br>
                    <p>I decided to go work out after this whole mess; I worked out for around an hour and a bit, pushing myself even more than usual just to by some miracle of god, forget all this shit. I just realized that despite having tried so much to keep this diary curse free, that all went to shit now.<br>
                    I fell asleep on a couch inside my “office” whilst resting for a bit, so at least I got some sleep in.<br>
                    I ended up waking up a tad late for Suhor, so I ate only a little bit, and didn’t drink jackshit. Way to go.</p>
                    <br><br>
                    <p>I don’t even know if I want to play later today, fucking weirdos. My mental state is in such shit that I decided not to even send you a message about the vitamin D stuff.</p>
                    <br><br>
                    <p>I’ll just go, man. Goodnight 💞</p>`
  },
  {
    title: " 💞 Journal Log 8",
    content: `<p>Well, yesterday ended off on a bad note.<br>
    I’m still genuinely super upset at the fact that they even sent gore to begin with, how they were treating you like garbage and stuff. Hell, I’m really sorry about not backing you up. D*** move from my part. Sorry. I’m sure you’re extremely mad at me as I’m writing this, I don’t know whether you’ll forgive me or not, but for what it’s worth, I really regret it.<br>
    I was too chicken.</p>
    <br><br>
    <p>Anywho, it hasn’t been too long since I woke up, and I’m kind of home alone, so I decided to start a new tutorial solely focused on CSS, and absolutely avoid Javascript for the time being, because I just want to style the website, not do anything else. It goes against my moral code but I plan to ask AI for help on the harder stuff.<br>
    That is to say, work on this website is currently paused, as I’m doing practice websites for the time being, just writing random codes to see what they do, and also trying to recreate stuff online!</p>
    <br><br>
    <p>What the heck, this tutorial wants me to remake Youtube?</p>
    <br><br>
    <p>Oh, yeah! You might be wondering as to why I’m home alone: Basically, my dad went to work as per usual, and my mom went to our school, because she heard about the fact that even though there are no results, the teachers are still going to be there, and she was ADAMANT on talking to my teachers again.<br>
    Thankfully, They didn’t talk crap about me.</p>
    <br><br>
    <p>…<em>most of them didn’t</em>, in fact, the majority were really nice, telling my mom how much of a good student I’m and all that good stuff. Except the French teacher... no, CADET.<br>
    You see, CADET hasn’t the slightest clue of who I am, so she mistook me for someone else, and then started spewing to my mom the most random bullcrap ever: “Your kid is so delinquent! He is hanging around extremely bad influence! I saw him the other day going away from school when they were supposed to be getting inside school after lunch, and I was like ‘Woah woah, where do you think you’re going?’ and he said ‘I’m going to pray’. Yeah, right. In fact, I saw him smoking the other day!”<br>
    She really doesn’t have the slightest clue as to who I am, even my mom found it humorous.</p>
    <br><br>
    <p>I realize it’s been a bit since I’ve last said this, but, I love you :3 I wonder if I should say it tonight as I remind you not to take the vitamins, but realistically, I won’t. I still love you though. Hehe.</p>
    <br><br>
    <p>Anyways, I don’t really have much to do at the moment.<br>
    In fact, I’ve been so bored that I decided to hit up some old friends of mine. Lead to some pretty interesting conversations, but who am I to complain? Overall, really enjoyable.<br>
    ( Still much rather talk to you instead 😝)</p>
    <br><br>
    <p>Seems as though my mom told my dad about my teachers saying nice stuff about me, so he said that he’s going to get me a gift. PLEASE just let it be a phone, I don’t care which phone, just any phone. I swear to god if it’s another watch.<br>
    I won’t complain if it is, but I’d seriously rather have something useful to me instead.</p>
    <br><br>
    <p>Huh, the group chat is pretty darn lively if I do say so myself. I was fully expecting it to just die out in such a lame manner.<br>
    Again, I really feel bad for not standing up for you yesterday. I’ll have to apologize extensively when we do start talking again, albeit in a long time from now, but I rest my case.</p>
    <br><br>
    <p>I just tried to play with Samou but, WOW, his wifi is bad right now. Like, leagues worse than yours. Hell, I’m surprised such lag could even be possible in this day and age, but I digress.<br>
    We tried fixing it but to no avail, I guess it’s not something he can fix. Too bad.</p>
    <br><br>
    <p>What the heck?? My grandpa just called me, gave me 4000Da, called me again, and then gave me another 2000Da??? Alright, out of all the days I could have gotten rich, I didn’t expect it to be today. Yippeeeee!</p>
    <br><br>
    <p>Bit of a time skip here:<br>
    Oh my god they do not want to play at all in this group chat, seriously, I’m trying to set up some games STOP DISAPPEARING WAAAAAA.</p>
    <br><br>
    <p>I played roblox for a bit, I did some silly horror game which tried so hard to be scary to the point where it was SO difficult not to laugh.<br>
    I also didn’t realize but I guess that Israel has already breached the Palestine-Israel cease-fire agreement that they had in place? Since Iza just messaged me earlier freaking out about some alarms happening, so that’s lame.<br>
    May god be with them in Gaza.</p>
    <br><br>
    <p>Also, Gartic Phone was a bit mehh today, no?<br>
    I felt like I had so much more fun yesterday, but today it was just brain rot. Too bad.<br>
    Still, I wonder why you wouldn’t join call in discord. We were all in a group call there, although only Haroun and I were speaking.</p>
    <br><br>
    <p>Think that’s enough for the night, I’m just going to go rot in bed for a bit and then sleep. I hope to talk to you more tomorrow again.</p>
    <br><br>
    <p>I’m so going to elongate the conversation once I tell you about the vitamin D :3<br>
    I hope you have the sweetest dreams for days to come. 💞</p>`
  },
  {
    title: " 💞 Journal Log 9",
    content: `<p>Today’s the first day of spring!!<br>  
    I miss this season so much oh my god I wanna see the flowers blooming and all the green and blue :D</p>  
    <br><br>  
    <p>Anyways it’s a Friday today and I woke up super late, so I’ll go to the mosque first and then I’ll yap here.</p>  
    <br><br>  
    <p>Okay, I’m back, I’m really bored even though there is the group chat so I’m just going to go read some Quran.</p>  
    <br><br>  
    <p>Right, a bit of a timeskip here, it’s a bit before lunch, and wow do I have nothing to offer in terms of yap today.<br>  
    EXCEPT for one thing: Katana Zero.<br>  
    See, instead of doing anything important today, like being useful to society or being social with friends, I decided to just finish the game. And wow, I’m in love.<br>  
    Okay okay, I’m just going to summarize the story from the point where I picked off today. I’m not sure if I even did that for the previous parts but it’s fine.</p>  
    <br><br>  
    <p>Anyways, so, I started right inside of a club, after the psychiatrist told me to kill the DJ there, and to do it without speaking a single word with him. When I questioned the reason for that, the psychiatrist said that he’s a drug dealer and that I’m “too important” to risk having drugs. The gameplay in this club level is fun, it’s like a mix of stealth and quick action. Once I reach the DJ, he struggles at first to confirm if I’m "real" when I arrive, and drops to the floor all scared. I chose to ignore the psychiatrist’s orders and talk to him. He goes on to explain that the drug he's on has greatly altered his perception of time and reality, and that the bottle he came across was not labeled, putting “Zero” at a disadvantage for not knowing the drug's name, because by now he realizes it is the drug that the psychiatrist gives him. The DJ then ended up being shot from outside, so I didn’t get to kill him but it still counted towards the assassination. Something funny that happened in the level is that there is an enemy called “Strong Terry”, just an average NPC, but one who is constantly glazed by all the other NPCs throughout the game. He is the first enemy that dies without even fighting, and then every other NPC tries to avenge him. Poor lad.<br>  
    Oh my god I yapped this much about one of the least important levels in the story. Bruh.</p>  
    <br><br>  
    <p>Okay, after this, I go back home and see that I’m once again notorious on the tv news. I proceed to have a reiteration of that nightmare he has every day, where he is a little boy, and a scientist comes in and shouts at him to warn him, before getting shot in the head by a shadow figure. This dream gets more scary every night and progresses more without him waking up. I go to the psychiatrist afterwards and confront him about the drug, and he starts cursing me out for not listening to him, before fearfully explaining that it’s a military drug that alters your perception of time and stuff.</p>  
    <br><br>  
    <p>Okay wait let me speed through this.<br>  
    He then gives me the dossier of whom I need to assassinate; It’s a prisoner who is chosen to testify against the government in a court hearing, and I need to eliminate him without killing anyone else.<br>  
    Going into the prison, I find out that not a single soul is alive ( IMPORTANT ). Uh oh, even the prisoner that I need. SWAT teams arrive at the prison and speak to “The Dragon”, telling me that I’m surrounded. 
    I decided to escape without killing a single person. Going back home, I find some random vet from the “War” on the street. He is begging for money. When I walk past him he says that he sacrificed his leg in the war just for a dirty “Cromag” ( I think they’re a race, sort of like dirty Jews ) to walk past him. After I tell him that I also fought in the war and chooses not to believe me and start cursing me out, the game abruptly curts to me killing him. Back home, the little neighbor girl said that some guy gave her a tape and said to show it to me. When I decided to watch it with the little girl, it was apparently a snuff film where this dude killed my nextdoor neighbors to try to impress me.
    I sent the little girl back home and finished it myself, where I find out that he has a prototype version of the drug that I have, and he reveals that going into withdrawal from the drug makes you die to others, but you are forever stuck in your own mind living your worst nightmares. Yeesh. Same nightmare, same stuff. I then jolt awake and go to the psychiatrist, only to see that he’s out of office today, so I just walk out and some dude in a limousine picks me up. It’s the guy from the snuff film. He starts saying how much of a fan he is of “The Dragon”, and that snorts cocaine and asks me to work with him, which is when I refuse and call him “fucking subhuman” (lol), so he gets mad and kicks me out of the car ( I also gave him my katana, oops ). I then proceed to follow him at night to some studio, which is where the whole level takes place, and then at the end I fight this dude, and after hitting him a few times, his colleague shows up, and she stops me from killing him and escapes with him ( She can somehow teleport ). Wait, I’m gonna stop saying I and use “Zero” instead. Zero goes home after that, and gets visited by the little girl who’s dressed up like him for trick or treat. He drinks his herbal tea and drifts off to sleep. Instead of having a nightmare, he awakens paralyzed on his couch and surrounded by two masked men: Comedy and Tragedy. They say that they have poisoned his tea, and explain a prophecy to him. After three days, Zero must don one of two masks, The golden mask of life, or The silver mask of death. Whatever he chooses, they take away the other. Zero jolts awake afterwards, and then the screen glitches to him laying down on his couch to the psychiatrist's office. He addresses Zero and asks him to tell him again about the men in masks. Zero looks around in shock and discomfort, and as he tries to talk to the psychiatrist and explain the weird stuff he's been facing, the psychiatrist transforms into the guy from yesterday’s encounter, who then approaches Zero and instructs him to "get up." Zero is placed at the beginning of the level with no instruction. He can move at the beginning, but eventually movements devolve into a blur of nonsensical noise and screen glitches ( big words big words hehe). As Zero breaks free from his previous hallucination, it’s almost like he’s in his mind now, in a place that’s sort of like where Sans and Chara fight, and this monologue appears on screen ( copied it off of Google ):</p>  
    <br><br>  
    <p><strong>Twenty-eight years in that godforsaken jungle.</strong><br>  
    Killing soldiers wasn't so bad. I hardly remember it.<br>  
    But burning those villages, watching those naked peasants cry… <br>  
    I see it every day. It's not PTSD, it's the drug.<br>  
    It's only been a week, but it feels like a year.<br>  
    Every word is getting longer, the mosquitoes are getting louder.<br>  
    When the drug runs out, time stops, and you're stuck in the jungle forever.<br>  
    It's... grains of sand in a shrinking hourglass.<br>  
    I know what comes next.  I need to ask you a favor.</p>  
    <br><br>  
    <p>A few more hallucinations happen afterwards; One where Zero is in the same spot as that old vet that was begging on the street, doing the same, and getting chided at by the men in masks for going into withdrawal. Another where he is in the office, everything looking red as he falls to the ground scared, seeing both the psychiatrist violently dismembered, and beside him the little girl with his katana through her. Only then does he come out of the hallucinations as the psychiatrist gives him a large dosage of the drug to compensate for missing the previous day, and also comments about Zero’s “thousand yard stare”.<br>  
    Zero is then instructed to pick up a dossier which contains information about “Omar Al-Qasim” ( Funny name ), a billionaire who funded in the manufacturing of the drug and who needs to be assassinated. He is located in some mansion. Zero enters the mansion through a ceiling window. He finds the bad cocaine guy and follows him, fighting through the guards inside. In the last room of the mansion, he kills everyone there, but then gets warped back in time where he triggers a bomb trap right upon opening the door, that knocks him unconscious, leading me to believe that the powers of the drug are precognition; foresight, instead of time travel. Which does make sense, because a screen pops up at the end of each level I played; if I die, Zero says “No, that won’t work” and I pass it, he says “Yes, that should work”, before replaying a recording of Zero going through the level.</p>  
    <br><br>  
    <p>Anyways, he wakes up in a dark room with cocaine man prompting him to wake up. Zero gets repeatedly killed by him. With the dialogue options, I find out that his name is V and the girl from earlier is SNOW. I then annoyed V so much that he killed Omar Al-Qasim out of rage and asks this one colleague of his to kill Zero whilst he’s still chained up, and then gets out. Zero escapes from the chair and kills the colleague in a sort of boss fight ( his name is Mr. Kissyface ).</p>  
    <br><br>  
    <p>Meanwhile, outside, SNOW and V are discussing their current situation. SNOW suggests that V will get a reward from “The Boss” for eliminating “The Swordsman”( MEEE ). As Snow teleports away, V is startled by a body thrown out of the window of the building that Zero was trapped in. He runs away while Zero chases him on his motorbike.</p>  
    <br><br>  
    <p>Which then leads to the coolest part of the game, riding on the highway on a motorbike, killing other henchmen/colleagues in their own motorbikes as the sun slowly sets. V then comes back in a fricken helicopter, firing missiles at Zero. Zero deflects his bullets back at his helicopter, bringing it down. V, now visibly wounded and on the road, tells Zero that he will kill “The Dragon”. The screen turns red then, and someone says “He is not The Dragon… I am.” Before Zero is able to kill V, The real Dragon teleports in, slices V’s arms and takes him away for “Questioning”.<br>  
    Okay yeah wow I’m barely at the first half of the game and this is already this long. Nope, not happening. If you do want to hear about the rest of the game, do ask me, and I’ll be happy to tell you about it :D</p>  
    <br><br>  
    <p>Whoops, a tad bit too late now, but I’ll write this before going to sleep. I had a lot of fun talking to you, despite it being short and stuff and you saying things like “Forget about me” and blah blah, I still felt really cozy :3<br>  
    Sorry about not helping you aswell.</p>  
    <br><br>  
    <p>I hope you’re sleeping well, BAI BAIII SIGNING OFFF 💞</p>`
  },
  {
    title: " 💞 Journal Log 10",
    content: `<p>Why am I getting the weird school Saturday vibe today?<br>  
    ANYWAYS HIII, I HAD A SUPER FUN DREAM WITH YOU IN IT EHEHEHEHE.<br>  
    Won’t tell you about it though, DAAAAME.</p>  
    <br><br>  
    <p>I woke up today feeling hella happy and cozy, almost drifted off again, but I chose to get up seeing how late it was, and went to turn on my pc and was reading your yap with Samy in the gc.<br>  
    Gotta say, though, I’m hella jealous of him on goddd. Because like, I also want to talk to you a whole lot, but I can’t because I’m trying to restrain myself like a man who keeps his word. We did cheat yesterday, though. Oops HEHE.</p>  
    <br><br>  
    <p>My dad told me to go out with him, so I did just that. We went in da car to Alger Centre. He was doing his own thing, so I decided to get a little bit familiar with the area.<br>  
    I’ve never had the chance to do so, and even though the weather was extremely hot, I still had fun.</p>  
    <br><br>  
    <p>We then went back home, and stopped on the way to buy ingredients for the sweets my mom and I are making for the eid. OH! I forgot to mention it yesterday, but my mom and I have made two kinds of sweets thus far; Charak with nuts and also my favorite sweet that we make every year; A white chocolate sweet :D I love white choco so much.</p>  
    <br><br>  
    <p>It hasn’t been too long since I got home, so I hope that we get to play Among Us together latah :D</p>  
    <br><br>  
    <p>Wait omg it’s the next day I completely forgot to finish writing. Um um um I fixed the website yesterday, I got the heart to work so uhhh yuh I LOVE YOU SO MUCHHHHH 💞</p>  `
  },
  {
    title: " 💞 Journal Log 11",
    content: `<p>Well that was embarrassing 💀<br>  
    I didn’t expect the 10th one of all days to be the shortest. oopsie.</p>  
    <br><br>  
    <p>Oh well, all you need to know is that I had fun yesterday :3<br>  
    Also, I’m kind of home alone right now, both my dad and mom went out together at like 10 am? I remember her coming to me and talking to me but I have no idea what she said.<br>  
    I think my dad dropped her off to go shopping with her friend whilst he went off to work as per usual because it’s Sunday, DUH.</p>  
    <br><br>  
    <p>I plan to lock the frickity frick in and absolutely cook on the website. I’m gonna put all my knowledge and motivation to good use and finish the website hopefully today. All that will be left is to polish it and add a few easter eggs later on.</p>  
    <br><br>  
    <p>The group chat is also dead so I literally have zero distractions, and Hichem told me that we won’t play since his family came over so he’s helping his mother with chores and stuff, and it’s very likely that they won’t be leaving any time soon. Let’s goo!</p>  
    <br><br>  
    <p>Okay, well. I may have gotten distracted from time to time but overall, the website is finished. I’m super proud of the current product, 1000+ lines of code put to good use!<br>  
    I’m super tired from looking at lines, LOL. I’ma put off working on it tomorrow and then get the final product done on Tuesday, should be neat. After that it’s just a matter of polishing up the <em>birthday message.</em></p>  
    <br><br>  
    <p>Other than that, I watched a video on an iceberg about Katana Zero; Icebergs are like videos were parts of a media are explored, the higher up the topic is, the more known it is, and the lower it is in the iceberg… You know da drill. It had some really neat explanations as well as fan theories, I also found out that the game has a DLC that’s been in the works for ages, so that’s something to look forward to!<br>  
    I was also listening to a podcast which really made me get unfocused. It was a podcast of some dudes who live in Japan and talk about the most random crap. I still enjoy it alot!</p>  
    <br><br>  
    <p>Oh, I tried reading Quran after lunch, but I literally fell asleep whilst reading it, oopsie daisy.</p>  
    <br><br>  
    <p>AND FINALLY, THE HIGHLIGHT OF THE DAY: CHEATING ON THE AGREEMENT!!<br>  
    Yeah sure I may have gotten lenient on myself for a <em>bit</em> and did that, but man, I don’t regret it. I had so much fun playing with you;<br>  
    I got to teach you Uno and you got your first win, I laughed so hard when I did the ride game I just couldn’t hold it in, and the parkour game was really really fun. I enjoyed it, I like teamwork stuff! Dress to Impress was cool as well, you said I did well so I’m proud :D</p>  
    <br><br>  
    <p>Anyways it’s a tad bit late so I’m gonna head off to bed now. I’ll see ya tomorrow</p>  `
  },
  {
    title: " 💞 Journal Log 12",
    content: `<p>Holy, I just woke up and I’m so tired.<br>
    It’s barely even noon what da heck.<br>
    I feel like I’ve never asked about you in this diary, so, how are ya doing? Are you feeling well compared to before? Are you taking good care of yourself? Did you see a doctor? How did the little event thingy go? Are you keeping up with reading Quran?<br>
    All these questions are things I really want to know and there are even more, but bleh.</p>
    <br><br>
    <p>I don’t know what to do today, so I’m just gonna go play some games, maybe Bloons TD 6? I really wanna do Terraria as well but I don’t have friends who can do it or are willing to play it, unfortunate :(</p>
    <br><br>
    <p>Okay, hella boring day so far. Literally the only things I did of note was helping my mom make sweets, and also going to shop shop and petting da little kitties outside.</p>
    <br><br>
    <p>The group chat might as well be cooked now that the final days of Ramadan are nearing, so despite having suggested that we play Mario Party, I doubt many people will show up. Sadge.<br>
    At least we played Dress to Impress again, ‘twas fun.<br>
    And then we did it again, AND IT WAS EVEN MORE FUN. I love how we’re both ignoring the fact that we’re not supposed to play or even talk together, HEHEHEHE.<br>
    I really enjoyed the parkour stuff and I really wanna finish the game. I did wanna play afterwards with you and Lou but I guess that it was too late.</p>
    <br><br>
    <p>Really short log compared to the others, but I think I’ma go to bed, I do be tired after all.<br>
    Goody nighty :3 💞</p>`
  },
  {
    title: " 💞 Journal Log 13",
    content: `eeeeeeeee`
  },
  {
    title: " 💞 Journal Log 14",
    content: `eeeeeeeee`
  },
  {
    title: " 💞 Journal Log 15",
    content: `eeeeeeeee`
  },
  {
    title: "🎂 🎉HAPPY BIRTHDAY, DINA!🎉",
    content: `<div class="birthday-container">
    <div class="gift-message" style="display: none;">
        <div class="special-day-16">
      <div class="birthday-header">
        <div class="floating-heart">💖</div>
        <h1 class="special-title">To my Dearest Dindin, my Beloved Sisi:</h1>
        <div class="floating-heart">💖</div>
      </div>
      
      <div class="birthday-message">
        <p class="sparkle-text">As time slowly yet gracefully crawls toward the glow of March 28th, I sit here like a loser writing you this long ahh message—okay, jokes aside, I’ve been waiting forever for your birthday. Today (as of you reading this), it’s not just a date on the calendar or something. To me, it’s a celebration of “Dina Sirine,” the gift we do not deserve, the extraordinary person who paints the world in colors (or music ;)) the way only angels could, the girl I idolize with all my existence. Today, I want to try and pour every ounce of my heart into this relatively short message (lies—it’s a novel), to hopefully make you smile, to show you how special you are to me, and to capture the depth of what you mean to me, no matter how uncapturable it is; that is to say, the way your very existence has redefined my understanding of my world. Happy Birthday, my pookie.</p>
        
        <div class="message-card2">
          <p><span class="highlight"> I. March 28th, 20XX: The Day the Cosmos Collapsed (in a Good Way, though)</span></p>
          <p>March 28th is a truly amazing day, one that deserves to be etched in gold. No matter which year it is, it’s always a special day. Why? Because it’s the day the world got much brighter, and infinitely more beautiful, for a deity descended upon it; the birth of its North Star, my North Star. The universe must’ve been conspiring and cackling, like an evil doctor or something, creating you. You are, without a doubt in my mind, a fine creation—the greatest masterpiece in the universe: strong yet tender, wise yet curious, fiery yet calm, and hella loving :).</p>
          <p>It sure isn’t the day I met you, the day fate twisted its little twisty twists, but without this day, there would be no chance encounter for us. So I’m endlessly glad that March 28th exists, and I’ll forever honor it, because it feels like winning a lottery I didn’t even know I’d entered. Being able to cherish you is like stumbling upon a hidden galaxy—one where the stars hum your name and the planets orbit your laughter. You, Dina Sirine, are the Big Bang of my personal universe. Before you, everything was static; after you, supernovas.</p>
          <br><br>
          <p>Ok, I think I'll stop with the astronomy jokes; You probably understand by now that you are my star.</p>
        </div>

        <div class="message-card">
          <p><span class="highlight"> II. How much I missed you. </span></p>
          <p>Before I truly begin, I'd like to take a few words to tell you how much I missed you:</p>
          <p>I miss you so much it feels like there’s an empty space in my days where you should be. Every little thing reminds me of you—the way I hear a joke or see a reel and instinctively want to let you in on it, and how you make me laugh too, the warmth I feel when I'm talking to you. I catch myself looking at my phone, hoping for a message, even if not directed to me, just to feel a little closer to you.</p>
          <p>Time moves differently when you’re not here. The days stretch longer, and even the things I usually enjoy feel a little less exciting because I can’t share them with you. I miss your laugh, and the way you make everything feel lighter, even on the hardest days for both you and I :3.</p>
          <p>The highlight of my break so far has been playing with you, not with the others, but just with you. I had so much fun doing parkour and dressing up with you, I truly had fun playing roblox with you. </p>
          <p>That is to say, I know now how much it hurts to lose you, so I will do my best to never let it happen again. No matter how far apart we are, you’re always in my heart. But I won’t lie, I think I fell in love with you even more now.</p>
        </div>

        <div class="message-card2">
          <p><span class="highlight"> III. The Little Things, And The Big Things, That Make You, You. </span></p>
          <p>Dina, maybe it's just me, but you are the kind of person who turns the smallest, most ordinary moments into something magical. It’s in the way you laugh, the way you get excited about things, the way you care so deeply about stuff, going as far as to fight for what you consider to be right, and are willing to learn from others and are curious about stuff in a good way, and in the way your presence alone is enough to make everything feel okay. You have this effortless way of making people feel special, like they matter, like they are seen. And I know that because you do that to me, by either caring for me or caring about me <3.</p>
          <p>There are a billion brilliant features of you that just come together to make you seem like you're not of this world, like, seriously, I'm always amazed by how fricken cool you are. Like, Your mind? Sophisticated, hell, a kaleidoscope of curiosity, AND I DON'T EVEN KNWO WHAT THAT MEANS!!! The way you talk about the things you love like I said before, that pure enthusiasm that turns every word into music, and sometimes the pure laziness or bitterness or hatred, lol. Maybe it’s how your mind moves so fast, shifting between wisdom and absurdity in a way that never fails to amaze me. You are both the most chaotic and the most composed person I know, someone who can joke around one second and then say something so profound the next. You are a paradox in the most beautiful way, like the universe itself couldn’t decide on just one wonderful thing, so it made you everything instead. There is also your voice, and man is it angelic, not just the sound of it but also its weight; You're such an amazing singer, as you made me go from having zero interest in opera music to actually liking it, and you're also so good at singing just about anything ( ukulele? :3 ), but more than that, you're a great yapper, one of da best! I could probably fall asleep just listening to you talk about... I dunno, but something you like!</p>
          <p>And then there are the tiny things, the ones that might go unnoticed to anyone who isn’t paying attention. The way you type when you’re excited, the way you make inside jokes feel like secret little worlds we get to share ( COUUUGH COUGH COUGH PEGGING COUGHHHHHH ). The way you react to things, the little sounds you make when you’re caught off guard or surprised, gasping like you got betrayed by your closest ally, and also the way you sigh when you’re exasperated but secretly amused. Every little detail, every habit, every thoughtless quirk of yours, each one adds another layer to why I think you are the most incredible person I have ever known.</p>
          <p>I don’t think you realize how much you affect the people around you. You leave little pieces of yourself in people’s hearts, without even trying. Your kindness lingers, your words echo, your presence stays long after you’ve left the room. I have felt it, time and time again. And I hope you know that this world, my world, is so much better simply because you exist. AND NOW FOR THE SEAMLESS TRANSITION ONTO THE NEXT TOPIC!!</p>
        </div>

        <div class="message-card">
          <p><span class="highlight"> IV. How You Changed My World. </span></p>
          <p>Before you, my life was fine. It was plain okay. It was moving along like a steady river, predictable and calm. And then you showed up, and suddenly, the river met the ocean. Suddenly, there were waves, and tides, and endless horizons I never even knew existed. You opened my eyes to things I didn’t know I needed, feelings I didn’t know I could feel.</p>
          <p>You have changed the way I see things, the way I experience the world. I don’t just hear songs anymore—I think about which ones remind me of you ( like Last Christmas, or the Duck Song ). Even the most random, passing things make me think of you. A phrase, a color, a melody and boom, everything is connected to you, like you’ve become the thread running through the entire fabric of my thoughts.</p>
          <p>And it’s not just the little things. You have changed me in bigger ways too. You’ve made me braver, made me care about things more deeply, made me realize that life is about feeling. Feeling everything, the good and the bad, because that’s what makes us human. You make me want to be better, not because I think I need to be, but because I want to be, for you, for myself, for the future I hope to have with you in it. TLDR ; went from an npc to a loving npc.</p>
        </div>

        <div class="message-card2">
          <p><span class="highlight"> V. A Few Memories I Share With You </span></p>
          <p>For dis occassion, I decided to put together a few memories that I cherish with you, in chronological order: ( Click on the pink text to make it switch :D )<p>
          <span class="memory">${memories[0]}</span>
        </div>

        <div class="message-card">
          <p><span class="highlight"> VI. The Forever Part ( Cheesy? Yes. ) </span></p>
          <p class="sparkle-text">Sisi, I could write for centuries and never fully articulate your magic. If there’s one thing I want you to take away from this ( besides the fact that I think you are quite literally divine ), it’s that I cherish you. Not just for your kindness, or your humor, or your brilliance, but for you—as you are, in all your colors, in all your moments, even the ones you don’t think are worth noticing. I see them, and I treasure them.</p>
          <p class="sparkle-text">I promise to always be here. To support you, to celebrate you, to miss you when you’re not around, like I keep doing. I promise to remind you how incredible you are, even on the days when you don’t feel like believing it yourself ( aka none ). I promise to listen, to learn, to grow alongside you. I promise to never take you for granted ever again, to always treat you like the rare, irreplaceable person that you are.</p>
          <p class="sparkle-text">You are, without a doubt, one of the best things to ever happen to this world. And to me.</p>
          <p class="sparkle-text">So, my dearest Dina Sirine, my beloved Sisi, my North Star, my lottery win, my favorite person—happy, happy birthday. I hope today makes you feel even half as loved as you make me feel every single day. 💖</p>
        </div>
        <br><br>
        <p class="magic">With a whole lotta love: KimKim :3 </p>
      </div>
    </div>
    </div>
    <div class="gift-wrap"></div>`,
    special: true
  },

  // placeholder ak dont forget to update this shit 
  ...Array(14).fill().map((_, i) => ({
    title: `🌼 Day ${i + 17} 🌸`,
    content: `Today was an amazing day! or something idk yet`
  }))
];


let scrollInstance = null;
let scrollTimeout = null;
let isFirstClick = true;

buttonGrid.innerHTML = Array.from(
  { length: 30 },
  (_, i) => {
    if (i === 15) {
      return `
        <button class="day-btn day-16" onclick="initGiftAnimationForButton(event)">
          🎈Day 16🎈
          <div class="button-gift-wrap"><div class="tap-label">Open me :3</div></div>
        </button>
      `;
    }
    return `<button class="day-btn" onclick="openModal(${i})">Day ${i + 1}</button>`;
  }
).join("");


function openModal(dayIndex) {
  const entry = journalEntries[dayIndex];
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');

  modalText.innerHTML = `
        <div class="journal-title">${entry.title}</div>
        <div class="journal-content">${entry.content}</div>
    `;

  modal.style.display = 'flex';

  const modalContent = document.querySelector('.modal-content');

  scrollInstance = OverlayScrollbars(modalContent, {
    scrollbars: {
      autoHide: "never",
      clickScroll: true
    },
    overflow: {
      x: "hidden"
    }
  });


  if (entry.special) {
    setTimeout(() => {
      const container = document.querySelector('.birthday-container');
      if (container) initGiftAnimation(container);
    }, 100);

    document.getElementById("birthdayopen").play();
    const memoryElement = modalText.querySelector('.memory');
    if (memoryElement) {
      let currentIndex = 0;
      let lastClick = 0;
      const clickDelay = 2500;

      memoryElement.addEventListener('click', function () {
        const now = Date.now();
        if (now - lastClick < clickDelay) return;

        lastClick = now;
        document.getElementById("birthdayopen").play();
        this.classList.add('memory-changing');

        this.classList.add('fade-out');

        setTimeout(() => {
          currentIndex = (currentIndex + 1) % memories.length;
          this.textContent = memories[currentIndex];

          this.classList.remove('fade-out');
          this.classList.add('fade-in');

          setTimeout(() => {
            this.classList.remove('fade-in');
          }, 500);
        }, 500);
      });
    }
  } else {
    document.getElementById("buttonopen").play();
  }

}

function openExplanation() {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');

  modalText.innerHTML = `
    <div class="journal-title">💌 In case you were wondering:</div>
    <div class="journal-content">
      <p>It's just a little diary that I made for you starting from the day we started the challenge, hence the name “30DayChallenge”.</p>
      <br> 
      <p>I considered it a learning experience and just implemented whatever new thing i learned in those languages, whilst writing about my daily life and things that happened.</p> 
      <br>
      <p>I know that it’s MY diary but I hope that you’ll appreciate the gesture, because, truly:<p> 
      <p style="text-align: center; font-size: 2rem; margin: 2rem 0; color: #ff66b3;">Thank you for all the memories and for putting up with me for so long. I dedicate this website specifically for you, because you’re truly special to me. 💕</p>
      <br>
      <p>P.S: Try interacting with the website, I added a few easter eggs and little thingies here and there :3</p>
    </div>
  `;

  modal.style.display = 'flex';
  document.getElementById("buttonopen").play();

  const modalContent = document.querySelector('.modal-content');
  if (scrollInstance) scrollInstance.destroy();

  scrollInstance = OverlayScrollbars(modalContent, {
    scrollbars: {
      autoHide: "never",
      clickScroll: true
    },
    overflow: {
      x: "hidden"
    }
  });
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.style.display = 'none';
  document.getElementById("journalexit").play();


  if (scrollInstance) {
    scrollInstance.off("initialized");
    scrollInstance.destroy();
    scrollInstance = null;
  }
  clearTimeout(scrollTimeout);
}

window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const loadingScreen = document.querySelector('.loading-screen');
  loadingScreen.addEventListener('animationend', function (e) {
    if (e.animationName === 'loadingfadeout' && e.elapsedTime >= 20) {
      loadingScreen.remove();
    }
  });
  setTimeout(() => {
    if (loadingScreen && document.body.contains(loadingScreen)) {
      loadingScreen.remove();

    }
  }, 22000);
  setTimeout(() => {
    document.getElementById("loading").play();
  }, 10500);
  setTimeout(() => {
    document.getElementById("fadeout").play();
  }, 17000);
  setTimeout(() => {
    document.getElementById("YIPPEE").play();
  }, 16500);
  setTimeout(() => {
    horiHearts();
  }, 16600);
  setTimeout(() => {
    document.getElementById("music").loop = true;
    document.getElementById("music").play();
  }, 25000);
});


function initGiftAnimation(container) {
  const giftWrap = container.querySelector('.gift-wrap');
  const message = container.querySelector('.gift-message');

  let isAnimating = false;
  let velocityY = 0;
  let velocityX = 0;
  let posY = 0;
  let rotation = 0;

  giftWrap.addEventListener('click', startAnimation);
  function startAnimation() {
    if (isAnimating) return;

    isAnimating = true;
    document.getElementById("birthdayopen").play();
    createConfetti();

    message.style.display = 'block';

    velocityY = -15;
    velocityX = Math.random() * 4 - 2;
    posY = 0;
    rotation = 0;

    giftWrap.style.transform = 'translate(0, 0) rotate(0deg)';

    animate();
  }

  function animate() {
    if (!isAnimating) return;

    velocityY += 0.8;
    posY += velocityY;
    rotation += velocityX * 2;

    giftWrap.style.transform = `
          translate(0, ${posY}px)
          rotate(${rotation}deg)
      `;

    if (posY < window.innerHeight) {
      requestAnimationFrame(animate);
    } else {
      isAnimating = false;
      giftWrap.remove();
    }
  }
}


function initGiftAnimationForButton(event) {
  const giftButton = document.querySelector('.day-btn.day-16');
  if (isFirstClick) {
    event.stopPropagation();
    const buttonWrap = giftButton.querySelector('.button-gift-wrap');

    let isAnimating = false;
    let velocityY = 0;
    let velocityX = 0;
    let posY = 0;
    let posX = 0;
    let rotation = 0;

    isFirstClick = false;

    startAnimation2();
    createHearts();
    document.getElementById("birthdayopen").play();

    function startAnimation2() {
      if (isAnimating) return;

      isAnimating = true;
      document.getElementById("birthdayopen").play();

      velocityY = -10;
      velocityX = Math.random() * 1 - 2;
      posY = 0;
      posX = 0;
      rotation = 0;

      buttonWrap.style.transform = 'translate(0, 0) rotate(0deg)';

      animate2();
    }

    function animate2() {
      if (!isAnimating) return;

      velocityY += 0.8;
      posY += velocityY;
      posX += velocityX;
      rotation += velocityX * 2;

      buttonWrap.style.transform = `
          translate(0, ${posY}px)
          rotate(${rotation}deg)
      `;

      if (posY < 500) {
        requestAnimationFrame(animate2);
      } else {
        isAnimating = false;
        buttonWrap.remove();
        giftButton.style = 'overflow: hidden';
      }
    }
  } else {
    openModal(15);
  }
}

function createConfetti() {
  const modalContent = document.querySelector('.modal-content');
  const colors = ['#FFA500', '#FF6B35', '#FFD700', '#FF8C42', '#FFB347', '#FFAA33'];

  for (let i = 0; i < 75; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.cssText = `
          left: ${Math.random() * 100}%;
          width: ${6 + Math.random() * 4}px;
          height: ${6 + Math.random() * 4}px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          border-radius: 2px;
          animation-duration: ${3 + Math.random() * 2}s;
          position: absolute;
          z-index: 1;
          transform-origin: center bottom;
      `;
    modalContent.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

function createHearts() {
  const colors = ['#FF69B4', '#FF1493', '#FF6B6B', '#FF4500'];
  const heartVariations = ['❤️', '💙', '💛', '💜'];
  const screenHeight = window.innerHeight;

  for (let i = 0; i < 120; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.style.cssText = `
          left: ${Math.random() * 100}%;
          bottom: 0;
          font-size: ${20 + Math.random() * 15}px;
          color: ${colors[Math.floor(Math.random() * colors.length)]};
          position: fixed;
          z-index: 1;
          transform-origin: center;
          opacity: 1;
          pointer-events: none;
      `;
    heart.textContent = heartVariations[Math.floor(Math.random() * heartVariations.length)];
    document.body.appendChild(heart);

    let velocityY = -12 + (Math.random() * -8);
    let velocityX = (Math.random() - 0.5) * 3;
    let posX = 0;
    let posY = 0;
    let rotation = 0;

    const animate = () => {
      velocityY += 0.4;
      posY += velocityY;
      posX += velocityX;
      rotation += velocityX * 1.5;

      const verticalPosition = (posY / screenHeight) * 100;

      if (posY > screenHeight - 50) {
        posY = screenHeight - 50;
        velocityY *= -0.3;
        velocityX *= 0.6;
      }

      heart.style.transform = `
              translate(${posX}px, ${posY}px)
              rotate(${rotation}deg)
          `;

      heart.style.opacity = `${1 - (verticalPosition / 120)}`;


      if (verticalPosition < 120) {
        requestAnimationFrame(animate);
      } else {
        heart.remove();
      }
      setTimeout(() => {
        heart.remove();
      }, 6000);
    };

    requestAnimationFrame(animate);
  }
}

function createHeartsFromElement(element, count = 30) {
  if (!element) {
    console.error("Element not found for heart creation");
    return;
  }

  const colors = ['#FF69B4', '#FF1493', '#FF6B6B', '#FF4500'];
  const heartVariations = ['❤️', '💙', '💛', '💜'];
  const rect = element.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height / 2;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.style.cssText = `
      left: ${startX + (Math.random() - 0.5) * 80}px;
      top: ${startY}px;
      font-size: ${15 + Math.random() * 10}px;
      color: ${colors[Math.floor(Math.random() * colors.length)]};
      position: absolute;
      z-index: 9999;
      transform-origin: center;
      overflow: hidden;
      opacity: 1;
      pointer-events: none;
    `;
    heart.textContent = heartVariations[Math.floor(Math.random() * heartVariations.length)];
    document.body.appendChild(heart);

    let velocityY = -12 + (Math.random() * -4);
    let velocityX = (Math.random() - 0.5) * 8;
    let posX = 0;
    let posY = 0;
    let rotation = 0;
    let gravity = 0.8;
    const maxTime = 800;

    const animate = (timestamp) => {
      if (!heart.startTime) heart.startTime = timestamp;
      const elapsed = timestamp - heart.startTime;

      velocityY += gravity;

      posX += velocityX;
      posY += velocityY;
      rotation += velocityX * 0.5;

      const opacity = 1 - (elapsed / maxTime);

      heart.style.transform = `
        translate(${posX}px, ${posY}px)
        rotate(${rotation}deg)
      `;
      heart.style.opacity = opacity;

      if (elapsed < maxTime && opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        heart.remove();
      }
    };

    requestAnimationFrame(animate);
  }
}

function horiHearts() {
  const horiElement = document.querySelector(".bar-hori");
  if (horiElement) {
    createHeartsFromElement(horiElement, 26);
  }
}

const daybutton = document.querySelector(".button-grid");
const welcomehori = document.querySelector(".welcome-hori");
const welcomemiya = document.querySelector(".welcome-miya");
const closebtn = document.querySelector(".close-btn");
const heart = document.querySelector(".os-scrollbar-vertical .os-scrollbar-handle");
const day16 = document.querySelector('.day-btn.day-16');

daybutton.addEventListener("mouseover", () => {
  document.getElementById("buttonhover").play();
});

welcomehori.addEventListener("mouseover", function () {
  createHeartsFromElement(this, 10);
  document.getElementById("horimiya").play();
});

welcomemiya.addEventListener("mouseover", function () {
  createHeartsFromElement(this, 10);
  document.getElementById("horimiya").play();
});

closebtn.addEventListener("mouseover", () => {
  document.getElementById("closebtn").play();
})

day16.addEventListener("mouseover", function () {
  if (getComputedStyle(this).overflow === "hidden") {
    createHeartsFromElement(this, 4);
  }
});

initGiftAnimationForButton()
