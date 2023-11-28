export default function UniqueCollectionPage ({params}: {params: {name: string}}) {
  return (
    <h1>This is the Collection: {params.name}</h1>
  )
}
