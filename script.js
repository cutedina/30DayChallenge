// Generate buttons
const buttonGrid = document.querySelector('.button-grid');

// Structured journal entries
const journalEntries = Array.from({length: 30}, (_, i) => ({
    title: `🌼 Day ${i + 1} 🌸`,
    content: `Today was an amazing day! ${'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(15)}`
}));

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

const journalEntries = [
    {
        title: "Day 1: My First Entry",
        content: "Start writing your actual content here..."
    },
    {
        title: "Day 2: Another Day",
        content: "More detailed journal content goes here..."
    },
    // ... continue for all 30 days
];
