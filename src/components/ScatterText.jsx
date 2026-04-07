/**
 * ScatterText
 * Letters scatter away from the cursor when it enters their vicinity,
 * then spring back with an elastic bounce when it leaves.
 *
 * Props:
 *  segments   – Array<{ text: string, className?: string }> — lets you style
 *               individual words differently (e.g. accent colour).
 *  text       – Simple string shorthand (single segment).
 *  tag        – HTML element to render ('h1', 'h2', 'span', …).
 *  className  – Applied to the container element.
 *  radius     – How close the cursor must be (px) before letters flee.
 *  maxPush    – Maximum displacement (px).
 *  scatterColor – CSS colour letters briefly become while scattered.
 */

import { useEffect, useRef } from 'react';

/* ── Shared global state — one mouse listener + one RAF per page ── */
let gMouse = { x: -9999, y: -9999 };
let gListening = false;
const gInstances = new Set();
let gRAF = null;

function ensureGlobal() {
  if (!gListening) {
    gListening = true;
    window.addEventListener('mousemove', (e) => {
      gMouse.x = e.clientX;
      gMouse.y = e.clientY;
    }, { passive: true });
  }
  if (!gRAF) tickAll();
}

function tickAll() {
  gInstances.forEach((fn) => fn());
  gRAF = gInstances.size > 0 ? requestAnimationFrame(tickAll) : null;
}

function registerInstance(fn) {
  gInstances.add(fn);
  ensureGlobal();
  if (!gRAF) tickAll();
  return () => {
    gInstances.delete(fn);
    if (gInstances.size === 0 && gRAF) {
      cancelAnimationFrame(gRAF);
      gRAF = null;
    }
  };
}

/* ── Component ── */
export default function ScatterText({
  segments,
  text,
  tag: Tag = 'span',
  className = '',
  radius = 110,
  maxPush = 44,
  scatterColor = '#f43f5e',
}) {
  const containerRef = useRef(null);

  // Normalise input into segments array
  const segs = segments ?? [{ text: text ?? '' }];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = Array.from(container.querySelectorAll('[data-ch]'));

    const update = () => {
      const mx = gMouse.x;
      const my = gMouse.y;
      const box = container.getBoundingClientRect();

      // Fast path: skip per-letter work if mouse is far from container
      const pad = radius + 10;
      const farAway =
        mx < box.left - pad ||
        mx > box.right + pad ||
        my < box.top - pad ||
        my > box.bottom + pad;

      letters.forEach((el) => {
        if (farAway) {
          el.style.transition =
            'transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.45s ease, opacity 0.45s ease';
          el.style.transform = '';
          el.style.color = '';
          return;
        }

        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dist = Math.hypot(cx - mx, cy - my);

        if (dist < radius) {
          const force = Math.pow(1 - dist / radius, 1.5);
          const angle = Math.atan2(cy - my, cx - mx);
          const px = Math.cos(angle) * force * maxPush;
          const py = Math.sin(angle) * force * maxPush;
          const rot = (px / maxPush) * 20; // slight rotation while scattered

          el.style.transition = 'transform 0.09s ease-out, color 0.12s ease';
          el.style.transform = `translate(${px}px,${py}px) rotate(${rot}deg)`;
          el.style.color = scatterColor;
        } else {
          el.style.transition =
            'transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.45s ease';
          el.style.transform = '';
          el.style.color = '';
        }
      });
    };

    return registerInstance(update);
  }, [radius, maxPush, scatterColor]);

  return (
    <Tag ref={containerRef} className={className}>
      {segs.map((seg, si) =>
        seg.text.split('').map((ch, ci) => (
          <span
            key={`${si}-${ci}`}
            data-ch
            className={seg.className ?? ''}
            style={{ display: 'inline-block', willChange: 'transform' }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))
      )}
    </Tag>
  );
}
