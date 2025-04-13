import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// Theme Definitions
const themeVariants = {
  default: {
    name: "Default",
    fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
    },
    colors: {
      primary: {
        50: '#E6F7FF',
        100: '#B8E3FF',
        200: '#8ACFFF',
        300: '#5CBBFF',
        400: '#2EA7FF',
        500: '#0093FF',
        600: '#0077D1',
        700: '#0062A3',
        800: '#004D75',
        900: '#003247',
      },
      secondary: {
        50: '#F5F8FF',
        100: '#EAF0FF',
        200: '#D5E0FF',
        300: '#AABFFF',
        400: '#7F9DFF',
        500: '#547BFF',
        600: '#2A59FF',
        700: '#003AE6',
        800: '#002FB8',
        900: '#00248A',
      },
    },
    shadows: {
      outline: '0 0 0 3px rgba(0, 147, 255, 0.6)',
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode('white', 'gray.900')(props),
          transition: 'background-color 0.2s ease',
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          fontWeight: 'medium',
          borderRadius: 'md',
        },
      },
      Heading: {
        baseStyle: {
          fontWeight: 'bold',
        },
      },
    },
    animations: {
      transition: '0.2s ease',
      button: 'transform 0.1s ease',
    },
  },

  pixelPlayground: {
    name: "Pixel Playground",
    fonts: {
      heading: `'Press Start 2P', cursive`,
      body: `'VT323', monospace`,
    },
    colors: {
      primary: {
        50: '#FFFCCC',
        100: '#FFF799',
        200: '#FFF266',
        300: '#FFEE33',
        400: '#FFE900',
        500: '#FFCC00',
        600: '#CC9900',
        700: '#996600',
        800: '#664400',
        900: '#332200',
      },
      secondary: {
        50: '#F5FFFA',
        100: '#C3FFE6',
        200: '#91FFD2',
        300: '#5FFABD',
        400: '#2DE9A2',
        500: '#00D87F',
        600: '#00B368',
        700: '#008F52',
        800: '#006B3D',
        900: '#004828',
      },
    },
    shadows: {
      outline: '3px 3px 0px rgba(0, 0, 0, 0.8)',
      button: '4px 4px 0px #000000',
      card: '8px 8px 0px #000000',
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode('#F0F0F0', '#202020')(props),
          color: mode('#202020', '#F0F0F0')(props),
          fontFamily: 'VT323, monospace',
          fontSize: '1.2em',
          backgroundImage: mode(
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVQImWNgYGD4z8DAwMDAAIF0QAAAAH0E+rIAAAAASUVORK5CYII=')",
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVQImWNgYGD4z8DAwMDAAIF0QAAAAH0E+rIAAAAASUVORK5CYII=')"
          )(props),
          backgroundSize: '8px 8px',
          transition: 'all 0.1s linear',
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          fontFamily: 'Press Start 2P, cursive',
          fontWeight: 'normal',
          fontSize: 'xs',
          padding: '4',
          textTransform: 'uppercase',
          borderWidth: '2px',
          borderColor: 'black',
          boxShadow: '4px 4px 0px #000000',
          _hover: {
            transform: 'translate(-2px, -2px)',
            boxShadow: '6px 6px 0px #000000',
          },
          _active: {
            transform: 'translate(2px, 2px)',
            boxShadow: '2px 2px 0px #000000',
          },
        },
      },
      Input: {
        baseStyle: {
          field: {
            borderWidth: '2px',
            borderColor: 'black',
            boxShadow: '3px 3px 0px rgba(0, 0, 0, 0.8)',
            fontFamily: 'VT323, monospace',
            fontSize: 'xl',
          },
        },
      },
      Badge: {
        baseStyle: {
          fontFamily: 'VT323, monospace',
          fontWeight: 'normal',
          borderWidth: '2px',
          borderColor: 'black',
          textTransform: 'uppercase',
        },
      },
      Heading: {
        baseStyle: {
          fontFamily: 'Press Start 2P, cursive',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        },
      },
    },
    animations: {
      transition: '0.1s linear',
      button: 'transform 0.1s linear',
      hover: 'pulse 1s infinite',
    },
  },

  otakuRealm: {
    name: "Otaku Realm",
    fonts: {
      heading: `'Anime Ace', 'Bangers', cursive`,
      body: `'Comic Neue', 'Comic Sans MS', cursive`,
    },
    colors: {
      primary: {
        50: '#FFEAFF',
        100: '#FFD5FF',
        200: '#FFAAFF',
        300: '#FF7FFF',
        400: '#FF55FF',
        500: '#FF2AFF',
        600: '#FF00FF',
        700: '#CC00CC',
        800: '#990099',
        900: '#660066',
      },
      secondary: {
        50: '#D1F5FF',
        100: '#A3EBFF',
        200: '#75E1FF',
        300: '#47D7FF',
        400: '#1ACDFF',
        500: '#00B8F5',
        600: '#0095C7',
        700: '#007299',
        800: '#004F6B',
        900: '#002C3D',
      },
    },
    shadows: {
      outline: '0 0 12px rgba(255, 42, 255, 0.6)',
      button: '0 4px 10px rgba(255, 0, 255, 0.3)',
      card: '0 10px 20px rgba(255, 0, 255, 0.2)',
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode('#FFF4FD', '#210026')(props),
          backgroundImage: mode(
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZGQ1ZmEiPjwvcmVjdD4KPC9zdmc+')",
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMzAwMjJDIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM0MDAzM2MiPjwvcmVjdD4KPC9zdmc+)')"
          )(props),
          color: mode('#4A0072', '#FFF4FD')(props),
          fontFamily: 'Comic Neue, "Comic Sans MS", cursive',
          transition: 'all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          fontFamily: 'Bangers, cursive',
          letterSpacing: '1px',
          fontWeight: 'normal',
          borderRadius: 'full',
          transition: 'all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6)',
          position: 'relative',
          overflow: 'hidden',
          _before: {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'translateX(-100%)',
          },
          _hover: {
            transform: 'scale(1.05)',
            _before: {
              transform: 'translateX(100%)',
              transition: 'transform 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6)',
            }
          },
          _active: {
            transform: 'scale(0.95)',
          },
        },
      },
      Heading: {
        baseStyle: {
          fontFamily: 'Bangers, cursive',
          letterSpacing: '2px',
          textShadow: '2px 2px 0px rgba(255,0,255,0.2)',
        },
      },
      Input: {
        baseStyle: {
          field: {
            borderRadius: 'full',
            borderWidth: '2px',
            boxShadow: '0 4px 8px rgba(255, 0, 255, 0.1)',
            fontFamily: 'Comic Neue, "Comic Sans MS", cursive',
            _focus: {
              boxShadow: '0 0 12px rgba(255, 42, 255, 0.6)',
            },
          },
        },
      },
      Badge: {
        baseStyle: {
          fontFamily: 'Comic Neue, "Comic Sans MS", cursive',
          fontWeight: 'bold',
          borderRadius: 'full',
          textTransform: 'lowercase',
        },
      }
    },
    animations: {
      transition: '0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      button: 'all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      hover: 'float 3s ease-in-out infinite',
    },
  },

  avengerMode: {
    name: "Avenger Mode",
    fonts: {
      heading: `'Bebas Neue', 'Impact', sans-serif`,
      body: `'Roboto Condensed', 'Arial', sans-serif`,
    },
    colors: {
      primary: {
        50: '#FFF3F0',
        100: '#FFE6E1',
        200: '#FFCEC4',
        300: '#FFB5A7',
        400: '#FF9C8A',
        500: '#FF836D',
        600: '#FF5333',
        700: '#FA2500',
        800: '#C71D00',
        900: '#941600',
      },
      secondary: {
        50: '#F0F9FF',
        100: '#DCF0FF',
        200: '#BAE2FF',
        300: '#8ACDFF',
        400: '#47ABFF',
        500: '#0077E6',
        600: '#005BB3',
        700: '#004080',
        800: '#00254D',
        900: '#00101F',
      },
    },
    shadows: {
      outline: '0 0 0 3px rgba(199, 29, 0, 0.6)',
      button: '0 10px 20px -10px rgba(199, 29, 0, 0.7)',
      card: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode('#F0F0F0', '#1A1A1A')(props),
          backgroundImage: mode(
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMCAzMCBMMzAgMCBMNjAgMzAgTDMwIDYwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2RkZGRkZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=')",
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMCAzMCBMMzAgMCBMNjAgMzAgTDMwIDYwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=')"
          )(props),
          color: mode('#333333', '#F0F0F0')(props),
          fontFamily: 'Roboto Condensed, Arial, sans-serif',
          transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          fontFamily: 'Bebas Neue, Impact, sans-serif',
          letterSpacing: '1px',
          borderRadius: '4px',
          textTransform: 'uppercase',
          fontWeight: 'normal',
          fontSize: 'lg',
          position: 'relative',
          transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
          _after: {
            content: '""',
            position: 'absolute',
            width: '0%',
            height: '4px',
            bottom: '0',
            left: '0',
            background: 'linear-gradient(90deg, rgba(199,29,0,1) 0%, rgba(255,83,51,1) 100%)',
            transition: 'width 0.3s ease',
          },
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 20px -10px rgba(199, 29, 0, 0.7)',
            _after: {
              width: '100%',
            },
          },
          _active: {
            transform: 'translateY(1px)',
            boxShadow: 'none',
          },
        },
      },
      Heading: {
        baseStyle: {
          fontFamily: 'Bebas Neue, Impact, sans-serif',
          letterSpacing: '2px',
          textShadow: '2px 2px 0px rgba(255,0,255,0.2)',
        },
      },
      Input: {
        baseStyle: {
          field: {
            borderRadius: '4px',
            borderWidth: '2px',
            boxShadow: '0 4px 8px rgba(255, 0, 255, 0.1)',
            fontFamily: 'Comic Neue, "Comic Sans MS", cursive',
            _focus: {
              borderColor: 'primary.500',
              boxShadow: '0 0 12px rgba(255, 42, 255, 0.6)',
            },
          },
        },
      },
      Badge: {
        baseStyle: {
          fontFamily: 'Bebas Neue, Impact, sans-serif',
          letterSpacing: '1px',
          borderRadius: '2px',
          textTransform: 'uppercase',
        },
      }
    },
    animations: {
      transition: '0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
      button: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
      hover: 'pulse 1.5s infinite',
    },
  },

  neonFuture: {
    name: "Neon Future",
    fonts: {
      heading: `'Orbitron', 'BlinkMacSystemFont', sans-serif`,
      body: `'Rajdhani', 'BlinkMacSystemFont', sans-serif`,
    },
    colors: {
      primary: {
        50: '#E3FAFF',
        100: '#C7F5FF',
        200: '#A0EEFF',
        300: '#68E5FF',
        400: '#31DDFF',
        500: '#00D5FF',
        600: '#00A8CC',
        700: '#007A99',
        800: '#004D66',
        900: '#002033',
      },
      secondary: {
        50: '#FFE5F9',
        100: '#FFCBF4',
        200: '#FF96E8',
        300: '#FF61DD',
        400: '#FF2CD2',
        500: '#F700C6',
        600: '#C4009F',
        700: '#910078',
        800: '#5E004D',
        900: '#2B0026',
      },
    },
    shadows: {
      outline: '0 0 15px rgba(0, 213, 255, 0.7)',
      button: '0 0 25px rgba(0, 213, 255, 0.5)',
      card: '0 0 30px rgba(0, 213, 255, 0.3)',
      text: '0 0 10px rgba(0, 213, 255, 0.8)',
    },
    styles: {
      global: (props) => ({
        body: {
          bg: '#0A0514',
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMGEwNTE0Ij48L3JlY3Q+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzFkMTAzMyIgeD0iMTUiIHk9IjE1Ij48L3JlY3Q+PC9zdmc+')",
          color: '#E0E0FF',
          fontFamily: 'Rajdhani, BlinkMacSystemFont, sans-serif',
          transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          fontFamily: 'Orbitron, BlinkMacSystemFont, sans-serif',
          letterSpacing: '2px',
          fontWeight: 'medium',
          borderRadius: '2px',
          transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          textTransform: 'uppercase',
          position: 'relative',
          border: '1px solid rgba(0, 213, 255, 0.3)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          _before: {
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            background: 'linear-gradient(270deg, #00D5FF, #F700C6)',
            zIndex: '-1',
            borderRadius: '3px',
            opacity: '0',
            transition: 'opacity 0.5s ease',
          },
          _hover: {
            boxShadow: '0 0 25px rgba(0, 213, 255, 0.5)',
            textShadow: '0 0 5px rgba(0, 213, 255, 0.8)',
            _before: {
              opacity: '0.5',
            },
          },
          _active: {
            boxShadow: '0 0 15px rgba(0, 213, 255, 0.7) inset',
            _before: {
              opacity: '0.7',
            },
          },
        },
      },
      Heading: {
        baseStyle: {
          fontFamily: 'Orbitron, BlinkMacSystemFont, sans-serif',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          textShadow: '0 0 10px rgba(0, 213, 255, 0.8)',
        },
      },
      Input: {
        baseStyle: {
          field: {
            backgroundColor: 'rgba(20, 11, 40, 0.7)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            borderWidth: '1px',
            borderColor: 'rgba(0, 213, 255, 0.3)',
            color: '#E0E0FF',
            borderRadius: '2px',
            fontFamily: 'Rajdhani, BlinkMacSystemFont, sans-serif',
            letterSpacing: '1px',
            transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            _focus: {
              borderColor: 'primary.500',
              boxShadow: '0 0 15px rgba(0, 213, 255, 0.5)',
            },
            _hover: {
              borderColor: 'rgba(0, 213, 255, 0.5)',
            },
            _placeholder: {
              color: 'rgba(224, 224, 255, 0.5)',
            },
          },
        },
      },
      Badge: {
        baseStyle: {
          fontFamily: 'Rajdhani, BlinkMacSystemFont, sans-serif',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          backgroundColor: 'rgba(20, 11, 40, 0.9)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          border: '1px solid rgba(0, 213, 255, 0.3)',
          color: 'primary.500',
          borderRadius: '2px',
          boxShadow: '0 0 10px rgba(0, 213, 255, 0.3)',
        },
      },
      Box: {
        baseStyle: {
          transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        },
      },
    },
    animations: {
      transition: '0.5s cubic-bezier(0.23, 1, 0.32, 1)',
      button: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
      hover: 'glow 1.5s ease-in-out infinite alternate',
    },
  },

  naturesEmbrace: {
    name: "Nature's Embrace",
    fonts: {
      heading: `'Playfair Display', serif`,
      body: `'Lora', serif`,
    },
    colors: {
      primary: {
        50: '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4ADE80',
        500: '#22C55E',
        600: '#16A34A',
        700: '#15803D',
        800: '#166534',
        900: '#14532D',
      },
      secondary: {
        50: '#F0FDFA',
        100: '#CCFBF1',
        200: '#99F6E4',
        300: '#5EEAD4',
        400: '#2DD4BF',
        500: '#14B8A6',
        600: '#0D9488',
        700: '#0F766E',
        800: '#115E59',
        900: '#134E4A',
      },
    },
    shadows: {
      outline: '0 0 0 3px rgba(34, 197, 94, 0.6)',
      button: '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)',
      card: '0 10px 15px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -2px rgba(34, 197, 94, 0.05)',
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode('#F0FDF4', '#052e16')(props),
          backgroundImage: mode(
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjZjBmZGY0Ij48L3JlY3Q+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGNmY2U3IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48L3N2Zz4=')",
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMDUyZTE2Ij48L3JlY3Q+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDQ1MzJhIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48L3N2Zz4=')"
          )(props),
          color: mode('#166534', '#F0FDF4')(props),
          fontFamily: 'Lora, serif',
          transition: 'all 0.3s ease-in-out',
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          fontFamily: 'Playfair Display, serif',
          fontWeight: 'medium',
          borderRadius: 'lg',
          transition: 'all 0.3s ease-in-out',
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
      },
      Heading: {
        baseStyle: {
          fontFamily: 'Playfair Display, serif',
          fontWeight: 'bold',
          letterSpacing: '0.5px',
        },
      },
      Input: {
        baseStyle: {
          field: {
            borderRadius: 'lg',
            borderWidth: '1px',
            fontFamily: 'Lora, serif',
            transition: 'all 0.3s ease-in-out',
            _focus: {
              borderColor: 'primary.500',
              boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.2)',
            },
          },
        },
      },
      Badge: {
        baseStyle: {
          fontFamily: 'Lora, serif',
          fontWeight: 'medium',
          borderRadius: 'lg',
          backgroundColor: 'primary.100',
          color: 'primary.800',
        },
      },
    },
    animations: {
      transition: '0.3s ease-in-out',
      button: 'all 0.3s ease-in-out',
      hover: 'float 3s ease-in-out infinite',
    },
  },

  retroWave: {
    name: "Retro Wave",
    fonts: {
      heading: `'Syncopate', sans-serif`,
      body: `'Quicksand', sans-serif`,
    },
    colors: {
      primary: {
        50: '#FDF2F8',
        100: '#FCE7F3',
        200: '#FBCFE8',
        300: '#F9A8D4',
        400: '#F472B6',
        500: '#EC4899',
        600: '#DB2777',
        700: '#BE185D',
        800: '#9D174D',
        900: '#831843',
      },
      secondary: {
        50: '#F5F3FF',
        100: '#EDE9FE',
        200: '#DDD6FE',
        300: '#C4B5FD',
        400: '#A78BFA',
        500: '#8B5CF6',
        600: '#7C3AED',
        700: '#6D28D9',
        800: '#5B21B6',
        900: '#4C1D95',
      },
    },
    shadows: {
      outline: '0 0 0 3px rgba(236, 72, 153, 0.6)',
      button: '0 0 20px rgba(236, 72, 153, 0.4)',
      card: '0 0 30px rgba(236, 72, 153, 0.2)',
      text: '2px 2px 0px rgba(236, 72, 153, 0.8)',
    },
    styles: {
      global: (props) => ({
        body: {
          bg: '#0F172A',
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzBGMTcyQSI+PC9yZWN0PjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMTAwIiB5Mj0iMTAwIiBzdHJva2U9IiNFQzQ4OTkiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIj48L2xpbmU+PC9zdmc+')",
          color: '#F8FAFC',
          fontFamily: 'Quicksand, sans-serif',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          fontFamily: 'Syncopate, sans-serif',
          letterSpacing: '2px',
          fontWeight: 'bold',
          borderRadius: '0',
          textTransform: 'uppercase',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          _before: {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.2), transparent)',
            transition: 'left 0.5s ease',
          },
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)',
            _before: {
              left: '100%',
            },
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
      },
      Heading: {
        baseStyle: {
          fontFamily: 'Syncopate, sans-serif',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          textShadow: '2px 2px 0px rgba(236, 72, 153, 0.8)',
        },
      },
      Input: {
        baseStyle: {
          field: {
            borderRadius: '0',
            borderWidth: '2px',
            fontFamily: 'Quicksand, sans-serif',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            _focus: {
              borderColor: 'primary.500',
              boxShadow: '0 0 0 3px rgba(236, 72, 153, 0.2)',
            },
          },
        },
      },
      Badge: {
        baseStyle: {
          fontFamily: 'Syncopate, sans-serif',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderRadius: '0',
          backgroundColor: 'primary.900',
          color: 'primary.100',
          border: '2px solid',
          borderColor: 'primary.500',
        },
      },
    },
    animations: {
      transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      button: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      hover: 'glitch 0.3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
    },
  },

  minimalist: {
    name: "Minimalist",
    fonts: {
      heading: `'Montserrat', sans-serif`,
      body: `'Open Sans', sans-serif`,
    },
    colors: {
      primary: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
      },
      secondary: {
        50: '#FAFAFA',
        100: '#F4F4F5',
        200: '#E4E4E7',
        300: '#D4D4D8',
        400: '#A1A1AA',
        500: '#71717A',
        600: '#52525B',
        700: '#3F3F46',
        800: '#27272A',
        900: '#18181B',
      },
    },
    shadows: {
      outline: '0 0 0 1px rgba(100, 116, 139, 0.6)',
      button: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode('#FFFFFF', '#0F172A')(props),
          color: mode('#1E293B', '#F8FAFC')(props),
          fontFamily: 'Open Sans, sans-serif',
          transition: 'all 0.2s ease',
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 'medium',
          borderRadius: 'sm',
          transition: 'all 0.2s ease',
          _hover: {
            transform: 'translateY(-1px)',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
      },
      Heading: {
        baseStyle: {
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 'bold',
          letterSpacing: '-0.5px',
        },
      },
      Input: {
        baseStyle: {
          field: {
            borderRadius: 'sm',
            borderWidth: '1px',
            fontFamily: 'Open Sans, sans-serif',
            transition: 'all 0.2s ease',
            _focus: {
              borderColor: 'primary.500',
              boxShadow: '0 0 0 1px rgba(100, 116, 139, 0.2)',
            },
          },
        },
      },
      Badge: {
        baseStyle: {
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 'medium',
          borderRadius: 'sm',
          backgroundColor: 'primary.100',
          color: 'primary.700',
        },
      },
    },
    animations: {
      transition: '0.2s ease',
      button: 'all 0.2s ease',
      hover: 'none',
    },
  },

  zenGarden: {
    name: "Zen Garden",
    colors: {
      primary: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
      },
      secondary: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
      },
      background: {
        light: '#f0fdfa',
        dark: '#134e4a',
      },
    },
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Lora', serif",
    },
    styles: {
      global: {
        body: {
          bg: 'background.light',
          color: 'gray.800',
        },
      },
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: 'none',
          fontWeight: 'normal',
          _hover: {
            opacity: 0.8,
          },
        },
      },
    },
    animations: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
    },
  },

  candyland: {
    name: "Candyland",
    colors: {
      primary: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
      },
      secondary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
      background: {
        light: '#fff5f7',
        dark: '#831843',
      },
    },
    fonts: {
      heading: "'Comic Neue', cursive",
      body: "'Quicksand', sans-serif",
    },
    styles: {
      global: {
        body: {
          bg: 'background.light',
          color: 'gray.800',
        },
      },
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: 'full',
          fontWeight: 'bold',
          _hover: {
            transform: 'scale(1.1) rotate(5deg)',
          },
        },
      },
    },
    animations: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        bounce: 'bounce 1s ease-in-out infinite',
      },
    },
  },

  arcaneScroll: {
    name: "Arcane Scroll",
    colors: {
      primary: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
      },
      secondary: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
      },
      background: {
        light: '#faf5ff',
        dark: '#581c87',
      },
    },
    fonts: {
      heading: "'MedievalSharp', cursive",
      body: "'Crimson Text', serif",
    },
    styles: {
      global: {
        body: {
          bg: 'background.light',
          color: 'gray.800',
        },
      },
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: 'md',
          fontWeight: 'bold',
          _hover: {
            boxShadow: '0 0 15px var(--chakra-colors-primary-500)',
          },
        },
      },
    },
    animations: {
      keyframes: {
        enchant: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        enchant: 'enchant 0.5s ease-out',
      },
    },
  },
}

// Define configuration for color mode
const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

// Create the base theme
const baseTheme = {
  config,
  ...themeVariants.default,
}

// Create themes object to be used in the ThemeContext
export const themesConfig = Object.fromEntries(
  Object.entries(themeVariants).map(([key, theme]) => [key, theme.name])
);

// Current active theme variant (besides color mode)
export const defaultThemeVariant = 'otakuRealm'

// Function to get the current theme based on variant
export const getThemeByVariant = (variant) => {
  return themeVariants[variant] || themeVariants.default;
};

// Export the default theme
const theme = extendTheme(baseTheme);
export default theme; 