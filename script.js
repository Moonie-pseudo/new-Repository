//heart-count
const cardHearts = document.querySelectorAll('#card-section .fa-heart');

const navbarHeartCount = document.getElementById('heart-count');

cardHearts.forEach(heart => {
    heart.addEventListener('click', () => {
       let count = parseInt(navbarHeartCount.innerText);

      count += 1;

      navbarHeartCount.innerText = count;
    });
  }); 

  //calling section

  const coinCountEl = document.getElementById('coin-count');
  const callButtons = document.querySelectorAll('.call-btn');

  const callHistoryEntriesEl = document.getElementById('call-history-entries');

  const clearHistoryBtn = document.getElementById('clear-history-btn');

  callButtons.forEach(button => {
    button.addEventListener('click', () => {

      let coins = parseInt(coinCountEl.textContent);

      if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      coins -= 20;
      coinCountEl.textContent = coins;

      const card = button.closest('.card');
      const serviceName = card.querySelector('h3').textContent.trim();
      const serviceNumber = card.querySelector('.font-bold').textContent.trim();

  
      alert(`Calling ${serviceName} at ${serviceNumber}`);

      const entry = document.createElement('div');
      entry.className = " bg-gray-50 border-b border-gray-200 px-2 py-2";
      entry.innerHTML = `
        <p class="font-semibold">${serviceName}</p>
        <p class="text-gray-600">${serviceNumber}</p>
      `;
      callHistoryEntriesEl.appendChild(entry);

    });
  });

// Clear History button
clearHistoryBtn.addEventListener('click', () => {
  callHistoryEntriesEl.innerHTML = ''; 
});

