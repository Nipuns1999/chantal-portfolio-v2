export interface ArtworkPiece {
  id: string
  src: string
  alt: string
  title: string
}

export const oils: ArtworkPiece[] = [
  {
    id: 'oil-1',
    src: '/art/oils/IMG-6350.JPG',
    alt: 'Oil portrait in warm tones',
    title: 'Warm light',
  },
  {
    id: 'oil-2',
    src: '/art/oils/IMG-5390.jpg',
    alt: 'Oil painting of a seated figure',
    title: 'Quiet sitting',
  },
  {
    id: 'oil-3',
    src: '/art/oils/color-6.JPEG',
    alt: 'Colourful oil portrait',
    title: 'Colour study',
  },
  {
    id: 'oil-4',
    src: '/art/oils/color-10.jpg',
    alt: 'Oil portrait with soft background',
    title: 'Soft field',
  },
  {
    id: 'oil-5',
    src: '/art/oils/color-4.jpg',
    alt: 'Oil painting portrait',
    title: 'Presence',
  },
  {
    id: 'oil-6',
    src: '/art/oils/color-5.jpg',
    alt: 'Oil portrait close study',
    title: 'Close study',
  },
  {
    id: 'oil-7',
    src: '/art/oils/color-8.JPEG',
    alt: 'Oil painting with rich colour',
    title: 'Rich chroma',
  },
  {
    id: 'oil-8',
    src: '/art/oils/IMG-5268.jpg',
    alt: 'Oil portrait',
    title: 'Gaze',
  },
  {
    id: 'oil-9',
    src: '/art/oils/color-7.jpg',
    alt: 'Oil painting',
    title: 'Studio piece',
  },
  {
    id: 'oil-10',
    src: '/art/oils/IMG-3911.jpg',
    alt: 'Large oil portrait',
    title: 'Grand scale',
  },
  {
    id: 'oil-11',
    src: '/art/oils/IMG-1522.jpg',
    alt: 'Oil portrait composition',
    title: 'Composition',
  },
  {
    id: 'oil-12',
    src: '/art/oils/color-1.jpg',
    alt: 'Oil painting with colour',
    title: 'First colour',
  },
]

export const sketches: ArtworkPiece[] = [
  {
    id: 'sketch-1',
    src: '/art/sketches/IMG-4597.jpg',
    alt: 'Pencil portrait sketch',
    title: 'Pencil portrait I',
  },
  {
    id: 'sketch-2',
    src: '/art/sketches/IMG-0175.jpg',
    alt: 'Detailed pencil drawing',
    title: 'Detail study',
  },
  {
    id: 'sketch-3',
    src: '/art/sketches/IMG-8148.jpg',
    alt: 'Pencil sketch portrait',
    title: 'Pencil portrait II',
  },
  {
    id: 'sketch-4',
    src: '/art/sketches/IMG-6937.jpg',
    alt: 'Graphite portrait',
    title: 'Graphite',
  },
  {
    id: 'sketch-5',
    src: '/art/sketches/IMG-8228.jpg',
    alt: 'Pencil drawing',
    title: 'Line and shade',
  },
  {
    id: 'sketch-6',
    src: '/art/sketches/IMG-6453.jpg',
    alt: 'Portrait in pencil',
    title: 'Quiet likeness',
  },
  {
    id: 'sketch-7',
    src: '/art/sketches/IMG-2891.jpg',
    alt: 'Pencil portrait study',
    title: 'Study',
  },
  {
    id: 'sketch-8',
    src: '/art/sketches/IMG-8469.jpg',
    alt: 'Large pencil portrait',
    title: 'Full portrait',
  },
]

export const brand = {
  name: 'Paintings By Chantal',
  artist: 'Chantal Dassanayake',
  hero: '/art/brand/hero.jpg',
  portrait: '/art/brand/portrait.png',
  email: 'chantaldassanayake@gmail.com',
  instagram: 'https://www.instagram.com/paintingsbychantal/?hl=en',
  linkedin: 'https://lk.linkedin.com/in/chantal-dassanayake-b7298a217',
  facebook: 'https://www.facebook.com/public/Chantal-Dassanayake',
  tagline: 'Oil paintings and pencil portraits, drawn with care.',
  about:
    'I started drawing when I was about three years old. Over the years I have learnt various styles and worked with different mediums. I started my Instagram page Paintings by Chantal in 2017, and it has been an amazing journey. Celebrating five years as an entrepreneur was a true milestone. So far, I have done over 300 pencil portraits and almost 50 oil paintings.',
} as const
