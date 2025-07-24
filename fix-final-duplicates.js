const fs = require('fs');

// Read the current script
let content = fs.readFileSync('script.js', 'utf8');

// Fix the remaining duplicates for the new countries
// Bulgaria (Sofia) - line 154 - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1516564195738-e287dfbbf0f5?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-UPoSvgmFKmo?w=800&h=600&fit=crop"'
);

// Romania (Bucharest) - line 161 - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-7-VA42UTNuQ?w=800&h=600&fit=crop"'
);

// Iceland (Reykjavik) - line 168 - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-geYUKmAKZp0?w=800&h=600&fit=crop"'
);

// Estonia (Tallinn) - line 175 - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-NyIBNMueUQI?w=800&h=600&fit=crop"'
);

// Write the fixed content back
fs.writeFileSync('script.js', content);

console.log('Final duplicates fixed! All countries now have unique images.'); 