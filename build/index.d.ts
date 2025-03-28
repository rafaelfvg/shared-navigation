declare module "shared-navigation-rafaelfvg" {
    import React from "react";
  
    export interface MenuItem {
      name: string;
      href: string;
      permissions: string[];
      submenu?: MenuItem[];
    }
  
    export interface SidebarMenuProps {
      items: MenuItem[];
      userPermissions: string[];
    }
  
    const SidebarMenu: React.FC<SidebarMenuProps>;
  
    export default SidebarMenu;
  }
  