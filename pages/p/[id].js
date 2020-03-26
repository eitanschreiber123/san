import React, { Component } from 'react'
import Layout from '../../layouts/Main'
import fetch from 'isomorphic-unfetch';
import Islands from '../../data';
import Link from 'next/link'
import styled from 'styled-components'
const Wrapper = styled.div`.top {margin-top: 3.5em;margin-bottom: 3.5em;margin-left: 120px;margin-right: 120px;text-align: center;}.col {display: flex;flex-direction: row;margin: 10px 120px;}article {margin: 0 50px;}.next {margin-left: 160px;margin-right: 160px;margin-bottom: 100px;}.bottom {margin-left: 160px;margin-right: 160px;display: flex;flex-direction: row;}`
class Post extends Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps(context) {
    const { id } = context.query;
    const r = Islands.filter(f => f.name === id);
    return { r };
  }
  render() {
    return (<Layout>
        <Wrapper>
        <div style={{height: "289px",backgroundImage: `url(${this.props.r[0].top})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundColor: "transparent", backgroundSize: "cover"}}></div>
        <h1 className="top">{this.props.r[0].name}</h1>
        <p className="top">{this.props.r[0].intro}</p>
        <section className="col">
          <article><h1>History</h1><p>{this.props.r[0].history}</p></article>
          <article><h1>Conservation</h1><p>{this.props.r[0].conservation}</p></article>
          <article><h1>Economic Activities</h1><p>{this.props.r[0].economic}</p></article>
        </section>
        <section className="next">{this.props.r[0].plan.map(p => p.topics ? <div><h1>{p.header}</h1><p>{p.content}</p><Link href='/'><a>islands page</a></Link></div> : <div><h1>{p.header}</h1><p>{p.content}</p></div>)}</section>
        <section className="bottom">{this.props.r[0].bottom.map(b => <div style={{margin: "0 20px", height: "148px", width: "218px", backgroundImage: `url(${b})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundColor: "transparent", backgroundSize: "cover"}}></div>)}</section>
<Link href='https://www.weatherlink.com/embeddablePage/show/b94a64e6faa64e6a9c4014e78f88db61/fullscreen'><a style={{textAlign: "center"}}><div><button style={{margin: "50px 0", padding: "10px 20px", backgroundColor: "blue", color: "white", border: "none"}}>weather</button></div></a></Link>
<Link href='/'><a style={{textAlign: "center"}}><div><button style={{margin: "50px 0", padding: "10px 20px", backgroundColor: "blue", color: "white", border: "none"}}>RETURN TO ISLANDS</button></div></a></Link>
</Wrapper>
    </Layout>)
  }
}
export default Post;
