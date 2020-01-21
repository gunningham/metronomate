import { createClient } from 'contentful'
import { REACT_APP_CONTENTFUL_SPACE, REACT_APP_CONTENTFUL_ACCESS_TOKEN } from '../constants'

const client = createClient({
  space: REACT_APP_CONTENTFUL_SPACE,
  accessToken: REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

export const fetchEntries = async contentType => {
  const entries = await client.getEntries({ content_type: contentType })
  const { error } = entries

  if (error) console.log(error.message)

  return entries.items || []
}
