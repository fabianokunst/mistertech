/**
 * Conjunto de ícones do design system: Lucide (traço 2px, cantos
 * arredondados) + marcas sociais desenhadas no mesmo grid de 24px.
 * Para adicionar um ícone, importe-o de '@lucide/astro/icons/<nome>' e
 * inclua no mapa abaixo.
 */
import ArrowRight from '@lucide/astro/icons/arrow-right';
import ArrowUpRight from '@lucide/astro/icons/arrow-up-right';
import Award from '@lucide/astro/icons/award';
import BadgeCheck from '@lucide/astro/icons/badge-check';
import Building from '@lucide/astro/icons/building';
import Cable from '@lucide/astro/icons/cable';
import Check from '@lucide/astro/icons/check';
import ChevronDown from '@lucide/astro/icons/chevron-down';
import ChevronLeft from '@lucide/astro/icons/chevron-left';
import ChevronRight from '@lucide/astro/icons/chevron-right';
import CircleCheck from '@lucide/astro/icons/circle-check';
import CircleQuestionMark from '@lucide/astro/icons/circle-question-mark';
import Clock from '@lucide/astro/icons/clock';
import Cookie from '@lucide/astro/icons/cookie';
import ExternalLink from '@lucide/astro/icons/external-link';
import FileText from '@lucide/astro/icons/file-text';
import Headset from '@lucide/astro/icons/headset';
import Heart from '@lucide/astro/icons/heart';
import House from '@lucide/astro/icons/house';
import Info from '@lucide/astro/icons/info';
import Luggage from '@lucide/astro/icons/luggage';
import Mail from '@lucide/astro/icons/mail';
import MapPin from '@lucide/astro/icons/map-pin';
import Menu from '@lucide/astro/icons/menu';
import MessageCircle from '@lucide/astro/icons/message-circle';
import Mouse from '@lucide/astro/icons/mouse';
import Package from '@lucide/astro/icons/package';
import PenTool from '@lucide/astro/icons/pen-tool';
import PlugZap from '@lucide/astro/icons/plug-zap';
import ReceiptText from '@lucide/astro/icons/receipt-text';
import RefreshCcw from '@lucide/astro/icons/refresh-ccw';
import Search from '@lucide/astro/icons/search';
import ShieldCheck from '@lucide/astro/icons/shield-check';
import ShoppingBag from '@lucide/astro/icons/shopping-bag';
import Sparkles from '@lucide/astro/icons/sparkles';
import Store from '@lucide/astro/icons/store';
import Truck from '@lucide/astro/icons/truck';
import User from '@lucide/astro/icons/user';
import X from '@lucide/astro/icons/x';
import Zap from '@lucide/astro/icons/zap';

export const lucideIcons = {
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  award: Award,
  'badge-check': BadgeCheck,
  building: Building,
  cable: Cable,
  check: Check,
  'chevron-down': ChevronDown,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'circle-check': CircleCheck,
  help: CircleQuestionMark,
  clock: Clock,
  cookie: Cookie,
  'external-link': ExternalLink,
  'file-text': FileText,
  headset: Headset,
  heart: Heart,
  house: House,
  info: Info,
  luggage: Luggage,
  mail: Mail,
  'map-pin': MapPin,
  menu: Menu,
  'message-circle': MessageCircle,
  mouse: Mouse,
  package: Package,
  'pen-tool': PenTool,
  'plug-zap': PlugZap,
  receipt: ReceiptText,
  refresh: RefreshCcw,
  search: Search,
  'shield-check': ShieldCheck,
  'shopping-bag': ShoppingBag,
  sparkles: Sparkles,
  store: Store,
  truck: Truck,
  user: User,
  x: X,
  zap: Zap,
} as const;

export const brandIcons = {
  instagram: [
    '<rect x="3" y="3" width="18" height="18" rx="5" />',
    '<circle cx="12" cy="12" r="4" />',
    '<circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />',
  ].join(''),
  facebook:
    '<path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4A21 21 0 0 0 15.4 4.3c-2.3 0-3.9 1.4-3.9 4v2.2H9v3h2.5V21" />',
} as const;

export type IconName = keyof typeof lucideIcons | keyof typeof brandIcons;

export const iconNames = [...Object.keys(lucideIcons), ...Object.keys(brandIcons)] as IconName[];
