/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import CSS from 'csstype'

// https://medium.com/better-programming/make-a-flexbox-react-component-e96a038da7ec
export interface FlexProps {
  children?: any
  className?: string
  container?: boolean
  /****** Container Props ********/
  flexDirection?: 'row' | 'column'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'initial'
    | 'inherit'
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit'
  /****** Child Props ********/
  flexGrow?: number
  flexShrink?: number
  flexBasis?: number
  flex?: string
  /****** Common Layout Props ********/
  padding?: string
  margin?: string
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
  style?: CSS.Properties
}

export const Flex: React.FC<FlexProps> = (props) => (
  <div
    className={props.className}
    style={{
      display: props.container ? 'flex' : 'block',
      justifyContent: props.justifyContent || 'flex-start',
      flexDirection: props.flexDirection || 'row',
      flexGrow: props.flexGrow || 0,
      flexBasis: props.flexBasis || 'auto',
      flexShrink: props.flexShrink || 1,
      flexWrap: props.flexWrap || 'nowrap',
      flex: props.flex || '0 1 auto',
      alignItems: props.alignItems || 'stretch',
      margin: props.margin || '0',
      padding: props.padding || '0',
      width: props.width || 'auto',
      height: props.height || 'auto',
      maxWidth: props.maxWidth || 'none',
      ...props.style,
    }}
  >
    {props.children}
  </div>
)
