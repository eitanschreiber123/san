import React, { Component } from 'react'
import Nav from 'components/Nav'
import Link from 'next/link'
import styled from 'styled-components'
const ideas = [];
const Wrapper = styled.div`margin-left: 20px;.col {display: flex;flex-direction: column;}input, textarea {width: 300px;}`
class NewIdea extends Component {
  constructor(props) {
    super(props);
    this.state = {nam: ``,ur: ``,desc: ``}}
  submitI = () => ideas.push({nam: this.state.nam, ur: this.state.ur, desc: this.state.desc})
  handleNam = e => this.setState({nam: e.target.value})
  handleUr = e => this.setState({ur: e.target.value})
  handleDesc = e => this.setState({desc: e.target.value})
  render() {
    return (
      <Wrapper>
        <Nav />
        <h1>New Technology</h1>
        <p>At idc were always looking To introduce innovative, modern technology whenever applicable so if you know of a new technology that we can use plase share. <br/>Please fill ut the form below with your idea but first go to the the <Link href='/Suggested' prefetch><a>Suggested ideas</a></Link> page and check that it wasnt already suggested and thank you for sharing</p>
        <div className="col">
        <label htmlFor="nam">Name</label>
        <input type="text" id="nam" name="nam" value={this.state.nam} onChange={this.handleNam} required="true"/>
        </div>
        <div className="col">
        <label htmlFor="ur">URL</label>
        <input type="text" id="ur" name="ur" value={this.state.ur} onChange={this.handleUr} required="true"/>
        </div>
        <div  className="col">
        <label html="desc">please describe what the technology is and why you think it would be benificial to us at idc</label>
        <textarea id="desc" name="desc" rows="4" cols="50" value={this.state.desc} onChange={this.handleDesc} required="true"></textarea>
        </div>
        <button onClick={this.submitI}>submit</button>
      </Wrapper>
    )}}
export { ideas };
export default NewIdea
