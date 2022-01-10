import { Inner } from 'styles/structure';

interface GigsProps {
  id?: string;
}

export default function Gigs({ id }: GigsProps) {
  return (
    <Inner id={id}>
      <h1>Gigs</h1>
    </Inner>
  );
}
