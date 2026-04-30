const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();
pptx.author = "Shandong Boerjia Petrochemical Technology Co., Ltd.";
pptx.company = "BOERJIA";
pptx.title = "BOERJIA Lubricants - Company Introduction";
pptx.subject = "Professional Lubricant Manufacturer";

// Color palette - "Ocean Industrial"
const COLORS = {
  darkNavy: "0D1B2A",
  deepBlue: "1B2838",
  primary: "0066CC",
  secondary: "92BDDD",
  accent: "00A3E0",
  lightBg: "F0F7FC",
  white: "FFFFFF",
  darkText: "1A1A2E",
  gray: "666666",
  lightGray: "CCCCCC",
  orange: "FF6B35",
};

// ===== SLIDE 1: Title Slide =====
let slide1 = pptx.addSlide();
slide1.background = { color: COLORS.darkNavy };

// Decorative shapes
slide1.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 0.08, fill: { color: COLORS.secondary },
});
slide1.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: "92%", w: "100%", h: 0.08, fill: { color: COLORS.secondary },
});

// Left accent bar
slide1.addShape(pptx.shapes.RECTANGLE, {
  x: 0.6, y: 1.8, w: 0.06, h: 2.5, fill: { color: COLORS.accent },
});

slide1.addText("BOERJIA", {
  x: 1.0, y: 1.8, w: 7, h: 1.2,
  fontSize: 48, fontFace: "Arial Black", color: COLORS.white,
  bold: true, letterSpacing: 8,
});

slide1.addText("LUBRICANTS", {
  x: 1.0, y: 2.9, w: 7, h: 0.6,
  fontSize: 22, fontFace: "Arial", color: COLORS.secondary,
  letterSpacing: 12,
});

slide1.addShape(pptx.shapes.RECTANGLE, {
  x: 1.0, y: 3.7, w: 3, h: 0.03, fill: { color: COLORS.accent },
});

slide1.addText("Professional Lubricant Manufacturer Since 2007", {
  x: 1.0, y: 3.9, w: 7, h: 0.5,
  fontSize: 14, fontFace: "Arial", color: COLORS.lightGray,
});

slide1.addText("OEM / ODM  |  Worldwide Shipping  |  Flexible MOQ", {
  x: 1.0, y: 4.5, w: 7, h: 0.4,
  fontSize: 11, fontFace: "Arial", color: COLORS.secondary,
});

// Bottom contact
slide1.addText("WhatsApp: +852 6193 7889  |  www.boerjia-oil.com  |  bailuguang@gmail.com", {
  x: 0.6, y: 5.2, w: 8.8, h: 0.35,
  fontSize: 9, fontFace: "Arial", color: COLORS.gray, align: "center",
});

// ===== SLIDE 2: Company Overview =====
let slide2 = pptx.addSlide();
slide2.background = { color: COLORS.white };

// Top bar
slide2.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 0.06, fill: { color: COLORS.primary },
});

slide2.addText("Company Overview", {
  x: 0.6, y: 0.3, w: 8, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: COLORS.darkNavy, bold: true,
});

slide2.addShape(pptx.shapes.RECTANGLE, {
  x: 0.6, y: 1.05, w: 1.5, h: 0.04, fill: { color: COLORS.accent },
});

slide2.addText(
  "Shandong Boerjia Petrochemical Technology Co., Ltd. is a professional lubricant " +
  "manufacturer established in 2007. We specialize in R&D, production, and distribution of " +
  "high-quality lubricating products for automotive, industrial, and marine applications.",
  {
    x: 0.6, y: 1.3, w: 8.8, h: 0.9,
    fontSize: 12, fontFace: "Arial", color: COLORS.gray, lineSpacingMultiple: 1.5,
  }
);

// Key stats in boxes
const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "50,000+", label: "Tons/Year Capacity" },
  { value: "50+", label: "Countries Served" },
  { value: "200+", label: "Product SKUs" },
];

stats.forEach((s, i) => {
  const xPos = 0.6 + i * 2.35;
  slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos, y: 2.5, w: 2.1, h: 1.4,
    fill: { color: i % 2 === 0 ? COLORS.lightBg : COLORS.white },
    line: { color: COLORS.secondary, width: 1 },
    rectRadius: 0.1,
  });
  slide2.addText(s.value, {
    x: xPos, y: 2.6, w: 2.1, h: 0.7,
    fontSize: 30, fontFace: "Arial Black", color: COLORS.primary, align: "center",
  });
  slide2.addText(s.label, {
    x: xPos, y: 3.3, w: 2.1, h: 0.4,
    fontSize: 10, fontFace: "Arial", color: COLORS.gray, align: "center",
  });
});

