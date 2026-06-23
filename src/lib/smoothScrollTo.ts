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

  const distance = targetY - startY;
  let startTime: number | null = null;

  const animateScroll = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      window.requestAnimationFrame(animateScroll);
    } else {
      window.history.replaceState(null, "", `#${cleanId}`);
    }
  };

  window.requestAnimationFrame(animateScroll);
}