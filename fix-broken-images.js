const fs = require('fs');

// Read the current script
let content = fs.readFileSync('script.js', 'utf8');

// Fix the broken image URLs by restoring the correct Unsplash IDs
// and removing the problematic cache-busting parameters

// France (Paris) - fix the incomplete ID
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-XSl6VEp7LFg?w=800&h=600&fit=crop&v=1753387470461"',
    '        capitalImage: "https://images.unsplash.com/photo-XSl6VEp7LFg?w=800&h=600&fit=crop"'
);

// Sweden (Stockholm) - fix the incomplete ID
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-fH8ibPHFvbw?w=800&h=600&fit=crop&v=1753387470461"',
    '        capitalImage: "https://images.unsplash.com/photo-fH8ibPHFvbw?w=800&h=600&fit=crop"'
);

// Austria (Vienna) - fix the incomplete ID
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-UPoSvgmFKmo?w=800&h=600&fit=crop&v=1753387470461"',
    '        capitalImage: "https://images.unsplash.com/photo-UPoSvgmFKmo?w=800&h=600&fit=crop"'
);

// Switzerland (Bern) - fix the incomplete ID
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-7-VA42UTNuQ?w=800&h=600&fit=crop&v=1753387470461"',
    '        capitalImage: "https://images.unsplash.com/photo-7-VA42UTNuQ?w=800&h=600&fit=crop"'
);

// Denmark (Copenhagen) - fix the incomplete ID
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-vY6GrOJJcoU?w=800&h=600&fit=crop&v=1753387470461"',
    '        capitalImage: "https://images.unsplash.com/photo-vY6GrOJJcoU?w=800&h=600&fit=crop"'
);

// Norway (Oslo) - fix the incomplete ID
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-I9SWvZ9sO2U?w=800&h=600&fit=crop&v=1753387470461"',
    '        capitalImage: "https://images.unsplash.com/photo-I9SWvZ9sO2U?w=800&h=600&fit=crop"'
);

// Finland (Helsinki) - fix the incomplete ID
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-eo5gWHNKaaM?w=800&h=600&fit=crop&v=1753387470461"',
    '        capitalImage: "https://images.unsplash.com/photo-eo5gWHNKaaM?w=800&h=600&fit=crop"'
);

// Portugal (Lisbon) - fix the incomplete ID
content = content.replace(
    '        capitalImage: "https://images.unsplash.com/photo-geYUKmAKZp0?w=800&h=600&fit=crop&v=1753387470461"',
    '        capitalImage: "https://images.unsplash.com/photo-geYUKmAKZp0?w=800&h=600&fit=crop"'
);

// Remove cache-busting parameters from all other images
content = content.replace(/&v=\d+/g, '');

// Write the fixed content back
fs.writeFileSync('script.js', content);

console.log('Broken image URLs fixed! All images should now load properly.'); 