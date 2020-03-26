import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Islands from 'data'
const Wrapper = styled.nav`padding: 15px;width: 100vw;display: flex;background: white;justify-content: space-evenly;position: fixed;top: 0;left: 0;z-index: 100;a {padding: 10px 40px 10px 10px;color: black;}.drop, .drop_second {margin-top: 22px;position: absolute;z-index: 1;display: flex;flex-direction: column;background: white;overflow: hidden;max-height: 0;transition: max-height 0.5s ease-out;}.first {padding-top: 15px;}.ho, .hos {position:relative;top:10px;}.ho:hover .drop {max-height: 550px;transition: max-height 0.5s ease-in;}.hos:hover .drop_second {max-height: 200px;transition: max-height 0.5s ease-in;}`
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {fade: false};}
  render() {
    return (
      <Wrapper>
        <Link href='/'><a>islands page</a></Link>
        <div className="ho"><Link href='/' prefetch><a>islands</a></Link>
        <div className={`drop`}>{Islands.filter(i => i.activities).map((i, index) => index == 0 ? <Link href='/' prefetch><a className="first">{i.name}</a></Link> : <Link href='/' prefetch><a>{i.name}</a></Link>)}</div></div>
        <Link href='/Invest' prefetch><a>invest</a></Link>
        <div className="hos"><Link href='/' prefetch><a>new technology</a></Link>
        <div className={`drop_second`}><Link href='/NewIdea' prefetch><a className="first">Suggest new</a></Link><Link href='/Suggested' prefetch><a className="first">Suggested ideas</a></Link></div></div>
      </Wrapper>
    )}}
export default Nav
