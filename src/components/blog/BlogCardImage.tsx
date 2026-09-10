'use client'

import { useState } from 'react'
import Image from 'next/image'

function hashSlug(slug: string): number {
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0
  }
  return hash
}

type BlogCardImageProps = {
  slug: string
  title: string
}

export default function BlogCardImage({ slug, title }: BlogCardImageProps) {
  const [failed, setFailed] = useState(false)
  const src = `https://picsum.photos/seed/${encodeURIComponent(slug)}/600/400`

  const gradients = [
    'from-[#436175] via-[#585a5e] to-[#2C353F]',
    'from-[#2C353F] via-[#436175] to-[#B5AE9E]',
    'from-[#585a5e] via-[#436175] to-[#f5f5dc]',
    'from-[#436175] via-[#2C353F] to-[#F73718]',
  ]
  const gradient = gradients[hashSlug(slug) % gradients.length]
  const initials = title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')

  return (
    <div className="absolute inset-0">
      {!failed && (
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_45%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white">
            <div className="max-w-[80%]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                Navigator Blog
              </p>
              <p className="mt-2 line-clamp-2 text-sm font-semibold">{title}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg font-bold backdrop-blur-sm">
              {initials || 'N'}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
