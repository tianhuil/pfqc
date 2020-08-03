import React from 'react'
import { Section, theme, P, H3, H2, CenterSmallButton } from './style'
import styled from '@emotion/styled'

const FeatureStyle = styled.div`
  display: flex;
  flex-direction: row;
  ${theme.mediaQuery.desktop} {
    flex-direction: column;
  }
  margin: ${theme.lineHeight()} 0;

  .icon {
    font-size: ${theme.fontSize(3)};
    line-height: ${theme.lineHeight(3)};
    color: ${theme.color.orange};
    display: flex;
    align-items: flex-start;
    margin-right: 20px;
  }

  .text {
    display: flex;
    flex-direction: column;
    margin-left: 0 0;
    ${theme.mediaQuery.desktop} {
      flex-direction: row;
    }
  }

  h2.title {
    margin: 0 0 ${theme.lineHeight(0.5)} 0;
    text-align: left;
  }
`

const Feature: React.FC<IFeature> = ({ icon, title, text }) => {
  return (
    <FeatureStyle>
      <div className="icon">
        <span className={icon}></span>
      </div>
      <div className="text">
        <H2 className="title">{title}</H2>
        <P>{text}</P>
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
      <Section>
        {features.map((feature) => (
          <Feature {...feature} />
        ))}
        <CenterSmallButton>Register</CenterSmallButton>
      </Section>
    </Style>
  )
}
