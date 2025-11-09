export function smoothScrollTo(elementId: string, offset: number = 0, duration: number = 1500) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const start = window.pageYOffset;
  const target = element.getBoundingClientRect().top + window.pageYOffset - offset;
  const distance = target - start;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Easing function for smooth deceleration
    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

