import React, { Component } from 'react'
import Nav from 'components/Nav'
import { ideas } from 'pages/NewIdea'
import Link from 'next/link'
import styled from 'styled-components'
const Wrapper = styled.div`margin-left: 50px;margin-top: 50px;.space {margin-left: 50px;margin-top: 50px;display: flex;flex-direction: column;}.inside {margin-bottom: 20px;display: flex;flex-direction: column;}`
class Suggested extends Component {
  constructor(props) {
    super(props);
    this.state = {sug: ideas.map(i => { return i})}}
  render() {
    return (
      <Wrapper>
      <Nav />
      <div className="space">
      {this.state.sug.map(i => (<div className="inside"><h1>{i.nam}</h1><Link href={i.ur}><a>{i.ur}</a></Link><p>{i.desc}</p></div>))}
      <hr/>
      </div>
      </Wrapper>
    )}}
export default Suggested
