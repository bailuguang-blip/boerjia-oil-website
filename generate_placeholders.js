const fs = require('fs');
const path = require('path');
const imagesDir = path.join(__dirname, 'images');

// Extract all local image references from index.html
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
const imgRefs = new Set();

// Match src="images/..." and url('images/...')
const srcRegex = /(?:src|href)="(images\/[^"]+)"/g;
const urlRegex = /url\(['"]?(images\/[^'")]+)/g;

let match;
while ((match = srcRegex.exec(html)) !== null) imgRefs.add(match[1]);
while ((match = urlRegex.exec(html)) !== null) imgRefs.add(match[1]);

console.log('Found local image references:');
imgRefs.forEach(ref => console.log('  ' + ref));

// Generate simple SVG placeholder for each
imgRefs.forEach(ref => {
  const fileName = path.basename(ref, path.extname(ref));
  const ext = path.extname(ref).toLowerCase();
  const filePath = path.join(imagesDir, path.basename(ref));
  
  // Only create if file doesn't exist
  if (!fs.existsSync(filePath)) {
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      // Create a minimal 1x1 transparent pixel PNG (valid but tiny)
      // This is a valid 1x1 transparent PNG in base64
      const pngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
      fs.writeFileSync(filePath, Buffer.from(pngBase64, 'base64'));
      console.log('  Created: ' + path.basename(ref));
    } else if (ext === '.mp4') {
      // Create empty placeholder file
      fs.writeFileSync(filePath, '');
      console.log('  Created: ' + path.basename(ref));
    }
  }
});

console.log('\nDone! Generated placeholders for missing images.');
