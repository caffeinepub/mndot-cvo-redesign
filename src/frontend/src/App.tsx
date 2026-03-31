import {
  Anchor,
  ArrowRight,
  Bike,
  Bus,
  Car,
  ChevronLeft,
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  PersonStanding,
  Phone,
  Plane,
  Search,
  Shield,
  Train,
  Truck,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiFacebook, SiX, SiYoutube } from "react-icons/si";

// ─── Data ────────────────────────────────────────────────────────────

const TRANSPORT_MODES = [
  { icon: Truck, label: "Trucks, Buses, Limos, STS" },
  { icon: Bus, label: "Transit" },
  { icon: Car, label: "Cars" },
  { icon: Train, label: "Rail" },
  { icon: Plane, label: "Aeronautics" },
  { icon: Anchor, label: "Waterways" },
  { icon: Bike, label: "Bikes" },
  { icon: PersonStanding, label: "Pedestrians" },
];

const SIDEBAR_MENU = [
  { label: "Topics A-Z", active: true },
  { label: "511mn.org", active: false },
  { label: "Doing Business", active: false },
  { label: "Jobs", active: false },
  { label: "Safety", active: false },
  { label: "Contact MnDOT", active: false },
];

const MORE_AT_MNDOT = [
  "ABC Ramps",
  "Adopt a highway",
  "Apply for a job",
  "Licenses",
  "Maps",
  "Newsline: Employee Newsletter",
  "Ombudsman",
  "Rest areas",
  "Truck permits",
  "Toward Zero Deaths",
];

const STATEWIDE_PLANS = [
  "Minnesota GO",
  "Multimodal Transportation Plan",
  "20-year State Highway Investment Plan",
  "State Transportation Improvement Program",
  "Aviation System Plan",
  "Bicycle System Plan",
  "Minnesota Walks",
  "Highway Systems Operations Plan",
  "Rail Plan",
  "Statewide Freight System Plan",
  "Transit Plan",
  "ADA Transition Plan",
];

const MICRO_FOOTER_LINKS = [
  "Contact MnDOT",
  "Search MnDOT.gov",
  "Sitemap",
  "A to Z",
  "Doing Business",
  "Careers/Jobs",
  "News Releases",
  "511 Traveler Service",
  "Disclaimer and Legal",
  "ADA and Accessibility",
  "Governor's Site",
  "State of Minnesota",
  "About MnDOT",
  "Employee Resources",
];

const _BANNER_GRADIENTS = [
  { id: "banner-1", bg: "linear-gradient(135deg, #004B73 0%, #0B63B6 100%)" },
  { id: "banner-2", bg: "linear-gradient(135deg, #003A5C 0%, #004B73 100%)" },
  { id: "banner-3", bg: "linear-gradient(135deg, #004B73 0%, #6DB33F 100%)" },
];

const TRAVELER_LINKS = [
  "511 statewide travel and road condition information",
  "Construction projects, plans and studies",
  "News releases",
];

const GET_INVOLVED_LINKS = [
  "Construction projects, plans and studies",
  "Public and stakeholder participation opportunities",
  "Upcoming Facebook events",
];

const REPORT_ISSUE_LINKS = [
  "Report a pothole, roadside issue or graffiti",
  "Report unsafe driving",
  "Report a traffic signal issue",
  "Report an Americans with Disabilities Act compliance issue",
  "Report wrongdoing or questionable activity",
];

const CVO_GENERAL_LINKS = [
  "Apply for the Unified Carrier Registration (UCR) program",
  "File a complaint",
  "Get an oversize/overweight truck permit",
  "Learn about Initial Motor Carrier Contact (IMCC) education",
  "Log in to our online carrier portal",
  "Look up a transportation provider",
  "Schedule a Limo/STS vehicle inspection",
];

const CVO_ONLINE_TOOLS = [
  {
    link: "Use our online carrier portal login",
    rest: " to pay fees",
  },
  {
    link: "Schedule your vehicle inspection online",
    rest: " (at Richfield location only)",
  },
  {
    link: "Book an appointment",
    rest: " with a motor carrier customer service representative",
  },
];

const TRANSIT_MAIN_LINKS = [
  {
    title: "Finding your transit provider",
    desc: "Locate bus routes, schedules, and service areas across Greater Minnesota communities.",
    icon: MapPin,
  },
  {
    title: "Upcoming activities",
    desc: "Stay informed on public meetings, comment periods, and community engagement events.",
    icon: Bus,
  },
  {
    title: "Funding and grants",
    desc: "Explore state and federal funding opportunities available to transit providers.",
    icon: Zap,
  },
  {
    title: "Improving your transit program",
    desc: "Resources, training, and best practices for transit agencies to enhance service delivery.",
    icon: ArrowRight,
  },
  {
    title: "Compliance guidance",
    desc: "Federal and state regulatory requirements, ADA compliance, and safety standards.",
    icon: Shield,
  },
  {
    title: "Plans and reports",
    desc: "Transit development plans, performance data, and statewide transit reports.",
    icon: Users,
  },
];

const TRANSIT_RELATED_TOPICS = [
  "Active Transportation Program",
  "Bicycling",
  "Walking",
  "Safe Routes to School",
  "Transit in Greater Minnesota",
  "Pedestrian and bicyclist data",
  "Shared mobility",
  "Electric vehicle infrastructure",
];

// ─── Minnesota SVG Silhouette ─────────────────────────────────────────────
function MinnesotaMap() {
  return (
    <svg
      viewBox="0 0 120 140"
      className="w-16 h-20 opacity-60"
      fill="#004B73"
      role="img"
      aria-labelledby="mn-map-title"
    >
      <title id="mn-map-title">Minnesota state outline</title>
      <path d="M 30 8 L 95 8 L 95 20 L 105 20 L 105 35 L 95 35 L 95 55 L 100 60 L 100 75 L 88 85 L 90 100 L 80 110 L 75 130 L 65 132 L 60 125 L 55 130 L 48 125 L 45 110 L 35 100 L 30 90 L 20 85 L 18 70 L 22 65 L 20 55 L 25 45 L 22 35 L 25 25 Z" />
    </svg>
  );
}

// ─── Components ────────────────────────────────────────────────────────────

function UtilityBar({ onSearchClick }: { onSearchClick: () => void }) {
  return (
    <div className="bg-[#6DB33F] text-white text-xs py-1.5 shrink-0">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-end items-center gap-5">
        <button
          type="button"
          onClick={onSearchClick}
          data-ocid="utility.search.link"
          className="flex items-center gap-1.5 hover:text-white/80 transition-colors duration-200"
        >
          <Search size={11} />
          <span>Search</span>
        </button>
        <span className="text-white/40">|</span>
        <a
          href="/#"
          data-ocid="utility.atoz.link"
          className="hover:text-gold transition-colors duration-200"
        >
          MnDOT A to Z
        </a>
        <span className="text-white/40">|</span>
        <a
          href="/#"
          data-ocid="utility.contacts.link"
          className="hover:text-gold transition-colors duration-200"
        >
          General Contacts
        </a>
      </div>
    </div>
  );
}

function Header({ scrolled: _scrolled }: { scrolled: boolean }) {
  return (
    <header className="bg-[#004B73] sticky top-0 z-50 border-b border-[#003A5C]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/#"
            className="flex items-center gap-4 shrink-0 group"
            data-ocid="header.logo.link"
          >
            <div className="flex items-center justify-center w-11 h-11 bg-[#6DB33F] rounded-md shrink-0 transition-all duration-300">
              <span className="text-white font-black text-xl leading-none font-display">
                mn
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-[9px] uppercase tracking-[0.25em] text-white/70 font-semibold">
                Minnesota
              </div>
              <div className="text-white font-bold text-base md:text-lg font-display leading-tight">
                Department of Transportation
              </div>
            </div>
          </a>

          {/* 511 Badge */}
          <a
            href="/#"
            data-ocid="header.511.link"
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/40 hover:border-white transition-all duration-200 shrink-0"
          >
            <span className="text-white font-black text-base leading-none font-display">
              511
            </span>
          </a>
        </div>
      </div>
      {/* Gold accent strip */}
    </header>
  );
}

