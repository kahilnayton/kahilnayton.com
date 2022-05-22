import Link from 'next/link'
import { useRouter } from 'next/router'

export type PreviewDisplayProps = {
  space: string
  env: string
  entry: string
}

export const PreviewDisplay = ({ env, space, entry }: PreviewDisplayProps) => {
  const { asPath } = useRouter()

  return (
    <div>
      <div>
        <h1>Preview mode </h1>
        <h2>Space: {space}</h2>
        <h2>Env: {env}</h2>

        <h2>Entry: {entry}</h2>

        <h2>
          <Link href={`/api/leave-preview?slug=${asPath}`} prefetch={false}>
            Leave preview mode
          </Link>
        </h2>
      </div>
    </div>
  )
}
