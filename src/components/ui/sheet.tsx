"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   ROOT                                     */
/* -------------------------------------------------------------------------- */

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

/* -------------------------------------------------------------------------- */
/*                                  OVERLAY                                   */
/* -------------------------------------------------------------------------- */

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm",
      "data-[state=open]:animate-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0",
      "data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));

SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

/* -------------------------------------------------------------------------- */
/*                                VARIANTS                                    */
/* -------------------------------------------------------------------------- */

const sheetVariants = cva(
  [
    "fixed z-50 flex flex-col",
    "bg-background shadow-2xl",
    "transition-all duration-300 ease-in-out",
    "data-[state=open]:animate-in",
    "data-[state=closed]:animate-out",
    "border-border",
  ].join(" "),
  {
    variants: {
      side: {
        top: [
          "inset-x-0 top-0 border-b",
          "data-[state=closed]:slide-out-to-top",
          "data-[state=open]:slide-in-from-top",
        ].join(" "),

        bottom: [
          "inset-x-0 bottom-0 border-t",
          "data-[state=closed]:slide-out-to-bottom",
          "data-[state=open]:slide-in-from-bottom",
        ].join(" "),

        left: [
          "inset-y-0 left-0 h-full",
          "w-[85%] sm:max-w-sm",
          "border-r",
          "data-[state=closed]:slide-out-to-left",
          "data-[state=open]:slide-in-from-left",
        ].join(" "),

        right: [
          "inset-y-0 right-0 h-full",
          "w-[85%] sm:max-w-sm",
          "border-l",
          "data-[state=closed]:slide-out-to-right",
          "data-[state=open]:slide-in-from-right",
        ].join(" "),
      },
    },

    defaultVariants: {
      side: "right",
    },
  }
);

/* -------------------------------------------------------------------------- */
/*                               SHEET CONTENT                                */
/* -------------------------------------------------------------------------- */

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />

    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {/* Accessibility Support */}
      <SheetPrimitive.Title className="sr-only">
        Sidebar Panel
      </SheetPrimitive.Title>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">{children}</div>

      {/* Close Button */}
      <SheetPrimitive.Close
        className={cn(
          "absolute right-4 top-4 rounded-full p-2",
          "opacity-70 transition-all",
          "hover:bg-muted hover:opacity-100",
          "focus:outline-none focus:ring-2",
          "focus:ring-ring focus:ring-offset-2",
          "disabled:pointer-events-none"
        )}
      >
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));

SheetContent.displayName = SheetPrimitive.Content.displayName;

/* -------------------------------------------------------------------------- */
/*                                   HEADER                                   */
/* -------------------------------------------------------------------------- */

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 border-b pb-4",
      "text-center sm:text-left",
      className
    )}
    {...props}
  />
);

SheetHeader.displayName = "SheetHeader";

/* -------------------------------------------------------------------------- */
/*                                   FOOTER                                   */
/* -------------------------------------------------------------------------- */

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "mt-auto flex flex-col-reverse gap-2",
      "sm:flex-row sm:justify-end",
      className
    )}
    {...props}
  />
);

SheetFooter.displayName = "SheetFooter";

/* -------------------------------------------------------------------------- */
/*                                   TITLE                                    */
/* -------------------------------------------------------------------------- */

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold tracking-tight text-foreground",
      className
    )}
    {...props}
  />
));

SheetTitle.displayName = SheetPrimitive.Title.displayName;

/* -------------------------------------------------------------------------- */
/*                                DESCRIPTION                                 */
/* -------------------------------------------------------------------------- */

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));

SheetDescription.displayName = SheetPrimitive.Description.displayName;

/* -------------------------------------------------------------------------- */
/*                                   EXPORTS                                  */
/* -------------------------------------------------------------------------- */

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};