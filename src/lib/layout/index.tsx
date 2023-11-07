import { Box, HStack } from '@chakra-ui/react';
import usePageResponsive from 'hooks/usePageResponsive';
import { DesktopMenu, MobileMenu } from 'lib/components/Menu/Menu';
// import { DesktopMenu, MobileMenu } from 'lib/components/Menu/Menu';
import type { ReactNode } from "react";

// import usePageResponsive from '../../hooks/usePageResponsive';
import Header from "./Header";
import { useRouter } from 'next/router';


type LayoutProps = {
  children: ReactNode;
};

const MobileLayout = ({ children }: { children: ReactNode }) => {
  const route = useRouter()
  if(route.pathname?.includes("login") || route.pathname?.includes("signup")  ){
    return <Box as="main" >
    {children}
  </Box>
  }
  return <>
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Box my="8" px='2'>
        <Header />
        <Box as="main" pb='24'>
          {children}
        </Box>
        <MobileMenu />
      </Box>
    </Box>

  </>
}

const DesktopLayout = ({ children }: { children: ReactNode }) => {
  return <>
    <Box margin="0 auto" w='100%' transition="0.5s ease-out">
      <HStack w='full' h='100vh' overflowY={'auto'}>
        <DesktopMenu />
        <Box as="main" flex='0.8' px='4' overflowX={'hidden'} alignSelf='flex-start' h='100vh' overflowY={'auto'} >
          {children}
        </Box>
      </HStack>
    </Box>

  </>
}
const Layout = ({ children }: LayoutProps) => {
  const { isPageTabletSize } = usePageResponsive()

  return (
    <>
      {isPageTabletSize
        ?
        <DesktopLayout> {children}</DesktopLayout>
        :
        <MobileLayout>
          {children}
        </MobileLayout>

      }
    </>

  );
};

export default Layout;
