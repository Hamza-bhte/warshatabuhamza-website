import heroWelderImg from './images/hero_welder_sparks_1794438004454.jpg';
import localIronGateImg from './images/local_iron_gate_1794535073280.jpg';
import customMetalFabricationImg from './images/custom_metal_fabrication_1794438005321.jpg';
import windowGrillsRailingsImg from './images/window_grills_railings_1794535073262.jpg';
import steelStaircaseImg from './images/architectural_metal_staircase_1794442773723.jpg';
import metalShedCarportImg from './images/metal_shed_carport_1794535073969.jpg';
import workshopMetalRepairImg from './images/workshop_metal_repair_1794535073707.jpg';

export const WORKSHOP_IMAGES = {
  heroWelder: heroWelderImg,
  localIronGate: localIronGateImg,
  customMetalFabrication: customMetalFabricationImg,
  windowGrillsRailings: windowGrillsRailingsImg,
  steelStaircase: steelStaircaseImg,
  metalShedCarport: metalShedCarportImg,
  workshopMetalRepair: workshopMetalRepairImg,
} as const;

export const DEFAULT_FALLBACK_IMAGE = heroWelderImg;

export const INLINE_SVG_FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#101214" />
          <stop offset="100%" stop-color="#1C2024" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#bg)" />
      <rect x="24" y="24" width="752" height="452" rx="16" fill="none" stroke="#F26A32" stroke-opacity="0.35" stroke-width="2" />
      <text x="400" y="232" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="28" font-weight="700">WARSHAT ABO HAMZA</text>
      <text x="400" y="274" text-anchor="middle" fill="#F26A32" font-family="sans-serif" font-size="22" font-weight="700">ورشة أبو حمزة للحدادة وتفصيل المعادن</text>
    </svg>`
  );
