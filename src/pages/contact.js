import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { H2 } from '../components/tags'

const SectionContact = styled.section`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Form = styled.form`
  margin-top: 5rem;
  > * {
    display: block;
  }
`

const Input = styled.input`
  width: 100%;
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
        <textarea cols="30" id="" name="" rows="10" placeholder="Your message">

        </textarea>
      </Form>
    </SectionContact>
  </Layout>
)

export default ContactPage
