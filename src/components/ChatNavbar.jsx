import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  HStack,
  Icon
} from '@chakra-ui/react';
import { 
  FaSun, 
  FaMoon, 
  FaUserCircle, 
  FaCog, 
  FaSignOutAlt 
} from 'react-icons/fa';
import ThemeSelector from './ThemeSelector';
import { useThemeVariant } from '../context/ThemeContext';

const ChatNavbar = ({ onSignOut, userName = 'User', userAvatar }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { themeVariant } = useThemeVariant();
  
  // Get theme-based colors
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const brandColor = useColorModeValue('primary.500', 'primary.300');
  
  return (
    <Box 
      as="nav" 
      bg={bg} 
      px={4} 
      py={2} 
      position="sticky" 
      top={0} 
      zIndex={10}
      borderBottom="1px"
      borderColor={borderColor}
      shadow="sm"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Brand */}
        <Text 
          fontSize="xl" 
          fontWeight="bold" 
          color={brandColor}
        >
          ChatApp
        </Text>
        
        {/* Action buttons */}
        <HStack spacing={3}>
          {/* Theme Selector */}
          <Box className="theme-selector">
            <ThemeSelector />
          </Box>
          
          {/* Dark/Light Mode Toggle */}
          <IconButton
            className="dark-mode-toggle"
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            size="md"
            variant="ghost"
          />
          
          {/* Profile Menu */}
          <Menu>
            <MenuButton
              as={Box}
              rounded="full"
              cursor="pointer"
            >
              <Avatar 
                size="sm" 
                name={userName} 
                src={userAvatar} 
              />
            </MenuButton>
            <MenuList>
              <MenuItem icon={<Icon as={FaUserCircle} />}>
                My Profile
              </MenuItem>
              <MenuItem icon={<Icon as={FaCog} />}>
                Settings
              </MenuItem>
              <MenuDivider />
              <MenuItem 
                icon={<Icon as={FaSignOutAlt} />}
                onClick={onSignOut}
              >
                Sign Out
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};

export default ChatNavbar; 