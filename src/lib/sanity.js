import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '6ajyc2a0',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function imageUrl(source) {
  return builder.image(source)
}

// Fetch all products for a given category
export async function getProductsByCategory(category) {
  return client.fetch(
    `*[_type == "product" && category == $category] | order(order asc) {
      nameEn,
      nameRu,
      activeIngredientEn,
      activeIngredientRu,
      descriptionEn,
      descriptionRu,
      photo,
      category
    }`,
    { category }
  )
}
