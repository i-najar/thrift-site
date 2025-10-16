import { TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TabsTriggerItemProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

export function TabsTriggerItem({
  value,
  children,
  className,
}: TabsTriggerItemProps) {
  return (
    <TabsTrigger
      value={value}
      className={cn(
        "px-6 py-2 text-base rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:font-semibold",
        "hover:bg-white hover:text-foreground hover:font-semibold",
        "data-[state=active]:text-foreground data-[state=active]:bg-white",
        className
      )}
    >
      {children}
    </TabsTrigger>
  );
}
