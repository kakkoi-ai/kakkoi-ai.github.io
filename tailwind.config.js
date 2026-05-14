/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bolota', 'sans-serif'],
        display: ['Bolota', 'sans-serif'],
      },
      colors: {
        // Jetons de structure (Layout & Surfaces)
        'page': 'rgb(var(--bg-page) / <alpha-value>)',
        'section': 'rgb(var(--bg-section) / <alpha-value>)',
        'section-alt': 'rgb(var(--bg-section-alt) / <alpha-value>)',
        'break': 'rgb(var(--bg-break) / <alpha-value>)',
        'surface-1': 'rgb(var(--surface-1) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        'surface-3': 'rgb(var(--surface-3) / <alpha-value>)',
        'surface-pre': 'rgb(var(--surface-pre) / <alpha-value>)',
        
        // Jetons typographiques
        'muted': 'rgb(var(--text-muted) / <alpha-value>)',
        'primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
        'title-hero': 'rgb(var(--title-hero) / <alpha-value>)',
        'title-primary': 'rgb(var(--title-primary) / <alpha-value>)',
        'title-secondary': 'rgb(var(--title-secondary) / <alpha-value>)',
        'title-doc': 'rgb(var(--title-doc) / <alpha-value>)',
        
        // Jetons d'accentuation (Couleurs de marque)
        'accent': 'rgb(var(--accent) / <alpha-value>)',
        'accent-2': 'rgb(var(--accent-2) / <alpha-value>)',
        'accent-strong': 'rgb(var(--accent-strong) / <alpha-value>)',
        'accent-hover': 'rgb(var(--accent-hover) / <alpha-value>)',
        'accent-warm': 'rgb(var(--accent-warm) / <alpha-value>)',
        
        // Jetons de bordures et UI
        'border': 'rgb(var(--color-border) / <alpha-value>)',
        'border-subtle': 'rgb(var(--color-border-subtle) / <alpha-value>)',
        'ring': 'rgb(var(--ring) / <alpha-value>)',
        
        // Jetons de statut
        'success': 'rgb(var(--success) / <alpha-value>)',
        'warning': 'rgb(var(--warning) / <alpha-value>)',
        'danger': 'rgb(var(--danger) / <alpha-value>)',

        // Compatibilité stricte avec les anciens @apply du CSS
        'bg-base': 'rgb(var(--color-bg-base) / <alpha-value>)',
        'bg-alt': 'rgb(var(--color-bg-alt) / <alpha-value>)',
        'bg-soft-accent': 'rgb(var(--color-bg-soft-accent) / <alpha-value>)',
        'text-base': 'rgb(var(--color-text-base) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'badge-premium': 'rgb(var(--color-badge-premium) / <alpha-value>)',
        'accent-medium': 'rgb(var(--color-accent-medium) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}