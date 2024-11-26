/** @type {import('tailwindcss').Config} */
export default {
    // Specify the files where Tailwind CSS classes will be used
    content: [
        './index.html',
        './src/**/*.{html,js}', // Includes all HTML and JS files in the src folder
    ],
    theme: {
        extend: {
            // Add custom fonts
            fontFamily: {
                dmMono: ['DM Mono', 'monospace'], // Monospace font for coding-like styles
                nympha: ['Nympha Trial', 'serif'], // Serif font for decorative headings
                sfPro: ['SF Pro Display', 'sans-serif'], // Sans-serif font for modern design
            },
            // Define custom colors for text, backgrounds, and accents
            colors: {
                darkGray: '#101010', // Dark background for a clean, modern look
                lightGray: '#C0BFBF', // Soft gray for text and subtle elements
                accent: '#FF7F50', // Orange for highlights and accents
                secondary: '#8D8D8D', // Neutral gray for secondary text or backgrounds
            },
            // Add custom spacing values
            spacing: {
                '18rem': '4.5rem', // Useful for larger paddings or margins
                '20rem': '5rem', // A common large spacing value
                '25rem': '6.25rem', // Extra large spacing
                '50rem': '12.5rem', // For very large elements or gaps
            },
            // Define additional font sizes
            fontSize: {
                '10xl': ['9rem', { lineHeight: '1' }], // Very large font for impactful headers
                '12xl': ['12rem', { lineHeight: '1.1' }], // Extra large size for main headings
            },
            // Add custom animations
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' }, // Start fully transparent
                    '100%': { opacity: '1' }, // End fully visible
                },
                slideIn: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' }, // Start below and invisible
                    '100%': { transform: 'translateY(0)', opacity: '1' }, // Slide to position and appear
                },
            },
            animation: {
                fadeIn: 'fadeIn 1.5s ease-in-out', // Smooth fade-in animation
                slideIn: 'slideIn 1s ease-out', // Smooth sliding animation
            },
        },
    },
    plugins: [], // Add Tailwind plugins here if needed
}
