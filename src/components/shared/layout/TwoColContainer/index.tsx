import { Div } from '@/components/shared/ui/Div'

export type TwoColContainerPercentage = 100 | 70 | 60 | 50 | 40 | 30

export type JustifyContentTypes = 'space-evenly'

export type TwoColContainerProps = {
  leftCol: React.ReactNode
  rightCol: React.ReactNode
  rightPercentage?: TwoColContainerPercentage
  leftPercentage?: TwoColContainerPercentage
  justifyContent?: JustifyContentTypes
  reverseOnWrap?: boolean
}

export const TwoColContainer = ({
  leftCol,
  rightCol,
  rightPercentage = 50,
  leftPercentage = 50,
  reverseOnWrap,
}: TwoColContainerProps) => {
  const wrap = reverseOnWrap ? 'wrap-reverse' : 'wrap'

  return (
    <Div
      flexWrap={{
        sm: wrap,
        md: leftPercentage + rightPercentage > 100 ? wrap : 'nowrap',
      }}
      justifyContent="space-evenly"
      width="100%"
      height="fit-content"
    >
      <Div
        flexShrink={1}
        flexGrow={1}
        flexBasis={{ sm: '100%', md: `${leftPercentage}%` }}
      >
        {leftCol}
      </Div>

      <Div
        flexShrink={1}
        flexGrow={1}
        flexBasis={{ sm: '100%', md: `${rightPercentage}%` }}
      >
        {rightCol}
      </Div>
    </Div>
  )
}
