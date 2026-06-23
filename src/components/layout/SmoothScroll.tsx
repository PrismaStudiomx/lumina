let activeScrollAnimation: number | null = null;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function getScrollDuration(distance: number, isHero: boolean) {
  const absoluteDistance = Math.abs(distance);

  if (isHero && absoluteDistance > 2600) return 620;
  if (absoluteDistance > 2600) return 720;
  if (absoluteDistance > 1400) return 760;

  return 850;
}

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

  const startY = window.scrollY;

  const rawTargetY = isHero
    ? 0
    : target!.getBoundingClientRect().top + window.scrollY - offset;

  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const finalY = Math.max(0, Math.min(rawTargetY, maxScroll));
  const distance = finalY - startY;
  const duration = getScrollDuration(distance, isHero);

  if (Math.abs(distance) < 4) {
    window.scrollTo(0, finalY);

    if (isHero) {
      window.history.replaceState(null, "", window.location.pathname);
    } else {
      window.history.replaceState(null, "", `#${cleanId}`);
    }

    return;
  }

  document.documentElement.classList.add("is-programmatic-scrolling");

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

      window.scrollTo(0, finalY);

      if (isHero) {
        window.history.replaceState(null, "", window.location.pathname);
      } else {
        window.history.replaceState(null, "", `#${cleanId}`);
      }

      window.setTimeout(() => {
        document.documentElement.classList.remove(
          "is-programmatic-scrolling"
        );
      }, 120);
    }
  }

  activeScrollAnimation = window.requestAnimationFrame(animate);
}