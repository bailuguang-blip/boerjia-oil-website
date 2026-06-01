const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Update dropdown navigation - replace the entire dropdown section
const oldDropdown = `<div class="dropdown">
            <a href="#" onclick="filterCategory('all')" data-i18n="products.all">All Products</a>
            <a href="#" onclick="filterCategory('gasoline')" data-i18n="products.gasoline">Gasoline Engine Oil</a>
            <a href="#" onclick="filterCategory('diesel')" data-i18n="products.diesel">Diesel Engine Oil</a>
            <a href="#" onclick="filterCategory('gear')" data-i18n="products.gear">Gear Oil</a>
            <a href="#" onclick="filterCategory('hydraulic')" data-i18n="products.hydraulic">Hydraulic Oil</a>
            <a href="#" onclick="filterCategory('transmission')" data-i18n="products.transmission">ATF/Transmission</a>
            <a href="#" onclick="filterCategory('brake')" data-i18n="products.brake">Brake Fluid</a>
            <a href="#" onclick="filterCategory('grease')" data-i18n="products.grease">Grease</a>
          </div>`;

const newDropdown = `<div class="dropdown">
            <a href="#" onclick="filterCategory('all')" data-i18n="products.all">All Products</a>
            <a href="#" onclick="filterCategory('gasoline')" data-i18n="products.gasoline">Gasoline Engine Oil</a>
            <a href="#" onclick="filterCategory('diesel')" data-i18n="products.diesel">Diesel Engine Oil</a>
            <a href="#" onclick="filterCategory('gear')" data-i18n="products.gear">Gear Oil</a>
            <a href="#" onclick="filterCategory('hydraulic')" data-i18n="products.hydraulic">Hydraulic Oil</a>
            <a href="#" onclick="filterCategory('transmission')" data-i18n="products.transmission">ATF/Transmission</a>
            <a href="#" onclick="filterCategory('psf')" data-i18n="products.psf">Power Steering Fluid</a>
            <a href="#" onclick="filterCategory('brake')" data-i18n="products.brake">Brake Fluid</a>
            <a href="#" onclick="filterCategory('coolant')" data-i18n="products.coolant">Coolant/Antifreeze</a>
            <a href="#" onclick="filterCategory('grease')" data-i18n="products.grease">Grease</a>
          </div>`;

html = html.replace(oldDropdown, newDropdown);

// 2. Update sidebar - replace the entire sidebar category list
const oldSidebar = `<ul class="sidebar-category" id="sidebarCategory">
              <li><a href="#" onclick="filterCategory('all')" data-i18n="products.all" class="active">All Products <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('gasoline')" data-i18n="products.gasoline">Engine Oil <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('diesel')" data-i18n="products.diesel">Diesel Engine Oil <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('gear')" data-i18n="products.gear">Gear Oil <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('hydraulic')" data-i18n="products.hydraulic">Hydraulic Oil <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('transmission')" data-i18n="products.transmission">Transmission Fluid <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('brake')" data-i18n="products.brake">Brake Fluid <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('grease')" data-i18n="products.grease">Lubricating Grease <i class="fas fa-chevron-right"></i></a></li>
            </ul>`;

const newSidebar = `<ul class="sidebar-category" id="sidebarCategory">
              <li><a href="#" onclick="filterCategory('all')" data-i18n="products.all" class="active">All Products <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('gasoline')" data-i18n="products.gasoline">Gasoline Engine Oil <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('diesel')" data-i18n="products.diesel">Diesel Engine Oil <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('gear')" data-i18n="products.gear">Gear Oil <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('hydraulic')" data-i18n="products.hydraulic">Hydraulic Oil <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('transmission')" data-i18n="products.transmission">ATF/Transmission <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('psf')" data-i18n="products.psf">Power Steering Fluid <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('brake')" data-i18n="products.brake">Brake Fluid <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('coolant')" data-i18n="products.coolant">Coolant/Antifreeze <i class="fas fa-chevron-right"></i></a></li>
              <li><a href="#" onclick="filterCategory('grease')" data-i18n="products.grease">Grease <i class="fas fa-chevron-right"></i></a></li>
            </ul>`;

html = html.replace(oldSidebar, newSidebar);

// 3. Update footer products
const oldFooterProducts = `<ul class="footer-products">
                <li><a href="#" onclick="filterCategory('gasoline')" data-i18n="products.gasoline">Engine Oil</a></li>
                <li><a href="#" onclick="filterCategory('diesel')" data-i18n="products.diesel">Diesel Engine Oil</a></li>
                <li><a href="#" onclick="filterCategory('gear')" data-i18n="products.gear">Gear Oil</a></li>
                <li><a href="#" onclick="filterCategory('hydraulic')" data-i18n="products.hydraulic">Hydraulic Oil</a></li>
                <li><a href="#" onclick="filterCategory('transmission')" data-i18n="products.transmission">Transmission Fluid</a></li>
                <li><a href="#" onclick="filterCategory('brake')" data-i18n="products.brake">Brake Fluid</a></li>
                <li><a href="#" onclick="filterCategory('grease')" data-i18n="products.grease">Lubricating Grease</a></li>
              </ul>`;

const newFooterProducts = `<ul class="footer-products">
                <li><a href="#" onclick="filterCategory('gasoline')" data-i18n="products.gasoline">Gasoline Engine Oil</a></li>
                <li><a href="#" onclick="filterCategory('diesel')" data-i18n="products.diesel">Diesel Engine Oil</a></li>
                <li><a href="#" onclick="filterCategory('gear')" data-i18n="products.gear">Gear Oil</a></li>
                <li><a href="#" onclick="filterCategory('hydraulic')" data-i18n="products.hydraulic">Hydraulic Oil</a></li>
                <li><a href="#" onclick="filterCategory('transmission')" data-i18n="products.transmission">ATF/Transmission</a></li>
                <li><a href="#" onclick="filterCategory('psf')" data-i18n="products.psf">Power Steering Fluid</a></li>
                <li><a href="#" onclick="filterCategory('brake')" data-i18n="products.brake">Brake Fluid</a></li>
                <li><a href="#" onclick="filterCategory('coolant')" data-i18n="products.coolant">Coolant/Antifreeze</a></li>
                <li><a href="#" onclick="filterCategory('grease')" data-i18n="products.grease">Grease</a></li>
              </ul>`;

