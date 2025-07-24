const fs = require('fs');

// Read the current script
let content = fs.readFileSync('script.js', 'utf8');

// Add cache-busting parameters to all capital image URLs
// This will force the browser to reload the images instead of using cached versions

// Replace all capitalImage URLs with cache-busting versions
content = content.replace(
    /(capitalImage: "https:\/\/images\.unsplash\.com\/photo-[^"]+)\?w=800&h=600&fit=crop"/g,
    '$1?w=800&h=600&fit=crop&v=' + Date.now() + '"'
);

// Write the updated content back
fs.writeFileSync('script.js', content);

console.log('Cache-busting parameters added to all capital images!');
console.log('Browser will now load fresh images instead of using cached versions.'); 