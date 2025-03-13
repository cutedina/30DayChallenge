// Generate buttons
const buttonGrid = document.querySelector('.button-grid');

// Structured journal entries (30 days)
const journalEntries = [
    // Custom entries for first 5 days
    {
        title: "📖 Day 1: Became an Overnight Author!",
        content: `<p>Wrote 3 whole pages of my masterpiece "How to Pet a Cat Properly"!<br>
                  Sadly, my dog ate pages 2 and 3...<br>
                  <em>New book title:</em> "Why Dogs Shouldn't Proofread"</p>
                  <p>🐾 Word count: 47 (before canine editing)</p>`
    },
    {
        title: "👽 Day 2: Made First Contact!",
        content: `<p>Met a new "friend" in the park! Highlights:</p>
                  <ul>
                    <li>Species: Unknown (claims to be human)</li>
                    <li>Shared snacks: My cookies 🍪, their suspicious green jelly</li>
                    <li>Conspiracy theories discussed: 12</li>
                  </ul>
                  <p>⚠️ Note: Check if local zoo missing any penguins</p>`
    },
    {
        title: "🍝 Day 3: Noodle Emergency!",
        content: `<p>Ate spaghetti so good I cried actual tears!<br>
                  Sauce-to-noodle ratio: PERFECTION<br>
                  Now suffering from:</p>
                  <ul>
                    <li>Food coma 😴</li>
                    <li>Urge to learn Italian</li>
                    <li>Fear I'll never taste this good again</li>
                  </ul>`
    },
    {
        title: "🦜 Day 4: Bird Negotiations",
        content: `<p>Pigeon demanded parking fee for my balcony.<br>
                  Negotiation attempts:</p>
                  <ul>
                    <li>Offered bread crumbs ➡️ rejected</li>
                    <li>Tried bird impressions ➡️ offended them</li>
                    <li>Final agreement: My left slipper as ransom</li>
                  </ul>`
    },
    {
        title: "🎸 Day 5: Rockstar Dreams",
        content: `<p>Air-guitared to Queen for 2 hours straight!<br>
                  Achievements unlocked:</p>
                  <ul>
                    <li>Neighbors filed noise complaint (silent version!)</li>
                    <li>Invented new dance move: "The Shredding Flamingo"</li>
                    <li>Guitar-shaped pizza ordered to celebrate</li>
                  </ul>`
    },
    // Placeholder entries for days 6-30
    ...Array(25).fill().map((_, i) => ({
        title: `🌼 Day ${i + 6} 🌸`,
        content: `Today was an amazing day! ${'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(5)}`
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
