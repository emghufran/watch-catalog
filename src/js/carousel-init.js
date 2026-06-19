// Custom chevron icons used inside Swiper's nav buttons (replaces the default arrows).
const CHEVRON_LEFT =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';
const CHEVRON_RIGHT =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';

document.querySelectorAll(".swiper.carousel").forEach((el) => {
  const slideCount = el.querySelectorAll(".swiper-slide").length;
  const nextBtn = el.querySelector(".swiper-button-next");
  const prevBtn = el.querySelector(".swiper-button-prev");
  const paginationEl = el.querySelector(".swiper-pagination");

  // A single photo doesn't need nav arrows or pagination dots.
  if (slideCount <= 1) {
    if (nextBtn) nextBtn.remove();
    if (prevBtn) prevBtn.remove();
    if (paginationEl) paginationEl.remove();
    return;
  }

  new Swiper(el, {
    loop: true,
    navigation: { nextEl: nextBtn, prevEl: prevBtn },
    pagination: paginationEl ? { el: paginationEl, clickable: true } : false,
  });

  if (nextBtn) nextBtn.innerHTML = CHEVRON_RIGHT;
  if (prevBtn) prevBtn.innerHTML = CHEVRON_LEFT;
});
