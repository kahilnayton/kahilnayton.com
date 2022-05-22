import type { ReactNode } from 'react'
import { useMemo } from 'react'

import type { TwoColContainerPercentage } from '@/components/shared/layout/TwoColContainer'
import { TwoColContainer } from '@/components/shared/layout/TwoColContainer'

export type TwoColLayoutMainContentPosition =
  | 'right'
  | 'left'
  | 'top'
  | 'bottom'
export type TwoColLayoutContentPercentage = TwoColContainerPercentage

export type TwoColLayoutProps = {
  mainContent: ReactNode
  secondaryContent: ReactNode
  mainContentPercentage?: TwoColContainerPercentage
  secondaryContentPercentage?: TwoColContainerPercentage
  mainContentPosition: TwoColLayoutMainContentPosition
  mainContentPositionOnWrap?: 'top' | 'bottom'
}

const FULL_PERCENTAGE: TwoColContainerPercentage = 100

export const TwoColLayout = ({
  mainContentPosition,
  mainContent,
  secondaryContent,
  mainContentPercentage = 50,
  secondaryContentPercentage = 50,
  mainContentPositionOnWrap = 'top',
}: TwoColLayoutProps) => {
  const [leftPercentage, rightPercentage] = useMemo((): [
    TwoColContainerPercentage,
    TwoColContainerPercentage,
  ] => {
    if (mainContentPosition === 'right') {
      return [secondaryContentPercentage, mainContentPercentage]
    }

    if (mainContentPosition === 'left') {
      return [mainContentPercentage, secondaryContentPercentage]
    }

    return [FULL_PERCENTAGE, FULL_PERCENTAGE]
  }, [mainContentPercentage, mainContentPosition, secondaryContentPercentage])

  const [leftContent, rightContent, reverseOnWrap] = useMemo(() => {
    if (mainContentPosition === 'right' || mainContentPosition === 'bottom') {
      return [
        secondaryContent,
        mainContent,
        mainContentPositionOnWrap === 'top',
      ]
    }

    return [
      mainContent,
      secondaryContent,
      mainContentPositionOnWrap === 'bottom',
    ]
  }, [
    mainContentPositionOnWrap,
    mainContent,
    mainContentPosition,
    secondaryContent,
  ])

  return (
    <TwoColContainer
      leftCol={leftContent}
      rightCol={rightContent}
      leftPercentage={leftPercentage}
      rightPercentage={rightPercentage}
      reverseOnWrap={reverseOnWrap}
    />
  )
}
