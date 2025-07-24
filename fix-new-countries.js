const fs = require('fs');

// Read the current script
let content = fs.readFileSync('script.js', 'utf8');

// Replace the duplicate URLs with unique ones for the new countries
// United Kingdom (London) - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-Dymu1WiZVko?w=800&h=600&fit=crop"'
);

// Bulgaria (Sofia) - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1516564195738-e287dfbbf0f5?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-UPoSvgmFKmo?w=800&h=600&fit=crop"'
);

// Romania (Bucharest) - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-7-VA42UTNuQ?w=800&h=600&fit=crop"'
);

// Iceland (Reykjavik) - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-geYUKmAKZp0?w=800&h=600&fit=crop"'
);

// Estonia (Tallinn) - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-NyIBNMueUQI?w=800&h=600&fit=crop"'
);

// France (Paris) - replace with unique URL (Eiffel Tower)
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1502602898534-47d22c0d3b3c?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-XSl6VEp7LFg?w=800&h=600&fit=crop"'
);

// Write the fixed content back
fs.writeFileSync('script.js', content);

console.log('New countries updated with unique images!'); 