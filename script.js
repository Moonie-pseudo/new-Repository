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

      const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });


      const entry = document.createElement('div');
      entry.className = " bg-gray-50 border-b border-gray-200 px-3 py-2 flex justify-between items-center";

      entry.innerHTML = `
        <div>
        <p class="font-semibold">${serviceName}</p>
        <p class="text-gray-600">${serviceNumber}</p>
        </div>
        <p class="text-gray-400 text-sm ml-3"> ${timeString}</p>
      `;
      callHistoryEntriesEl.appendChild(entry);

    });
  });

// Clear History button
clearHistoryBtn.addEventListener('click', () => {
  callHistoryEntriesEl.innerHTML = ''; 
});

//challenge section

// Copy button functionality
const copyButtons = document.querySelectorAll('.copy-btn');
const copyCountEl = document.getElementById('copy-count'); 

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
   
    const card = button.closest('.card');
    const serviceNumber = card.querySelector('.font-bold').textContent.trim();


    navigator.clipboard.writeText(serviceNumber).then(() => {

      let count = parseInt(copyCountEl.textContent) || 0;
      count += 1;
      copyCountEl.textContent = count;

      alert(`Hotline number ${serviceNumber} copied!`);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  });
});
