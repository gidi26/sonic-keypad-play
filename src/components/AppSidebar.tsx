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

  const pages = [
    { number: 1, name: "C ou Am", url: "/" },
    { number: 2, name: "C# ou A#m", url: "/page2" },
    { number: 3, name: "D ou Bm", url: "/page3" },
    { number: 4, name: "D# ou Cm", url: "/page4" },
    { number: 5, name: "E ou C#m", url: "/page5" },
    { number: 6, name: "F ou Dm", url: "/page6" },
    { number: 7, name: "F# ou D#m", url: "/page7" },
    { number: 8, name: "G ou Em", url: "/page8" },
    { number: 9, name: "G# ou Fm", url: "/page9" },
    { number: 10, name: "A ou F#m", url: "/page10" },
    { number: 11, name: "A# ou Gm", url: "/page11" },
    { number: 12, name: "B ou G#m", url: "/page12" },
  ];

  const isActive = (url: string) => location.pathname === url;

  return (
    <Sidebar collapsible="icon" className={collapsed ? "w-16" : "w-48"}>
      <SidebarContent className="mt-[50px]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-8">
              {pages.map((page) => (
                <SidebarMenuItem key={page.number}>
                  <SidebarMenuButton asChild isActive={isActive(page.url)}>
                    <NavLink
                      to={page.url}
                      className="flex items-center justify-center"
                    >
                      <span className="font-bold text-sm whitespace-nowrap">
                        {page.name}
                      </span>
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
