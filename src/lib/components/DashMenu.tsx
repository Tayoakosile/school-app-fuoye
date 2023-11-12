

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack, useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  VStack
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass, FiMenu
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import Link from 'next/link'
import useACProfile from 'hooks/useACProfile'

interface LinkItemProps {
  name: string
  href?: string
  icon: IconType
}

interface NavItemProps extends FlexProps {
  icon: IconType
  href?: string
  children: React.ReactNode
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome,href:"/dashboard"  },
  { name: 'Files', icon: FiTrendingUp,href:"/files" },
  { name: 'Profile', icon: FiCompass,href:"/profile" },
  
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <VStack align='flex-start' pl='2'>

      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
      </VStack>
    </Box>
  )
}

const NavItem = ({ icon, children,href, ...rest }: NavItemProps) => {
  return (
    <Box>
      <Link href={`${href}`}>

      
      <>
        <Button fontWeight="500" fontSize="xl" variant="ghost" size='lg'>
        {children}
        </Button>
      </>
      </Link>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const {profileInfo} = useACProfile()
  const userInfo = profileInfo.data?.data
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>

        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'md'}
                  name={`${userInfo?.first_name} ${userInfo?.last_name}`}
                  src={`${userInfo?.photoUrl}`}
                />
                
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Link href='/profile'>
              <MenuItem>Profile</MenuItem>
                </Link>
              {/* <MenuItem>Settings</MenuItem> */}
              
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const SidebarWithHeader = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box >
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      
    </Box>
  )
}

export default SidebarWithHeader