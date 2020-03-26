import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Islands from 'data'
class Thing extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return <div><h1>{this.props.header}</h1>{this.props.th.map(t => <div><h2>{t.header}</h2><p>{t.content}</p><Link href={t.link} prefetch><a><button style={{padding: "10px 20px", backgroundColor: "blue",  borderRadius: "10px", color: "white"}}>invest</button></a></Link></div>)}</div>
  }}
export default Thing
