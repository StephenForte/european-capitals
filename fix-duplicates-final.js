const fs = require('fs');

// Read the current script
let content = fs.readFileSync('script.js', 'utf8');

// Replace the duplicate URLs with unique ones
// Sweden (Stockholm) - keep the original URL as it's already unique
// content = content.replace(
//     '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"',
//     '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"'
// );

// Denmark (Copenhagen) - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-fH8ibPHFvbw?w=800&h=600&fit=crop"'
);

// Norway (Oslo) - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-vY6GrOJJcoU?w=800&h=600&fit=crop"'
);

// Finland (Helsinki) - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-I9SWvZ9sO2U?w=800&h=600&fit=crop"'
);

// Croatia (Zagreb) - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-eo5gWHNKaaM?w=800&h=600&fit=crop"'
);

// Slovakia (Bratislava) - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-8rtZkhmqsN4?w=800&h=600&fit=crop"'
);

// Belgium (Brussels) - replace with unique URL
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-p6p6TYnDgrw?w=800&h=600&fit=crop"'
);

// Write the fixed content back
fs.writeFileSync('script.js', content);

console.log('Duplicate URLs fixed with unique images!'); 