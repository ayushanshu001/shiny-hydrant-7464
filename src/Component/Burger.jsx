import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,IconButton, Flex 
  } from '@chakra-ui/react'
  import { AddIcon,HamburgerIcon,ExternalLinkIcon,RepeatIcon,EditIcon} from '@chakra-ui/icons'
import React from 'react'
import style from '../Styles/Navbar.module.css'

const Burger = () => {
  return (
<div>
<Menu >
  <MenuButton 
    display={{base:"flex", sm:'flex', md:'flex',lg:'none'}}
    as={IconButton}
    // aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} command='⌘T'>
      New Tab
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘O'>
      Open File...
    </MenuItem>
  </MenuList>
</Menu>
</div>
  )
}

export default Burger