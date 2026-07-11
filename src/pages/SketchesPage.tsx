import { MasonryGallery } from '../components/MasonryGallery'
import { sketches } from '../data/artwork'

export function SketchesPage() {
  return (
    <MasonryGallery
      pieces={sketches}
      heading="Pencil sketches"
      intro="Graphite portraits — likeness, patience, and quiet detail."
    />
  )
}
