import { useEffect, useRef, useState } from "react";
import { geoOrthographic, geoPath, geoGraticule } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";

const WORLD_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json";

export default function RealisticGlobe() {
  const [land, setLand] = useState<FeatureCollection<Geometry> | null>(null);
  const [rotation, setRotation] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(WORLD_URL)
      .then((r) => r.json())
      .then((topo: any) => {
        if (cancelled) return;
        const geo = feature(topo, topo.objects.land) as unknown as FeatureCollection<Geometry>;
        setLand(geo);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      setRotation((r) => (r + dt * 0.015) % 360);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const size = 240;
  const projection = geoOrthographic()
    .scale(size / 2 - 2)
    .translate([size / 2, size / 2])
    .rotate([rotation, -15, 0])
    .clipAngle(90);

  const pathGen = geoPath(projection);
  const graticule = geoGraticule().step([20, 20])();

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: "block", filter: "drop-shadow(0 18px 30px rgba(124,58,237,0.25))" }}
    >
      <defs>
        <radialGradient id="rg-ocean" cx="35%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="55%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#3b82f6" />
        </radialGradient>
        <radialGradient id="rg-shade" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(30,27,75,0.45)" />
        </radialGradient>
        <linearGradient id="rg-land" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>

      {/* Ocean sphere */}
      <circle cx={size / 2} cy={size / 2} r={size / 2 - 2} fill="url(#rg-ocean)" />

      {/* Graticule */}
      <path
        d={pathGen(graticule) ?? ""}
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth={0.6}
      />

      {/* Land */}
      {land &&
        land.features.map((f, i) => (
          <path
            key={i}
            d={pathGen(f) ?? ""}
            fill="url(#rg-land)"
            stroke="#065f46"
            strokeWidth={0.3}
          />
        ))}

      {/* Shading overlay */}
      <circle cx={size / 2} cy={size / 2} r={size / 2 - 2} fill="url(#rg-shade)" />

      {/* Highlight */}
      <ellipse cx={size * 0.35} cy={size * 0.32} rx={size * 0.18} ry={size * 0.1} fill="rgba(255,255,255,0.35)" />

      {/* Rim */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 2}
        fill="none"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth={1}
      />
    </svg>
  );
}
