import type { ForwardedRef } from 'react'
import { forwardRef } from 'react'

import styled from 'styled-components'

import { Box } from '@/styles'
import { palette } from '@/styles'

import { breakpointKeys, mediaQueries } from '@/components/shared/media'

import type {
  ResponsiveStyleProps,
  StyleProps,
  StandardStyleProps,
  CustomStyleProps,
  StyleFunction,
} from './types'

export const pinStyles = {
  all: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 },
  top: { position: 'absolute', top: 0, left: 0, right: 0 },
  bottom: { position: 'absolute', bottom: 0, left: 0, right: 0 },
  left: { position: 'absolute', top: 0, bottom: 0, left: 0 },
  right: { position: 'absolute', top: 0, bottom: 0, right: 0 },
} as const

const stylePropFunctions: {
  [key in keyof StyleProps]: key extends keyof StandardStyleProps
    ? true
    : key extends keyof CustomStyleProps
    ? StyleFunction<CustomStyleProps[key]>
    : never
} = {
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gitAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,

  zIndex: true,

  position: true,
  top: true,
  right: true,
  bottom: true,
  left: true,

  display: true,

  overflow: true,
  overflowX: true,
  overflowY: true,

  width: true,
  height: true,
  minWidth: true,
  minHeight: true,
  maxWidth: true,
  maxHeight: true,

  flex: true,
  flexWrap: true,
  flexDirection: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  alignItems: true,
  alignContent: true,
  alignSelf: true,
  justifyItems: true,
  justifyContent: true,
  justifySelf: true,
  order: true,

  pin: (v) => pinStyles[v],

  // Handle colors from both Spectrum and the CDS palette
  color: (v) => ({
    color:
      typeof v === 'object'
        ? `rgba(var(--${v[0]}), ${v[1]})`
        : (v as string) in palette
        ? palette[v as keyof typeof palette]
        : `rgb(var(--${v}))`,
  }),
  background: (v) => ({
    backgroundColor:
      typeof v === 'object'
        ? `rgba(var(--${v[0]}), ${v[1]})`
        : (v as string) in palette
        ? palette[v as keyof typeof palette]
        : `rgb(var(--${v}))`,
  }),
  borderColor: (v) => ({
    borderColor:
      typeof v === 'object'
        ? `rgba(var(--${v[0]}), ${v[1]})`
        : (v as string) in palette
        ? palette[v as keyof typeof palette]
        : `rgb(var(--${v}))`,
  }),

  gap: (v) => ({ gap: `calc(${v} * var(--spacing-1))` }),
  columnGap: (v) => ({ columnGap: `calc(${v} * var(--spacing-1))` }),
  rowGap: (v) => ({ rowGap: `calc(${v} * var(--spacing-1))` }),

  spacing: (v) => ({ padding: `calc(${v} * var(--spacing-1))` }),
  spacingTop: (v) => ({ paddingTop: `calc(${v} * var(--spacing-1))` }),
  spacingBottom: (v) => ({ paddingBottom: `calc(${v} * var(--spacing-1))` }),
  spacingStart: (v) => ({ paddingLeft: `calc(${v} * var(--spacing-1))` }),
  spacingEnd: (v) => ({ paddingRight: `calc(${v} * var(--spacing-1))` }),
  spacingVertical: (v) => ({
    paddingTop: `calc(${v} * var(--spacing-1))`,
    paddingBottom: `calc(${v} * var(--spacing-1))`,
  }),
  spacingHorizontal: (v) => ({
    paddingLeft: `calc(${v} * var(--spacing-1))`,
    paddingRight: `calc(${v} * var(--spacing-1))`,
  }),

  offset: (v) => ({ margin: `calc(-${v} * var(--spacing-1))` }),
  offsetTop: (v) => ({ marginTop: `calc(-${v} * var(--spacing-1))` }),
  offsetBottom: (v) => ({ marginBottom: `calc(-${v} * var(--spacing-1))` }),
  offsetStart: (v) => ({ marginLeft: `calc(-${v} * var(--spacing-1))` }),
  offsetEnd: (v) => ({ marginRight: `calc(-${v} * var(--spacing-1))` }),
  offsetVertical: (v) => ({
    marginTop: `calc(-${v} * var(--spacing-1))`,
    marginBottom: `calc(-${v} * var(--spacing-1))`,
  }),
  offsetHorizontal: (v) => ({
    marginLeft: `calc(-${v} * var(--spacing-1))`,
    marginRight: `calc(-${v} * var(--spacing-1))`,
  }),

  css: (v) => v,
}

export const mergeStyles = (a: any, b: any) => {
  const result = Object.assign({}, a, b)
  for (const key in a) {
    if (!a[key] || typeof b[key] !== 'object') continue
    Object.assign(result, {
      [key]: Object.assign(a[key], b[key]),
    })
  }
  return result
}

export const parseResponsiveStyle = (
  raw: unknown[] | { [key in typeof breakpointKeys[number]]?: unknown },
  styleFunction: StyleFunction<any>,
) => {
  const styles: Record<string, any> = {}

  let i = 0
  while (i < mediaQueries.length) {
    const value = 'length' in raw ? raw[i] : raw[breakpointKeys[i]]
    if (value === undefined || value === null) {
      i++
      continue
    }
    const media = mediaQueries[i]
    const style = styleFunction(value)
    if (!media) Object.assign(styles, style)
    else
      Object.assign(styles, {
        [media]: Object.assign({}, styles[media], style),
      })
    i++
  }
  return styles
}

const createStyleParser = () => {
  return (componentProps: Record<string, any>) => {
    let styles = {}

    for (const propName in componentProps) {
      const raw = componentProps[propName]
      if (raw === undefined || raw === null) continue
      let styleFunction =
        stylePropFunctions[propName as unknown as keyof StyleProps]
      if (!styleFunction) continue
      if (styleFunction === true)
        styleFunction = (v: any) => ({ [propName]: v })

      if (typeof raw === 'object' && propName !== 'css') {
        styles = mergeStyles(styles, parseResponsiveStyle(raw, styleFunction))
        continue
      }

      Object.assign(styles, (styleFunction as any)(raw))
    }

    return styles
  }
}

export const styleFunction = createStyleParser()

const ClassNameBox = forwardRef(
  (props: { className?: string }, ref: ForwardedRef<HTMLElement>) => (
    <Box {...props} />
  ),
)

ClassNameBox.displayName = 'ClassNameBox'

export type DivProps = ResponsiveStyleProps &
  Omit<JSX.IntrinsicAttributes, 'css'> &
  React.RefAttributes<HTMLElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  }

export const Div = styled(ClassNameBox).withConfig({
  shouldForwardProp: (prop) => !Boolean((stylePropFunctions as any)[prop]),
})<ResponsiveStyleProps>((props) => {
  const styles = styleFunction(props) as any
  if (!Boolean(styles.display)) styles.display = 'flex'
  return styles
}) as React.FC<React.PropsWithChildren<DivProps>>
