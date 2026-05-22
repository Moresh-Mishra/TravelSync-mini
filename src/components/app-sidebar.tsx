'use client';

import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from '@/components/ui/sidebar';

import {
  Home,
  Settings,
  PlusCircle,
  HelpCircle,
  LogOut,
  Landmark,
  Globe,
  CalendarCheck,
} from 'lucide-react';

import { Logo } from './logo';
import { usePathname } from 'next/navigation';
import { UserNav } from './user-nav';
import { useAuth } from '@/context/auth-context';
import { useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useTranslation } from 'react-i18next';
import i18n from '@/app/i18n';
import { useEffect } from 'react';

export default function AppSidebar() {
  const pathname = usePathname();

  const { user, logout } = useAuth();

  const { isOpen } = useSidebar();

  const { t } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const isActive = (path: string) =>
    pathname === path ||
    (path.length > 1 && pathname.startsWith(path));

  return (
    <div
      className="
        h-screen
        bg-[#070B1A]
        flex
        flex-col
        justify-between
      "
    >

      {/* HEADER */}
      <SidebarHeader
        className="
          px-4
          pt-5
          pb-8
          border-b
          border-white/10
        "
      >
        <Logo showText={isOpen} />
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent className="px-3 py-6">

        <SidebarMenu className="space-y-3">

          {/* DASHBOARD */}
          <SidebarMenuItem>
            <Link href="/dashboard" className="w-full">

              <SidebarMenuButton
                isActive={isActive('/dashboard')}
                tooltip={t('dashboard')}
                className="
                  h-14
                  rounded-2xl
                  px-4
                  text-[15px]
                  font-medium
                  text-gray-300
                  transition-all
                  duration-300
                  hover:bg-white/5
                  hover:text-white
                  data-[active=true]:bg-gradient-to-r
                  data-[active=true]:from-purple-600
                  data-[active=true]:to-blue-500
                  data-[active=true]:text-white
                  data-[active=true]:shadow-lg
                  data-[active=true]:shadow-purple-500/20
                "
              >
                <Home className="h-5 w-5" />

                <span>{t('dashboard')}</span>
              </SidebarMenuButton>

            </Link>
          </SidebarMenuItem>

          {/* CREATE TRIP */}
          <SidebarMenuItem>
            <Link href="/trips/new" className="w-full">

              <SidebarMenuButton
                isActive={isActive('/trips/new')}
                tooltip={t('createTrip')}
                className="
                  h-14
                  rounded-2xl
                  px-4
                  text-[15px]
                  font-medium
                  text-gray-300
                  transition-all
                  duration-300
                  hover:bg-white/5
                  hover:text-white
                  data-[active=true]:bg-gradient-to-r
                  data-[active=true]:from-purple-600
                  data-[active=true]:to-blue-500
                  data-[active=true]:text-white
                "
              >
                <PlusCircle className="h-5 w-5" />

                <span>{t('createTrip')}</span>
              </SidebarMenuButton>

            </Link>
          </SidebarMenuItem>

          {/* BUDGET */}
          <SidebarMenuItem>
            <Link href="/budget" className="w-full">

              <SidebarMenuButton
                isActive={isActive('/budget')}
                tooltip={t('budget')}
                className="
                  h-14
                  rounded-2xl
                  px-4
                  text-[15px]
                  font-medium
                  text-gray-300
                  transition-all
                  duration-300
                  hover:bg-white/5
                  hover:text-white
                  data-[active=true]:bg-gradient-to-r
                  data-[active=true]:from-purple-600
                  data-[active=true]:to-blue-500
                  data-[active=true]:text-white
                "
              >
                <Landmark className="h-5 w-5" />

                <span>{t('budget')}</span>
              </SidebarMenuButton>

            </Link>
          </SidebarMenuItem>

          {/* UPDATES */}
          <SidebarMenuItem>
            <Link href="/updates" className="w-full">

              <SidebarMenuButton
                isActive={isActive('/updates')}
                tooltip={t('updates')}
                className="
                  h-14
                  rounded-2xl
                  px-4
                  text-[15px]
                  font-medium
                  text-gray-300
                  transition-all
                  duration-300
                  hover:bg-white/5
                  hover:text-white
                  data-[active=true]:bg-gradient-to-r
                  data-[active=true]:from-purple-600
                  data-[active=true]:to-blue-500
                  data-[active=true]:text-white
                "
              >
                <CalendarCheck className="h-5 w-5" />

                <span>{t('updates')}</span>
              </SidebarMenuButton>

            </Link>
          </SidebarMenuItem>

        </SidebarMenu>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter
        className="
          border-t
          border-white/10
          pt-5
          px-3
          flex
          flex-col
          gap-5
        "
      >

        {/* LANGUAGE */}
        {isOpen ? (
          <div className="px-1">

            <Select
              defaultValue={i18n.language}
              onValueChange={handleLanguageChange}
            >

              <SelectTrigger
                className="
                  w-full
                  h-12
                  rounded-2xl
                  border-white/10
                  bg-white/5
                "
              >
                <div className="flex items-center gap-2">

                  <Globe className="h-4 w-4" />

                  <SelectValue
                    placeholder={t('language')}
                  />
                </div>

              </SelectTrigger>

              <SelectContent>
                <SelectItem value="en">
                  English
                </SelectItem>

                <SelectItem value="es">
                  Español
                </SelectItem>

                <SelectItem value="fr">
                  Français
                </SelectItem>

                <SelectItem value="hi">
                  हिन्दी
                </SelectItem>
              </SelectContent>

            </Select>

          </div>
        ) : (
          <div className="px-2">

            <Select
              defaultValue={i18n.language}
              onValueChange={handleLanguageChange}
            >

              <SelectTrigger
                className="
                  w-full
                  h-12
                  justify-center
                  rounded-2xl
                  border-white/10
                  bg-white/5
                "
              >
                <SelectValue>
                  <Globe className="h-4 w-4" />
                </SelectValue>

              </SelectTrigger>

              <SelectContent>
                <SelectItem value="en">
                  English
                </SelectItem>

                <SelectItem value="es">
                  Español
                </SelectItem>

                <SelectItem value="fr">
                  Français
                </SelectItem>

                <SelectItem value="hi">
                  हिन्दी
                </SelectItem>
              </SelectContent>

            </Select>

          </div>
        )}

        <SidebarSeparator />

        {/* USER */}
        <div
          className={cn(
            `
            flex
            flex-col
            gap-4
            rounded-2xl
            bg-white/5
            p-4
            `,
            !isOpen && 'items-center'
          )}
        >

          {user ? (
            <UserNav
              user={user}
              isSidebarOpen={isOpen}
            />
          ) : null}

          {/* ACTIONS */}
          {isOpen && (
            <div className="flex w-full items-center justify-center gap-3">

              {/* SETTINGS */}
              <Link href="/settings">

                <SidebarMenuButton
                  size="icon"
                  tooltip={t('settings')}
                  className="
                    h-11
                    w-11
                    rounded-xl
                    border
                    border-white/10
                    bg-[#111827]
                    hover:bg-[#1F2937]
                    transition-all
                    duration-300
                  "
                >
                  <Settings className="h-5 w-5" />
                </SidebarMenuButton>

              </Link>

              {/* HELP */}
              <Link href="/help">

                <SidebarMenuButton
                  size="icon"
                  tooltip={t('help')}
                  className="
                    h-11
                    w-11
                    rounded-xl
                    border
                    border-white/10
                    bg-[#111827]
                    hover:bg-[#1F2937]
                    transition-all
                    duration-300
                  "
                >
                  <HelpCircle className="h-5 w-5" />
                </SidebarMenuButton>

              </Link>

              {/* LOGOUT */}
              <button
                onClick={logout}
                className="
                  h-11
                  w-11
                  rounded-xl
                  border
                  border-red-500/20
                  bg-red-500/10
                  hover:bg-red-500/20
                  text-red-400
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                "
              >
                <LogOut className="h-5 w-5" />
              </button>

            </div>
          )}

        </div>

      </SidebarFooter>
    </div>
  );
}