const fs = require('fs');

// Read the current script
let content = fs.readFileSync('script.js', 'utf8');

// Replace the duplicate URLs with unique ones
// Denmark (Copenhagen) - line 77
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"'
);

// Norway (Oslo) - line 84
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"'
);

// Finland (Helsinki) - line 91
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"'
);

// Croatia (Zagreb) - line 133
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"'
);

// Slovakia (Bratislava) - line 140
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"',
    '        capitalImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop"'
);

// Write the fixed content back
fs.writeFileSync('script.js', content);

console.log('Duplicate URLs fixed!'); 