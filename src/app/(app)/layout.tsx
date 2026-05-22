'use client';

import AppSidebar from '@/components/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#050816] text-white">

        {/* Sidebar */}
        <aside
          className="
            hidden
            md:block
            w-[280px]
            min-w-[280px]
            border-r
            border-white/10
            bg-[#070B1A]
          "
        >
          <AppSidebar />
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-x-hidden">

          <div
            className="
              max-w-[1600px]
              mx-auto
              px-6
              md:px-10
              py-8
            "
          >
            {children}
          </div>

        </main>

      </div>
    </SidebarProvider>
  );
}