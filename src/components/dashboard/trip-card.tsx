<<<<<<< HEAD
import type { Trip } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, Typography } from '@/components/ui';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';
=======
import type { Trip } from "@/lib/types";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
>>>>>>> edf8cfb (Final TravelSync production update)

export function TripCard({ trip }: { trip: Trip }) {
  const dateRange =
    trip.startDate && trip.endDate
      ? `${format(trip.startDate.toDate(), "LLL dd")} - ${format(
          trip.endDate.toDate(),
          "dd, yyyy"
        )}`
      : "Date not set";

  return (
<<<<<<< HEAD
    <Link href={`/trips/${trip.id}`} className="group block">
      <Card variant="premium" className="overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
=======
    <Link
      href={`/trips/${trip.id}`}
      className="group block focus:outline-none"
    >
      <Card
        className="
          relative
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          transition-all
          duration-500
          ease-out
          hover:-translate-y-3
          hover:scale-[1.02]
          hover:border-violet-500/30
          hover:shadow-[0_20px_60px_rgba(139,92,246,0.25)]
        "
      >
        {/* Glow Effect */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            bg-gradient-to-br
            from-violet-500/10
            via-transparent
            to-cyan-500/10
            pointer-events-none
          "
        />

        {/* Image Section */}
        <CardHeader className="relative p-0">
          <div className="relative h-56 w-full overflow-hidden">
>>>>>>> edf8cfb (Final TravelSync production update)
            <Image
              src={`https://source.unsplash.com/featured/1600x900/?${trip.destination},travel`}
              alt={trip.name}
              fill
              unoptimized
              priority={false}
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-110
              "
            />

            {/* Dark Overlay */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-black/90
                via-black/20
                to-transparent
              "
            />

            {/* Floating Button */}
            <div
              className="
                absolute right-4 top-4
                rounded-full
                border border-white/20
                bg-black/30
                p-2
                backdrop-blur-md
                opacity-0
                transition-all
                duration-300
                group-hover:translate-y-0
                group-hover:opacity-100
                translate-y-2
              "
            >
              <ArrowUpRight className="h-4 w-4 text-white" />
            </div>
          </div>
        </CardHeader>
<<<<<<< HEAD
        <CardContent className="p-4">
          <Typography variant="h3" className="mb-1 truncate group-hover:text-primary">
            {trip.name}
          </Typography>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4 shrink-0" />
            <span>{trip.destination}</span>
=======

        {/* Content */}
        <CardContent className="space-y-4 p-5">
          {/* Title */}
          <div className="space-y-1">
            <h3
              className="
                truncate
                text-2xl
                font-bold
                tracking-tight
                text-white
                transition-colors
                duration-300
                group-hover:text-violet-300
              "
            >
              {trip.name}
            </h3>

            {/* Destination */}
            <div
              className="
                flex items-center gap-2
                text-sm
                text-zinc-400
              "
            >
              <MapPin className="h-4 w-4 shrink-0" />

              <span className="truncate">
                {trip.destination}
              </span>
            </div>
>>>>>>> edf8cfb (Final TravelSync production update)
          </div>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex items-center justify-between px-5 pb-5 pt-0">
          <div
            className="
              rounded-full
              border border-white/10
              bg-white/5
              px-3 py-1
              text-xs
              font-medium
              text-zinc-300
              backdrop-blur-md
            "
          >
            {dateRange}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}