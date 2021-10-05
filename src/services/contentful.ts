import { createClient } from 'contentful'
import { EntryCollection, Asset } from 'contentful'
import { REACT_APP_CONTENTFUL_SPACE, REACT_APP_CONTENTFUL_ACCESS_TOKEN } from '@constants'

const client = createClient({
  space: REACT_APP_CONTENTFUL_SPACE,
  accessToken: REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

type ContentfulField = {
  sound: Asset;
  title: string;
}

export const fetchEntries = async (contentType: string) => {
  const entries: EntryCollection<ContentfulField> = await client.getEntries({ content_type: contentType })
  const { errors } = entries

  if (errors?.length) console.log(`Error fetching entries of type ${contentType}`)

  return entries.items || []
}
