'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Button, type ButtonProps } from '@/components/ui/button';

/* -------------------------------------------------------------------------- */
/*                                   CONTEXT                                  */
/* -------------------------------------------------------------------------- */

interface SidebarContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDesktop: boolean;
}

const SidebarContext = React.createContext<
  SidebarContextProps | undefined
>(undefined);

export function useSidebar() {
  const context = React.useContext(SidebarContext);

  if (!context) {
    throw new Error(
      'useSidebar must be used within SidebarProvider'
    );
  }

  return context;
}

/* -------------------------------------------------------------------------- */
/*                                 PROVIDER                                   */
/* -------------------------------------------------------------------------- */

export function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(() => {
    setIsOpen(isDesktop);
  }, [isDesktop]);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isDesktop,
      }}
    >
      <TooltipProvider delayDuration={0}>
        {children}
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   SIDEBAR                                  */
/* -------------------------------------------------------------------------- */

export function Sidebar({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen, isDesktop } = useSidebar();

  if (isDesktop) {
    return (
      <aside
        data-collapsed={!isOpen}
        className={cn(
          `
          fixed
          left-0
          top-0
          z-50

          hidden
          h-screen

          border-r
          border-white/10

          bg-gradient-to-b
          from-[#09090B]
          via-[#0d0d14]
          to-[#111827]

          backdrop-blur-3xl

          transition-all
          duration-500
          ease-in-out

          md:flex

          w-[290px]

          data-[collapsed=true]:w-[88px]
          `,
          className
        )}
      >
        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-1/3
            h-72
            w-72
            rounded-full
            bg-violet-500/10
            blur-3xl
          "
        />

        <div
          className="
            relative
            flex
            h-full
            w-full
            flex-col
            overflow-hidden
          "
        >
          {children}
        </div>
      </aside>
    );
  }

  return (
    <Sheet>
      <SheetContent
        side="left"
        className="
          w-[290px]
          border-r
          border-white/10

          bg-[#09090B]/95

          p-0

          backdrop-blur-3xl
        "
      >
        <SheetTitle className="sr-only">
          Mobile Sidebar
        </SheetTitle>

        {children}
      </SheetContent>
    </Sheet>
  );
}

/* -------------------------------------------------------------------------- */
/*                               SIDEBAR INSET                                */
/* -------------------------------------------------------------------------- */

export function SidebarInset({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen, isDesktop } = useSidebar();

  return (
    <div
      className={cn(
        `
        transition-all
        duration-500
        ease-in-out
        `,
        isDesktop
          ? isOpen
            ? 'md:pl-[290px]'
            : 'md:pl-[88px]'
          : 'pl-0',
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  TRIGGER                                   */
/* -------------------------------------------------------------------------- */

export function SidebarTrigger({
  className,
  children,
  ...props
}: ButtonProps & {
  children: React.ReactNode;
}) {
  const { isOpen, setIsOpen, isDesktop } =
    useSidebar();

  const button = (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        `
        h-11
        w-11

        rounded-2xl

        border
        border-white/10

        bg-white/[0.04]

        backdrop-blur-xl

        transition-all
        duration-300

        hover:scale-105
        hover:bg-white/10
        `,
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );

  if (isDesktop) return button;

  return (
    <SheetTrigger asChild>
      {button}
    </SheetTrigger>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   HEADER                                   */
/* -------------------------------------------------------------------------- */

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isOpen } = useSidebar();

  return (
    <div
      ref={ref}
      className={cn(
        `
        flex
        h-[90px]
        items-center

        border-b
        border-white/10

        px-6

        transition-all
        duration-300
        `,
        !isOpen && 'justify-center px-0',
        className
      )}
      {...props}
    />
  );
});

SidebarHeader.displayName = 'SidebarHeader';

/* -------------------------------------------------------------------------- */
/*                                   CONTENT                                  */
/* -------------------------------------------------------------------------- */

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `
      flex-1

      overflow-y-auto
      overflow-x-hidden

      scrollbar-thin
      scrollbar-thumb-white/10
      scrollbar-track-transparent
      `,
      className
    )}
    {...props}
  />
));

