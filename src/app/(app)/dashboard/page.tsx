'use client';

import TripCard from '@/components/trip-card';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { Plus, Sparkles } from 'lucide-react';

import Link from 'next/link';

import { SuggestionCard } from '@/components/discover/suggestion-card';

import { SuggestionDetailsDialog } from '@/components/discover/suggestion-details-dialog';

import { travelSuggestions } from '@/lib/suggestions';

import type { TravelSuggestion } from '@/lib/suggestions';

import { Separator } from '@/components/ui/separator';

export default function DashboardPage() {

  const [selectedSuggestion, setSelectedSuggestion] =
    useState<TravelSuggestion | null>(null);

  const handleOpenDialog = (
    suggestion: TravelSuggestion
  ) => {
    setSelectedSuggestion(suggestion);
  };

  const handleCloseDialog = () => {
    setSelectedSuggestion(null);
  };

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <div className="space-y-2">

          <h1
            className="
              text-3xl
              font-bold
              md:text-4xl
              text-white
            "
          >
            Your Trips
          </h1>

          <p
            className="
              text-muted-foreground
              max-w-2xl
            "
          >
            Here are all your upcoming and past adventures.
          </p>

        </div>

        {/* NEW TRIP BUTTON */}
        <Button
          asChild
          className="
            hidden
            md:flex
            bg-gradient-to-r
            from-indigo-500
            to-cyan-400
            text-white
            transition-all
            duration-300
            hover:scale-105
          "
        >
          <Link href="/trips/new">

            <Plus className="mr-2 h-4 w-4" />

            New Trip

          </Link>
        </Button>

      </div>

      {/* TRIPS GRID */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >

        <TripCard
          trip={{
            destination: 'Paris',
            country: 'France',
            startDate: '12 Jun 2026',
            budget: '$2500',
          }}
        />

        <TripCard
          trip={{
            destination: 'Tokyo',
            country: 'Japan',
            startDate: '20 Jul 2026',
            budget: '$3200',
          }}
        />

        <TripCard
          trip={{
            destination: 'Goa',
            country: 'India',
            startDate: '4 Aug 2026',
            budget: '$900',
          }}
        />

      </div>

      {/* SEPARATOR */}
      <Separator className="my-8 bg-border/50" />

      {/* DISCOVER SECTION */}
      <div className="space-y-8">

        <div className="space-y-2">

          <h2
            className="
              text-3xl
              font-bold
              md:text-4xl
              flex
              items-center
              gap-3
            "
          >

            <Sparkles className="text-cyan-400" />

            Discover New Adventures

          </h2>

          <p className="text-muted-foreground">
            Get inspired for your next trip.
          </p>

        </div>

        {/* FAST GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >

          {travelSuggestions.map((suggestion) => (

            <SuggestionCard
              key={suggestion.id}
              suggestion={suggestion}
              onOpen={() =>
                handleOpenDialog(suggestion)
              }
            />

          ))}

        </div>

      </div>

      {/* DIALOG */}
      {selectedSuggestion && (
        <SuggestionDetailsDialog
          suggestion={selectedSuggestion}
          isOpen={!!selectedSuggestion}
          onClose={handleCloseDialog}
        />
      )}

      {/* MOBILE BUTTON */}
      <Button
        asChild
        className="
          md:hidden
          fixed
          bottom-6
          right-6
          h-14
          w-14
          rounded-full
          shadow-lg
          bg-gradient-to-r
          from-indigo-500
          to-sky-500
          text-white
        "
      >

        <Link href="/trips/new">

          <Plus className="h-6 w-6" />

          <span className="sr-only">
            New Trip
          </span>

        </Link>

      </Button>

    </div>
  );
}