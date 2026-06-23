let scrollCleanupTimer: number | null = null;

type SmoothScrollOptions = {
  offsetMobile?: number;
  offsetDesktop?: number;
};

export function smoothScrollTo(
  id: string,
  options: SmoothScrollOptions = {}
) {
  if (typeof window === "undefined") return;

  const cleanId = id.replace("#", "");
  const isHero = cleanId === "inicio";

  const target = isHero ? null : document.getElementById(cleanId);

  if (!isHero && !target) return;

  if (scrollCleanupTimer !== null) {
    window.clearTimeout(scrollCleanupTimer);
    scrollCleanupTimer = null;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const isMobile = window.innerWidth < 768;

  const offset = isMobile
    ? options.offsetMobile ?? 88
    : options.offsetDesktop ?? 112;

  const rawTargetY = isHero
    ? 0
    : target!.getBoundingClientRect().top + window.scrollY - offset;

  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const finalY = Math.max(0, Math.min(rawTargetY, maxScroll));

  document.documentElement.classList.add("is-programmatic-scrolling");

  window.scrollTo({
    top: finalY,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });

  if (isHero) {
    window.history.replaceState(null, "", window.location.pathname);
  } else {
    window.history.replaceState(null, "", `#${cleanId}`);
  }

  scrollCleanupTimer = window.setTimeout(() => {
    document.documentElement.classList.remove("is-programmatic-scrolling");
    scrollCleanupTimer = null;
  }, 950);
}