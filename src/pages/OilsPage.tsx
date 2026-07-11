import { MasonryGallery } from '../components/MasonryGallery'
import { oils } from '../data/artwork'

export function OilsPage() {
  return (
    <MasonryGallery
      pieces={oils}
      heading="Oil paintings"
      intro="A curated selection of oil portraits and colour studies."
    />
  )
}
