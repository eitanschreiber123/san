import Head from 'next/head'
import Nav from 'components/Nav'
import styled from 'styled-components'
const Wrapper = styled.footer`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  main {flex: 1;margin: 0;}
  .blue {padding-left: 50px;width: 100%;height: 250px;background: url('/crop.jpg') no-repeat;background-position: center;background-size: cover;margin-bottom: 100px;display: flex;justify-content: center;align-items: center;}
  .row {margin: 0;padding: 0;width: 100%;display: flex;align-items: center;justify-content: space-evenly;}
  .cucumber,  .crab, .grouper, .rabbitfish, .yellow{height: 120px;width: 120px;display: flex;align-items: center;justify-content: center;text-align: center;}
  .cucumber p,  .crab p, .grouper p, .rabbitfish p, .yellow p{color: white;font-size: 1.5em;font-weight: 500;letter-spacing: 1px;}
  .cucumber {background: url('/cucumber.jpeg') no-repeat;background-size: cover;background-position: center;}
  .crab {background: url('/crab.jpeg') no-repeat;background-size: cover;background-position: center;}
  .grouper {background: url('/grouper.jpg') no-repeat;background-size: cover;background-position: center;}
  .rabbitfish {background: url('/rabbitfish.jpg') no-repeat;background-size: cover;background-position: center;}
  .yellow {background: url('/Yellowfin_Tuna.jpg') no-repeat;background-size: cover;background-position: center;}
  a {outline: none;text-decoration: none;}
  .sides, .right {display: flex;}
  .sides {margin-top: 50px;flex-direction: row;justify-content: space-evenly;}
  .right {width: 500px;flex-direction: column;}
  .size {width: 520px;height: 330px;}
  button {height: 35px;width: 316px;background-color: blue;border: 1px solid #dce0e0;border-radius: 5px;}
  select {height: 30px;width: 316px;padding: 8px 2em 8px 8px;margin-bottom: 10px;}
  .price {font-size: 1.5em;}
`
export default ({ children, title = 'bio' }) => (
  <Wrapper>
    <Head><title>{title}</title></Head>
    <header><Nav /></header>
    <main>{children}</main>
  </Wrapper>
)
