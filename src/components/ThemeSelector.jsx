import { Menu, MenuButton, MenuList, MenuItem, IconButton, Box, Text, VStack, HStack, useColorMode, useTheme } from '@chakra-ui/react'
import { FaPalette, FaGamepad, FaBolt, FaLeaf, FaCandyCane, FaScroll, FaPuzzlePiece } from 'react-icons/fa'
import { useThemeVariant } from '../context/ThemeContext'

const ThemeSelector = ({ className }) => {
  const { colorMode } = useColorMode()
  const { themeVariant, setThemeVariant } = useThemeVariant()
  const theme = useTheme()

  const themes = [
    {
      id: 'default',
      name: 'Default',
      icon: FaPalette,
      colors: {
        primary: '#0093FF',
        secondary: '#547BFF',
      },
    },
    {
      id: 'otakuRealm',
      name: 'Otaku Realm',
      icon: FaGamepad,
      colors: {
        primary: '#FF2AFF',
        secondary: '#00B8F5',
      },
    },
    {
      id: 'neonFuture',
      name: 'Neon Future',
      icon: FaBolt,
      colors: {
        primary: '#00D5FF',
        secondary: '#F700C6',
      },
    },
    {
      id: 'avengerMode',
      name: 'Avenger Mode',
      icon: FaPalette,
      colors: {
        primary: '#FF5333',
        secondary: '#0077E6',
      },
    },
    {
      id: 'pixelPlayground',
      name: 'Pixel Playground',
      icon: FaPuzzlePiece,
      colors: {
        primary: '#FFCC00',
        secondary: '#00D87F',
      },
    },
    {
      id: 'zenGarden',
      name: 'Zen Garden',
      icon: FaLeaf,
      colors: {
        primary: '#14b8a6',
        secondary: '#a855f7',
      },
    },
    {
      id: 'candyland',
      name: 'Candyland',
      icon: FaCandyCane,
      colors: {
        primary: '#ec4899',
        secondary: '#22c55e',
      },
    },
    {
      id: 'arcaneScroll',
      name: 'Arcane Scroll',
      icon: FaScroll,
      colors: {
        primary: '#a855f7',
        secondary: '#f97316',
      },
    },
  ]

  const currentTheme = themes.find(t => t.id === themeVariant) || themes[0]

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={
          <HStack spacing={2}>
            <Box as={currentTheme.icon} size="20px" color={currentTheme.colors.primary} />
            <Text fontSize="sm" fontWeight="medium" color={colorMode === 'dark' ? 'white' : 'gray.800'}>
              {currentTheme.name}
            </Text>
          </HStack>
        }
        variant="ghost"
        aria-label="Select theme"
        className={className}
        color={colorMode === 'dark' ? 'white' : 'gray.800'}
        px={4}
        py={2}
        _hover={{
          bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.50',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
        transition="all 0.2s"
      />
      <MenuList
        bg={colorMode === 'dark' ? 'gray.800' : 'white'}
        borderColor={colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.200'}
        boxShadow="xl"
        p={2}
        zIndex={1500}
      >
        {themes.map((theme) => (
          <MenuItem
            key={theme.id}
            onClick={() => setThemeVariant(theme.id)}
            bg={themeVariant === theme.id ? (colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.50') : 'transparent'}
            _hover={{
              bg: colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.100',
              transform: 'translateY(-1px)',
            }}
            borderRadius="md"
            p={2}
            mb={1}
            transition="all 0.2s"
          >
            <HStack spacing={3}>
              <Box
                as={theme.icon}
                size="20px"
                color={theme.colors.primary}
              />
              <VStack align="start" spacing={0}>
                <Text fontSize="sm" fontWeight="medium">
                  {theme.name}
                </Text>
                <HStack spacing={1} mt={1}>
                  <Box w="12px" h="12px" borderRadius="full" bg={theme.colors.primary} />
                  <Box w="12px" h="12px" borderRadius="full" bg={theme.colors.secondary} />
                </HStack>
              </VStack>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default ThemeSelector 