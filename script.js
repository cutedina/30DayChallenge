// Generate buttons
const buttonGrid = document.querySelector('.button-grid');
const journalEntries = Array.from({length: 30}, (_, i) => 
    `🌼 Day ${i + 1} 🌸<br><br>${'Today was an amazing day! '.repeat(15)}`
);

// Create buttons
buttonGrid.innerHTML = Array.from({length: 30}, (_, i) => 
    `<button class="day-btn" style="--i: ${i}" onclick="openModal(${i})">Day ${i + 1}</button>`
).join('');

// Modal functions
function openModal(dayIndex) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    modalText.innerHTML = journalEntries[dayIndex];
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
