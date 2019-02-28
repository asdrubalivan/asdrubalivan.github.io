import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { H2 } from '../components/tags'

const SectionContact = styled.section`
  margin-top: 8rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const commonInputProps = props => `
  color: ${props.theme.darkBlue};
  border-width: 0;
  outline: 0.1rem solid ${props.theme.darkBlue};
  &::placeholder {
    color: ${props.theme.darkBlue};
    opacity: 0.7;
  }
  width: 46rem;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${props.theme.lightGray};
`

const Form = styled.form`
  margin-top: 5rem;
  > * {
    display: block;
  }
`

const Input = styled.input`
  ${commonInputProps}
`

const TextArea = styled.textarea`
  ${commonInputProps}
`

const SubmitButton = styled.button`
  color: ${props => props.theme.darkBlue};
  margin: 2rem auto;
  text-transform: uppercase;
  border: 0.1rem solid ${props => props.theme.darkBlue};
  padding: 1rem 4rem;
  background-color: ${props => props.theme.lightGray};
  transition: transform 200ms ease-in-out;
  &:hover { transform: scale(1.2); }
`

const ContactPage = () => (
  <Layout blueBackground={false}>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <SectionContact>
      <H2 blueBackground={false}>Contact</H2>
      <Form action="">
        <Input name="" type="text" value="" placeholder="Name" />
        <Input name="" type="text" value="" placeholder="Email" />
        <Input name="" type="text" value="" placeholder="Subject" />
        <TextArea cols="30" id="" name="" rows="10" placeholder="Your message" />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </SectionContact>
  </Layout>
)

export default ContactPage
