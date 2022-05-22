import { Children } from 'react'

import { Div } from '@/components/shared/ui/Div'

type GroupContainerProps = React.ComponentProps<typeof Div> & {
  asColumn?: boolean
  actionContentFullWidth?: boolean
}

export const GroupContainer = ({
  actionContentFullWidth = false,
  asColumn,
  display = 'grid',
  width = { sm: '100%', md: 'auto' },
  spacingTop = 3,
  gap = 3,
  ...props
}: GroupContainerProps) => {
  const numberOfChildren =
    Children.map(props.children, (c) => c)?.filter((c) => !!c).length || 0
  return (
    <Div
      display={display}
      gridTemplateColumns={
        asColumn ? '1fr' : `repeat(${numberOfChildren}, 1fr)`
      }
      width={actionContentFullWidth ? '100%' : width}
      spacingTop={spacingTop}
      gap={gap}
      {...props}
    />
  )
}
