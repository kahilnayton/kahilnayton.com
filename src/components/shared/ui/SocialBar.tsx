import {
  GrYoutube,
  GrFacebookOption,
  GrInstagram,
  GrTwitter,
  GrSpotify,
} from 'react-icons/gr'
import { ListItem, UnorderedList } from '@/styles'
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  SPOTIFY_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from '@/lib'

type SocialBarProps = {
  variant?: string
  toggleMobile?: () => void
}

const SocialBar = ({ variant, toggleMobile }: SocialBarProps) => {
  return (
    <UnorderedList className={variant && variant}>
      <ListItem>
        <a
          href={FACEBOOK_URL}
          target="blank"
          rel="noopener noreferrer"
          onClick={toggleMobile}
        >
          <GrFacebookOption />
        </a>
      </ListItem>

      <ListItem>
        <a
          href={INSTAGRAM_URL}
          target="blank"
          rel="noopener noreferrer"
          onClick={toggleMobile}
        >
          <GrInstagram />
        </a>
      </ListItem>

      <ListItem>
        <a
          href={TWITTER_URL}
          target="blank"
          rel="noopener noreferrer"
          onClick={toggleMobile}
        >
          <GrTwitter />
        </a>
      </ListItem>
      <ListItem>
        <a
          href={YOUTUBE_URL}
          target="blank"
          rel="noopener noreferrer"
          onClick={toggleMobile}
        >
          <GrYoutube />
        </a>
      </ListItem>
      <ListItem>
        <a
          href={SPOTIFY_URL}
          target="blank"
          rel="noopener noreferrer"
          onClick={toggleMobile}
        >
          <GrSpotify />
        </a>
      </ListItem>
    </UnorderedList>
  )
}

export default SocialBar