SidebarContent.displayName = 'SidebarContent';

/* -------------------------------------------------------------------------- */
/*                                   FOOTER                                   */
/* -------------------------------------------------------------------------- */

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isOpen } = useSidebar();

  return (
    <div
      ref={ref}
      className={cn(
        `
        mt-auto

        border-t
        border-white/10

        bg-black/20

        p-4

        backdrop-blur-xl
        `,
        !isOpen && 'px-2',
        className
      )}
      {...props}
    />
  );
});

SidebarFooter.displayName = 'SidebarFooter';

/* -------------------------------------------------------------------------- */
/*                                    MENU                                    */
/* -------------------------------------------------------------------------- */

export const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => {
  const { isOpen } = useSidebar();

  return (
    <ul
      ref={ref}
      className={cn(
        `
        flex
        flex-col

        gap-3

        px-4
        py-5
        `,
        !isOpen && 'px-2',
        className
      )}
      {...props}
    />
  );
});

SidebarMenu.displayName = 'SidebarMenu';

export const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('relative', className)}
    {...props}
  />
));

SidebarMenuItem.displayName =
  'SidebarMenuItem';

/* -------------------------------------------------------------------------- */
/*                               BUTTON STYLES                                */
/* -------------------------------------------------------------------------- */

const sidebarMenuButtonVariants = cva(
  `
  group
  relative

  flex
  h-12
  w-full

  items-center
  gap-3

  rounded-2xl

  px-4

  text-left
  text-[15px]
  font-medium

  text-zinc-300

  transition-all
  duration-300

  hover:translate-x-2
  hover:scale-[1.02]

  hover:bg-white/[0.06]
  hover:text-white

  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-violet-500

  data-[active=true]:border
  data-[active=true]:border-violet-500/20

  data-[active=true]:bg-gradient-to-r
  data-[active=true]:from-violet-500/20
  data-[active=true]:to-cyan-500/10

  data-[active=true]:text-white

  data-[active=true]:shadow-[0_0_30px_rgba(139,92,246,0.18)]

  data-[active=true]:before:absolute
  data-[active=true]:before:inset-0
  data-[active=true]:before:rounded-2xl
  data-[active=true]:before:bg-violet-500/10
  data-[active=true]:before:blur-xl
  `,
  {
    variants: {
      size: {
        default: '',
        sm: 'h-10 text-sm',
        lg: 'h-14 text-base',
        icon: `
          h-11
          w-11

          justify-center

          px-0
        `,
      },
    },

    defaultVariants: {
      size: 'default',
    },
  }
);

/* -------------------------------------------------------------------------- */
/*                                MENU BUTTON                                 */
/* -------------------------------------------------------------------------- */

interface SidebarMenuButtonProps
  extends Omit<ButtonProps, 'size'>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ReactNode;
}

export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    {
      asChild = false,
      isActive = false,
      tooltip,
      className,
      size = 'default',
      children,
      ...props
    },
    ref
  ) => {
    const { isOpen } = useSidebar();

    const Comp = asChild ? Slot : 'button';

    const button = (
      <Comp
        ref={ref}
        data-active={isActive}
        className={cn(
          sidebarMenuButtonVariants({ size }),
          !isOpen && 'justify-center px-0',
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );

    if (!isOpen && tooltip) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            {button}
          </TooltipTrigger>

          <TooltipContent
            side="right"
            className="
              border
              border-white/10

              bg-black/90

              text-white

              backdrop-blur-xl
            "
          >
            {tooltip}
          </TooltipContent>
        </Tooltip>
      );
    }

    return button;
  }
);

SidebarMenuButton.displayName =
  'SidebarMenuButton';

/* -------------------------------------------------------------------------- */
/*                                  SEPARATOR                                 */
/* -------------------------------------------------------------------------- */

export const SidebarSeparator = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cn(
      'my-4 border-white/10',
      className
    )}
    {...props}
  />
));

SidebarSeparator.displayName =
  'SidebarSeparator';