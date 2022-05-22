import { Div } from '@/components/shared/ui/Div'

export const SpacingContainer = ({
  flexDirection = 'column',
  spacingTop = { sm: 0, md: 6, lg: 15 },
  ...props
}: React.ComponentProps<typeof Div>) => (
  <Div flexDirection={flexDirection} spacingTop={spacingTop} {...props} />
)
