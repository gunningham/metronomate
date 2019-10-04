import { createClient } from 'contentful'
import { CONTENTFUL_SPACE, CONTENTFUL_TOKEN } from '../constants'

const client = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_TOKEN
})

export const fetchEntries = async contentType => {
  const entries = await client.getEntries({ content_type: contentType })
  const { error } = entries

  if (error) console.log(error.message)

  return entries.items || []
}
