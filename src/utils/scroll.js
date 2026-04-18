/**
 * Smoothly scrolls a scrollable container to a given section id.
 *
 * @param {HTMLElement} container - the scrollable element
 * @param {string} sectionId - the DOM id of the target section
 */
export function scrollContainerToSection(container, sectionId) {
  if (!container) return;
  const target = document.getElementById(sectionId);
  if (!target) return;

  const containerTop = container.getBoundingClientRect().top;
  const targetTop = target.getBoundingClientRect().top;
  const offset = targetTop - containerTop;

  container.scrollTo({
    top: container.scrollTop + offset,
    behavior: "smooth",
  });
}
