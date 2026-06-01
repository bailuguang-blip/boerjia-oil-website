const fs = require('fs');
const path = require('path');

// Read the current index.html
const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 50 products based on worksheet and images
const allProducts = [
  // Gasoline (8)
  { id: 'gasoline-sm-5w30', name: 'Gasoline Engine Oil API SM 5W-30', category: 'gasoline', img: 'images/products/下载 (33).png', specs: [['Type','Gasoline Engine Oil'],['API Grade','SM'],['SAE Viscosity','5W-30'],['Base','Synthetic Blend'],['Packing','1L, 4L']] },
  { id: 'gasoline-sm-5w40', name: 'Gasoline Engine Oil API SM 5W-40', category: 'gasoline', img: 'images/products/下载 (33).png', specs: [['Type','Gasoline Engine Oil'],['API Grade','SM'],['SAE Viscosity','5W-40'],['Base','Full Synthetic'],['Packing','4L']] },
  { id: 'gasoline-sn-0w20', name: 'Gasoline Engine Oil API SN 0W-20', category: 'gasoline', img: 'images/products/下载 (34).png', specs: [['Type','Gasoline Engine Oil'],['API Grade','SN'],['SAE Viscosity','0W-20'],['Base','Full Synthetic'],['Packing','1L']] },
  { id: 'gasoline-sn-5w30', name: 'Gasoline Engine Oil API SN 5W-30', category: 'gasoline', img: 'images/products/下载 (34).png', specs: [['Type','Gasoline Engine Oil'],['API Grade','SN'],['SAE Viscosity','5W-30'],['Base','Full Synthetic'],['Packing','4L']] },
  { id: 'gasoline-sp-5w30', name: 'Gasoline Engine Oil API SP 5W-30', category: 'gasoline', img: 'images/products/下载 (36).png', specs: [['Type','Gasoline Engine Oil'],['API Grade','SP'],['SAE Viscosity','5W-30'],['Base','Full Synthetic'],['Packing','1L, 4L, 18L'],['Certification','ILSAC GF-6A']] },
  { id: 'gasoline-sp-0w20', name: 'Gasoline Engine Oil API SP 0W-20', category: 'gasoline', img: 'images/products/下载 (36).png', specs: [['Type','Gasoline Engine Oil'],['API Grade','SP'],['SAE Viscosity','0W-20'],['Base','Full Synthetic'],['Packing','1L']] },
  { id: 'gasoline-sn-plus-0w20', name: 'Gasoline Engine Oil API SN PLUS 0W-20', category: 'gasoline', img: 'images/products/下载 (35).png', specs: [['Type','Gasoline Engine Oil'],['API Grade','SN PLUS'],['SAE Viscosity','0W-20'],['Base','Full Synthetic'],['Packing','1L, 4L'],['Features','LSPI Protection']] },
  { id: 'gasoline-sn-plus-5w30', name: 'Gasoline Engine Oil API SN PLUS 5W-30', category: 'gasoline', img: 'images/products/下载 (37).png', specs: [['Type','Gasoline Engine Oil'],['API Grade','SN PLUS'],['SAE Viscosity','5W-30'],['Base','Full Synthetic'],['Packing','4L'],['Features','LSPI Protection']] },
  
  // Diesel (13)
  { id: 'diesel-cf-15w40', name: 'Diesel Engine Oil API CF 15W-40', category: 'diesel', img: 'images/products/下载.png', specs: [['Type','Diesel Engine Oil'],['API Grade','CF'],['SAE Viscosity','15W-40'],['Packing','4L'],['Features','Heavy Duty Performance']] },
  { id: 'diesel-cf-20w50', name: 'Diesel Engine Oil API CF 20W-50', category: 'diesel', img: 'images/products/下载.png', specs: [['Type','Diesel Engine Oil'],['API Grade','CF'],['SAE Viscosity','20W-50'],['Packing','18L'],['Features','Extended Engine Life']] },
  { id: 'diesel-cf4-10w30', name: 'Diesel Engine Oil API CF-4 10W-30', category: 'diesel', img: 'images/products/下载 (2).png', specs: [['Type','Diesel Engine Oil'],['API Grade','CF-4'],['SAE Viscosity','10W-30'],['Packing','4L'],['Features','Heavy Duty Performance']] },
  { id: 'diesel-cf4-15w40', name: 'Diesel Engine Oil API CF-4 15W-40', category: 'diesel', img: 'images/products/下载 (2).png', specs: [['Type','Diesel Engine Oil'],['API Grade','CF-4'],['SAE Viscosity','15W-40'],['Packing','18L'],['Features','Premium Protection']] },
  { id: 'diesel-ch4-15w40', name: 'Diesel Engine Oil API CH-4 15W-40', category: 'diesel', img: 'images/products/下载 (3).png', specs: [['Type','Diesel Engine Oil'],['API Grade','CH-4'],['SAE Viscosity','15W-40'],['Packing','4L'],['Features','Maximum Protection']] },
  { id: 'diesel-ch4-20w50', name: 'Diesel Engine Oil API CH-4 20W-50', category: 'diesel', img: 'images/products/下载 (3).png', specs: [['Type','Diesel Engine Oil'],['API Grade','CH-4'],['SAE Viscosity','20W-50'],['Packing','18L'],['Features','Long Life Performance']] },
  { id: 'diesel-ci4-10w40', name: 'Diesel Engine Oil API CI-4 10W-40', category: 'diesel', img: 'images/products/下载 (4).png', specs: [['Type','Diesel Engine Oil'],['API Grade','CI-4'],['SAE Viscosity','10W-40'],['Base','Fully Synthetic'],['Packing','4L']] },
  { id: 'diesel-ci4-15w40', name: 'Diesel Engine Oil API CI-4 15W-40', category: 'diesel', img: 'images/products/下载 (4).png', specs: [['Type','Diesel Engine Oil'],['API Grade','CI-4'],['SAE Viscosity','15W-40'],['Packing','18L'],['Features','High Performance Protection']] },
  { id: 'diesel-ci4-plus', name: 'Diesel Engine Oil API CI-4 PLUS', category: 'diesel', img: 'images/products/微信图片_20260524125528_61_328.png', specs: [['Type','Diesel Engine Oil'],['API Grade','CI-4 PLUS'],['Packing','1L, 4L'],['Features','Performance & Protection, Heavy Duty']] },
  { id: 'diesel-fa4-10w30', name: 'Diesel Engine Oil API FA-4 10W-30', category: 'diesel', img: 'images/products/下载 (7).png', specs: [['Type','Diesel Engine Oil'],['API Grade','FA-4'],['SAE Viscosity','10W-30'],['Base','Synthetic Technology'],['Packing','4L, 18L'],['Features','Fuel Economy, Low Emission']] },
  { id: 'diesel-fa4-15w40', name: 'Diesel Engine Oil API FA-4 15W-40 Fully Synthetic', category: 'diesel', img: 'images/products/微信图片_20260524125449_58_328.png', specs: [['Type','Diesel Engine Oil'],['API Grade','FA-4'],['SAE Viscosity','15W-40'],['Base','Fully Synthetic'],['Packing','1L, 4L']] },
  { id: 'diesel-ck4-10w30', name: 'Diesel Engine Oil API CK-4 10W-30', category: 'diesel', img: 'images/products/下载 (5).png', specs: [['Type','Diesel Engine Oil'],['API Grade','CK-4'],['SAE Viscosity','10W-30'],['Base','Synthetic'],['Packing','4L, 18L'],['Features','High Performance']] },
  { id: 'diesel-ck4-15w40', name: 'Diesel Engine Oil API CK-4 15W-40', category: 'diesel', img: 'images/products/下载 (6).png', specs: [['Type','Diesel Engine Oil'],['API Grade','CK-4'],['SAE Viscosity','15W-40'],['Packing','4L, 18L'],['Features','Premium Protection']] },
  
  // Gear (4)
  { id: 'gear-gl4-75w90', name: 'Gear Oil API GL-4 75W-90', category: 'gear', img: 'images/products/下载 (8).png', specs: [['Type','Gear Oil'],['API Grade','GL-4'],['SAE Viscosity','75W-90'],['Packing','1L, 4L, 18L'],['Features','High Performance, Extreme Pressure']] },
  { id: 'gear-gl5-85w140', name: 'Gear Oil API GL-5 85W-140', category: 'gear', img: 'images/products/下载 (9).png', specs: [['Type','Gear Oil'],['API Grade','GL-5'],['SAE Viscosity','85W-140'],['Packing','4L, 18L, 200L'],['Features','Heavy Duty, Extreme Pressure Protection']] },
  { id: 'gear-gl5-mt1', name: 'Gear Oil API GL-5+MT-1 75W-90', category: 'gear', img: 'images/products/下载 (10).png', specs: [['Type','Gear Oil'],['API Grade','GL-5+MT-1'],['SAE Viscosity','75W-90'],['Packing','4L, 18L'],['Features','Heavy Duty, Extreme Pressure']] },
  { id: 'gear-2105d', name: 'Gear Oil 2105D 85W-140', category: 'gear', img: 'images/products/下载 (11).png', specs: [['Type','Gear Oil'],['Model','2105D'],['SAE Viscosity','85W-140'],['Packing','18L, 200L'],['Features','Industrial & Commercial Use']] },
  
  // Hydraulic (6)
  { id: 'hydraulic-hm32', name: 'Anti-wear Hydraulic Oil HM32', category: 'hydraulic', img: 'images/products/下载 (12).png', specs: [['Type','Anti-wear Hydraulic Oil'],['Grade','HM32 / ISO VG 32'],['Standard','DIN 51524 PART 2'],['Packing','18L, 200L'],['Features','Anti-wear']] },
  { id: 'hydraulic-hm46', name: 'Anti-wear Hydraulic Oil HM46', category: 'hydraulic', img: 'images/products/下载 (13).png', specs: [['Type','Anti-wear Hydraulic Oil'],['Grade','HM46 / ISO VG 46'],['Standard','DIN 51524 PART 2'],['Packing','18L, 200L'],['Features','Anti-wear']] },
  { id: 'hydraulic-hm68', name: 'Anti-wear Hydraulic Oil HM68', category: 'hydraulic', img: 'images/products/下载 (14).png', specs: [['Type','Anti-wear Hydraulic Oil'],['Grade','HM68 / ISO VG 68'],['Standard','DIN 51524 PART 2'],['Packing','18L, 200L'],['Features','Anti-wear']] },
  { id: 'hydraulic-hv46', name: 'Wide-Temperature Hydraulic Oil HV46', category: 'hydraulic', img: 'images/products/下载 (15).png', specs: [['Type','Wide-Temp Hydraulic Oil'],['Grade','HV46 / ISO VG 46'],['Standard','DIN 51524 PART 3'],['Packing','18L, 200L'],['Features','High VI, All Seasons']] },
  { id: 'hydraulic-hv68', name: 'Wide-Temperature Hydraulic Oil HV68', category: 'hydraulic', img: 'images/products/下载 (16).png', specs: [['Type','Anti-wear Hydraulic Oil'],['Grade','HV68 / ISO VG 68'],['Standard','ISO CLASS HV, DIN 51524 PART 3'],['Packing','18L, 200L'],['Features','High VI, Anti-wear, All Seasons']] },
  { id: 'hydraulic-hs46', name: 'Ashless High VI Hydraulic Oil HS46', category: 'hydraulic', img: 'images/products/下载 (17).png', specs: [['Type','Ashless Hydraulic Oil'],['Grade','HS46 / ISO VG 46'],['Standard','ISO VG 46'],['Packing','18L, 200L'],['Features','Ashless, High VI, Industrial Grade']] },
  
  // Transmission (3)
  { id: 'atf-8', name: 'Hydraulic Transmission Oil No.8', category: 'transmission', img: 'images/products/下载 (18).png', specs: [['Type','Hydraulic Transmission Oil'],['Model','No.8'],['Application','Torque Converters'],['Packing','4L, 18L']] },
  { id: 'atf-dexron6', name: 'ATF DEXRON VI', category: 'transmission', img: 'images/products/下载 (19).png', specs: [['Type','Automatic Transmission Fluid'],['Model','DEXRON VI'],['Application','6AT+ Modern Transmissions'],['Packing','1L, 4L'],['Features','Improved Friction Durability']] },
  { id: 'atf-teml14c', name: 'ATF ZF TE-ML 14C', category: 'transmission', img: 'images/products/下载 (20).png', specs: [['Type','Automatic Transmission Fluid'],['Spec','ZF TE-ML 14C'],['Application','6HP/8HP ZF Transmissions'],['Packing','1L, 4L'],['Features','OEM Approved']] },
  
  // PSF (2)
  { id: 'psf-psf3', name: 'Power Steering Fluid PSF-3', category: 'psf', img: 'images/products/下载 (21).png', specs: [['Type','Power Steering Fluid'],['Model','PSF-3'],['Application','Universal Power Steering'],['Packing','1L, 4L'],['Features','Smooth Steering Response']] },
  { id: 'psf-chf11s', name: 'Power Steering Fluid CHF 11S', category: 'psf', img: 'images/products/下载 (22).png', specs: [['Type','Special Power Steering Fluid'],['Model','CHF 11S'],['Application','Electronic Power Steering'],['Packing','1L'],['Features','Synthetic Formula, VW/Audi/BMW']] },
  
  // Brake (4)
  { id: 'brake-dot3', name: 'Brake Fluid DOT 3', category: 'brake', img: 'images/products/下载 (23).png', specs: [['Type','Brake Fluid'],['DOT Grade','DOT 3'],['Dry Boiling Point','≥205°C'],['Packing','500ml, 1L'],['Application','Disc & Drum Brakes']] },
  { id: 'brake-dot4', name: 'Brake Fluid DOT 4', category: 'brake', img: 'images/products/下载 (24).png', specs: [['Type','Brake Fluid'],['DOT Grade','DOT 4'],['Dry Boiling Point','≥230°C'],['Packing','500ml, 1L'],['Features','Higher Performance than DOT3']] },
  { id: 'brake-dot5-1', name: 'Brake Fluid DOT 5.1', category: 'brake', img: 'images/products/下载 (25).png', specs: [['Type','Brake Fluid'],['DOT Grade','DOT 5.1'],['Dry Boiling Point','≥260°C'],['Base','Glycol Ether'],['Packing','1L'],['Features','Racing Performance']] },
  { id: 'brake-dot5', name: 'Brake Fluid DOT 5 (Silicone)', category: 'brake', img: 'images/products/下载 (26).png', specs: [['Type','Silicone Brake Fluid'],['DOT Grade','DOT 5'],['Dry Boiling Point','≥260°C'],['Base','Silicone'],['Packing','1L'],['Features','Non-Hygroscopic']] },
  
  // Coolant (6)
  { id: 'coolant-g11', name: 'Coolant IAT (G11) Green', category: 'coolant', img: 'images/products/下载 (27).png', specs: [['Type','Inorganic Acid Technology'],['Standard','G11'],['Color','Green'],['Technology','IAT (Traditional)'],['Service Life','2 Years'],['Packing','4L, 18L']] },
  { id: 'coolant-g12', name: 'Coolant OAT (G12) Red', category: 'coolant', img: 'images/products/下载 (28).png', specs: [['Type','Organic Acid Technology'],['Standard','G12'],['Color','Red'],['Technology','OAT (Long Life)'],['Service Life','5 Years'],['Packing','4L, 18L']] },
  { id: 'coolant-poat', name: 'Coolant POAT Pink/Red', category: 'coolant', img: 'images/products/下载 (29).png', specs: [['Type','Phosphate Organic Acid Technology'],['Standard','POAT'],['Color','Pink/Red'],['Technology','POAT (Hybrid OAT)'],['Service Life','5 Years'],['Packing','4L']] },
  { id: 'coolant-noat', name: 'NOAT Extended Life Coolant', category: 'coolant', img: 'images/products/下载 (30).png', specs: [['Type','NOAT Extended Life Coolant'],['Standard','ASTM D6210, TMC RP329'],['Service Life','6 Years / 600,000 km'],['Packing','18L'],['Features','Heavy Duty, Off-Highway']] },
  { id: 'coolant-35', name: 'Universal Ready-to-Use Coolant -35°C', category: 'coolant', img: 'images/products/下载 (31).png', specs: [['Type','Universal Ready-to-Use Coolant'],['Freezing Point','-35°C'],['Packing','4L'],['Features','Advanced Formula, For All Makes & Models']] },
  { id: 'coolant-45', name: 'Universal Ready-to-Use Coolant -45°C', category: 'coolant', img: 'images/products/下载 (32).png', specs: [['Type','Universal Ready-to-Use Coolant'],['Freezing Point','-45°C'],['Boiling Point','+125°C'],['Standard','ASTM D3306, BS 6580'],['Packing','4L'],['Features','All Season, Aluminum Safe']] },
  
  // Grease (4)
  { id: 'grease-calcium', name: 'Complex Calcium Sulfonate Grease NLGI 2', category: 'grease', img: 'images/products/微信图片_20260525194136_78_328.png', specs: [['Type','Complex Calcium Sulfonate Grease'],['NLGI Grade','2'],['Features','High Performance, Water Resistant, Corrosion Protection, EP, Long Life, High Temp'],['Standard','ASTM D4950 GC-LB, DIN 51502 KP2K-20'],['Packing','35 LBS (15.9kg)']] },
  { id: 'grease-polyurea', name: 'Polyurea Grease', category: 'grease', img: 'images/products/微信图片_20260525194301_79_328.png', specs: [['Type','Polyurea Grease'],['Features','EP Anti-wear, Long-lasting, Waterproof Corrosion Protection'],['Packing','15kg'],['Application','Construction Machinery']] },
  { id: 'grease-bentonite', name: 'Bentonite Grease NLGI 2', category: 'grease', img: 'images/products/微信图片_20260525194411_80_328.png', specs: [['Type','Bentonite Grease'],['NLGI Grade','2'],['Features','Good Adhesion, Water Resistant, Mechanical Stability, Rust Protection'],['Packing','400g, 15kg']] },
  { id: 'grease-aluminum', name: 'Aluminum Complex Grease', category: 'grease', img: 'images/products/微信图片_20260525194546_81_328.png', specs: [['Type','Aluminum Complex Grease'],['Features','High Temp Stability, Water Resistance, EP Anti-wear, Long Lasting'],['Packing','15KG']] }
];

// Generate product data JS
const productDataJS = `const allProducts = ${JSON.stringify(allProducts, null, 2)};`;

// Find and replace the product data in HTML
const startMarker = '// ===== PRODUCT DATA =====';
const endMarker = '// ===== STATE =====';

const startIdx = html.indexOf(startMarker);
const endIdx = html.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const newHtml = html.substring(0, startIdx) + startMarker + '\n' + productDataJS + '\n' + html.substring(endIdx);
  fs.writeFileSync(indexPath, newHtml);
  console.log('✅ Product data updated successfully!');
  console.log(`📊 Total products: ${allProducts.length}`);
  console.log(`📁 Categories: ${[...new Set(allProducts.map(p => p.category))].join(', ')}`);
} else {
  console.error('❌ Could not find product data markers');
  process.exit(1);
}
