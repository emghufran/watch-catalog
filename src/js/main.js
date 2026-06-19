const BATCH_SIZE = 6;
const loadMoreBtn = document.getElementById("load-more");

if (loadMoreBtn) {
  const updateButtonVisibility = () => {
    const stillHidden = document.querySelectorAll(".watch-card--hidden").length;
    loadMoreBtn.hidden = stillHidden === 0;
  };

  loadMoreBtn.addEventListener("click", () => {
    const hiddenCards = document.querySelectorAll(".watch-card--hidden");
    hiddenCards.forEach((card, index) => {
      if (index < BATCH_SIZE) {
        card.classList.remove("watch-card--hidden");
      }
    });
    updateButtonVisibility();
  });

  updateButtonVisibility();
}
