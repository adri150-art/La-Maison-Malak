tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#C5A059", /* Un or/cuivre plus riche et élégant */
                "primary-hover": "#A68444",
                "background-light": "#FCFCFA", /* Un blanc crème très subtil */
                "background-dark": "#171512", /* Un noir chaud */
                "surface-light": "#FFFFFF",
                "text-main": "#2C2A25", /* Anthracite chaud */
                "text-soft": "#7A7568",
            },
            fontFamily: {
                "display": ["'Playfair Display'", "serif"],
                "sans": ["'Inter'", "sans-serif"],
            },
            boxShadow: {
                'elegant': '0 20px 40px -15px rgba(0,0,0,0.05)',
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
            }
        },
    },
}
