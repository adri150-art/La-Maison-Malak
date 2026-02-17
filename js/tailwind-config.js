tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#6B4E3B", /* Le marron principal du texte 'La Maison Malak' */
                "primary-hover": "#523B2C", /* Version légèrement plus foncée pour le survol */
                "secondary": "#D3C5B9", /* Le beige de la poche à douille en arrière-plan */
                "background-light": "#FAF8F6", /* Un fond crème légèrement réchauffé */
                "background-dark": "#1F1611", /* Un fond très sombre, teinté de marron */
                "surface-light": "#FFFFFF",
                "text-main": "#3A2B20", /* Un marron très foncé pour le texte de lecture (plus doux que du noir pur) */
                "text-soft": "#8A7363", /* Un marron grisé pour les textes secondaires */
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
