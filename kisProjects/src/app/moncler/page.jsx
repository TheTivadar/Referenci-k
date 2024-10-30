import React from 'react'
import VerticalAccordion from '../ui/moncler/VerticalAccordion'
import Encypt from '../ui/button/EncryptButton'
import { AnimatedHamburger } from '../ui/button/animatedHamburger'
import SwipeCards from '../ui/cards/swipeCards'
import DragCards from '../ui/cards/dragCards'
import HoverCard from '../ui/cards/hoverCard'
import HoverDevCards from '../ui/cards/hoverDevCard'
import SwipeCarousel from '../ui/carousel/swipeCarousel'
import HorizontalScroll from '../ui/carousel/horizontalScrollCarousel'
import ShiftingDropDown from '../ui/dropdownMenu/valtozoMenu'
import StaggeredDropDown from '../ui/dropdownMenu/stagerredDropdown'
import Flyout from '../ui/dropdownMenu/flyoutLink'
import RevealBento from '../ui/grids/revealBento'
import { SmoothScrollHero } from '../ui/hero/scrollImages'
import AuroraHero from '../ui/hero/auraHero'
import ShuffleHero from '../ui/hero/shuffleHero'
import { TextParallaxContentExample } from '../ui/features/textParallax'
import { CustomKanban } from '../ui/features/kanbanBoards'

const Moncler = () => {
  return (
    <div>
       <SmoothScrollHero />
       <VerticalAccordion />
       <Encypt />
       <AnimatedHamburger />
       <SwipeCards />
       <HoverCard />
       <HoverDevCards />
       <HorizontalScroll />
       <StaggeredDropDown />
       <Flyout />
       {/*<AuroraHero />*/}
      <ShuffleHero />
      <TextParallaxContentExample />
      <CustomKanban />
    </div>
  )
}

export default Moncler