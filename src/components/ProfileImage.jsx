import { useState } from 'react'
import { PERSON } from '../data/constants'

const FALLBACK_CHAIN = ['/profile.jpg', '/profile.jpeg', '/profile.png', '/profile.webp', '/profile.svg']

export default function ProfileImage({ className = '' }) {
  const preferred = PERSON.profileImage || '/profile.jpg'
  const sources = [preferred, ...FALLBACK_CHAIN.filter((s) => s !== preferred)]
  const [srcIndex, setSrcIndex] = useState(0)

  const handleError = () => {
    setSrcIndex((i) => (i < sources.length - 1 ? i + 1 : i))
  }

  return (
    <img
      src={sources[srcIndex]}
      alt={PERSON.name}
      className={className}
      onError={handleError}
      decoding="async"
    />
  )
}
