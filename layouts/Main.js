import Head from 'next/head'
import Nav from 'components/Nav'
import styled from 'styled-components'
const Wrapper = styled.footer`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  main {flex: 1;margin: 0;}
`
export default ({ children, title = 'bio' }) => (
  <Wrapper>
    <Head><title>{title}</title></Head>
    <main>{children}</main>
  </Wrapper>
)
