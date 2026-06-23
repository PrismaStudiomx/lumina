let activeScrollAnimation: number | null = null;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function smoothScrollTo(id: string) {
  if (typeof window === "undefined") return;

  if (activeScrollAnimation !== null) {
    window.cancelAnimationFrame(activeScrollAnimation);
    activeScrollAnimation = null;
  }

  const cleanId = id.replace("#", "");
  const isHero = cleanId === "inicio";

  const target = isHero ? null : document.getElementById(cleanId);

  if (!isHero && !target) return;

  const isMobile = window.innerWidth < 768;
  const offset = isMobile ? 88 : 112;
  const duration = isHero ? 780 : 850;

  const startY = window.scrollY;

  const rawTargetY = isHero
    ? 0
    : target!.getBoundingClientRect().top + window.scrollY - offset;

  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const finalY = Math.max(0, Math.min(rawTargetY, maxScroll));
  const distance = finalY - startY;

  if (Math.abs(distance) < 4) {
    window.scrollTo(0, finalY);

    if (isHero) {
      window.history.replaceState(null, "", window.location.pathname);
    } else {
      window.history.replaceState(null, "", `#${cleanId}`);
    }

    return;
  }

  let startTime: number | null = null;

  function animate(currentTime: number) {
    if (startTime === null) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      activeScrollAnimation = window.requestAnimationFrame(animate);
    } else {
      activeScrollAnimation = null;

      if (isHero) {
        window.history.replaceState(null, "", window.location.pathname);
      } else {
        window.history.replaceState(null, "", `#${cleanId}`);
      }
    }
  }

  activeScrollAnimation = window.requestAnimationFrame(animate);
}