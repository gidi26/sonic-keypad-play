import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const collapsed = state === "collapsed";
  const [openMovements, setOpenMovements] = useState<number[]>([1]);
  const [mainMenuOpen, setMainMenuOpen] = useState(true);
  

  const tonalities = [
    { number: 1, name: "C ou Am" },
    { number: 2, name: "C# ou A#m" },
    { number: 3, name: "D ou Bm" },
    { number: 4, name: "D# ou Cm" },
    { number: 5, name: "E ou C#m" },
    { number: 6, name: "F ou Dm" },
    { number: 7, name: "F# ou D#m" },
    { number: 8, name: "G ou Em" },
    { number: 9, name: "G# ou Fm" },
    { number: 10, name: "A ou F#m" },
    { number: 11, name: "A# ou Gm" },
    { number: 12, name: "B ou G#m" },
  ];

  const movements = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `MOV ${i + 1}`,
  }));

  const toggleMovement = (movementId: number) => {
    setOpenMovements(prev => 
      prev.includes(movementId) 
        ? prev.filter(id => id !== movementId)
        : [...prev, movementId]
    );
  };

  const isActive = (movementId: number, tonalityId: number) => {
    return location.pathname === `/movimento/${movementId}/tonalidade/${tonalityId}`;
  };

  const isMovementActive = (movementId: number) => {
    return tonalities.some(t => isActive(movementId, t.number));
  };

  return (
    <Sidebar collapsible="icon" className={`${collapsed ? "w-16" : "w-64"} !bg-[#c6c3c3] dark:!bg-[hsl(0_0%_20%)]`}>
      <SidebarContent className="mt-[50px]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Orbit Menu */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`w-full justify-between font-bold ${
                    location.pathname === '/harmonia-funcional-2'
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-black text-white dark:bg-white dark:text-black hover:bg-red-500 hover:text-white dark:hover:bg-red-500'
                  }`}
                >
                  <NavLink to="/harmonia-funcional-2">
                    <span>{collapsed ? "ORB" : "ORBIT"}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible open={mainMenuOpen} onOpenChange={setMainMenuOpen}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className={`w-full justify-between font-bold ${
                      mainMenuOpen 
                        ? 'bg-red-500 text-white hover:bg-red-600' 
                        : 'bg-black text-white dark:bg-white dark:text-black hover:bg-red-500 hover:text-white dark:hover:bg-red-500'
                    }`}>
                      <span>{collapsed ? "MOV 251" : "MOVIMENTOS 251"}</span>
                      {!collapsed && (
                        <ChevronDown
                          className={`transition-transform ${
                            mainMenuOpen ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="space-y-1">
                      {movements.map((movement) => (
                        <Collapsible
                          key={movement.id}
                          open={openMovements.includes(movement.id)}
                          onOpenChange={() => toggleMovement(movement.id)}
                        >
                          <SidebarMenuSubItem>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuSubButton
                                className={`w-full justify-between hover:bg-red-500 hover:text-white ${
                                  isMovementActive(movement.id) ? 'bg-red-600 text-white' : ''
                                }`}
                              >
                                <span className="font-bold text-sm">{collapsed ? `MOV ${movement.id}` : movement.name}</span>
                                {!collapsed && (
                                  <ChevronDown
                                    className={`transition-transform ${
                                      openMovements.includes(movement.id) ? 'rotate-180' : ''
                                    }`}
                                  />
                                )}
                              </SidebarMenuSubButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub className="ml-4">
                                {tonalities.map((tonality) => (
                                  <SidebarMenuSubItem key={tonality.number}>
                                    <SidebarMenuSubButton
                                      asChild
                                      isActive={isActive(movement.id, tonality.number)}
                                      className="data-[active=true]:bg-black data-[active=true]:text-white dark:data-[active=true]:bg-white dark:data-[active=true]:text-black hover:bg-red-500 hover:text-white"
                                    >
                                      <NavLink
                                        to={`/movimento/${movement.id}/tonalidade/${tonality.number}`}
                                        className="w-full"
                                      >
                                        <span className="text-base">{tonality.name}</span>
                                      </NavLink>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                ))}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </SidebarMenuSubItem>
                        </Collapsible>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              
              {/* Harmonia Funcional Menu */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`w-full justify-between font-bold ${
                    location.pathname === '/harmonia-funcional'
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-black text-white dark:bg-white dark:text-black hover:bg-red-500 hover:text-white dark:hover:bg-red-500'
                  }`}
                >
                  <NavLink to="/harmonia-funcional">
                    <span>{collapsed ? "HF" : "HARMONIA FUNCIONAL"}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