function IconNavRow({
  onTruckClick,
  onTransitClick,
  onCarsClick,
  onRailClick,
  onAeronauticsClick,
  onWaterwaysClick,
  onBikesClick,
  onPedestriansClick,
}: {
  onTruckClick: () => void;
  onTransitClick: () => void;
  onCarsClick: () => void;
  onRailClick: () => void;
  onAeronauticsClick: () => void;
  onWaterwaysClick: () => void;
  onBikesClick: () => void;
  onPedestriansClick: () => void;
}) {
  return (
    <div className="bg-card border-b border-border/50 overflow-x-auto">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-start justify-start md:justify-center gap-1 py-3 min-w-max md:min-w-0">
          {TRANSPORT_MODES.map((mode, i) => {
            const Icon = mode.icon;
            const isTruck = i === 0;
            const isTransit = i === 1;
            const isCar = i === 2;
            return (
              <motion.button
                key={mode.label}
                type="button"
                onClick={
                  isTruck
                    ? onTruckClick
                    : isTransit
                      ? onTransitClick
                      : isCar
                        ? onCarsClick
                        : i === 3
                          ? onRailClick
                          : i === 4
                            ? onAeronauticsClick
                            : i === 5
                              ? onWaterwaysClick
                              : i === 6
                                ? onBikesClick
                                : i === 7
                                  ? onPedestriansClick
                                  : undefined
                }
                data-ocid={`nav.mode.item.${i + 1}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.055 }}
                whileHover={{ y: -3 }}
                className="group relative flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-lg cursor-pointer border border-transparent hover:border-[#004B73]/20 hover:bg-[#EAF3FA] transition-all duration-200 min-w-[76px] bg-transparent"
              >
                <div className="w-10 h-10 rounded-full bg-muted/80 flex items-center justify-center group-hover:bg-[#004B73]/10 transition-colors duration-200 ring-1 ring-border group-hover:ring-[#004B73]/40">
                  <Icon
                    size={18}
                    className="text-muted-foreground group-hover:text-gold transition-colors duration-200"
                  />
                </div>
                <span className="text-[9.5px] font-semibold text-muted-foreground group-hover:text-foreground text-center leading-tight transition-colors duration-200">
                  {mode.label}
                </span>
                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── CVO Page ─────────────────────────────────────────────────────────────

function CVOPage({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home" },
    { id: "resources", label: "Resources / Forms" },
    { id: "contacts", label: "Contacts" },
  ];

  const stats = [
    { icon: Truck, value: "7", label: "Service Types" },
    { icon: Zap, value: "Online", label: "Portal Available" },
    { icon: Shield, value: "MN", label: "Statewide Coverage" },
  ];

  return (
    <motion.main
      key="cvo-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35 }}
      className="flex-1 bg-background"
      data-ocid="cvo.page"
    >
      {/* Hero header */}
      <div className="bg-card border-b border-border/50">
        <div className="max-w-[1200px] mx-auto px-4 pt-8 pb-0">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">
                  MnDOT Division
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground font-display leading-tight">
                Commercial Vehicle
                <br />
                <span className="text-gold">Operations</span>
              </h1>
            </div>
            <button
              type="button"
              onClick={onClose}
              data-ocid="cvo.close_button"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 px-3 py-1.5 rounded-lg border border-[#D6D6D6] hover:border-[#004B73] bg-white mt-1"
            >
              <X size={14} />
              Close
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="bg-[#EAF3FA] border border-[#004B73]/10 rounded-lg p-3 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-md bg-[#004B73]/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gold font-display leading-none">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tab navigation */}
          <div className="flex gap-0 border-b-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                data-ocid={`cvo.${tab.id}.tab`}
                className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                    transition={{ duration: 0.25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="flex gap-6 items-start">
          {/* Left main content */}
          <div className="flex-1 min-w-0 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border/50 rounded-xl p-6 card-hover"
              data-ocid="cvo.main.card"
            >
              <h2 className="text-xl font-bold text-foreground mb-5 font-display gold-border-left">
                Moving people and goods in Minnesota
              </h2>

              <div className="mb-5">
                <a
                  href="/#"
                  data-ocid="cvo.moving_goods.link"
                  className="text-link font-semibold text-base"
                >
                  Moving goods
                </a>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Oversize/Overweight truck permits, moving companies, hazardous
                  materials, and motor carriers of property
                </p>
              </div>

              <div className="mb-6">
                <a
                  href="/#"
                  data-ocid="cvo.moving_people.link"
                  className="text-link font-semibold text-base"
                >
                  Moving people
                </a>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Charter and party buses, limousines, and Special
                  Transportation Services
                </p>
              </div>

              <h3 className="text-sm font-bold text-foreground mb-3 font-display uppercase tracking-wider">
                General information and resources
              </h3>
              <ul className="space-y-2 mb-6">
                {CVO_GENERAL_LINKS.map((link, i) => (
                  <li key={link} className="flex items-start gap-2.5">
                    <span className="text-[#004B73] mt-1 shrink-0 font-bold">
                      •
                    </span>
                    <a
                      href="/#"
                      data-ocid={`cvo.general.item.${i + 1}`}
                      className="text-sm text-link leading-snug"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Online Tools box */}
              <div className="border border-gold/20 rounded-xl overflow-hidden">
                <div className="bg-gold/10 px-5 py-3 border-b border-gold/20">
                  <span className="text-gold font-bold text-sm font-display uppercase tracking-wider">
                    Online Tools
                  </span>
                </div>
                <div className="bg-card p-5">
                  <ul className="space-y-3">
                    {CVO_ONLINE_TOOLS.map((item, i) => (
                      <li key={item.link} className="flex items-start gap-2.5">
                        <span className="text-gold mt-1 shrink-0 text-xs">
                          ◆
                        </span>
                        <span className="text-sm text-muted-foreground">
                          <a
                            href="/#"
                            data-ocid={`cvo.online_tools.item.${i + 1}`}
                            className="text-link"
                          >
                            {item.link}
                          </a>
                          {item.rest}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right sidebar */}
          <aside className="w-[280px] shrink-0 hidden lg:block space-y-4">
            {/* Language card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-card border border-border/50 rounded-xl p-4 card-hover"
              data-ocid="cvo.language.card"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold mb-3 font-display">
                Language
              </h3>
              <div className="border border-border rounded-lg px-3 py-2 text-sm text-muted-foreground flex items-center justify-between mb-2 cursor-pointer hover:border-gold/40 transition-colors">
                <span>Select Language</span>
                <ChevronRight
                  size={14}
                  className="text-muted-foreground rotate-90"
                />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Globe size={11} />
                <span>Google | Powered by Translate</span>
              </div>
            </motion.div>

            {/* Connect with us */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-card border border-border/50 rounded-xl p-4 card-hover"
              data-ocid="cvo.connect.card"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold mb-3 font-display">
                Connect with us
              </h3>
              <a
                href="/#"
                data-ocid="cvo.email_updates.link"
                className="flex items-center gap-2 text-sm text-link"
              >
                <Mail size={13} className="text-gold shrink-0" />
                Sign up for email updates
              </a>
            </motion.div>

            {/* Resource Book */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-card border border-border/50 rounded-xl p-4 card-hover"
              data-ocid="cvo.resource_book.card"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold mb-3 font-display">
                Minnesota Commercial Vehicle Resource Book 2026
              </h3>
              <div className="w-full h-36 rounded-lg mb-3 overflow-hidden relative">
                <img
                  src="/assets/generated/mn-semi-truck.dim_400x200.jpg"
                  alt="Minnesota highway"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004B73]/40 to-transparent" />
              </div>
              <a
                href="/#"
                data-ocid="cvo.resource_book.link"
                className="text-sm text-link font-semibold block mb-3"
              >
                Minnesota Commercial Vehicle Resource Book 2026
              </a>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center justify-center w-7 h-7 bg-[#6DB33F] rounded-sm shrink-0">
                  <span className="text-primary-foreground font-black text-xs leading-none font-display">
                    mn
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-semibold leading-tight">
                  Department of
                  <br />
                  Transportation
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We publish the Minnesota Commercial Vehicle Resource Book
                annually to deliver regulatory information in a simple and
                convenient format.
              </p>
            </motion.div>
          </aside>
        </div>
      </div>
    </motion.main>
  );
}

// ─── Transit Page ──────────────────────────────────────────────────────────

function TransitPage({ onClose }: { onClose: () => void }) {
  const stats = [
    { icon: Bus, value: "65+", label: "Transit Providers" },
    { icon: MapPin, value: "80", label: "Counties Served" },
    { icon: Users, value: "20M+", label: "Annual Rides" },
  ];

  return (
    <motion.main
      key="transit-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35 }}
      className="flex-1 bg-background"
      data-ocid="transit.page"
    >
      {/* Hero header */}
      <div className="relative bg-card border-b border-border/50 overflow-hidden">
        {/* Decorative bus network pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          {([15, 29, 43, 57, 71, 85] as const).map((top, i) => (
            <div
              key={top}
              className="absolute h-px bg-[#004B73]"
              style={{
                top: `${top}%`,
                left: 0,
                right: 0,
                transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
              }}
            />
          ))}
        </div>

        <div className="max-w-[1200px] mx-auto px-4 pt-8 pb-0 relative">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#004B73] animate-pulse" />
                <span className="text-[#004B73] text-xs font-semibold uppercase tracking-widest">
                  MnDOT Division
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground font-display leading-tight">
                Transit in
                <br />
                <span className="text-[#004B73]">Greater Minnesota</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-3 max-w-lg leading-relaxed">
                Connecting communities across Minnesota through reliable,
                accessible public transportation for riders and providers alike.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              data-ocid="transit.close_button"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 px-3 py-1.5 rounded-lg border border-[#D6D6D6] hover:border-[#004B73] bg-white mt-1"
            >
              <X size={14} />
              Close
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="bg-[#EAF3FA] border border-[#004B73]/10 rounded-lg p-3 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-md bg-blue-500/15 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#004B73]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#004B73] font-display leading-none">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Accent strip */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="flex gap-6 items-start">
          {/* Left main content */}
          <div className="flex-1 min-w-0 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border/50 rounded-xl p-6"
              data-ocid="transit.main.card"
            >
              <h2
                className="text-xl font-bold text-foreground mb-2 font-display"
                style={{
                  borderLeft: "3px solid oklch(0.6 0.2 240)",
                  paddingLeft: "12px",
                }}
              >
                Tools for riders and transit providers
              </h2>
              <p className="text-sm text-muted-foreground mb-6 pl-4">
                Resources and guidance to help communities travel and transit
                agencies serve Greater Minnesota.
              </p>

              <div className="space-y-1">
                {TRANSIT_MAIN_LINKS.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.07 }}
                      className="group flex items-start gap-4 p-4 rounded-lg border border-transparent hover:border-blue-500/20 hover:bg-blue-500/5 transition-all duration-200 cursor-pointer"
                      data-ocid={`transit.main.item.${i + 1}`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#EAF3FA] border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#EAF3FA] transition-colors duration-200">
                        <Icon size={16} className="text-[#004B73]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a
                          href="/#"
                          className="text-base font-semibold text-[#004B73] hover:text-[#0B63B6] transition-colors duration-200 leading-snug block"
                        >
                          {item.title}
                        </a>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-border group-hover:text-[#004B73] group-hover:translate-x-1 transition-all duration-200 mt-1 shrink-0"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick stats banner */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative bg-card border border-blue-500/20 rounded-xl overflow-hidden"
              data-ocid="transit.spotlight.card"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
              <div className="p-5 flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0">
                  <Bus size={22} className="text-[#004B73]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-foreground font-display mb-1">
                    Minnesota Transit Assistance Program
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    MnDOT administers state and federal transit funds to support
                    public transportation services in rural and small urban
                    areas of Minnesota.
                  </p>
                </div>
                <a
                  href="/#"
                  data-ocid="transit.spotlight.link"
                  className="flex items-center gap-2 px-4 py-2 bg-[#EAF3FA] border border-[#004B73]/30 text-[#004B73] text-xs font-bold rounded-lg hover:bg-[#D4E8F5] transition-all duration-200 shrink-0"
                >
                  Learn more
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right sidebar */}
          <aside className="w-[260px] shrink-0 hidden lg:block space-y-4">
            {/* Related Topics */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-card border border-border/50 rounded-xl p-4"
              data-ocid="transit.related.card"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#004B73] mb-3 font-display flex items-center gap-2">
                <span className="w-1 h-3 rounded-full bg-[#004B73] inline-block" />
                Related topics
              </h3>
              <ul className="space-y-1.5">
                {TRANSIT_RELATED_TOPICS.map((topic, i) => (
                  <li key={topic}>
                    <a
                      href="/#"
                      data-ocid={`transit.related.item.${i + 1}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#004B73] transition-colors duration-200 group py-1"
                    >
                      <ChevronRight
                        size={12}
                        className="text-border group-hover:text-[#004B73] shrink-0 transition-colors duration-200"
                      />
                      {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contacts */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-card border border-border/50 rounded-xl p-4"
              data-ocid="transit.contacts.card"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#004B73] mb-3 font-display flex items-center gap-2">
                <span className="w-1 h-3 rounded-full bg-[#004B73] inline-block" />
                Contacts
              </h3>
              <a
                href="/#"
                data-ocid="transit.contacts.link"
                className="flex items-center gap-2.5 text-sm text-[#004B73] hover:text-[#0B63B6] font-semibold transition-colors duration-200 group"
              >
                <Phone
                  size={13}
                  className="text-[#004B73] shrink-0 group-hover:text-[#0B63B6] transition-colors duration-200"
                />
                View all MnDOT Transit contacts
              </a>
              <div className="mt-4 pt-4 border-t border-border/40">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  For transit provider assistance, funding inquiries, or
                  compliance questions, contact the MnDOT Office of Transit.
                </p>
              </div>
            </motion.div>

            {/* Email updates */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-blue-500/8 border border-blue-500/20 rounded-xl p-4"
              data-ocid="transit.email.card"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#004B73] mb-2 font-display">
                Stay Informed
              </h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                Get updates on transit funding, policy changes, and upcoming
                events.
              </p>
              <a
                href="/#"
                data-ocid="transit.email_updates.link"
                className="flex items-center gap-2 text-sm text-[#004B73] hover:text-[#0B63B6] font-semibold transition-colors duration-200"
              >
                <Mail size={13} className="shrink-0" />
                Sign up for email updates
              </a>
            </motion.div>
          </aside>
        </div>
      </div>
    </motion.main>
  );
}

// ─── Cars Page ─────────────────────────────────────────────────────────────

function CarsPage({ onClose }: { onClose: () => void }) {
  const [counts, setCounts] = useState({ drivers: 0, vehicles: 0, roads: 0 });

  useEffect(() => {
    const targets = { drivers: 35, vehicles: 54, roads: 140 };
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - (1 - progress) ** 3;
      setCounts({
        drivers: Math.round(targets.drivers * ease * 10) / 10,
        vehicles: Math.round(targets.vehicles * ease * 10) / 10,
        roads: Math.round(targets.roads * ease),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  const sections = [
    {
      icon: Shield,
      color: "emerald",
      title: "Drivers Licenses & Vehicle Registration",
      badge: "DVS",
      desc: "Department of Public Safety, Driver and Vehicle Services — Renew driver and vehicle licenses and tabs, change address, check driving record, report a crash, schedule a road test and more.",
      contact: "DVS.motor.vehicles@state.mn.us",
      links: [
        { label: "Driver & Vehicle Services", href: "/#" },
        { label: "Renew License Online", href: "/#" },
        { label: "Vehicle Registration", href: "/#" },
      ],
    },
    {
      icon: MapPin,
      color: "amber",
      title: "Traffic",
      badge: "511",
      desc: "Real-time traffic conditions, traffic volume data for specific roadway locations, and the State Map including regional maps, historic sites, state parks, and mileage charts.",
      contact: null,
      links: [
        { label: "511 Traffic Conditions", href: "/#" },
        { label: "Traffic Volume Data", href: "/#" },
        { label: "Interactive State Map", href: "/#" },
      ],
    },
    {
      icon: Car,
      color: "sky",
      title: "Parking",
      badge: "P",
      desc: "Park and Ride lots in the Twin Cities Metro Area, ABC parking ramps with discounted rates for carpoolers on I-394 or I-94, and disability parking resources.",
      contact: null,
      links: [
        { label: "Park & Ride Locations", href: "/#" },
        { label: "ABC Parking Ramps", href: "/#" },
        { label: "Disability Parking Info", href: "/#" },
      ],
    },
    {
      icon: Zap,
      color: "rose",
      title: "Safety",
      badge: "SAFE",
      desc: "Minnesota Safety Council defensive driving courses, travel safety tips, pothole reporting, flooding on Minnesota Highways, and National Highway Traffic Safety Administration resources.",
      contact: null,
      links: [
        { label: "MN Safety Council", href: "/#" },
        { label: "Report a Pothole", href: "/#" },
        { label: "NHTSA Resources", href: "/#" },
      ],
    },
  ];

  const colorMap: Record<
    string,
    { bg: string; border: string; text: string; badge: string; glow: string }
  > = {
    emerald: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-400",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      glow: "hover:shadow-[0_4px_20px_rgba(16,185,129,0.12)]",
    },
    amber: {
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      text: "text-amber-400",
      badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      glow: "hover:shadow-[0_4px_20px_rgba(245,158,11,0.12)]",
    },
    sky: {
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
      text: "text-sky-400",
      badge: "bg-sky-500/20 text-sky-300 border-sky-500/30",
      glow: "hover:shadow-[0_4px_20px_rgba(14,165,233,0.12)]",
    },
    rose: {
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      text: "text-rose-400",
      badge: "bg-rose-500/20 text-rose-300 border-rose-500/30",
      glow: "hover:shadow-[0_4px_20px_rgba(244,63,94,0.12)]",
    },
  };

  return (
    <motion.main
      key="cars-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35 }}
      className="flex-1 bg-background"
      data-ocid="cars.page"
    >
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#004B73]/40 via-[#004B73]/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#004B73]/60 to-transparent" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.82 0.18 78) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.18 78) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-4 pt-14 pb-10">
          <div className="flex items-start justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">
                  MnDOT Division
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-display leading-tight mb-4">
                All About Cars
                <br />
                <span className="text-gold">& Driving</span>
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                Your complete guide to driving in Minnesota — from licensing and
                registration to road conditions and safety resources.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              data-ocid="cars.close_button"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 px-3 py-1.5 rounded-lg border border-border hover:border-border/80 bg-secondary/50 mt-1 shrink-0"
            >
              <X size={14} />
              Close
            </button>
          </div>

          {/* Animated stats */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              {
                value: `${counts.drivers}M+`,
                label: "Licensed Drivers",
                icon: Users,
              },
              {
                value: `${counts.vehicles}M`,
                label: "Registered Vehicles",
                icon: Car,
              },
              {
                value: `${counts.roads}K+`,
                label: "Miles of Roads",
                icon: MapPin,
              },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="bg-white border border-[#D6D6D6] rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold font-display leading-none tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Gold accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex gap-6 items-start">
          {/* Main sections */}
          <div className="flex-1 min-w-0 space-y-4">
            {sections.map((section, i) => {
              const Icon = section.icon;
              const c = colorMap[section.color];
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group bg-card border border-border/50 rounded-xl overflow-hidden transition-all duration-300 ${c.glow} hover:border-border`}
                  data-ocid={`cars.section.item.${i + 1}`}
                >
                  {/* Card header */}
                  <div
                    className={`flex items-center gap-4 px-6 py-4 border-b ${c.border} ${c.bg}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}
                    >
                      <Icon size={18} className={c.text} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2
                        className={`text-base font-bold font-display ${c.text}`}
                      >
                        {section.title}
                      </h2>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${c.badge} shrink-0`}
                    >
                      {section.badge}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="px-6 py-5">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {section.desc}
                    </p>
                    {section.contact && (
                      <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
                        <Mail size={11} className={c.text} />
                        <a
                          href={`mailto:${section.contact}`}
                          className={`${c.text} hover:opacity-80 transition-opacity`}
                        >
                          {section.contact}
                        </a>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {section.links.map((link, li) => (
                        <a
                          key={link.label}
                          href={link.href}
                          data-ocid={`cars.section${i + 1}.link.${li + 1}`}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${c.border} ${c.bg} ${c.text} hover:opacity-90 transition-all duration-200`}
                        >
                          {link.label}
                          <ArrowRight size={10} />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right sidebar */}
          <aside className="w-[260px] shrink-0 hidden lg:block space-y-4">
            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-card border border-border/50 rounded-xl p-4"
              data-ocid="cars.quicklinks.card"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold mb-3 font-display flex items-center gap-2">
                <span className="w-1 h-3 rounded-full bg-gold inline-block" />
                Quick Access
              </h3>
              <ul className="space-y-1.5">
                {[
                  "Driver & Vehicle Services",
                  "Renew License Online",
                  "511 Traffic Info",
                  "Report a Pothole",
                  "Park & Ride Locator",
                  "Vehicle Registration",
                  "Disability Parking",
                  "MN Safety Council",
                ].map((item, i) => (
                  <li key={item}>
                    <a
                      href="/#"
                      data-ocid={`cars.quicklinks.item.${i + 1}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors duration-200 group py-1"
                    >
                      <ChevronRight
                        size={12}
                        className="text-border group-hover:text-gold shrink-0 transition-colors duration-200"
                      />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 511 call-out */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gold/8 border border-gold/20 rounded-xl p-4"
              data-ocid="cars.511.card"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center font-black text-gold font-display text-sm shrink-0">
                  511
                </div>
                <h3 className="text-sm font-bold text-foreground font-display">
                  Real-Time Road Info
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Dial 511 or visit 511mn.org for live traffic conditions, road
                closures, and travel times across Minnesota.
              </p>
              <a
                href="/#"
                data-ocid="cars.511.link"
                className="flex items-center gap-2 text-sm text-gold hover:text-gold/80 font-semibold transition-colors duration-200"
              >
                Visit 511mn.org
                <ArrowRight size={12} />
              </a>
            </motion.div>

            {/* Contacts */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-card border border-border/50 rounded-xl p-4"
              data-ocid="cars.contacts.card"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold mb-3 font-display flex items-center gap-2">
                <span className="w-1 h-3 rounded-full bg-gold inline-block" />
                Contact
              </h3>
              <a
                href="/#"
                data-ocid="cars.contacts.link"
                className="flex items-center gap-2.5 text-sm text-gold hover:text-gold/80 font-semibold transition-colors duration-200 group"
              >
                <Phone
                  size={13}
                  className="text-[#004B73] shrink-0 group-hover:text-gold transition-colors duration-200"
                />
                DVS Customer Service
              </a>
              <div className="mt-3 pt-3 border-t border-border/40">
                <a
                  href="mailto:DVS.motor.vehicles@state.mn.us"
                  className="text-xs text-muted-foreground hover:text-gold transition-colors duration-200 break-all"
                >
                  DVS.motor.vehicles@state.mn.us
                </a>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </motion.main>
  );
}

// ─── Rail Page ────────────────────────────────────────────────────────────────

function RailPage({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("Rail Home");
  const [counts, setCounts] = useState({
    miles: 0,
    crossings: 0,
    operators: 0,
    freight: 0,
  });

  useEffect(() => {
    const targets = {
      miles: 4444,
      crossings: 4000,
      operators: 21,
      freight: 70,
    };
    const duration = 1800;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const ease = 1 - (1 - step / steps) ** 3;
      setCounts({
        miles: Math.round(targets.miles * ease),
        crossings: Math.round(targets.crossings * ease),
        operators: Math.round(targets.operators * ease),
        freight: Math.round(targets.freight * ease),
      });
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  const navTabs = [
    "Rail Home",
    "Passenger Rail",
    "Freight Rail",
    "Freight Rail Plans",
    "Rail Outreach",
    "Rail Maps",
    "Rail Safety",
    "Rail Transit",
    "State Rail Plan",
    "Contacts",
  ];

  const mainSections = [
    {
      id: "state-rail-plan",
      title: "State Rail Plan",
      content: [
        "MnDOT is in the final stages of adopting the Minnesota State Rail Plan. The plan will shape the future of Minnesota's rail infrastructure and investments. These efforts are part of the MnGO Family of Plans and will help connect to and inform the Minnesota Statewide Multimodal Transportation Plan.",
        "The plan will provide an overall vision for effective use of the state's freight and passenger rail network and its future development over the next 20 years. The plan describes the importance of railroads to Minnesota's economy, the state of the current rail system and trends, and identifies key rail investments that better support the transportation of goods, services and people throughout Minnesota.",
      ],
      subsections: [],
    },
    {
      id: "freight-rail",
      title: "Freight rail",
      content: [
        "Minnesota's freight railroads form a critical part of the State's multimodal transportation system. Many of the state's major industries rely on the rail system for efficient delivery of goods. The freight rail system is particularly critical in providing efficient connections to markets throughout the state, throughout North America, and to the world through the seaports on the Pacific and Atlantic coasts, and the Great Lakes. Rail provides critical options to shippers in terms of market access, modal economics, and service. Minnesota has 4,444 route miles of railroads serviced by 21 railroad companies.",
      ],
      subsections: [
        {
          title: "Crude by rail / rail safety improvement study",
          content:
            "The 2014 Minnesota Legislature directed the Minnesota Department of Transportation to conduct a study of highway-rail grade crossings improvements for rail corridors carrying unit trains of crude oil and other hazardous materials. The legislature also appropriated $2 million for implementation of safety improvements at these grade crossings specifically along crude-by-rail corridors. It is estimated that this appropriation will fund the installation of approximately 10 lower cost grade crossing improvements.",
        },
        {
          title: "Rail grade crossing safety project selection",
          content:
            "The safety of road users at Minnesota's 4,000-plus railroad grade crossings has improved in recent decades. In the early 1990s, over 100 automotive crashes per year occurred at rail crossings in Minnesota. Currently, the state records about 45 crashes per year, of which five involve fatalities. MnDOT oversees crossings on all roadways, though only 5 percent of crossings are on state highways. Investigators created a new model for selecting railroad grade crossings for safety upgrades. The risk-based strategy, adapted from MnDOT's innovative approach to highway safety, allowed MnDOT to create a rail crossing upgrade plan based on risks of injury and death at crossings throughout Minnesota. See Rail Grade Crossing Safety Project Selection report.",
        },
      ],
    },
    {
      id: "passenger-rail",
      title: "Passenger rail",
      content: [
        "The vision for passenger rail is to develop a robust intrastate and interstate intercity passenger rail system which results in improved travel options, costs and accessibility for Minnesota and interstate travelers. The improvements would allow for a comprehensive network of passenger rail services and the preservation and continued growth of freight rail service in Minnesota, with connections to destinations beyond the State's borders.",
      ],
      subsections: [],
    },
    {
      id: "rail-transit",
      title: "Rail transit",
      content: [
        "Rail transit services typically operate in urban regions, and generally serve commuters traveling to and from work. Light Rail Transit (LRT) typically operates with frequent stops spaced one-half-mile to one-mile apart in dense urban environments at speeds of 20 to 50 mph, with regular and continuous daily service. Commuter rail services typically connect urban centers with suburban populations over moderate distances with wider station spacing of 2 to 5 miles, higher speeds of 30 to 70 mph, and service concentrated on providing trips to and from work during weekday rush hours. Examples in Minnesota include the Hiawatha LRT and the Central Corridor LRT: The Green Line.",
      ],
      subsections: [],
    },
  ];

  const sidebarGroups = [
    {
      title: "State rules covering railroads",
      items: [
        {
          label: "Minnesota Administrative Rules Chapter 8830, Railroads",
          href: "/#",
        },
      ],
    },
    {
      title: "Current rail services",
      subgroups: [
        {
          subtitle: "Freight rail",
          items: [
            {
              label: "Crude by Rail / Rail Safety Improvement Study",
              href: "/#",
            },
            { label: "Rail Systems", href: "/#" },
            { label: "Rail Crossing Safety", href: "/#" },
            { label: "Rail Infrastructure Improvements (MRSI)", href: "/#" },
            { label: "Freight Planning and Development", href: "/#" },
          ],
        },
        {
          subtitle: "Passenger rail",
          items: [
            { label: "Amtrak", href: "/#" },
            { label: "Borealis (Twin Cities–Milwaukee–Chicago)", href: "/#" },
            {
              label:
                "Empire Builder (Chicago to Seattle and Portland via Minnesota)",
              href: "/#",
            },
          ],
        },
        {
          subtitle: "Rail transit",
          items: [
            { label: "Hiawatha LRT: The Blue Line", href: "/#" },
            { label: "Central Corridor LRT: The Green Line", href: "/#" },
          ],
        },
      ],
    },
    {
      title: "Rail in the works",
      subgroups: [
        {
          subtitle: "Freight rail",
          items: [
            { label: "Freight and Rail Planning and Development", href: "/#" },
          ],
        },
        {
          subtitle: "Passenger rail",
          items: [
            {
              label: "Minneapolis–Duluth (Northern Lights Express)",
              href: "/#",
            },
          ],
        },
        {
          subtitle: "Rail transit",
          items: [
            { label: "Bottineau Transitway", href: "/#" },
            { label: "Southwest LRT", href: "/#" },
          ],
        },
      ],
    },
  ];

  return (
    <motion.main
      key="rail-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="flex-1 bg-background min-h-screen"
    >
      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(10,15,30,0.5) 0%, rgba(10,15,30,0.82) 70%, #0a0f1e 100%), url('https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 pt-8 pb-6">
          <button
            onClick={onClose}
            type="button"
            data-ocid="rail.close_button"
            className="flex items-center gap-2 text-sm text-[#004B73]/80 hover:text-[#004B73] mb-6 transition-colors duration-200 group"
          >
            <ChevronLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            Back to MnDOT
          </button>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-xl bg-[#004B73]/20 border border-[#004B73]/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,75,115,0.2)]">
              <Zap size={22} className="text-[#004B73]" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-foreground font-display tracking-tight">
                About railroads in Minnesota
              </h1>
              <p className="text-[#004B73]/80 text-sm font-medium">
                Minnesota Department of Transportation
              </p>
            </div>
          </div>
          <p className="text-base text-[#444444] max-w-xl mt-3 leading-relaxed">
            Minnesota's rail network is a vital connector — supporting
            agriculture, industry, and passenger travel across thousands of
            miles of track.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              {
                value: `${counts.miles.toLocaleString()}`,
                label: "Route Miles",
                icon: MapPin,
              },
              {
                value: `${counts.crossings.toLocaleString()}+`,
                label: "Grade Crossings",
                icon: Shield,
              },
              {
                value: `${counts.operators}`,
                label: "Railroad Companies",
                icon: Truck,
              },
              {
                value: `${counts.freight}%`,
                label: "Freight by Rail",
                icon: Zap,
              },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="bg-card border border-border/50 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#004B73]/15 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#004B73]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#004B73] font-display leading-none tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#004B73]/40 to-transparent" />
      </div>

      {/* Nav Tabs */}
      <div className="border-b border-border/50 bg-card">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex flex-wrap gap-2">
          {navTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              data-ocid="rail.nav.tab"
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                activeTab === tab
                  ? "bg-[#004B73] text-primary-foreground border-[#004B73] shadow-[0_0_12px_rgba(0,75,115,0.3)]"
                  : "bg-[#F8F8F8] text-muted-foreground border-border/50 hover:border-[#004B73]/40 hover:text-[#004B73]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-red-900/40 border-b border-red-500/30">
        <div className="max-w-[1200px] mx-auto px-4 py-2.5 flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-red-500/80 flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold">!</span>
          </div>
          <p className="text-sm text-red-200 font-medium">
            <a
              href="/#"
              className="underline underline-offset-2 hover:text-red-100 transition-colors"
            >
              Report a railroad crossing emergency.
            </a>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex gap-8 items-start">
          {/* Left Main Column */}
          <div className="flex-1 min-w-0 space-y-5">
            {mainSections.map((section, i) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.09 }}
                className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-[#004B73]/25 transition-all duration-300"
                data-ocid={`rail.section.item.${i + 1}`}
              >
                <div className="px-6 py-4 border-b border-[#004B73]/15 bg-[#004B73]/5">
                  <h2 className="text-lg font-bold text-[#004B73] font-display flex items-center gap-2">
                    <span className="w-1.5 h-5 rounded-full bg-[#004B73] inline-block" />
                    <a
                      href="/#"
                      className="hover:text-[#004B73]/80 transition-colors"
                    >
                      {section.title}
                    </a>
                  </h2>
                </div>
                <div className="px-6 py-5 space-y-3">
                  {section.content.map((para) => (
                    <p
                      key={para.slice(0, 30)}
                      className="text-sm text-[#444444] leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                  {section.subsections.map((sub) => (
                    <div
                      key={sub.title}
                      className="mt-4 pl-4 border-l border-[#004B73]/20"
                    >
                      <h3 className="text-sm font-bold text-[#004B73]/90 mb-2 font-display">
                        <a
                          href="/#"
                          className="hover:text-[#004B73] transition-colors"
                        >
                          {sub.title}
                        </a>
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {sub.content}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Sidebar */}
          <aside className="w-[280px] shrink-0 hidden lg:block space-y-4">
            {sidebarGroups.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + gi * 0.1 }}
                className="bg-card border border-border/50 rounded-xl overflow-hidden"
                data-ocid={`rail.sidebar.card.${gi + 1}`}
              >
                <div className="px-4 py-3 border-b border-[#004B73]/15 bg-[#004B73]/5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#004B73] font-display">
                    {group.title}
                  </h3>
                </div>
                <div className="px-4 py-3 space-y-1">
                  {group.items?.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      data-ocid={`rail.sidebar${gi + 1}.link`}
                      className="flex items-start gap-1.5 text-xs text-[#004B73]/80 hover:text-[#004B73] transition-colors duration-200 py-0.5 leading-snug"
                    >
                      <ChevronRight
                        size={11}
                        className="shrink-0 mt-0.5 text-[#004B73]"
                      />
                      {item.label}
                    </a>
                  ))}
                  {group.subgroups?.map((subgroup, sgi) => (
                    <div
                      key={subgroup.subtitle}
                      className={
                        sgi > 0 ? "pt-2 mt-2 border-t border-white/8" : ""
                      }
                    >
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 font-display">
                        {subgroup.subtitle}
                      </p>
                      {subgroup.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          data-ocid={`rail.sidebar${gi + 1}.link`}
                          className="flex items-start gap-1.5 text-xs text-[#004B73]/75 hover:text-[#004B73] transition-colors duration-200 py-0.5 leading-snug"
                        >
                          <ChevronRight
                            size={11}
                            className="shrink-0 mt-0.5 text-[#004B73]/40"
                          />
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </aside>
        </div>
      </div>
    </motion.main>
  );
}

// ─── Aeronautics Page ─────────────────────────────────────────────────────────

function AeronauticsPage({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Aeronautics Home" },
    { id: "general", label: "General Aviation" },
    { id: "commercial", label: "Commercial Aviation" },
    { id: "airports", label: "Airport Development" },
    { id: "safety", label: "Aviation Safety" },
    { id: "maps", label: "Aviation Maps" },
    { id: "pilot", label: "Pilot Resources" },
    { id: "directory", label: "Airport Directory" },
    { id: "plan", label: "State Aviation Plan" },
    { id: "contacts", label: "Contacts" },
  ];

  return (
    <motion.main
      key="aero-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="flex-1 bg-background min-h-screen"
    >
      {/* Top bar */}
      <div className="bg-card border-b border-border/50 px-4 py-2 flex items-center gap-4">
        <button
          onClick={onClose}
          type="button"
          className="flex items-center gap-1.5 text-sm text-[#004B73]/80 hover:text-[#004B73] transition-colors duration-200 group"
        >
          <ChevronLeft
            size={15}
            className="group-hover:-translate-x-1 transition-transform duration-200"
          />
          Back to MnDOT
        </button>
        <div className="h-4 w-px bg-white/10" />
        <span className="text-xs text-muted-foreground">
          Minnesota Department of Transportation
        </span>
      </div>

      {/* Page title */}
      <div className="max-w-[1200px] mx-auto px-6 pt-8 pb-0">
        <h1 className="text-3xl font-extrabold text-foreground font-display tracking-tight mb-5">
          About Aeronautics in Minnesota
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-0 border-b border-border/50 -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-[#004B73] text-[#004B73] bg-[#004B73]/5"
                  : "border-transparent text-muted-foreground hover:text-foreground/80 hover:border-border/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        {/* Emergency alert */}
        <div className="bg-red-700/80 border border-red-500/40 rounded px-4 py-3 mb-6">
          <a
            href="/"
            className="text-white text-sm font-medium hover:underline"
          >
            Report an aviation emergency or safety concern.
          </a>
        </div>

        <div className="flex gap-8 items-start">
          {/* Main content */}
          <div className="flex-1 min-w-0 text-foreground/80">
            <h2 className="text-2xl font-bold text-foreground font-display mb-1">
              About Aeronautics in Minnesota
            </h2>

            <h3 className="text-lg font-bold text-[#004B73] mt-5 mb-2">
              <a href="/" className="hover:underline">
                State Aviation Plan
              </a>
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-[#444444]">
              MnDOT is in the final stages of adopting the Minnesota State
              Aviation System Plan. The plan will shape the future of
              Minnesota's aviation infrastructure and investments. These efforts
              are part of the MnGO Family of Plans and will help connect to and
              inform the Minnesota Statewide Multimodal Transportation Plan.
            </p>
            <p className="text-sm leading-relaxed mb-4 text-[#444444]">
              The plan will provide an overall vision for effective use of the
              state's general aviation and commercial air service network and
              its future development over the next 20 years. The plan describes
              the importance of airports to Minnesota's economy, the state of
              the current aviation system and trends, and identifies key
              aviation investments that better support the transportation of
              goods, services and people throughout Minnesota.
            </p>

            <h3 className="text-lg font-bold text-[#004B73] mt-6 mb-2">
              <a href="/" className="hover:underline">
                General Aviation
              </a>
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-[#444444]">
              Minnesota's general aviation network forms a critical part of the
              state's multimodal transportation system. Many of the state's
              major industries rely on the aviation system for efficient
              movement of people and goods. General aviation is particularly
              critical in providing efficient connections to markets throughout
              Minnesota, across North America, and to the world. Minnesota has
              135 public-use airports serviced by a variety of aviation
              operators. Rail provides critical options to shippers in terms of
              market access, modal economics, and service.
            </p>

            <h4 className="text-base font-bold text-foreground mt-5 mb-2">
              Airport Safety Improvement Program
            </h4>
            <p className="text-sm leading-relaxed mb-4 text-[#444444]">
              The 2014 Minnesota Legislature directed the Minnesota Department
              of Transportation to conduct a study of airport safety
              improvements for aviation corridors carrying significant traffic
              and other operations. The legislature also appropriated $2 million
              for implementation of safety improvements at these airports
              specifically along high-traffic corridors. It is estimated that
              this appropriation will fund the installation of approximately 15
              lower-cost safety improvements.
            </p>

            <h4 className="text-base font-bold text-foreground mt-5 mb-2">
              Airport Development Grant Selection
            </h4>
            <p className="text-sm leading-relaxed mb-4 text-[#444444]">
              The safety of Minnesota's airport infrastructure has improved in
              recent decades. MnDOT administers state and federal Airport
              Improvement Program (AIP) grants for runway, taxiway, lighting,
              hangar, and terminal facility improvements. MnDOT oversees
              aviation safety at all public-use airports, maintaining a
              statewide registry and coordinating inspections.
            </p>
            <p className="text-sm leading-relaxed mb-4 text-[#444444]">
              Investigators developed a new model for selecting airports for
              safety and capacity upgrades. The risk-based strategy, adapted
              from MnDOT's innovative approach to highway safety, allowed MnDOT
              to create an airport upgrade plan based on need across Minnesota.
              See{" "}
              <a href="/" className="text-[#004B73] hover:underline">
                Airport Development Grant Selection report
              </a>
              .
            </p>

            <h3 className="text-lg font-bold text-[#004B73] mt-6 mb-2">
              <a href="/" className="hover:underline">
                Commercial Aviation
              </a>
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-[#444444]">
              The vision for commercial aviation in Minnesota is to develop a
              robust intrastate and interstate air service network which results
              in improved travel options, costs and accessibility for Minnesota
              and interstate travelers. The improvements would allow for a
              comprehensive network of commercial air services and the
              preservation and continued growth of general aviation in
              Minnesota, with connections to destinations beyond the State's
              borders.
            </p>

            <h3 className="text-lg font-bold text-[#004B73] mt-6 mb-2">
              <a href="/" className="hover:underline">
                Air Cargo & Freight
              </a>
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-[#444444]">
              Air cargo services typically support businesses requiring fast
              delivery of goods across the state and nationally. Air freight
              networks generally connect major commercial airports with regional
              facilities at speeds not possible by surface transportation, with
              regular and reliable daily service. Examples in Minnesota include
              Minneapolis-Saint Paul International Airport and Duluth
              International Airport.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="w-[250px] shrink-0 hidden lg:block space-y-5">
            <div className="bg-[#F8F8F8] border border-border/50 rounded-xl p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                State rules covering aviation
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-sm text-[#004B73] hover:underline leading-snug block"
                  >
                    Minnesota Administrative Rules Chapter 8800, Aeronautics
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8F8F8] border border-border/50 rounded-xl p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                Current aviation services
              </h3>
              <p className="text-xs font-semibold text-muted-foreground mb-2 mt-3">
                General aviation
              </p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "Airport Directory",
                  "Aviation Weather",
                  "NOTAMs & Pilot Briefings",
                  "Airport Improvement Grants",
                  "Obstruction & Land Use",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="/"
                      className="text-sm text-[#004B73] hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-semibold text-muted-foreground mb-2">
                Commercial aviation
              </p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "MSP International Airport",
                  "Duluth International Airport",
                  "Rochester International Airport",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="/"
                      className="text-sm text-[#004B73] hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-semibold text-muted-foreground mb-2">
                Air cargo
              </p>
              <ul className="space-y-1.5">
                {["Air Freight Network", "Cargo Facilities Directory"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="/"
                        className="text-sm text-[#004B73] hover:underline"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="bg-[#F8F8F8] border border-border/50 rounded-xl p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                Aviation in the works
              </h3>
              <p className="text-xs font-semibold text-muted-foreground mb-2 mt-3">
                Airport development
              </p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "Airport Capital Improvement Program",
                  "Runway & Taxiway Projects",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="/"
                      className="text-sm text-[#004B73] hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-semibold text-muted-foreground mb-2">
                New services
              </p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "Emerging Air Mobility (UAM)",
                  "Drone Integration Program",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="/"
                      className="text-sm text-[#004B73] hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-semibold text-muted-foreground mb-2">
                Safety programs
              </p>
              <ul className="space-y-1.5">
                {["Runway Safety Program", "Wildlife Hazard Management"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="/"
                        className="text-sm text-[#004B73] hover:underline"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 mt-10 py-8 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div className="text-xs text-muted-foreground space-y-1">
            <p>2026 Minnesota Department of Transportation</p>
            <p>395 John Ireland Blvd, St. Paul, MN 55155-1800</p>
            <p>651-296-3000 Toll-free 800-657-3774</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            {[
              "Contact MnDOT",
              "Search MnDOT.gov",
              "Sitemap",
              "A to Z",
              "Doing Business",
              "Careers/Jobs",
              "News Releases",
              "511 Traveler Service",
              "Disclaimer and Legal",
              "ADA and Accessibility",
              "Governor's Site",
              "State of Minnesota",
              "About MnDOT",
              "Employee Resources",
            ].map((item) => (
              <a
                key={item}
                href="/"
                className="hover:text-[#004B73] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </motion.main>
  );
}

// ─── Waterways Page ───────────────────────────────────────────────────────────

function WaterwaysPage({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home" },
    { id: "az", label: "Waterways A-Z" },
    { id: "boating", label: "Boating" },
    { id: "paddling", label: "Paddling & Water Trails" },
    { id: "harbors", label: "Harbors & Ports" },
    { id: "safety", label: "Safety" },
    { id: "education", label: "Education" },
    { id: "permits", label: "Permits/Registrations/Forms" },
    { id: "contacts", label: "Contacts" },
  ];

  const newsItems = [
    {
      title: "Nominate a harbor or marina for excellence",
      body: "Do you know a Minnesota harbor, marina or water access point that is exceptional? Nominate it for the 2026 MnDOT Waterways Award of Excellence.",
    },
    {
      title: "SFY26 Water Trail Grant Awards",
      body: "We have completed the review and scoring of SFY26 Water Trail Grant Applications. View the published scoring list.",
    },
    {
      title:
        "New boating safety webinar series explores the future of waterway navigation in Minnesota",
      body: "Minnesota is preparing for a future where electric and autonomous watercraft move passengers and cargo. Join us for this free webinar series.",
    },
    {
      title: "Check out the new Waterway Navigation and Buoy Location App!",
      body: "MnDOT has created a navigation app covering Minnesota waterway locations with up-to-date buoy and marker information.",
    },
    {
      title: "New Water Trail Planning and Trip Tools!",
      body: "The Minnesota Waterways Directory and Travel Guide has gone digital with both a digital download and interactive web map.",
    },
    {
      title: "Boating safety video",
      body: "Minnesota DNR's boating safety video will help you clearly identify channels, no-wake zones, and navigation markers on Minnesota lakes and rivers.",
    },
    {
      title: "Piney-Pinecreek Portage now open",
      body: "The Piney-Pinecreek portage route is now accessible. Several water access points serve the area including Lake of the Woods, Rainy River, and Boundary Waters access points.",
    },
    {
      title: "Attention vessel owners and registrants",
      body: "We strongly encourage you to pay your registration bill by credit card or E-check online. To pay online you will need your vessel registration number and the Owner Access Code.",
    },
    {
      title: "Meteorological impact on Minnesota waterways",
      body: "There is new guidance regarding weather monitoring buoys on Minnesota waterways.",
    },
  ];

  return (
    <motion.main
      key="waterways-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="flex-1 bg-background min-h-screen"
    >
      {/* Top bar */}
      <div className="bg-card border-b border-border/50 px-4 py-2 flex items-center gap-4">
        <button
          onClick={onClose}
          type="button"
          data-ocid="waterways.close_button"
          className="flex items-center gap-1.5 text-sm text-[#004B73]/80 hover:text-[#004B73] transition-colors duration-200 group"
        >
          <ChevronLeft
            size={15}
            className="group-hover:-translate-x-1 transition-transform duration-200"
          />
          Back to MnDOT
        </button>
        <div className="h-4 w-px bg-white/10" />
        <span className="text-xs text-muted-foreground">
          Minnesota Department of Transportation
        </span>
      </div>

      {/* Hero banner */}
      <div
        className="relative h-40 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,15,30,0.85) 30%, rgba(10,15,30,0.4) 100%), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-[#004B73]/20 border border-[#004B73]/30 flex items-center justify-center shadow-[0_0_24px_rgba(0,75,115,0.25)]">
            <Zap size={24} className="text-[#004B73]" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-foreground font-display tracking-tight">
              Minnesota Waterways
            </h1>
            <p className="text-[#004B73]/80 text-sm font-medium mt-0.5">
              Lakes, Rivers, Water Trails & Harbors
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#004B73]/30 to-transparent" />
      </div>

      {/* Page heading + Tabs */}
      <div className="max-w-[1200px] mx-auto px-6 pt-7 pb-0">
        <h2 className="text-2xl font-extrabold text-foreground font-display tracking-tight mb-5">
          Waterways in Minnesota
        </h2>
        <div className="flex flex-wrap gap-0 border-b border-border/50 -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              data-ocid="waterways.tab"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-[#004B73] text-[#004B73] bg-[#004B73]/5"
                  : "border-transparent text-muted-foreground hover:text-foreground/80 hover:border-border/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content + Sidebar */}
      <div className="max-w-[1200px] mx-auto px-6 py-7 flex gap-8 items-start">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-[#004B73] mb-4">Latest news</h3>
          <div className="space-y-5">
            {newsItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                data-ocid={`waterways.item.${i + 1}`}
                className="border-b border-white/8 pb-5 last:border-0"
              >
                <a
                  href="/#"
                  className="text-base font-bold text-[#004B73] hover:underline leading-snug block mb-1.5"
                >
                  {item.title}
                </a>
                <p className="text-sm text-[#444444] leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-72 shrink-0 space-y-4">
          {/* Connect card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card border border-border/50 rounded-xl p-4 hover:border-[#004B73]/25 transition-colors duration-300"
          >
            <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#004B73]/20 flex items-center justify-center">
                <Users size={11} className="text-[#004B73]" />
              </span>
              Connect with us
            </h4>
            <a href="/#" className="text-sm text-[#004B73] hover:underline">
              Sign up for Waterways email updates
            </a>
          </motion.div>

          {/* 2025 Directory card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-card border border-border/50 rounded-xl p-4 hover:border-[#004B73]/25 transition-colors duration-300"
          >
            <h4 className="text-sm font-bold text-foreground mb-3">
              2025 Waterways Directory
            </h4>
            <div
              className="w-full h-16 rounded-lg mb-3"
              style={{
                background:
                  "linear-gradient(135deg, #0e4a6e 0%, #1a8cbb 50%, #23b5e8 100%)",
              }}
            />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <a href="/#" className="text-[#004B73] hover:underline">
                Download the 2025 Minnesota Waterways Directory and Travel Guide
              </a>{" "}
              or order a paper copy.
            </p>
          </motion.div>

          {/* Paddle Minnesota card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-card border border-border/50 rounded-xl p-4 hover:border-[#004B73]/25 transition-colors duration-300"
          >
            <h4 className="text-sm font-bold text-foreground mb-3">
              Paddle Minnesota!
            </h4>
            <div
              className="w-full h-16 rounded-lg mb-3"
              style={{
                background:
                  "linear-gradient(135deg, #0a3d52 0%, #0e6e8a 60%, #14a0c8 100%)",
              }}
            />
            <p className="text-xs text-muted-foreground leading-relaxed">
              The Paddle Minnesota program is sponsored by MnDOT Waterways and
              the Minnesota Council on Water Trails to promote recreational
              paddling in Minnesota.
            </p>
          </motion.div>

          {/* Economic Impact card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-card border border-border/50 rounded-xl p-4 hover:border-[#004B73]/25 transition-colors duration-300"
          >
            <h4 className="text-sm font-bold text-foreground mb-3">
              Statewide Waterway Economic Impact Study
            </h4>
            <div
              className="w-full h-16 rounded-lg mb-3 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #091326 0%, #0d2244 60%, #143069 100%)",
              }}
            >
              <span className="text-2xl font-extrabold text-[#004B73] font-display">
                2019
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2">
              Minnesota waterways contribute over $2.1 billion annually to the
              state economy through boating, recreation, and commercial
              activity.
            </p>
            <a
              href="/#"
              className="text-xs text-[#004B73] hover:underline leading-relaxed"
            >
              Learn more about the Statewide Waterway Economic Impact Study and
              Calculator
            </a>
          </motion.div>
        </aside>
      </div>
    </motion.main>
  );
}

// ─── Bikes Page ───────────────────────────────────────────────────────────────

function BikesPage({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home" },
    { id: "safety", label: "Safety Education" },
    { id: "planning", label: "Planning & Research" },
    { id: "design", label: "Design & Engineering" },
    { id: "routes", label: "Routes & Maps" },
    { id: "grants", label: "Grants & Funding" },
    { id: "contacts", label: "Contacts" },
  ];

  const sections = [
    {
      id: "safety",
      title: "Safety education",
      desc: "We all must take responsibility to follow the law, pay attention and share the road. Follow the law and these safety guidelines to keep everyone safe.",
    },
    {
      id: "planning",
      title: "Planning and research",
      desc: "MnDOT oversees a statewide transportation system, which also includes people who ride bicycles.",
    },
    {
      id: "design",
      title: "Design and engineering",
      desc: "Bicycle accommodations in roadway projects are supported by federal legislation, Minnesota state statutes, and MnDOT policy and practice.",
    },
    {
      id: "routes",
      title: "Routes, trails, and maps",
      desc: "Get access to information about Minnesota's two state bicycle routes, the state bicycle map, and state DNR bike trails.",
    },
    {
      id: "grants",
      title: "Grants and funding",
      desc: "Funding opportunities for bicycle and pedestrian-related activities.",
    },
  ];

  const relatedTopics = [
    "Active Transportation Program",
    "Bicycling",
    "Walking",
    "Safe Routes to School",
    "Transit in Greater Minnesota",
    "Pedestrian and bicyclist data",
    "Shared mobility",
    "Electric vehicle infrastructure",
  ];

  const statutes = [
    "85.015 State Trails",
    "Replacing Bikeways and Pedestrian Ways 160.264",
    "169.011 Traffic Regulations: Definitions",
    "169.222 Operation of Bicycle",
  ];

  return (
    <motion.main
      key="bikes-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="flex-1 bg-background min-h-screen"
    >
      {/* Header */}
      <div className="bg-card border-b border-border/50">
        <div className="max-w-[1200px] mx-auto px-4 pt-6 pb-4">
          <button
            onClick={onClose}
            type="button"
            data-ocid="bikes.close_button"
            className="flex items-center gap-2 text-sm text-[#004B73]/80 hover:text-[#004B73] mb-4 transition-colors duration-200 group"
          >
            <ChevronLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            Back to MnDOT
          </button>
          <h1 className="text-4xl font-extrabold text-foreground font-display tracking-tight mb-1">
            Bicycling
          </h1>
        </div>
        {/* Tab bar */}
        <div className="max-w-[1200px] mx-auto px-4">
          <nav className="flex gap-0 overflow-x-auto" data-ocid="bikes.tab">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                data-ocid={`bikes.${tab.id}.tab`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 ${
                  activeTab === tab.id
                    ? "border-[#004B73] text-[#004B73] bg-[#004B73]/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-[#004B73]/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex gap-8 items-start">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-card border border-border/50 rounded-xl overflow-hidden"
              data-ocid="bikes.main.card"
            >
              <div className="px-6 py-4 border-b border-border/50 bg-[#F8F8F8]">
                <h2 className="text-xl font-bold text-foreground font-display">
                  Bicycling in Minnesota
                </h2>
              </div>
              <div className="divide-y divide-white/8">
                {sections.map((section, i) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="px-6 py-5 hover:bg-[#F8F8F8] transition-colors duration-200"
                    data-ocid={`bikes.section.item.${i + 1}`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveTab(section.id)}
                      className="text-left w-full group"
                    >
                      <h3 className="text-[#4a9eff] group-hover:text-[#004B73] font-semibold text-base mb-1.5 transition-colors duration-200 flex items-center gap-1.5">
                        {section.title}
                        <ArrowRight
                          size={13}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0"
                        />
                      </h3>
                      <p className="text-sm text-[#444444] leading-relaxed">
                        {section.desc}
                      </p>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="w-[260px] shrink-0 hidden lg:block space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-card border border-border/50 rounded-xl overflow-hidden"
              data-ocid="bikes.related.card"
            >
              <div className="px-4 py-3 border-b border-border/50 bg-[#F8F8F8]">
                <h3 className="text-sm font-bold text-foreground font-display">
                  Related topics
                </h3>
              </div>
              <ul className="p-3 space-y-0.5">
                {relatedTopics.map((item, i) => (
                  <li key={item}>
                    <a
                      href="/#"
                      data-ocid={`bikes.related.item.${i + 1}`}
                      className="flex items-center gap-2 text-sm text-[#4a9eff] hover:text-[#004B73] transition-colors duration-200 py-1.5 px-1 rounded hover:bg-[#F8F8F8]"
                    >
                      <ChevronRight size={11} className="shrink-0 opacity-60" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-card border border-border/50 rounded-xl overflow-hidden"
              data-ocid="bikes.statutes.card"
            >
              <div className="px-4 py-3 border-b border-border/50 bg-[#F8F8F8]">
                <h3 className="text-sm font-bold text-foreground font-display">
                  Bicycling-related state statutes
                </h3>
              </div>
              <ul className="p-3 space-y-0.5">
                {statutes.map((item, i) => (
                  <li key={item}>
                    <a
                      href="/#"
                      data-ocid={`bikes.statutes.item.${i + 1}`}
                      className="flex items-center gap-2 text-sm text-[#4a9eff] hover:text-[#004B73] transition-colors duration-200 py-1.5 px-1 rounded hover:bg-[#F8F8F8]"
                    >
                      <ChevronRight size={11} className="shrink-0 opacity-60" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </aside>
        </div>
      </div>
    </motion.main>
  );
}

// ─── Pedestrians Page ─────────────────────────────────────────────────────────

function PedestriansPage({ onClose }: { onClose: () => void }) {
  const [counts, setCounts] = useState({
    sidewalks: 0,
    crossings: 0,
    safezones: 0,
    walk: 0,
  });

  useEffect(() => {
    const targets = {
      sidewalks: 5200,
      crossings: 40000,
      safezones: 98,
      walk: 25,
    };
    const duration = 1800;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const ease = 1 - (1 - step / steps) ** 3;
      setCounts({
        sidewalks: Math.round(targets.sidewalks * ease),
        crossings: Math.round(targets.crossings * ease),
        safezones: Math.round(targets.safezones * ease),
        walk: Math.round(targets.walk * ease),
      });
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  const sections = [
    {
      icon: Shield,
      color: "emerald",
      title: "Crosswalk Safety",
      badge: "CROSS",
      desc: "Minnesota's crosswalk safety program improves pedestrian crossing conditions at high-risk intersections. Flashing beacons, countdown signals, curb ramps, and refuge islands protect walkers statewide.",
      contact: "ped.safety@state.mn.us",
      links: [
        { label: "Crosswalk Programs", href: "/#" },
        { label: "High-Risk Locations", href: "/#" },
        { label: "Report a Hazard", href: "/#" },
      ],
    },
    {
      icon: Users,
      color: "sky",
      title: "ADA Compliance",
      badge: "ADA",
      desc: "MnDOT ensures all pedestrian infrastructure meets Americans with Disabilities Act requirements — curb ramps, tactile paving, accessible signals, and compliant sidewalk widths throughout the state.",
      contact: null,
      links: [
        { label: "ADA Transition Plan", href: "/#" },
        { label: "Accessibility Resources", href: "/#" },
        { label: "File ADA Complaint", href: "/#" },
      ],
    },
    {
      icon: MapPin,
      color: "amber",
      title: "Pedestrian Plans",
      badge: "PLANS",
      desc: "Minnesota's statewide pedestrian plan sets priorities for sidewalk construction, trail connectivity, and walkable community design. Learn about funding programs and local planning resources.",
      contact: null,
      links: [
        { label: "Statewide Ped Plan", href: "/#" },
        { label: "Funding Programs", href: "/#" },
        { label: "Walkability Index", href: "/#" },
      ],
    },
    {
      icon: Zap,
      color: "rose",
      title: "School Safety",
      badge: "SCHOOL",
      desc: "Safe Routes to School programs fund sidewalks, crosswalks, and traffic calming near Minnesota schools. Encouraging walking and biking to school improves health, safety, and community connections.",
      contact: null,
      links: [
        { label: "Safe Routes to School", href: "/#" },
        { label: "School Zone Safety", href: "/#" },
        { label: "Apply for Funding", href: "/#" },
      ],
    },
  ];

  const colorMap: Record<
    string,
    { bg: string; border: string; text: string; badge: string; glow: string }
  > = {
    emerald: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-400",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      glow: "hover:shadow-[0_4px_20px_rgba(16,185,129,0.12)]",
    },
    sky: {
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
      text: "text-sky-400",
      badge: "bg-sky-500/20 text-sky-300 border-sky-500/30",
      glow: "hover:shadow-[0_4px_20px_rgba(14,165,233,0.12)]",
    },
    amber: {
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      text: "text-amber-400",
      badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      glow: "hover:shadow-[0_4px_20px_rgba(245,158,11,0.12)]",
    },
    rose: {
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      text: "text-rose-400",
      badge: "bg-rose-500/20 text-rose-300 border-rose-500/30",
      glow: "hover:shadow-[0_4px_20px_rgba(244,63,94,0.12)]",
    },
  };

  return (
    <motion.main
      key="pedestrians-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="flex-1 bg-background min-h-screen"
    >
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(10,15,30,0.5) 0%, rgba(10,15,30,0.85) 70%, #0a0f1e 100%), url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 pt-8 pb-6">
          <button
            onClick={onClose}
            type="button"
            data-ocid="pedestrians.close_button"
            className="flex items-center gap-2 text-sm text-[#004B73]/80 hover:text-[#004B73] mb-6 transition-colors duration-200 group"
          >
            <ChevronLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            Back to MnDOT
          </button>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-xl bg-[#004B73]/20 border border-[#004B73]/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,75,115,0.2)]">
              <Users size={22} className="text-[#004B73]" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-foreground font-display tracking-tight">
                Minnesota Pedestrians
              </h1>
              <p className="text-[#004B73]/80 text-sm font-medium">
                Walking & Pedestrian Safety
              </p>
            </div>
          </div>
          <p className="text-base text-[#444444] max-w-xl mt-3 leading-relaxed">
            Creating safe, accessible, and connected walking environments across
            Minnesota — from school zones to downtowns, MnDOT invests in
            infrastructure for every pedestrian.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              {
                value: `${counts.sidewalks.toLocaleString()}mi`,
                label: "Sidewalk Miles",
                icon: MapPin,
              },
              {
                value: `${(counts.crossings / 1000).toFixed(0)}K+`,
                label: "Daily Crossings",
                icon: Users,
              },
              {
                value: `${counts.safezones}%`,
                label: "Safe Zones",
                icon: Shield,
              },
              { value: `${counts.walk}%`, label: "Walk to Work", icon: Zap },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="bg-card border border-border/50 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#004B73]/15 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#004B73]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#004B73] font-display leading-none tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#004B73]/40 to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex gap-6 items-start">
          <div className="flex-1 min-w-0 space-y-4">
            {sections.map((section, i) => {
              const Icon = section.icon;
              const c = colorMap[section.color];
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group bg-card border border-border/50 rounded-xl overflow-hidden transition-all duration-300 ${c.glow} hover:border-border/50`}
                  data-ocid={`pedestrians.section.item.${i + 1}`}
                >
                  <div
                    className={`flex items-center gap-4 px-6 py-4 border-b ${c.border} ${c.bg}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}
                    >
                      <Icon size={18} className={c.text} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2
                        className={`text-base font-bold font-display ${c.text}`}
                      >
                        {section.title}
                      </h2>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${c.badge} shrink-0`}
                    >
                      {section.badge}
                    </span>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {section.desc}
                    </p>
                    {section.contact && (
                      <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
                        <Mail size={11} className={c.text} />
                        <a
                          href={`mailto:${section.contact}`}
                          className={`${c.text} hover:opacity-80 transition-opacity`}
                        >
                          {section.contact}
                        </a>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {section.links.map((link, li) => (
                        <a
                          key={link.label}
                          href={link.href}
                          data-ocid={`pedestrians.section${i + 1}.link.${li + 1}`}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${c.border} ${c.bg} ${c.text} hover:opacity-90 transition-all duration-200`}
                        >
                          {link.label}
                          <ArrowRight size={10} />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <aside className="w-[260px] shrink-0 hidden lg:block space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-card border border-border/50 rounded-xl p-4"
              data-ocid="pedestrians.quicklinks.card"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#004B73] mb-3 font-display flex items-center gap-2">
                <span className="w-1 h-3 rounded-full bg-[#004B73] inline-block" />
                Quick Access
              </h3>
              <ul className="space-y-1.5">
                {[
                  "Safe Routes to School",
                  "Crosswalk Laws",
                  "Walkability Index",
                  "ADA Resources",
                  "Sidewalk Funding",
                  "School Zone Safety",
                  "Ped Plan Documents",
                  "Contact Pedestrian Office",
                ].map((item, i) => (
                  <li key={item}>
                    <a
                      href="/#"
                      data-ocid={`pedestrians.quicklinks.item.${i + 1}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#004B73] transition-colors duration-200 group py-1"
                    >
                      <ChevronRight
                        size={12}
                        className="text-muted-foreground/50 group-hover:text-[#004B73] shrink-0 transition-colors duration-200"
                      />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[#004B73]/8 border border-[#004B73]/20 rounded-xl p-4"
              data-ocid="pedestrians.contact.card"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#004B73] mb-3 font-display flex items-center gap-2">
                <span className="w-1 h-3 rounded-full bg-[#004B73] inline-block" />
                Contact
              </h3>
              <a
                href="/#"
                data-ocid="pedestrians.contact.link"
                className="flex items-center gap-2.5 text-sm text-[#004B73] hover:text-[#004B73]/80 font-semibold transition-colors duration-200 group"
              >
                <Phone
                  size={13}
                  className="text-[#004B73] shrink-0 group-hover:text-[#004B73] transition-colors duration-200"
                />
                MnDOT Pedestrian Office
              </a>
              <div className="mt-3 pt-3 border-t border-border/50">
                <a
                  href="mailto:pedestrian@state.mn.us"
                  className="text-xs text-muted-foreground hover:text-[#004B73] transition-colors duration-200 break-all"
                >
                  pedestrian@state.mn.us
                </a>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </motion.main>
  );
}

function SidebarMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border/50 rounded-xl overflow-hidden mb-4"
    >
      <ul>
        {SIDEBAR_MENU.map((item, i) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
          >
            <a
              href="/#"
              data-ocid={`sidebar.menu.item.${i + 1}`}
              className={`group flex items-center justify-between px-4 py-3 text-sm font-semibold border-b border-border/30 last:border-0 transition-all duration-200 ${
                item.active
                  ? "border-l-[3px] border-l-gold bg-gold/10 text-gold pl-3"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 hover:pl-5"
              }`}
            >
              <span>{item.label}</span>
              <ArrowRight
                size={13}
                className={`${
                  item.active
                    ? "text-gold"
                    : "text-border group-hover:text-muted-foreground"
                } transition-colors duration-200`}
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function LocalInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-card border border-border/50 rounded-xl p-4 mb-4 card-hover"
    >
      <h3 className="text-xs font-bold uppercase tracking-wider text-gold mb-3 font-display">
        Local Information
      </h3>
      <div className="flex items-start gap-3">
        <MinnesotaMap />
        <div>
          <a
            href="/#"
            data-ocid="sidebar.local_offices.link"
            className="text-sm font-semibold text-link block mb-2"
          >
            Local MnDOT Offices
          </a>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Select your district or use this City Listing to find your MnDOT
            district.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function SocialConnect() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="bg-card border border-border/50 rounded-xl p-4 card-hover"
    >
      <h3 className="text-xs font-bold uppercase tracking-wider text-gold mb-3 font-display">
        Connect with Us
      </h3>
      <div className="space-y-2">
        <a
          href="/#"
          data-ocid="sidebar.email.link"
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        >
          <motion.span
            whileHover={{ scale: 1.15 }}
            className="w-7 h-7 rounded-full bg-muted flex items-center justify-center group-hover:bg-gold/15"
          >
            <Mail size={13} className="text-gold" />
          </motion.span>
          Email Updates
        </a>
        <a
          href="/#"
          data-ocid="sidebar.facebook.link"
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        >
          <motion.span
            whileHover={{ scale: 1.15 }}
            className="w-7 h-7 rounded-full bg-muted flex items-center justify-center group-hover:bg-blue-500/15"
          >
            <SiFacebook size={12} className="text-[#004B73]" />
          </motion.span>
          Facebook
        </a>
        <a
          href="/#"
          data-ocid="sidebar.youtube.link"
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        >
          <motion.span
            whileHover={{ scale: 1.15 }}
            className="w-7 h-7 rounded-full bg-muted flex items-center justify-center group-hover:bg-red-500/15"
          >
            <SiYoutube size={13} className="text-red-400" />
          </motion.span>
          YouTube
        </a>
        <a
          href="/#"
          data-ocid="sidebar.twitter.link"
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        >
          <motion.span
            whileHover={{ scale: 1.15 }}
            className="w-7 h-7 rounded-full bg-muted flex items-center justify-center group-hover:bg-secondary"
          >
            <SiX size={12} className="text-[#555555]" />
          </motion.span>
          X (formerly Twitter)
        </a>
        <a
          href="/#"
          data-ocid="sidebar.social_hub.link"
          className="text-xs text-link pl-1 block mt-1 flex items-center gap-1 hover:gap-2 transition-all duration-200"
        >
          MnDOT&apos;s Social Hub
          <ArrowRight size={10} />
        </a>
      </div>
    </motion.div>
  );
}

function FeaturedBanner() {
  const images = [
    {
      src: "/assets/generated/mn-semi-truck.dim_400x200.jpg",
      alt: "Semi truck on Minnesota highway",
    },
    {
      src: "/assets/generated/mn-highway-workers.dim_400x200.jpg",
      alt: "Highway workers on road",
    },
    {
      src: "/assets/generated/mn-highway-bridge.dim_400x200.jpg",
      alt: "Minnesota highway bridge aerial",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl overflow-hidden mb-4 relative min-h-[280px] group"
      data-ocid="featured.banner.card"
    >
      {/* Hero background */}
      <img
        src="/assets/generated/mn-highway-bridge.dim_400x200.jpg"
        alt="Minnesota highway bridge"
        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-[#004B73]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#004B73]/40 to-transparent" />

      <div className="relative p-5 flex flex-col justify-between min-h-[280px]">
        {/* Top badge */}
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full bg-white/20 border border-white/40 text-white text-[10px] font-bold uppercase tracking-widest">
            Featured News
          </div>
        </div>

        {/* Bottom content */}
        <div>
          <a href="/#" data-ocid="featured.banner.link" className="block mb-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display leading-tight hover:text-white/80 transition-colors duration-200">
              Metro Highway Maintenance
              <br />
              <span className="text-[#6DB33F]">Career Fair</span>
            </h2>
          </a>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {images.map((img, i) => (
              <motion.div
                key={img.src}
                whileHover={{ scale: 1.04, y: -2 }}
                transition={{ duration: 0.2 }}
                className="h-20 rounded-lg overflow-hidden relative cursor-pointer ring-1 ring-border hover:ring-gold/50 transition-all duration-200"
                data-ocid={`featured.image.item.${i + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#004B73]/10 hover:bg-transparent transition-colors duration-200" />
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[70%]">
              Learn about and discuss upcoming highway maintenance job
              opportunities — apply on the spot.
            </p>
            <a
              href="/#"
              data-ocid="featured.learn_more.link"
              className="flex items-center gap-2 px-4 py-2 bg-[#004B73] text-white text-sm font-bold rounded-lg hover:bg-[#003A5C] transition-all duration-200 shrink-0"
            >
              Learn more
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TravelerInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="bg-card border border-border/50 rounded-xl p-5 mb-4 card-hover"
      data-ocid="traveler.info.card"
    >
      <h2 className="text-base font-bold text-foreground mb-4 font-display gold-border-left">
        Traveler information
      </h2>
      <ul className="space-y-2">
        {TRAVELER_LINKS.map((link, i) => (
          <li key={link} className="flex items-start gap-2.5">
            <span className="text-[#004B73] mt-1 shrink-0 font-bold">•</span>
            <a
              href="/#"
              data-ocid={`traveler.info.item.${i + 1}`}
              className="text-sm text-link leading-snug"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function TakeAction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="bg-card border border-border/50 rounded-xl p-5 card-hover"
      data-ocid="take.action.card"
    >
      <h2 className="text-base font-bold text-foreground mb-4 font-display gold-border-left">
        Take action
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-gold mb-3 font-display">
            Get involved
          </h3>
          <ul className="space-y-2">
            {GET_INVOLVED_LINKS.map((link, i) => (
              <li key={link} className="flex items-start gap-2.5">
                <span className="text-[#004B73] mt-1 shrink-0 font-bold">
                  •
                </span>
                <a
                  href="/#"
                  data-ocid={`take_action.get_involved.item.${i + 1}`}
                  className="text-sm text-link leading-snug"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-gold mb-3 font-display">
            Report an issue
          </h3>
          <ul className="space-y-2">
            {REPORT_ISSUE_LINKS.map((link, i) => (
              <li key={link} className="flex items-start gap-2.5">
                <span className="text-[#004B73] mt-1 shrink-0 font-bold">
                  •
                </span>
                <a
                  href="/#"
                  data-ocid={`take_action.report.item.${i + 1}`}
                  className="text-sm text-link leading-snug"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function MainContent() {
  return (
    <main className="flex-1 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="flex gap-6 items-start">
          {/* LEFT SIDEBAR */}
          <aside className="w-[220px] shrink-0 hidden lg:block">
            <SidebarMenu />
            <LocalInfo />
            <SocialConnect />
          </aside>

          {/* RIGHT MAIN */}
          <div className="flex-1 min-w-0">
            <FeaturedBanner />
            <TravelerInfo />
            <TakeAction />
          </div>
        </div>
      </div>
    </main>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#1F2328] border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* E-ZPass */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              data-ocid="footer.ezpass.card"
            >
              <div className="mb-3">
                <div className="inline-block px-3 py-1.5 rounded-lg text-white font-bold text-lg tracking-wider bg-gradient-to-r from-purple-600 to-purple-500 shadow-[0_2px_12px_rgba(139,92,246,0.4)]">
                  E·ZPass
                </div>
              </div>
              <a
                href="/#"
                data-ocid="footer.ezpass.link"
                className="text-sm text-white/80 hover:text-white underline"
              >
                Learn more about and sign up for E-ZPass
              </a>
            </motion.div>

            {/* More at MnDOT */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              data-ocid="footer.more_mndot.panel"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 font-display">
                More at MnDOT
              </h4>
              <ul className="space-y-1.5">
                {MORE_AT_MNDOT.map((link, i) => (
                  <li key={link}>
                    <a
                      href="/#"
                      data-ocid={`footer.more_mndot.item.${i + 1}`}
                      className="text-xs text-white/70 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Statewide Plans */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              data-ocid="footer.plans.panel"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 font-display">
                MnDOT Statewide Plans
              </h4>
              <ul className="space-y-1.5">
                {STATEWIDE_PLANS.map((link, i) => (
                  <li key={link}>
                    <a
                      href="/#"
                      data-ocid={`footer.plans.item.${i + 1}`}
                      className="text-xs text-white/70 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Transportation Performance */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              data-ocid="footer.performance.panel"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 font-display">
                Transportation Performance
              </h4>
              <a
                href="/#"
                data-ocid="footer.performance.link"
                className="text-xs text-white/70 hover:text-white"
              >
                Performance Measures Dashboard
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Micro-footer */}
      <div className="bg-[#16191D] border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
            <span className="text-[11px] text-white/60">
              {year} Minnesota Department of Transportation | 395 John Ireland
              Blvd, St. Paul, MN 55155-1800 | 651-296-3000 Toll-free
              800-657-3774
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px]">
              {MICRO_FOOTER_LINKS.map((link, i) => (
                <a
                  key={link}
                  href="/#"
                  data-ocid={`micro_footer.link.${i + 1}`}
                  className="text-white/50 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          {/* Caffeine attribution */}
          <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-white/30 text-center">
            &copy; {year}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Built with ♥ using caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── SearchPage ────────────────────────────────────────────────────────────

const SEARCH_SCOPES = [
  "State Aid Finance Web",
  "Minnesota Department of Transportation",
  "Minnesota Department of Transportation (exclude PDFs)",
  "Minnesota Department of Public Safety (Driver and Vehicle Services)",
  "All State of Minnesota Web Sites",
];

const MOCK_RESULTS = [
  {
    title: "News Releases - MnDOT",
    snippet:
      "Latest news releases March 2026 – road projects, safety announcements, and agency updates from MnDOT.",
    description: "MnDOT News Release",
    date: "October 09, 2024",
    url: "www.dot.state.mn.us/news/index.html",
    size: "134K",
  },
  {
    title: "Sitemap - MnDOT",
    snippet:
      "Sitemap A AASHTOWare at MnDOT – alphabetical topic listing for the entire MnDOT website.",
    description: "Find topics on the MnDOT website",
    date: "August 24, 2023",
    url: "www.dot.state.mn.us/sitemap.html",
    size: "25K",
  },
  {
    title: "Contact - MnDOT",
    snippet:
      "Information and resources Contact MnDOT – phone numbers, email, and office locations.",
    description: "MnDOT contacts for comments, questions, and media inquiries",
    date: "April 10, 2013",
    url: "www.dot.state.mn.us/information/talk.html",
    size: "19K",
  },
  {
    title: "Doing Business With Us - MnDOT",
    snippet:
      "Resources Commuters and area resident partners – contractor resources and procurement information.",
    description: "Business resources for MnDOT contractors and vendors",
    date: "April 23, 2013",
    url: "www.dot.state.mn.us/business.html",
    size: "14K",
  },
  {
    title: "Join the MnDOT Team - Careers - MnDOT",
    snippet:
      "Metro highway maintenance career fair – job postings, benefits, and application portal.",
    description:
      "MnDOT job opportunities and resources for prospective employees",
    date: "",
    url: "www.dot.state.mn.us/careers/index.html",
    size: "15K",
  },
  {
    title:
      "Disclaimer and Legal Notices - Minnesota Department of Transportation",
    snippet:
      "Information and resources Disclaimer, legal notices, and privacy policy for MnDOT.gov.",
    description:
      "The Minnesota Department of Transportation provides this website as a public service",
    date: "January 29, 2019",
    url: "www.dot.state.mn.us/information/disclaimer.html",
    size: "22K",
  },
  {
    title: "Employee Resources - MnDOT",
    snippet:
      "IT Resources Password Reset MnDOT Training – tools and links for current MnDOT staff.",
    description: "Resources for MnDOT employees including IT, HR, and training",
    date: "April 23, 2013",
    url: "www.dot.state.mn.us/employee-resources.html",
    size: "11K",
  },
  {
    title: "manifest.json",
    snippet:
      '{"name": "MnDOT.gov", "icons": [...], "display": "standalone", "theme_color": "#003865"}',
    description: "Progressive Web App manifest for MnDOT.gov",
    date: "May 08, 2023",
    url: "www.dot.state.mn.us/manifest.json",
    size: "1K",
  },
  {
    title: "safari-pinned-tab.svg",
    snippet:
      "SVG pinned tab icon for MnDOT.gov – Safari browser bookmark icon.",
    description: "",
    date: "May 08, 2023",
    url: "www.dot.state.mn.us/safari-pinned-tab.svg",
    size: "3K",
  },
  {
    title: "Minnesota Department of Transportation - MnDOT",
    snippet:
      "Topics A-Z 511mn.org Doing Business Jobs Safety – official homepage of Minnesota DOT.",
    description:
      "Minnesota Department of Transportation road and travel information, projects, and programs",
    date: "July 06, 2022",
    url: "www.dot.state.mn.us/",
    size: "22K",
  },
];

function SearchPage({ onClose }: { onClose: () => void }) {
  const [selectedScope, setSelectedScope] = useState(1);
  const [searchQuery, setSearchQuery] = useState("url:dot.state.mn.us");
  const [resultsPerPage, setResultsPerPage] = useState("10");
  const [sortBy, setSortBy] = useState<"relevance" | "date">("relevance");

  return (
    <motion.div
      key="search"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex-1 flex flex-col min-h-screen bg-background"
    >
      {/* Back button */}
      <div className="max-w-[1200px] mx-auto w-full px-4 pt-6 pb-2">
        <button
          type="button"
          onClick={onClose}
          data-ocid="search.close_button"
          className="flex items-center gap-2 text-[#004B73] hover:text-[#003A5C] transition-colors font-medium text-sm mb-6"
        >
          <ChevronLeft size={16} />
          Back to MnDOT
        </button>

        <div className="flex gap-8">
          {/* Main search column */}
          <div className="flex-1 min-w-0">
            {/* Search form card */}
            <div className="rounded-xl border border-border/50 p-6 mb-6">
              {/* Sort by header */}
              <div className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
                <span>Sort by:</span>
                <button
                  type="button"
                  onClick={() => setSortBy("relevance")}
                  className={
                    sortBy === "relevance"
                      ? "font-bold text-[#004B73]"
                      : "text-muted-foreground hover:underline"
                  }
                >
                  Relevance
                </button>
                <span className="text-muted-foreground mx-1">-</span>
                <button
                  type="button"
                  onClick={() => setSortBy("date")}
                  className={
                    sortBy === "date"
                      ? "font-bold text-[#004B73]"
                      : "text-muted-foreground hover:underline"
                  }
                >
                  Date
                </button>
              </div>

              {/* Scope radio buttons */}
              <div className="space-y-2 mb-5">
                {SEARCH_SCOPES.map((scope, i) => (
                  <label
                    key={scope}
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="search-scope"
                      checked={selectedScope === i}
                      onChange={() => setSelectedScope(i)}
                      className="accent-gold w-3.5 h-3.5"
                      data-ocid={`search.radio.${i + 1}` as any}
                    />
                    <span
                      className={`text-sm transition-colors ${selectedScope === i ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"}`}
                    >
                      {scope}
                    </span>
                  </label>
                ))}
              </div>

              {/* Search input row */}
              <div className="flex flex-wrap items-center gap-3">
                <label
                  htmlFor="search-query-input"
                  className="text-sm text-[#444444] font-medium"
                >
                  Search:
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  id="search-query-input"
                  data-ocid="search.input"
                  className="flex-1 min-w-[180px] bg-white border border-[#D6D6D6] rounded px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#004B73] transition-colors"
                />
                <select
                  value={resultsPerPage}
                  onChange={(e) => setResultsPerPage(e.target.value)}
                  data-ocid="search.select"
                  className="bg-white border border-[#D6D6D6] rounded px-2 py-1.5 text-sm text-[#444444] focus:outline-none focus:border-[#004B73] transition-colors"
                >
                  <option value="10">10 Results per page</option>
                  <option value="25">25 Results per page</option>
                  <option value="50">50 Results per page</option>
                </select>
                <button
                  type="button"
                  data-ocid="search.primary_button"
                  className="px-5 py-1.5 rounded text-sm font-semibold text-navy transition-all duration-200"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Results header */}
            <div className="text-muted-foreground text-sm mb-4">
              Results{" "}
              <span className="text-foreground font-semibold">1 - 10</span> of{" "}
              <span className="text-foreground font-semibold">103</span>
            </div>

            {/* Results list */}
            <div className="space-y-5">
              {MOCK_RESULTS.map((result, i) => (
                <div
                  key={result.url}
                  data-ocid={`search.item.${i + 1}` as any}
                  className="group border-b border-[#D6D6D6] pb-5"
                >
                  <a
                    href="/#"
                    className="text-[#004B73] hover:text-[#0B63B6] font-medium text-base hover:underline transition-colors"
                  >
                    {result.title}
                  </a>
                  {result.snippet && (
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                      {result.snippet}
                    </p>
                  )}
                  {result.description && (
                    <p className="text-muted-foreground text-sm mt-0.5">
                      <span className="text-muted-foreground">
                        Description:
                      </span>{" "}
                      {result.description}
                    </p>
                  )}
                  {result.date && (
                    <p className="text-muted-foreground text-xs mt-0.5">
                      <span>Date:</span> {result.date}
                    </p>
                  )}
                  <p className="text-[#2F7D32] text-xs mt-1">
                    {result.url}
                    {result.size && (
                      <span className="text-muted-foreground/60 ml-2">
                        • {result.size}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center gap-1.5 mt-8 text-sm">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
                <button
                  key={page}
                  type="button"
                  data-ocid={
                    `search.pagination_${page === 1 ? "prev" : "next"}` as any
                  }
                  className={`w-7 h-7 rounded flex items-center justify-center transition-colors ${
                    page === 1
                      ? "font-bold text-white bg-[#004B73]"
                      : "text-[#004B73] hover:text-[#0B63B6] hover:bg-[#EAF3FA]"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                className="text-[#004B73] hover:text-[#0B63B6] hover:underline ml-1 transition-colors"
              >
                next
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-64 shrink-0">
            <div className="rounded-xl border border-border/50 p-5">
              <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                Search Tips
              </h3>
              <ul className="space-y-2 text-muted-foreground text-xs leading-relaxed">
                <li>
                  • Use quotes for exact phrases:{" "}
                  <span className="text-white/80">"bridge construction"</span>
                </li>
                <li>
                  • Exclude words with minus:{" "}
                  <span className="text-white/80">roads -winter</span>
                </li>
                <li>
                  • Search a specific site with{" "}
                  <span className="text-white/80">site:</span>
                </li>
                <li>
                  • Use <span className="text-white/80">OR</span> to broaden
                  results
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-border/50">
                <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                  Popular Searches
                </h3>
                <ul className="space-y-1.5">
                  {[
                    "511 traffic",
                    "road conditions",
                    "permits",
                    "bridge projects",
                    "construction maps",
                  ].map((term) => (
                    <li key={term}>
                      <a
                        href="/#"
                        className="text-[#004B73] hover:text-[#0B63B6] text-xs hover:underline transition-colors flex items-center gap-1"
                      >
                        <Search size={10} />
                        {term}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [showCVOPage, setShowCVOPage] = useState(false);
  const [showTransitPage, setShowTransitPage] = useState(false);
  const [showCarsPage, setShowCarsPage] = useState(false);
  const [showRailPage, setShowRailPage] = useState(false);
  const [showAeronauticsPage, setShowAeronauticsPage] = useState(false);
  const [showWaterwaysPage, setShowWaterwaysPage] = useState(false);
  const [showBikesPage, setShowBikesPage] = useState(false);
  const [showPedestriansPage, setShowPedestriansPage] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <UtilityBar onSearchClick={() => setShowSearchPage(true)} />
      <Header scrolled={scrolled} />
      <IconNavRow
        onTruckClick={() => setShowCVOPage(true)}
        onTransitClick={() => setShowTransitPage(true)}
        onCarsClick={() => setShowCarsPage(true)}
        onRailClick={() => setShowRailPage(true)}
        onAeronauticsClick={() => setShowAeronauticsPage(true)}
        onWaterwaysClick={() => setShowWaterwaysPage(true)}
        onBikesClick={() => setShowBikesPage(true)}
        onPedestriansClick={() => setShowPedestriansPage(true)}
      />
      <AnimatePresence mode="wait">
        {showSearchPage ? (
          <SearchPage key="search" onClose={() => setShowSearchPage(false)} />
        ) : showCVOPage ? (
          <CVOPage key="cvo" onClose={() => setShowCVOPage(false)} />
        ) : showTransitPage ? (
          <TransitPage
            key="transit"
            onClose={() => setShowTransitPage(false)}
          />
        ) : showCarsPage ? (
          <CarsPage key="cars" onClose={() => setShowCarsPage(false)} />
        ) : showRailPage ? (
          <RailPage key="rail" onClose={() => setShowRailPage(false)} />
        ) : showAeronauticsPage ? (
          <AeronauticsPage
            key="aero"
            onClose={() => setShowAeronauticsPage(false)}
          />
        ) : showWaterwaysPage ? (
          <WaterwaysPage
            key="waterways"
            onClose={() => setShowWaterwaysPage(false)}
          />
        ) : showBikesPage ? (
          <BikesPage key="bikes" onClose={() => setShowBikesPage(false)} />
        ) : showPedestriansPage ? (
          <PedestriansPage
            key="pedestrians"
            onClose={() => setShowPedestriansPage(false)}
          />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col"
          >
            <MainContent />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
