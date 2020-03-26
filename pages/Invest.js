import React, { Component } from 'react'
import Nav from 'components/Nav'
import Thing from 'components/things'
import Islands from 'data';
import Link from 'next/link'
import styled from 'styled-components'
const Wrapper = styled.div`margin-top: 100px;margin-left: 50px;`
const fi = Islands.map(i => i.plan.filter(p => p.topics));
const agri = [];
fi.forEach(i => i.forEach(i => {if (i.topics == `agriculture`) {agri.push(i)}}));
const tou = [];
fi.forEach(i => i.forEach(i => {if (i.topics == `tourism`) {tou.push(i)}}));
class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <Thing header="Agriculture" th={agri}/>
          <Thing header="Tourism" th={tou}/>
        </Wrapper>
      </div>
    )}}
export default MapPage
