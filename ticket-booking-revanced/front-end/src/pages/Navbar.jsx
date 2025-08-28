import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Toggle } from "@radix-ui/react-toggle";
import { Bold, Italic } from "lucide-react";
import { useThemeStore } from "@/contexts/Theme";
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div>
      <nav className="bg-gray-900 text-white px-6 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Ticket Booking</h1>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-7">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/event"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Event
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/ticket"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Ticket
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/table"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Details
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Toggle variant="outline"
                onClick={toggleTheme} aria-label="Toggle italic">
                  <Switch className="" />
                </Toggle>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