// Certifications
slide2.addText("Certifications & Standards", {
  x: 0.6, y: 4.2, w: 4, h: 0.4,
  fontSize: 14, fontFace: "Arial Black", color: COLORS.darkNavy, bold: true,
});

const certs = ["ISO 9001:2015", "ISO 14001", "API Certified", "CE Approved"];
certs.forEach((c, i) => {
  const cx = 0.6 + i * 2.35;
  slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: cx, y: 4.7, w: 2.1, h: 0.45,
    fill: { color: COLORS.primary },
    rectRadius: 0.05,
  });
  slide2.addText(c, {
    x: cx, y: 4.7, w: 2.1, h: 0.45,
    fontSize: 11, fontFace: "Arial", color: COLORS.white, align: "center", bold: true,
  });
});

// ===== SLIDE 3: Why Choose Us =====
let slide3 = pptx.addSlide();
slide3.background = { color: COLORS.white };

slide3.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 0.06, fill: { color: COLORS.primary },
});

slide3.addText("Why Choose BOERJIA", {
  x: 0.6, y: 0.3, w: 8, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: COLORS.darkNavy, bold: true,
});
slide3.addShape(pptx.shapes.RECTANGLE, {
  x: 0.6, y: 1.05, w: 1.5, h: 0.04, fill: { color: COLORS.accent },
});

const reasons = [
  {
    icon: "\u2605", title: "Premium Quality",
    desc: "Strict QC system with ISO certification. Every batch tested before shipment.",
  },
  {
    icon: "\u2699", title: "OEM / ODM Available",
    desc: "Custom formulations, private label packaging. Your brand, our expertise.",
  },
  {
    icon: "\u2708", title: "Global Shipping",
    desc: "15-25 days delivery. FOB/CIF/CFR terms. Worldwide logistics network.",
  },
  {
    icon: "\u260E", title: "Fast Response",
    desc: "24-hour WhatsApp response. Professional multilingual sales team.",
  },
  {
    icon: "\u26A1", title: "Flexible MOQ",
    desc: "Low MOQ for trial orders. Support growing business partnerships.",
  },
  {
    icon: "\u2713", title: "Complete Product Range",
    desc: "Engine oil, hydraulic, gear oil, grease, brake fluid, marine & more.",
  },
];

reasons.forEach((r, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  const xPos = 0.5 + col * 3.2;
  const yPos = 1.4 + row * 2.0;

  // Card background
  slide3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos, y: yPos, w: 2.9, h: 1.7,
    fill: { color: COLORS.lightBg },
    line: { color: COLORS.secondary, width: 0.5 },
    rectRadius: 0.1,
  });

  // Icon circle
  slide3.addShape(pptx.shapes.OVAL, {
    x: xPos + 0.15, y: yPos + 0.15, w: 0.5, h: 0.5,
    fill: { color: COLORS.primary },
  });
  slide3.addText(r.icon, {
    x: xPos + 0.15, y: yPos + 0.15, w: 0.5, h: 0.5,
    fontSize: 16, color: COLORS.white, align: "center", valign: "middle",
  });

  slide3.addText(r.title, {
    x: xPos + 0.8, y: yPos + 0.15, w: 1.9, h: 0.4,
    fontSize: 13, fontFace: "Arial Black", color: COLORS.darkNavy, bold: true,
  });

  slide3.addText(r.desc, {
    x: xPos + 0.15, y: yPos + 0.8, w: 2.6, h: 0.8,
    fontSize: 10, fontFace: "Arial", color: COLORS.gray, lineSpacingMultiple: 1.4,
  });
});

// ===== SLIDE 4: Product Categories =====
let slide4 = pptx.addSlide();
slide4.background = { color: COLORS.white };

slide4.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 0.06, fill: { color: COLORS.primary },
});

slide4.addText("Product Categories", {
  x: 0.6, y: 0.3, w: 8, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: COLORS.darkNavy, bold: true,
});
slide4.addShape(pptx.shapes.RECTANGLE, {
  x: 0.6, y: 1.05, w: 1.5, h: 0.04, fill: { color: COLORS.accent },
});

const categories = [
  { name: "Engine Oil", color: COLORS.primary, items: "SP 5W-40, GF-6 5W-30, S6 5W-30" },
  { name: "Diesel Engine Oil", color: "333333", items: "CJ-4/SN+ 10W-40, CF-4 20W-50" },
  { name: "Motorcycle Oil", color: COLORS.orange, items: "5000 4T, PAO 4T SP 5W-40" },
  { name: "Hydraulic Oil", color: "003366", items: "L-HM 46#, L-HM 68#, L-HV 46#" },
  { name: "Gear Oil", color: "555555", items: "EP 150, EP 220" },
  { name: "Grease", color: "B8860B", items: "Lithium, MoS2, Polyurea, Bentonite, Al Complex" },
  { name: "Brake Fluid", color: "CC0000", items: "DOT 4, DOT 3" },
  { name: "Transmission", color: COLORS.accent, items: "ATF-6HP" },
  { name: "Marine Oil", color: "003366", items: "Marine Lubricating Oil" },
  { name: "Fuel Oil", color: "1A1A1A", items: "Industrial Fuel Oil No.4" },
];

