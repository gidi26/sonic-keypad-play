import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface SidebarToggleProps {
  className?: string;
}

export function SidebarToggle({ className }: SidebarToggleProps) {
  const { open, openMobile, isMobile, toggleSidebar } = useSidebar();
  
  const isOpen = isMobile ? openMobile : open;

  return (
    <button
      onClick={toggleSidebar}
      className={cn(
        "p-2 z-50 transition-colors",
        isOpen && "fixed left-[var(--sidebar-width)] top-2",
        className
      )}
      style={isOpen ? { '--sidebar-width': '256px' } as React.CSSProperties : undefined}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
    >
      {isOpen ? (
        <ChevronLeft className="w-6 h-6" />
      ) : (
        <ChevronRight className="w-6 h-6" />
      )}
    </button>
  );
}
