import { Inner } from 'styles/structure'

type GigsProps = {
  id?: string
}

export default function Gigs({ id }: GigsProps) {
  return (
    <Inner id={id}>
      <h1>Gigs</h1>
    </Inner>
  )
}