categories.forEach((cat, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const xPos = 0.5 + col * 4.8;
  const yPos = 1.3 + row * 0.85;

  // Color bar
  slide4.addShape(pptx.shapes.RECTANGLE, {
    x: xPos, y: yPos, w: 0.08, h: 0.65, fill: { color: cat.color },
  });

  slide4.addText(cat.name, {
    x: xPos + 0.2, y: yPos, w: 4.2, h: 0.3,
    fontSize: 12, fontFace: "Arial Black", color: COLORS.darkNavy, bold: true,
  });

  slide4.addText(cat.items, {
    x: xPos + 0.2, y: yPos + 0.32, w: 4.2, h: 0.3,
    fontSize: 10, fontFace: "Arial", color: COLORS.gray,
  });
});

// ===== SLIDE 5: Featured Products =====
let slide5 = pptx.addSlide();
slide5.background = { color: COLORS.white };

slide5.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 0.06, fill: { color: COLORS.primary },
});

slide5.addText("Featured Products", {
  x: 0.6, y: 0.3, w: 8, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: COLORS.darkNavy, bold: true,
});
slide5.addShape(pptx.shapes.RECTANGLE, {
  x: 0.6, y: 1.05, w: 1.5, h: 0.04, fill: { color: COLORS.accent },
});

const products = [
  {
    name: "SP 5W-40 Full Synthetic",
    specs: "API SP | PAO+Ester | 1L/4L/200L",
    app: "Passenger cars, SUV, Luxury vehicles",
  },
  {
    name: "CJ-4/SN+ 10W-40 Diesel",
    specs: "API CJ-4 | Synthetic Blend | 4L/18L/200L",
    app: "Heavy-duty trucks, Commercial vehicles",
  },
  {
    name: "L-HM Hydraulic Oil 46#",
    specs: "ISO VG 46 | Anti-wear | 18L/200L",
    app: "Industrial hydraulic systems",
  },
  {
    name: "DOT 4 Brake Fluid",
    specs: "FMVSS 116 | BP >=230C | 0.5L/1L/4L",
    app: "Passenger & commercial vehicles",
  },
  {
    name: "EP 150 Gear Oil",
    specs: "ISO VG 150 | Extreme Pressure | 18L/200L",
    app: "Industrial gearboxes, Bearings",
  },
  {
    name: "Lithium Base Grease",
    specs: "NLGI 2/3 | DP >=180C | 1kg/15kg/180kg",
    app: "Bearings, Chassis, Universal joints",
  },
];

products.forEach((p, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  const xPos = 0.4 + col * 3.2;
  const yPos = 1.3 + row * 2.2;

  // Card
  slide5.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos, y: yPos, w: 2.95, h: 1.9,
    fill: { color: COLORS.lightBg },
    line: { color: COLORS.secondary, width: 0.5 },
    rectRadius: 0.1,
  });

  // Product name area
  slide5.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos, y: yPos, w: 2.95, h: 0.5,
    fill: { color: COLORS.primary },
    rectRadius: 0.1,
  });
  // Cover bottom corners
  slide5.addShape(pptx.shapes.RECTANGLE, {
    x: xPos, y: yPos + 0.35, w: 2.95, h: 0.15, fill: { color: COLORS.primary },
  });

  slide5.addText(p.name, {
    x: xPos, y: yPos + 0.02, w: 2.95, h: 0.45,
    fontSize: 11, fontFace: "Arial Black", color: COLORS.white, align: "center", bold: true,
  });

  slide5.addText(p.specs, {
    x: xPos + 0.15, y: yPos + 0.65, w: 2.65, h: 0.5,
    fontSize: 9.5, fontFace: "Arial", color: COLORS.darkNavy, lineSpacingMultiple: 1.3,
  });

  slide5.addText("Application:", {
    x: xPos + 0.15, y: yPos + 1.25, w: 2.65, h: 0.25,
    fontSize: 9, fontFace: "Arial", color: COLORS.primary, bold: true,
  });

  slide5.addText(p.app, {
    x: xPos + 0.15, y: yPos + 1.5, w: 2.65, h: 0.35,
    fontSize: 9, fontFace: "Arial", color: COLORS.gray,
  });
});

