import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { BookUser, Brain, House } from "lucide-react";
import { Link } from "react-router-dom";

export type StudentPage = 'about'  | 'authors' | 'make-prediction';

interface StudentsNavigationProps {
  activePage: StudentPage;
}

function PagesNavigation({ activePage }: StudentsNavigationProps) {

  return (
     <div className="fixed bottom-0 left-0 w-full border-t-2 bg-background z-20">
      <div className="flex justify-center p-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="px-2 sm:px-4">
              <NavigationMenuLink asChild className={`flex flex-col items-center justify-center gap-1 p-2 cursor-pointer rounded-lg`}>
                <Link to={`/about`}>
                    <House className="h-6 w-6 sm:h-8 sm:w-8" />
                    <p className={`text-1xl font-bold ${activePage === 'about' ? 'text-lime-500 ': ''}`}>
                        Início
                    </p>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-2 sm:px-4">
              <NavigationMenuLink asChild className={`flex flex-col items-center justify-center gap-1 p-2 cursor-pointer rounded-lg`}>
                <Link to={`/make-prediction`}>
                    <Brain className="h-6 w-6 sm:h-8 sm:w-8" />
                    <p className={`text-1xl font-bold ${activePage === 'make-prediction' ? 'text-lime-500 ': ''}`}>
                        Fazer Previsão
                    </p>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-2 sm:px-4">
              <NavigationMenuLink asChild className={`flex flex-col items-center justify-center gap-1 p-2 cursor-pointer rounded-lg`}>
                <Link to={`/authors`}>
                    <BookUser className="h-6 w-6 sm:h-8 sm:w-8" />
                    <p className={`text-1xl font-bold ${activePage === 'authors' ? 'text-lime-500 ': ''}`}>
                        Autores
                    </p>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

export default PagesNavigation
