import Image from 'next/image';
import { Card, Badge, Typography } from '@/components/ui';
import type { TravelSuggestion } from '@/lib/suggestions';

interface SuggestionCardProps {
  suggestion: TravelSuggestion;
  onOpen: () => void;
}

export function SuggestionCard({
  suggestion,
  onOpen,
}: SuggestionCardProps) {

  return (
    <Card
      className="
        group
        block
        cursor-pointer
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-card
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
      onClick={onOpen}
    >

      <div className="relative h-64 w-full overflow-hidden">

        {/* IMAGE */}
        <Image
          src={`https://picsum.photos/seed/${suggestion.title}/800/600`}
          alt={suggestion.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          "
        />

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 p-4">
<<<<<<< HEAD
          <Typography variant="h3" className="text-white font-bold mb-0">
            {suggestion.title}
          </Typography>
          <Typography variant="small" className="text-white/90">
            {suggestion.country}
          </Typography>
=======

          <h3
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            {suggestion.title}
          </h3>

          <p className="text-sm text-white/90">
            {suggestion.country}
          </p>

>>>>>>> edf8cfb (Final TravelSync production update)
        </div>

        {/* BADGE */}
        {suggestion.aiRecommended && (
<<<<<<< HEAD
           <Badge variant="glass" className="absolute top-3 right-3">AI Recommended</Badge>
=======

          <Badge
            variant="secondary"
            className="
              absolute
              right-3
              top-3
              border-sky-400/30
              bg-sky-400/20
              text-sky-300
            "
          >
            AI Recommended
          </Badge>

>>>>>>> edf8cfb (Final TravelSync production update)
        )}

      </div>

    </Card>
  );
}