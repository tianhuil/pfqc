/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { theme, P, H2 } from './style'
import styled from '@emotion/styled'

const FeatureStyle = styled.div`
  display: flex;
  flex-direction: row;
  ${theme.mediaQuery.desktop} {
    flex-direction: column;
    flex-basis: 0;
    flex-grow: 1;
  }
  margin: ${theme.lineHeight()} 0;

  .icon {
    font-size: ${theme.fontSize(3)};
    line-height: ${theme.lineHeight(3)};
    margin-right: 20px;
    ${theme.mediaQuery.tablet} {
      font-size: ${theme.fontSize(4)};
      line-height: ${theme.lineHeight(4)};
    }
    ${theme.mediaQuery.desktop} {
      margin-right: 0;
    }
    color: ${theme.color.orange};
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .description {
    display: flex;
    flex-direction: column;
    margin-left: 0 0;
  }

  h2.title {
    margin: 0 0 ${theme.lineHeight(0.5)} 0;
    text-align: left;
    ${theme.mediaQuery.desktop} {
      font-size: ${theme.fontSize(1.5)};
      line-height: ${theme.lineHeight(1.5)};
      text-align: center;
    }
  }
  .text {
    ${theme.mediaQuery.desktop} {
      text-align: center;
      margin: 0 ${theme.lineHeight()};
    }
  }
`

const Feature: React.FC<IFeature> = ({ icon, title, text }) => {
  return (
    <FeatureStyle>
      <div className="icon">
        <span className={icon}></span>
      </div>
      <div className="description">
        <H2 className="title">{title}</H2>
        <P className="text">{text}</P>
      </div>
    </FeatureStyle>
  )
}

const Style = styled.div`
  .features {
    display: flex;
    flex-direction: column;
    ${theme.mediaQuery.desktop} {
      flex-direction: row;
    }
  }
`

interface IFeature {
  icon: string
  title: string
  text: string
}

const features: IFeature[] = [
  {
    icon: 'far fa-user',
    title: 'World Class Speakers',
    text: 'Hear the latest from leading industry speakers',
  },
  {
    icon: 'far fa-address-book',
    title: 'Exclusive Network',
    text:
      'Connect with industry insiders and student peers in our online community',
  },
  {
    icon: 'far fa-file',
    title: 'Resume Blast',
    text:
      'Send your resume through our exclusive network of top industry firms',
  },
]

export const FeatureComp = () => {
  return (
    <Style>
      <div className="features">
        {features.map((feature, k) => (
          <Feature {...feature} key={k} />
        ))}
      </div>
    </Style>
  )
}
