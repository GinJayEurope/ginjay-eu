import { useEffect, useRef } from "react";

const sectionIds = [
  "home",
  "about",
  "news",
  "artists",
  "gallery",
  "timeline",
  "events",
  "editorial",
];

const particles = [
  { x: "4%", y: "18%", size: "3px", delay: "-4s", duration: "19s" },
  { x: "8%", y: "37%", size: "2px", delay: "-12s", duration: "24s" },
  { x: "12%", y: "68%", size: "4px", delay: "-8s", duration: "27s" },
  { x: "17%", y: "83%", size: "2px", delay: "-16s", duration: "21s" },
  { x: "2%", y: "55%", size: "2px", delay: "-2s", duration: "25s" },
  { x: "20%", y: "27%", size: "2px", delay: "-19s", duration: "29s" },
  { x: "96%", y: "21%", size: "3px", delay: "-10s", duration: "22s" },
  { x: "91%", y: "43%", size: "2px", delay: "-6s", duration: "26s" },
  { x: "87%", y: "72%", size: "4px", delay: "-15s", duration: "30s" },
  { x: "82%", y: "86%", size: "2px", delay: "-3s", duration: "23s" },
  { x: "98%", y: "61%", size: "2px", delay: "-21s", duration: "28s" },
  { x: "78%", y: "31%", size: "2px", delay: "-13s", duration: "25s" },
];

const sparks = [
  { x: "4%", y: "9%", size: "9px", delay: "-2.1s", duration: "10.7s" },
  { x: "13%", y: "16%", size: "6px", delay: "-7.4s", duration: "12.8s" },
  { x: "20%", y: "25%", size: "11px", delay: "-4.6s", duration: "13.7s" },
  { x: "7%", y: "34%", size: "7px", delay: "-9.8s", duration: "11.6s" },
  { x: "16%", y: "43%", size: "8px", delay: "-5.7s", duration: "9.9s" },
  { x: "22%", y: "53%", size: "5px", delay: "-11.9s", duration: "13.1s" },
  { x: "5%", y: "61%", size: "10px", delay: "-6.3s", duration: "12.2s" },
  { x: "12%", y: "70%", size: "6px", delay: "-1.2s", duration: "9.4s" },
  { x: "19%", y: "78%", size: "12px", delay: "-8.7s", duration: "13.4s" },
  { x: "8%", y: "86%", size: "7px", delay: "-3.8s", duration: "10.2s" },
  { x: "16%", y: "93%", size: "5px", delay: "-10.6s", duration: "11.9s" },
  { x: "2%", y: "48%", size: "6px", delay: "-12.5s", duration: "13.9s" },
  { x: "96%", y: "11%", size: "7px", delay: "-8.1s", duration: "11.3s" },
  { x: "87%", y: "19%", size: "10px", delay: "-3.1s", duration: "12.5s" },
  { x: "79%", y: "28%", size: "6px", delay: "-10.2s", duration: "13.3s" },
  { x: "93%", y: "37%", size: "12px", delay: "-5.2s", duration: "10.4s" },
  { x: "84%", y: "46%", size: "7px", delay: "-12.1s", duration: "13.6s" },
  { x: "98%", y: "55%", size: "5px", delay: "-6.9s", duration: "9.7s" },
  { x: "89%", y: "64%", size: "9px", delay: "-1.8s", duration: "11.7s" },
  { x: "78%", y: "72%", size: "6px", delay: "-9.3s", duration: "12.9s" },
  { x: "95%", y: "80%", size: "11px", delay: "-4.1s", duration: "10.9s" },
  { x: "86%", y: "88%", size: "7px", delay: "-11.2s", duration: "13.2s" },
  { x: "98%", y: "94%", size: "5px", delay: "-7.7s", duration: "9.2s" },
  { x: "82%", y: "57%", size: "8px", delay: "-2.6s", duration: "12.4s" },
];

export default function SignatureVeil() {
  const veilRef = useRef(null);

  useEffect(() => {
    const app = veilRef.current?.closest(".app");
    if (!app) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let motionAllowed = !reducedMotion.matches;
    let frameId = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    function renderPointerDepth() {
      currentX += (targetX - currentX) * 0.075;
      currentY += (targetY - currentY) * 0.075;

      app.style.setProperty("--veil-pointer-x", `${currentX.toFixed(2)}px`);
      app.style.setProperty("--veil-pointer-y", `${currentY.toFixed(2)}px`);

      if (
        Math.abs(targetX - currentX) > 0.05 ||
        Math.abs(targetY - currentY) > 0.05
      ) {
        frameId = window.requestAnimationFrame(renderPointerDepth);
      } else {
        frameId = 0;
      }
    }

    function requestPointerRender() {
      if (!frameId) frameId = window.requestAnimationFrame(renderPointerDepth);
    }

    function handlePointerMove(event) {
      if (!motionAllowed || event.pointerType === "touch") return;

      const normalizedX = event.clientX / window.innerWidth - 0.5;
      const normalizedY = event.clientY / window.innerHeight - 0.5;

      targetX = normalizedX * -18;
      targetY = normalizedY * -12;
      requestPointerRender();
    }

    function updateScrollAtmosphere() {
      const scrollRange = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const progress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
      const focusLine = window.innerHeight * 0.42;
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);
      const activeSection =
        sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= focusLine && rect.bottom >= focusLine;
        }) ?? sections[0];

      app.dataset.veilSection = activeSection?.id ?? "home";

      if (motionAllowed) {
        app.style.setProperty("--veil-scroll-y", `${(progress * -24).toFixed(2)}px`);
        app.style.setProperty(
          "--veil-particle-drift",
          `${(progress * 14).toFixed(2)}px`,
        );
      }
    }

    function handleMotionPreferenceChange(event) {
      motionAllowed = !event.matches;

      if (!motionAllowed) {
        targetX = 0;
        targetY = 0;
        currentX = 0;
        currentY = 0;
        app.style.setProperty("--veil-pointer-x", "0px");
        app.style.setProperty("--veil-pointer-y", "0px");
        app.style.setProperty("--veil-scroll-y", "0px");
        app.style.setProperty("--veil-particle-drift", "0px");
      }
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", updateScrollAtmosphere, { passive: true });
    window.addEventListener("resize", updateScrollAtmosphere);
    reducedMotion.addEventListener("change", handleMotionPreferenceChange);
    updateScrollAtmosphere();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", updateScrollAtmosphere);
      window.removeEventListener("resize", updateScrollAtmosphere);
      reducedMotion.removeEventListener("change", handleMotionPreferenceChange);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="signature-motion" ref={veilRef} aria-hidden="true">
      <div className="signature-motion__depth" />

      {sectionIds.map((sectionId) => (
        <div
          className={`signature-motion__accent signature-motion__accent--${sectionId}`}
          key={sectionId}
        />
      ))}

      <div className="signature-motion__particles">
        {particles.map((particle, index) => (
          <span
            key={`${particle.x}-${particle.y}`}
            style={{
              "--particle-x": particle.x,
              "--particle-y": particle.y,
              "--particle-size": particle.size,
              "--particle-delay": particle.delay,
              "--particle-duration": particle.duration,
              "--particle-index": index,
            }}
          />
        ))}
      </div>

      <div className="signature-motion__sparks">
        {sparks.map((spark) => (
          <span
            key={`${spark.x}-${spark.y}`}
            style={{
              "--spark-x": spark.x,
              "--spark-y": spark.y,
              "--spark-size": spark.size,
              "--spark-delay": spark.delay,
              "--spark-duration": spark.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
