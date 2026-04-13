"use client";

import { FC, PropsWithChildren, useCallback, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/* ─── Config ─── */
interface ImageHoverConfig {
  symbols?: string[];
  blockSize?: number;
  detectionRadius?: number;
  clusterSize?: number;
  blockLifetime?: number;
  emptyRatio?: number;
  scrambleRatio?: number;
  scrambleInterval?: number;
}

interface ImageHoverProps extends ImageHoverConfig {
  className?: string;
}

const DEFAULTS: Required<ImageHoverConfig> = {
  symbols: ["0", "X", "*", ">", "S", "W"],
  blockSize: 25,
  detectionRadius: 50,
  clusterSize: 7,
  blockLifetime: 0.3,
  emptyRatio: 0.3,
  scrambleRatio: 0.25,
  scrambleInterval: 0.15,
};

type Block = {
  el: HTMLDivElement;
  x: number;
  y: number;
  gridX: number;
  gridY: number;
  isEmpty: boolean;
  active: boolean;
  shouldScramble: boolean;
  scrambleCall: gsap.core.Tween | null;
  lifetimeCall: gsap.core.Tween | null;
};

const randomSymbol = (symbols: string[]) =>
  symbols[Math.floor(Math.random() * symbols.length)];

/**
 * ImageHover — grid-overlay hover effect powered by GSAP.
 *
 * ```tsx
 * <ImageHover blockSize={30} clusterSize={5}>
 *   <img src="/photo.jpg" alt="Photo" />
 * </ImageHover>
 * ```
 */
const ImageHover: FC<PropsWithChildren<ImageHoverProps>> = ({
  children,
  className,
  ...overrides
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cfg = { ...DEFAULTS, ...overrides };

  const buildOverlay = useCallback(
    (
      parent: HTMLElement,
    ): { overlay: HTMLDivElement; blocks: Block[]; cols: number } => {
      const overlay = document.createElement("div");
      overlay.style.cssText =
        "position:absolute;inset:0;pointer-events:none;z-index:1;";
      parent.appendChild(overlay);

      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      const cols = Math.ceil(w / cfg.blockSize);
      const rows = Math.ceil(h / cfg.blockSize);
      const blocks: Block[] = [];

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const el = document.createElement("div");
          const isEmpty = Math.random() < cfg.emptyRatio;
          el.textContent = isEmpty ? "" : randomSymbol(cfg.symbols);

          gsap.set(el, {
            position: "absolute",
            width: cfg.blockSize,
            height: cfg.blockSize,
            left: col * cfg.blockSize,
            top: row * cfg.blockSize,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: cfg.blockSize * 0.5,
            fontFamily: "monospace",
            color: "rgba(255,255,255,0)",
            background: "transparent",
            pointerEvents: "none",
          });

          overlay.appendChild(el);

          blocks.push({
            el,
            x: col * cfg.blockSize + cfg.blockSize / 2,
            y: row * cfg.blockSize + cfg.blockSize / 2,
            gridX: col,
            gridY: row,
            isEmpty,
            active: false,
            shouldScramble: !isEmpty && Math.random() < cfg.scrambleRatio,
            scrambleCall: null,
            lifetimeCall: null,
          });
        }
      }

      return { overlay, blocks, cols };
    },
    [cfg.blockSize, cfg.emptyRatio, cfg.scrambleRatio, cfg.symbols],
  );

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const { overlay, blocks, cols } = buildOverlay(el);

      /* ── Grid-based O(1) lookup ── */
      const getBlock = (gx: number, gy: number): Block | undefined =>
        gx >= 0 && gy >= 0 && gx < cols ? blocks[gy * cols + gx] : undefined;

      const getNeighbours = (b: Block): Block[] => {
        const result: Block[] = [];
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const n = getBlock(b.gridX + dx, b.gridY + dy);
            if (n) result.push(n);
          }
        }
        return result;
      };

      /* ── Activate / Deactivate with GSAP ── */
      const deactivateBlock = (block: Block) => {
        block.active = false;

        // Kill any pending scramble
        block.scrambleCall?.kill();
        block.scrambleCall = null;

        // Animate out
        gsap.to(block.el, {
          color: "rgba(255,255,255,0)",
          background: "transparent",
          duration: 0.2,
          ease: "power2.out",
          overwrite: true,
        });

        if (!block.isEmpty) {
          block.el.textContent = randomSymbol(cfg.symbols);
        }
      };

      const activateBlock = (block: Block, stagger: number) => {
        // Kill previous lifetime call so it resets
        block.lifetimeCall?.kill();

        block.active = true;

        // Animate in
        gsap.to(block.el, {
          color: "rgba(255,255,255,0.9)",
          background: "rgba(0,0,0,0.5)",
          duration: 0.1,
          delay: stagger,
          ease: "power2.in",
          overwrite: true,
        });

        // Schedule deactivation
        block.lifetimeCall = gsap.delayedCall(cfg.blockLifetime + stagger, () =>
          deactivateBlock(block),
        );

        // Scramble text while active
        if (block.shouldScramble && !block.scrambleCall) {
          const scramble = () => {
            if (!block.active) return;
            block.el.textContent = randomSymbol(cfg.symbols);
            block.scrambleCall = gsap.delayedCall(
              cfg.scrambleInterval,
              scramble,
            );
          };
          block.scrambleCall = gsap.delayedCall(cfg.scrambleInterval, scramble);
        }
      };

      /* ── Mouse handler ── */
      const onMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        const gx = Math.floor(mx / cfg.blockSize);
        const gy = Math.floor(my / cfg.blockSize);
        const closest = getBlock(gx, gy);
        if (!closest) return;

        const dx = mx - closest.x;
        const dy = my - closest.y;
        if (dx * dx + dy * dy > cfg.detectionRadius * cfg.detectionRadius)
          return;

        activateBlock(closest, 0);

        // Random cluster walk
        let current = closest;
        const size = Math.floor(Math.random() * cfg.clusterSize) + 1;
        for (let i = 0; i < size; i++) {
          const neighbours = getNeighbours(current);
          if (!neighbours.length) break;
          const next =
            neighbours[Math.floor(Math.random() * neighbours.length)];
          activateBlock(next, i * 0.01);
          current = next;
        }
      };

      el.addEventListener("mousemove", onMouseMove);

      /* ── Resize ── */
      const ro = new ResizeObserver(() => {
        // Full rebuild handled by useGSAP revert + re-run
      });
      ro.observe(el);

      return () => {
        el.removeEventListener("mousemove", onMouseMove);
        ro.disconnect();
        overlay.remove();
      };
    },
    { scope: containerRef, dependencies: [buildOverlay, cfg] },
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className ?? ""}`}
      // style={{ cursor: "crosshair" }}
    >
      {children}
    </div>
  );
};

export default ImageHover;