// ===== SLIDE 6: OEM/ODM Service =====
let slide6 = pptx.addSlide();
slide6.background = { color: COLORS.darkNavy };

slide6.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 0.06, fill: { color: COLORS.secondary },
});

slide6.addText("OEM / ODM Service", {
  x: 0.6, y: 0.3, w: 8, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: COLORS.white, bold: true,
});
slide6.addShape(pptx.shapes.RECTANGLE, {
  x: 0.6, y: 1.05, w: 1.5, h: 0.04, fill: { color: COLORS.accent },
});

slide6.addText(
  "We provide complete OEM and ODM solutions for lubricant brands worldwide. " +
  "From formula development to packaging design, we deliver turnkey solutions.",
  {
    x: 0.6, y: 1.3, w: 8.8, h: 0.7,
    fontSize: 12, fontFace: "Arial", color: COLORS.lightGray, lineSpacingMultiple: 1.5,
  }
);

const oemSteps = [
  { step: "01", title: "Formula Development", desc: "Custom formulations per market requirements and API standards" },
  { step: "02", title: "Packaging Design", desc: "Private label design, bottle/barrel/drum packaging" },
  { step: "03", title: "Production & QC", desc: "Full production with strict quality control and testing" },
  { step: "04", title: "Global Delivery", desc: "FOB/CIF/CFR shipping to worldwide destinations" },
];

oemSteps.forEach((s, i) => {
  const yPos = 2.3 + i * 0.8;

  // Step number
  slide6.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: yPos, w: 0.6, h: 0.6,
    fill: { color: COLORS.accent },
    rectRadius: 0.08,
  });
  slide6.addText(s.step, {
    x: 0.6, y: yPos, w: 0.6, h: 0.6,
    fontSize: 18, fontFace: "Arial Black", color: COLORS.white, align: "center", valign: "middle",
  });

  slide6.addText(s.title, {
    x: 1.4, y: yPos, w: 3, h: 0.3,
    fontSize: 13, fontFace: "Arial Black", color: COLORS.white, bold: true,
  });

  slide6.addText(s.desc, {
    x: 1.4, y: yPos + 0.3, w: 7, h: 0.3,
    fontSize: 10, fontFace: "Arial", color: COLORS.secondary,
  });
});

// ===== SLIDE 7: Contact =====
let slide7 = pptx.addSlide();
slide7.background = { color: COLORS.darkNavy };

slide7.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 0.06, fill: { color: COLORS.secondary },
});
slide7.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: "92%", w: "100%", h: 0.08, fill: { color: COLORS.secondary },
});

slide7.addText("Contact Us", {
  x: 0.6, y: 0.5, w: 8, h: 0.8,
  fontSize: 32, fontFace: "Arial Black", color: COLORS.white, bold: true,
});

slide7.addShape(pptx.shapes.RECTANGLE, {
  x: 0.6, y: 1.35, w: 1.5, h: 0.04, fill: { color: COLORS.accent },
});

const contacts = [
  { label: "Company", value: "Shandong Boerjia Petrochemical Technology Co., Ltd." },
  { label: "WhatsApp", value: "+852 6193 7889" },
  { label: "WeChat", value: "+86 13731735051" },
  { label: "Email", value: "bailuguang@gmail.com" },
  { label: "Website", value: "www.boerjia-oil.com" },
  { label: "Address", value: "Shandong Province, China" },
];

contacts.forEach((c, i) => {
  const yPos = 1.8 + i * 0.7;

  slide7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 1.2, y: yPos, w: 7.6, h: 0.55,
    fill: { color: "162236" },
    line: { color: "2A3A4A", width: 0.5 },
    rectRadius: 0.05,
  });

  slide7.addText(c.label, {
    x: 1.4, y: yPos, w: 2, h: 0.55,
    fontSize: 11, fontFace: "Arial", color: COLORS.secondary, valign: "middle", bold: true,
  });

  slide7.addText(c.value, {
    x: 3.4, y: yPos, w: 5.2, h: 0.55,
    fontSize: 11, fontFace: "Arial", color: COLORS.white, valign: "middle",
  });
});

slide7.addText("Let's Build a Long-Term Partnership Together", {
  x: 0.6, y: 5.0, w: 8.8, h: 0.5,
  fontSize: 16, fontFace: "Arial Black", color: COLORS.accent, align: "center", italic: true,
});

// Generate
const path = require("path");
const outputPath = path.join(__dirname, "BOERJIA_Company_Introduction.pptx");
pptx.writeFile({ fileName: outputPath }).then(() => {
  console.log("PPT generated: " + outputPath);
}).catch(err => {
  console.error("Error:", err);
});
