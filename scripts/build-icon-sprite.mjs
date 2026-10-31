/**
 * Builds site/assets/icons.svg — one <symbol> per Lucide icon used by the
 * static site. Dev-time helper only (the site needs no build step to deploy).
 *
 *   node scripts/build-icon-sprite.mjs
 *
 * Icons are server-rendered from lucide-react so renamed/aliased icons
 * resolve correctly. Stroke styling is deliberately NOT baked into the
 * symbols: it lives on `.icon` in base.css so stroke width stays overridable.
 */
import { writeFileSync } from "node:fs";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as Lucide from "lucide-react";

const ICONS = `
ArrowDown ArrowLeft ArrowLeftRight ArrowRight ArrowUpRight Award BarChart3 Bell BookOpen Bot
Briefcase Building2 Calculator Calendar CalendarCheck CalendarDays Camera Check CheckCircle2
ChevronDown ClipboardCheck ClipboardList Clock Coffee Compass Cookie Copy Crown Download Dumbbell
ExternalLink Facebook Factory FileCheck FileCheck2 FileStack FileText Flower2 Gem Gift GitMerge
Globe GraduationCap Grid3x3 Handshake Heart HeartHandshake Home Image Info Instagram Landmark
Leaf Lightbulb Mail MapPin Megaphone Menu MessageCircle Minus Newspaper Package Palette PartyPopper Phone
Plane Play Receipt RefreshCcw Rocket RotateCcw Ruler Scale School Scissors Search ShieldCheck
Shirt ShoppingBag ShoppingCart Smartphone Soup Sparkles Sprout Star Store Tags Target
TrendingUp Truck User UserCheck Users Users2 UtensilsCrossed Wallet Wrench X Youtube
`.trim().split(/\s+/);

const kebab = (name) =>
  name.replace(/([a-z])([A-Z0-9])/g, "$1-$2").replace(/([0-9])([A-Z])/g, "$1-$2").toLowerCase().replace("3x-3", "3x3");

const symbols = ICONS.map((name) => {
  const Icon = Lucide[name];
  if (!Icon) throw new Error(`Unknown Lucide icon: ${name}`);
  const markup = renderToStaticMarkup(createElement(Icon));
  const inner = markup.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
  return `<symbol id="${kebab(name)}" viewBox="0 0 24 24">${inner}</symbol>`;
});

const sprite = `<svg xmlns="http://www.w3.org/2000/svg">${symbols.join("")}</svg>\n`;
writeFileSync("site/assets/icons.svg", sprite);
console.log(`icons.svg: ${ICONS.length} symbols, ${sprite.length} bytes`);
console.log(ICONS.map(kebab).join(" "));
