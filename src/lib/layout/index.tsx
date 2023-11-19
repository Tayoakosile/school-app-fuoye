import { Box } from "@chakra-ui/react";
import usePageResponsive from "hooks/usePageResponsive";
// import { DesktopMenu, MobileMenu } from 'lib/components/Menu/Menu';
import type { ReactNode } from "react";

// import usePageResponsive from '../../hooks/usePageResponsive';
import { useRouter } from "next/router";
import SidebarWithHeader from "lib/components/DashMenu";
import AdminNav from 'lib/components/AdminComp/AdminNav';
type LayoutProps = {
  children: ReactNode;
};

const MobileLayout = ({ children }: { children: ReactNode }) => {
  const route = useRouter();


  if(route.pathname?.includes("admin")){
// if()
    return <AdminNav>{children}</AdminNav>
  }
  if (route.pathname == "/" || route.pathname?.includes("signup") || route.pathname == "/forgot-password" 
  
  ) {
    return <Box as="main">{children}</Box>;
  }
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <SidebarWithHeader />
      <Box px="2">
        <Box as="main" pb="24">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

const DesktopLayout = ({ children }: { children: ReactNode }) => {
  const route = useRouter();
  if(route.pathname?.includes("admin")){
    // if()
        return <AdminNav>{children}</AdminNav>
      }
  return (

    <Box margin="0 auto" w="100%" transition="0.5s ease-out">
      <Box
        as="main"
        flex="1"
        overflowX={"hidden"}
        alignSelf="flex-start"
        h="100vh"
        overflowY={"auto"}
      >
        {children}
      </Box>
    </Box>

  );
};
const Layout = ({ children }: LayoutProps) => {
  const { isPageTabletSize } = usePageResponsive();

  return (
    <Box>
      {isPageTabletSize ? (
        <DesktopLayout> {children}</DesktopLayout>
      ) : (
        <MobileLayout>{children}</MobileLayout>
      )}
    </Box>
  );
};

export default Layout;
