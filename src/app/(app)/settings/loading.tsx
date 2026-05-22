export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">

        <div
          className="
            mx-auto
            h-12
            w-12
            animate-spin
            rounded-full
            border-4
            border-violet-500/20
            border-t-violet-500
          "
        />

        <div>
          <h2 className="text-lg font-semibold">
            Loading Settings
          </h2>

          <p className="text-sm text-zinc-400">
            Preparing your preferences...
          </p>
        </div>

      </div>
    </div>
  );
}