html = html.replace(oldFooterProducts, newFooterProducts);

// 4. Update translations - add psf and coolant to all languages
// English
html = html.replace("'products.gasoline': 'Engine Oil',", "'products.gasoline': 'Gasoline Engine Oil',");
html = html.replace("'products.grease': 'Lubricating Grease',", "'products.grease': 'Grease',");

// Add psf and coolant translations if not present
if (!html.includes("'products.psf'")) {
  html = html.replace("'products.brake': 'Brake Fluid',", "'products.brake': 'Brake Fluid',\n    'products.psf': 'Power Steering Fluid',\n    'products.coolant': 'Coolant/Antifreeze',");
}

// Chinese
html = html.replace("'products.gasoline': '发动机油',", "'products.gasoline': '汽油发动机油',");
if (!html.includes("'products.psf': '转向助力油'")) {
  html = html.replace("'products.brake': '刹车油',", "'products.brake': '刹车油',\n    'products.psf': '转向助力油',\n    'products.coolant': '防冻液',");
}

// Vietnamese
if (!html.includes("'products.psf': 'Dầu trợ lực lái'")) {
  html = html.replace("'products.brake': 'Dầu phanh',", "'products.brake': 'Dầu phanh',\n    'products.psf': 'Dầu trợ lực lái',\n    'products.coolant': 'Nước làm mát',");
}

// Indonesian  
if (!html.includes("'products.psf': 'Minyak Power Steering'")) {
  html = html.replace("'products.brake': 'Minyak Rem',", "'products.brake': 'Minyak Rem',\n    'products.psf': 'Minyak Power Steering',\n    'products.coolant': 'Cairan Pendingin',");
}

// Thai
if (!html.includes("'products.psf': 'น้ำมันพวงมาลัยพาวเวอร์'")) {
  html = html.replace("'products.brake': 'น้ำมันเบรก',", "'products.brake': 'น้ำมันเบรก',\n    'products.psf': 'น้ำมันพวงมาลัยพาวเวอร์',\n    'products.coolant': 'น้ำยาหล่อเย็น',");
}

// Malay
if (!html.includes("'products.psf': 'Cecair Stering Kuasa'")) {
  html = html.replace("'products.brake': 'Cecair Brek',", "'products.brake': 'Cecair Brek',\n    'products.psf': 'Cecair Stering Kuasa',\n    'products.coolant': 'Cecair Penyejuk',");
}

// Arabic
if (!html.includes("'products.psf': 'زيت التوجيه المعزز'")) {
  html = html.replace("'products.brake': 'سائل الفرامل',", "'products.brake': 'سائل الفرامل',\n    'products.psf': 'زيت التوجيه المعزز',\n    'products.coolant': 'سائل التبريد',");
}

// 5. Update sidebar tags - remove motorcycle/marine/fuel, add psf/coolant
const oldTags = `<div class="sidebar-tags" id="sidebarTags">
              <a href="#" onclick="searchByTag('gasoline');return false;">Gasoline Engine Oil</a>
              <a href="#" onclick="searchByTag('hydraulic');return false;">hydraulic oil</a>
              <a href="#" onclick="searchByTag('gear');return false;">gear oil</a>
              <a href="#" onclick="searchByTag('brake');return false;">brake fluid</a>
              <a href="#" onclick="searchByTag('grease');return false;">lubricating grease</a>
              <a href="#" onclick="searchByTag('diesel');return false;">diesel engine oil</a>
              <a href="#" onclick="searchByTag('motorcycle');return false;">motorcycle oil</a>
              <a href="#" onclick="searchByTag('transmission');return false;">transmission fluid</a>
              <a href="#" onclick="searchByTag('marine');return false;">marine oil</a>
              <a href="#" onclick="searchByTag('fuel');return false;">fuel oil</a>
              <a href="#" onclick="searchByTag('synthetic');return false;">synthetic oil</a>
              <a href="#" onclick="searchByTag('OEM');return false;">OEM lubricant</a>
            </div>`;

const newTags = `<div class="sidebar-tags" id="sidebarTags">
              <a href="#" onclick="searchByTag('gasoline');return false;">Gasoline Engine Oil</a>
              <a href="#" onclick="searchByTag('diesel');return false;">diesel engine oil</a>
              <a href="#" onclick="searchByTag('hydraulic');return false;">hydraulic oil</a>
              <a href="#" onclick="searchByTag('gear');return false;">gear oil</a>
              <a href="#" onclick="searchByTag('transmission');return false;">transmission fluid</a>
              <a href="#" onclick="searchByTag('psf');return false;">power steering fluid</a>
              <a href="#" onclick="searchByTag('brake');return false;">brake fluid</a>
              <a href="#" onclick="searchByTag('coolant');return false;">coolant</a>
              <a href="#" onclick="searchByTag('grease');return false;">grease</a>
              <a href="#" onclick="searchByTag('synthetic');return false;">synthetic oil</a>
              <a href="#" onclick="searchByTag('OEM');return false;">OEM lubricant</a>
            </div>`;

html = html.replace(oldTags, newTags);

// Save
fs.writeFileSync(indexPath, html);
console.log('✅ Navigation, sidebar, footer, and translations updated!');
