import { createContext, useContext, useState, useEffect } from 'react'
import { defaultThemeVariant } from '../theme'

const ThemeVariantContext = createContext()

export const useThemeVariant = () => useContext(ThemeVariantContext)

export function ThemeVariantProvider({ children }) {
  const [themeVariant, setThemeVariant] = useState('default')
  
  useEffect(() => {
    // Get saved theme variant from localStorage
    const savedThemeVariant = localStorage.getItem('themeVariant') || defaultThemeVariant;
    setThemeVariant(savedThemeVariant);
    
    // Add CSS for external fonts
    const fontLinks = [
      // Default theme fonts
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap',
      // Pixel Playground fonts
      'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap',
      // Otaku Realm fonts
      'https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&display=swap',
      // Avenger Mode fonts
      'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed:wght@400;700&display=swap',
      // Neon Future fonts
      'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Rajdhani:wght@400;500;700&display=swap',
    ];
    
    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });
    
    // Add animations CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes glow {
        from { text-shadow: 0 0 5px #00D5FF, 0 0 10px #00D5FF; }
        to { text-shadow: 0 0 20px #00D5FF, 0 0 30px #F700C6; }
      }
    `;
    document.head.appendChild(style);
    
  }, []);
  
  const handleThemeChange = (variant) => {
    localStorage.setItem('themeVariant', variant);
    setThemeVariant(variant);
  };
  
  const value = { themeVariant, setThemeVariant: handleThemeChange };
  
  return (
    <ThemeVariantContext.Provider value={value}>
      {children}
    </ThemeVariantContext.Provider>
  );
} 