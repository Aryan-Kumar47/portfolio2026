import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type LooseProps = {
  baseHeight?: number;
  images: string[];
  aspectRatios?: string[];
};

type WaveConfig = {
  amp: number;
  freq: number;
  speed: number;
  phase: number;
};

type ConfigType = {
  waves: {
    base: WaveConfig;
    flow: WaveConfig;
    detail: WaveConfig;
  };
  clipMax: number;
  clipPower: number;
};

export default function Loose({
  baseHeight = 375,
  images,
  aspectRatios = ["3/2", "4/3", "5/4", "7/5"],
}: LooseProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const CONFIG: ConfigType = useMemo(
    () => ({
      waves: {
        base: { amp: 0.1, freq: 1.0, speed: 1.0, phase: 5.0 },
        flow: { amp: 0.15, freq: 5.0, speed: 5.0, phase: 10.0 },
        detail: { amp: 0.025, freq: 5.0, speed: 1.5, phase: 2.5 },
      },
      clipMax: 20,
      clipPower: 2,
    }),
    [],
  );

  // 🔥 Unified image source (array OR generator)
  const imagesData = useMemo(() => {
    const sourceArray = images;

    return sourceArray.map((src, i) => {
      const shrinkStartIndex = Math.floor(sourceArray.length * 0.75);
      const shrinkFactor =
        i >= shrinkStartIndex
          ? (i - shrinkStartIndex + 10) /
            (sourceArray.length - shrinkStartIndex)
          : 0;

      return {
        src,
        aspectRatio: aspectRatios[i % aspectRatios.length],
        shrinkFactor,
      };
    });
  }, [images, aspectRatios]);

  useEffect(() => {
    if (!containerRef.current) return;
    const imageElements = imageRefs.current;

    function updateImageSizes() {
      const sizeFactor = Math.min(window.innerWidth / 750, 1);

      imageElements.forEach((el, i) => {
        if (!el) return;

        const shrinkStartIndex = Math.floor(imagesData.length * 0.75);
        const shrinkFactor =
          i >= shrinkStartIndex
            ? (i - shrinkStartIndex + 1) /
              (imagesData.length - shrinkStartIndex)
            : 0;

        const height = baseHeight * sizeFactor * (1 - shrinkFactor * 0.5);

        el.style.height = `${Math.round(height)}px`;
      });
    }

    updateImageSizes();
    window.addEventListener("resize", updateImageSizes);
    const vw = containerRef.current.offsetWidth;

    const triggers = imageElements.map((el, index) => {
      if (!el) return null;

      const normalizedIndex =
        imagesData.length > 1 ? index / (imagesData.length - 1) : 0;

      return ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        onUpdate: ({ progress }: { progress: number }) => {
          const { base, flow, detail } = CONFIG.waves;
          console.log(vw);

          const baseWave = Math.sin(
            normalizedIndex * base.freq +
              (1 - progress) * base.speed +
              base.phase,
          );

          const flowWave =
            0.5 +
            Math.sin(
              normalizedIndex * flow.freq + flow.phase + progress + flow.speed,
            );

          const detailWave =
            0.5 +
            Math.sin(
              normalizedIndex * detail.freq +
                detail.phase +
                progress * detail.speed,
            );

          const translateX =
            (vw - el.offsetWidth / 1.3) / 2 -
            vw * 0.1 +
            baseWave * vw * base.amp +
            flowWave * vw * flow.amp +
            detailWave * vw * detail.amp;

          const centerOffset = Math.abs(progress - 0.5) * 2;
          const clipAmount =
            Math.pow(centerOffset, CONFIG.clipPower) * CONFIG.clipMax;

          el.style.transform = `translateX(${translateX}px)`;
          el.style.clipPath = `inset(0 ${clipAmount}% 0 ${clipAmount}%)`;
        },
      });
    });

    return () => {
      window.removeEventListener("resize", updateImageSizes);
      triggers.forEach((t) => t && t.kill());
    };
  }, [CONFIG, imagesData, baseHeight]);

  return (
    <section className="w-full h-full overflow-hidden section">
      <div className="container-custom medium">
        <div ref={containerRef} className="flex flex-col items-start">
          {imagesData.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden [clip-path:inset(0_20%_0_20%)] will-change-[transform,clip-path]"
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
              style={{ aspectRatio: img.aspectRatio }}
            >
              <img
                className="w-full h-full object-cover"
                src={img.src}
                alt={`my-img-${i}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
