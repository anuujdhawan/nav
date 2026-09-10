'use client';

type HeroVideoBackgroundProps = {
  enabled: boolean;
  poster: string;
};

export default function HeroVideoBackground({ enabled, poster }: HeroVideoBackgroundProps) {
  if (!enabled) {
    return null;
  }

  return (
    <video
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
    >
      <source src="/videos/11300218-uhd_3840_2160_24fps.mp4" type="video/mp4" />
    </video>
  );
}
