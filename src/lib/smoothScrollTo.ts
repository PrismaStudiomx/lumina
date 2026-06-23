const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function smoothScrollTo(id: string) {
  if (typeof window === "undefined") return;

  const cleanId = id.replace("#", "");
  const target = document.getElementById(cleanId);

  if (!target) return;

  const isMobile = window.innerWidth < 768;
  const offset = isMobile ? 88 : 112;
  const duration = 850;

  const startY = window.scrollY;
  const targetY =
    target.getBoundingClientRect().top + window.scrollY - offset;

  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const finalY = Math.max(0, Math.min(targetY, maxScroll));
  const distance = finalY - startY;

  let startTime: number | null = null;

  function animate(currentTime: number) {
    if (startTime === null) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      window.requestAnimationFrame(animate);
    } else {
      window.history.replaceState(null, "", `#${cleanId}`);
    }
  }

  window.requestAnimationFrame(animate);
}