import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const collapsed = state === "collapsed";

  const pages = Array.from({ length: 12 }, (_, i) => ({
    number: i + 1,
    url: i === 0 ? "/" : `/page${i + 1}`,
  }));

  const isActive = (url: string) => location.pathname === url;

  return (
    <Sidebar collapsible="icon" className={collapsed ? "w-14" : "w-48"}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {pages.map((page) => (
                <SidebarMenuItem key={page.number}>
                  <SidebarMenuButton asChild isActive={isActive(page.url)}>
                    <NavLink
                      to={page.url}
                      className="flex items-center justify-center"
                    >
                      <span className="font-bold text-lg">
                        {page.number}
                      </span>
                      {!collapsed && (
                        <span className="ml-2">Página {page.number}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
