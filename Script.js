const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.s-cards');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // remove active from all
    tabs.forEach(t => t.classList.remove('active'));
    cards.forEach(c => c.classList.remove('active'));

    // add active to clicked tab and related cards
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});