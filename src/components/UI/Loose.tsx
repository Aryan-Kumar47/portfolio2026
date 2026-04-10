"use client";
import { useRef, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

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

const WAVES = {
  base: { amp: 0.1, freq: 1.0, speed: 1.0, phase: 5.0 } as WaveConfig,
  flow: { amp: 0.15, freq: 5.0, speed: 5.0, phase: 10.0 } as WaveConfig,
  detail: { amp: 0.025, freq: 5.0, speed: 1.5, phase: 2.5 } as WaveConfig,
};
const CLIP_MAX = 20;
const CLIP_POWER = 2;

export default function Loose({
  baseHeight = 375,
  images,
  aspectRatios = ["3/2", "4/3", "5/4", "7/5"],
}: LooseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const vwRef = useRef(0);

  const imagesData = useMemo(
    () =>
      images.map((src, i) => {
        const shrinkStart = Math.floor(images.length * 0.75);
        const shrinkFactor =
          i >= shrinkStart
            ? (i - shrinkStart + 1) / (images.length - shrinkStart)
            : 0;
        return {
          src,
          aspectRatio: aspectRatios[i % aspectRatios.length],
          shrinkFactor,
        };
      }),
    [images, aspectRatios],
  );

  const updateSizes = useCallback(() => {
    const sizeFactor = Math.min(window.innerWidth / 750, 1);
    vwRef.current = containerRef.current?.offsetWidth ?? 0;

    imageRefs.current.forEach((el, i) => {
      if (!el || !imagesData[i]) return;
      const height =
        baseHeight * sizeFactor * (1 - imagesData[i].shrinkFactor * 0.5);
      el.style.height = `${Math.round(height)}px`;
    });
  }, [baseHeight, imagesData]);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const els = imageRefs.current;

      updateSizes();

      // Cache vw on resize instead of reading DOM every frame
      const onResize = () => {
        updateSizes();
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", onResize);

      els.forEach((el, index) => {
        if (!el) return;

        const norm =
          imagesData.length > 1 ? index / (imagesData.length - 1) : 0;

        ScrollTrigger.create({
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          refreshPriority: -1,
          invalidateOnRefresh: true,
          onUpdate: ({ progress }) => {
            const vw = vwRef.current;
            if (!vw) return;

            const { base, flow, detail } = WAVES;

            const bw = Math.sin(
              norm * base.freq + (1 - progress) * base.speed + base.phase,
            );
            const fw =
              0.5 +
              Math.sin(norm * flow.freq + flow.phase + progress + flow.speed);
            const dw =
              0.5 +
              Math.sin(
                norm * detail.freq + detail.phase + progress * detail.speed,
              );

            const tx =
              (vw - el.offsetWidth / 1.3) / 2 -
              vw * 0.1 +
              bw * vw * base.amp +
              fw * vw * flow.amp +
              dw * vw * detail.amp;

            const edge = Math.abs(progress - 0.5) * 2;
            const clip = Math.pow(edge, CLIP_POWER) * CLIP_MAX;

            gsap.set(el, {
              x: tx,
              clipPath: `inset(0 ${clip}% 0 ${clip}%)`,
            });
          },
        });
      });

      return () => {
        window.removeEventListener("resize", onResize);
      };
    },
    { scope: containerRef, dependencies: [imagesData, updateSizes] },
  );

  const setImageRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      imageRefs.current[i] = el;
    },
    [],
  );

  return (
    <section className="w-full h-full section">
      <div className="container-custom medium">
        <div ref={containerRef} className="flex flex-col items-start">
          {imagesData.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className=" relative overflow-hidden [clip-path:inset(0_20%_0_20%)]"
              ref={setImageRef(i)}
              style={{ aspectRatio: img.aspectRatio }}
            >
              <Image
                height={baseHeight}
                width={Math.round(baseHeight * 1.5)}
                className="w-full h-full object-cover"
                src={img.src}
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
