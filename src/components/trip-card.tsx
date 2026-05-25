'use client';

import Image from 'next/image';
import { MapPin, CalendarDays } from 'lucide-react';

interface Trip {
  destination: string;
  country?: string;
  startDate?: string;
  budget?: string;
}

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({
  trip,
}: TripCardProps) {
  return (
    <div
      className="
        group
        relative
        h-[420px]
        w-full
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-[#0B1120]
        transition-all
        duration-500
        hover:scale-[1.02]
        hover:border-purple-500/40
        hover:shadow-[0_20px_80px_rgba(139,92,246,0.25)]
      "
    >
      {/* IMAGE */}
      <div className="relative h-full w-full">

        <Image
          src={`https://picsum.photos/seed/${trip.destination}/1200/800`}
          alt={trip.destination}
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

      </div>

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/40
          to-transparent
        "
      />

      {/* TOP BADGE */}
      <div
        className="
          absolute
          right-5
          top-5
          z-20
        "
      >
        <div
          className="
            rounded-full
            border
            border-white/10
            bg-black/40
            px-4
            py-2
            text-sm
            text-white
            backdrop-blur-md
          "
        >
          AI Generated
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="
          absolute
          bottom-0
          left-0
          z-20
          w-full
          p-6
        "
      >

        {/* LOCATION */}
        <div className="flex items-center gap-2 text-white/80">

          <MapPin className="h-5 w-5" />

          <span className="text-sm uppercase tracking-wider">
            {trip.country || 'Travel Destination'}
          </span>

        </div>

        {/* DESTINATION */}
        <h2
          className="
            mt-3
            text-5xl
            font-bold
            capitalize
            text-white
          "
        >
          {trip.destination}
        </h2>

        {/* DETAILS */}
        <div className="mt-6 flex flex-wrap items-center gap-3">

          {/* DATE */}
          {trip.startDate && (
            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/10
                px-4
                py-2
                text-sm
                text-white
                backdrop-blur-md
              "
            >
              <CalendarDays className="h-4 w-4" />

              <span>{trip.startDate}</span>
            </div>
          )}

          {/* BUDGET */}
          {trip.budget && (
            <div
              className="
                rounded-full
                border
                border-white/10
                bg-purple-500/20
                px-4
                py-2
                text-sm
                text-white
                backdrop-blur-md
              "
            >
              {trip.budget}
            </div>
          )}

        </div>

        {/* BUTTON */}
        <button
          className="
            mt-6
            rounded-2xl
            bg-gradient-to-r
            from-purple-600
            to-blue-500
            px-6
            py-3
            font-medium
            text-white
            transition-all
            duration-300
            hover:opacity-90
          "
        >
          View Trip
        </button>

      </div>
    </div>
  );
}