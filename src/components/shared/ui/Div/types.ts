import type * as CSS from 'csstype'
import type { CSSObject } from 'styled-components'

import type { palette } from '@/styles'

import type { breakpointKeys } from '@/components/shared/media'

import type { pinStyles } from './index'

type TLengthStyledSystem = string | number

export type StandardStyleProps = {
  gridColumn: CSS.Property.GridColumn
  gridRow: CSS.Property.GridRow
  gridAutoFlow: CSS.Property.GridAutoFlow
  gridAutoColumns: CSS.Property.GridAutoColumns<TLengthStyledSystem>
  gitAutoRows: CSS.Property.GridAutoRows<TLengthStyledSystem>
  gridTemplate: CSS.Property.GridTemplate
  gridTemplateColumns: CSS.Property.GridTemplateColumns<TLengthStyledSystem>
  gridTemplateRows: CSS.Property.GridTemplateRows<TLengthStyledSystem>
  gridTemplateAreas: CSS.Property.GridTemplateAreas
  gridArea: CSS.Property.GridArea

  zIndex: CSS.Property.ZIndex

  position: CSS.Property.Position
  top: CSS.Property.Top<TLengthStyledSystem>
  right: CSS.Property.Right<TLengthStyledSystem>
  bottom: CSS.Property.Bottom<TLengthStyledSystem>
  left: CSS.Property.Left<TLengthStyledSystem>

  display: CSS.Property.Display

  overflow: CSS.Property.Overflow
  overflowX: CSS.Property.OverflowX
  overflowY: CSS.Property.OverflowY

  width: CSS.Property.Width<TLengthStyledSystem>
  height: CSS.Property.Height<TLengthStyledSystem>
  minWidth: CSS.Property.MinWidth<TLengthStyledSystem>
  minHeight: CSS.Property.MinHeight<TLengthStyledSystem>
  maxWidth: CSS.Property.MaxWidth<TLengthStyledSystem>
  maxHeight: CSS.Property.MaxHeight<TLengthStyledSystem>

  flex: CSS.Property.Flex<TLengthStyledSystem>
  flexWrap: CSS.Property.FlexWrap
  flexDirection: CSS.Property.FlexDirection
  flexGrow: CSS.Property.FlexGrow
  flexShrink: CSS.Property.FlexShrink
  flexBasis: CSS.Property.FlexBasis<TLengthStyledSystem>
  alignItems: CSS.Property.AlignItems
  alignContent: CSS.Property.AlignContent
  alignSelf: CSS.Property.AlignSelf
  justifyItems: CSS.Property.JustifyItems
  justifyContent: CSS.Property.JustifyContent
  justifySelf: CSS.Property.JustifySelf
  order: CSS.Property.Order
}

export type CustomStyleProps = {
  pin: keyof typeof pinStyles
  gap: number
  columnGap: number
  rowGap: number
  spacing: number
  spacingTop: number
  spacingBottom: number
  spacingStart: number
  spacingEnd: number
  spacingVertical: number
  spacingHorizontal: number
  offset: number
  offsetTop: number
  offsetBottom: number
  offsetStart: number
  offsetEnd: number
  offsetVertical: number
  offsetHorizontal: number
  color: keyof typeof palette
  background: keyof typeof palette
  borderColor: keyof typeof palette
  css: Record<string, any>
}

export type StyleProps = StandardStyleProps & CustomStyleProps

export type StyleFunction<T> = (cssValue: T) => CSSObject

export type ResponsiveValue<T> =
  | T
  | Array<T | null>
  | { [key in typeof breakpointKeys[number]]?: T }

export type ResponsiveStyleProps = {
  [key in keyof StyleProps]?: ResponsiveValue<StyleProps[key]>
}
