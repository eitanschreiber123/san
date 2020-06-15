import dynamic from 'next/dynamic';
import React, { Component } from 'react'
import Dropdown from 'components/drop'
import styled from 'styled-components'
import Link from 'next/link'
import { FaChartArea, FaBookmark, FaMap, FaLandmark, FaFolder, FaStreetView, FaSuitcase, FaTv, FaCheckSquare, FaTint, FaChartPie, FaChartBar, FaChild, FaRegEdit, FaThumbsUp, FaInfoCircle, FaMugHot, FaTwitter, FaFacebookF, FaYoutube, FaPinterest } from 'react-icons/fa'
import { GiWhiteBook } from 'react-icons/gi'
import { TiSocialInstagram } from 'react-icons/ti'
import Lightbox from "react-image-lightbox";
import { IoIosArrowDropleftCircle, IoIosArrowDropdownCircle } from 'react-icons/io';
import {SlideDown} from 'react-slidedown'
import Carousel from 'react-images';
import Fade from 'react-reveal/Fade';
import { i18n, withTranslation } from '../i18n'
const MyMap = dynamic(() => import('components/map'), {ssr: false});
const asone = ["/view_1.png","/view_2.png","/view_3.png", "/view_4.png","/view_5.png","/view_6.png", "/view_7.png","/view_8.png","/view_9.png", "/view_10.png"];
const images = {
  first: ["/view_1.png","/view_2.png","/view_3.png"],
  second: ["/view_4.png","/view_5.png","/view_6.png"],
  third: ["/view_7.png","/view_8.png","/view_9.png"],
  last: ["/view_10.png"]
}
const links = {
  ar: [
    {header: `Presentation`, icon: <FaChartArea/>, items: [`Know the islands`, `Weather forcast`]},
    {header: `Information`, icon: <FaBookmark/>, items: [`symbols`, `history`, `geography`, `economy`, `governors`, `mayors`]},
    {header: `Maps`, icon: <FaMap/>, items: [`Territory`, `geographical map`, `touristic map`, `territorial map`, `political map`, `interactive map`, `NEXT UPS`]}
  ],
  go: [
    {header: `Entity`, icon: <FaLandmark/>, items: [`mission`, `vision`, `quality politics`, `quality objectives`, `features`, `organization chart`]},
    {header: `Rules`, icon: <FaFolder/>, items: [`special laws`, `ordinances`, `decrees`, `resolutions`, `settlement agreements`, `normagram`, `circular`, `agreements`]},
    {header: `Officials`, icon: <FaStreetView/>, items: [`institutional mail`, `detachable payment`, `social welfare`, `call 001 or 2005`, `internal standards`, `formats`, `function's manual`]},
    {header: `Directory`, icon: <GiWhiteBook/>, items: [`secretariats and dependencies`, `extensions`, `decentralized entities`, `service entities`, `public and military force`, `control bodies`, `NGO's and guilds`]}
  ],
  ma: [
    {header: `Planning`, icon: <FaMap/>, items: [`development plan`, `territorial arrangement planning`, `improvment plan`, `urban planning licenses`, `Integration of institutional and strategic plans into the 2018 Action Plan`]},
    {header: `Investment`, icon: <FaSuitcase/>, items: [`budget`, `investment projects`, `action plan`, `shopping plan`, `financial statements`, `TLC studies`]},
    {header: `ICT Advances`, icon: <FaTv/>, items: [`ICT policy`, `competitiveness`]},
    {header: `SGR - Royalties`, icon: <FaCheckSquare/>, items: [`Water Dept Plan - PAP PDA`, `Departmental OCAD`, `OCAD Regional`, `PAED`, `proceedings`]},
    {header: `San Andres Waters`, icon: <FaTint/>, items: [`Publications / Contracts / Agreements`]}
  ],
  tr: [
    {header: `Surrender`, icon: <FaChartBar/>, items: [`childhood and adolescence`, `menegement report`, `accountability`, `junction 2015`, `transparency and access to public information`, `real estate government`]},
    {header: `Internal Control`, icon: <FaChartPie/>, items: [`standard internal control model`, `internal control reports`, `anti-corruption plan`, `splice process monitoring report`]},
    {header: `Policies`, icon: <FaCheckSquare/>, items: [`privacy policy and terms of use`, `editorial and update policy`, `information security policy`, `personal data protection policy`]},
    {header: `Boys and Girls`, icon: <FaChild/>, items: [`at the begining`, `my archipelago`, `my government`, `my rights`]}
  ],
  ci: [
    {header: `Single Window`, icon: <FaRegEdit/>, items: [`PQRSD Citizen Service`, `tracking requests`, `procedures and services`, `population control procedures`, `frequent questions`, `transit payment order`, `notifications`]},
    {header: `Hiring`, icon: <FaCheckSquare/>, items: [`minimum amount`, `job vacancies`, `Contractual processes`, `Service Provision Contracts`, `Covenants`, `Contracting Amounts`]},
    {header: `Programs`, icon: <FaChild/>, items: [`more families in action`, `elderly`, `calls`, `greater colombia`, `internet social rate`, `sisben`, `Anti Contraband Program`]},
    {header: `Participation`, icon: <FaThumbsUp/>, items: [`democracy online`, `survey`, `chat`, `citizen forum`, `subscribtions`, `cultural directory`]},
    {header: `Help`, icon: <FaInfoCircle/>, items: [`site map`, `help and manuals`, `glossary`, `contact us`, `judicial notice`]}
  ],
  pr: [
    {header: `Find out`, icon: <FaMugHot/>, items: [`news`, `newsletters`, `events`, `audio and video`, `publications`, `photo gallery`, `buena mar radio`, `open data`]}
  ]
}
const Wrapper = styled.div`
 .first {
   padding: 0;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
 }
 .navi {
   width: 100%;
   background-color: rgb(7, 139, 175);
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;
   margin-bottom: 20px;
 }
 .drop, .dropa, .dropb, .dropc, .dropd, .drope {position: absolute;z-index: 1;display: flex;flex-flow: row wrap;background-color: rgb(7, 139, 175);overflow: hidden;max-height: 0;transition: max-height 0.2s ease-out;margin-top:10px;}
 .ho, .hoa, .hob, .hoc, .hod, .hoe, .st {margin-top: 10px; margin-bottom: 10px;}
 .ho:hover .drop {max-height: 600px;transition: max-height 0.2s ease-in;}
 .hoa:hover .dropa {max-height: 600px;transition: max-height 0.2s ease-in;}
 .hob:hover .dropb {max-height: 600px;transition: max-height 0.2s ease-in;}
 .hoc:hover .dropc {max-height: 600px;transition: max-height 0.2s ease-in;}
 .hod:hover .dropd {max-height: 600px;transition: max-height 0.2s ease-in;}
 .hoe:hover .drope {max-height: 600px;transition: max-height 0.2s ease-in;}
 img {margin-top: 10px; margin-bottom: 14px;}
 .bottom {height: 900px;}
 .level {color: white; text-decoration: none; font-size: 16px; font-family: 'Roboto'}
 .ver {display: flex; flex-direction: row; align-items: center; justify-content: space-evnly;margin-left: 10px;margin-right: 10px;}
 .whole{margin-bottom: 10px;}
 .down {padding: 0;display: flex; flex-direction: column;align-items: start;margin-left: 10px;margin-right: 10px;}
 .down a {margin-top: 5px; margin-bottom: 5px;width: 150px;}
 .dropd {right: 20px;}
 .bottom {background-color: rgb(7, 139, 175);padding: 100px;display: flex; flex-direction: row;}
 .touch, .places, .pic {display: flex;flex-direction: column;}
 a {text-decoration: none;color: rgba(255, 255, 255) !important;opacity: 0.6 !important;font-size: 15px;}
 p, h1, h3 {color: rgba(255, 255, 255) !important;opacity: 0.6 !important;font-size: 15px;}
 footer {background-color: rgb(0, 100, 128);padding-top: 15px;padding-bottom: 15px;padding-left: 150px;}
 footer p {font-size: 14px;font-family: 'Roboto';}
 .ic {display:flex;flex-direction: row;}
 .ic a {margin-left: 10px;margin-right: 10px;}
 .search {background-color: rgb(68, 68, 68);display: flex;flex-direction: row;align-items: center;justify-content: center;padding-top: 15px;padding-bottom:15px;margin-bottom: 20px;}
 .search input {width: 400px;height: 40px;border: 1px solid #dfdfdf;border-radius: 35px;padding-left: 15px;}
 .yellow, .red, .blue {margin-top:10px;margin-bottom: 10px;}
 a:hover {opacity: 1 !important;}
 .dif {opacity: 1 !important;}
 .under > div {margin: 0;padding: 0;display:flex;flex-direction: row;}
 .sep {margin-left: 10px;margin-right:10px;}
 .middle {width: 100%;display:flex;flex-direction: row;margin-left:100px;}
 .first-covid {margin-bottom: 30px;width:300px;color: black !important;background-color: white;display: flex;flex-direction: column;padding-bottom: 30px;box-shadow: 0 5px 8px 0 rgba(160, 166, 168, 0.35);}
 .first-covid h3 {color: black !important;margin-left: 30px;}
 .first-covid p, .first-covid h4 {text-align: center;}
 .first-covid p {color: rgb(45, 179, 196) !important;}
 ul {list-style-type: none;}
 .side-boxes {margin-bottom: 30px;width:300px;color: black !important;background-color: white;display: flex;flex-direction: column;padding-bottom: 30px;box-shadow: 0 5px 8px 0 rgba(160, 166, 168, 0.35);padding-right: 10px;}
 .side-boxes a, .side-boxes li {display: flex;flex-firection: row;}
 .side-boxes img {margin-right: 15px;}
 .side-boxes h3 {color: black !important;margin-left: 30px;}
 .three {margin-left:15px;margin-right: 15px;width:262px;color: black !important;background-color: white;display: flex;flex-direction: column;padding-bottom: 30px;box-shadow: 0 5px 8px 0 rgba(160, 166, 168, 0.35);padding-top: 15px;padding-left:15px;padding-right: 15px;}
 .across {display:flex;flex-direction: row;margin-left: 10px;margin-bottom: 25px;}
 .three a, .three h3, .three p {color: black !important;}
 .cen {text-align: center;}
 .bring {width: 300px;margin-bottom: 50px;padding: 30px;color: black !important;background-color: white;display: flex;flex-direction: column;box-shadow: 0 5px 8px 0 rgba(160, 166, 168, 0.35);}
 .bring div, .bring h4, .bring article, .bring a {color: black !important;}
 .button {display:flex;flex-direction:row;align-items: center;}
 .main-columns-second div {margin-top: 10px;margin-bottom: 10px;}
 .main-columns-second a {margin-left: 5px;}
 .main-columns-second, .main-columns-first {background-color: rgb(248, 249, 249) !important;}
 .car-slide {width: 1245px;display: flex;flex-direction: row;margin-left: 25px;margin-bottom: 35px;}
 .im {width: 845px;height: auto;background-image: url("/boat.jpg");background-position: center;background-size:cover;background-repeat:no-repeat;box-shadow: 0 5px 8px 0 rgba(160, 166, 168, 0.35);}
 .over {background-color: white;display: flex;flex-direction: column;margin-left: 370px;padding: 25px;margin-top: 50px;margin-right: 50px;}
 .over p, .over h1 {color: black !important;margin-top: 10px !important;margin-bottom: 10px !important;margin-left: 0 !important;margin-right: 0 !important;padding: 0 !important;}
.ver-text {width: 325px;display: flex;flex-direction: column;box-shadow: 0 5px 8px 0 rgba(160, 166, 168, 0.35);}
 .ver-text p {color: black !important;}
 .ver-text div {padding: 25px;}
 .mid-bot {display: flex;flex-direction: row;width: 1245px;margin-bottom: 20px;}
 .bottom-car {width: 850px;margin-left: 25px;margin-right: 20px;}
 .slide {width: 1440px;margin-left: 0;margin-right: 0;}
 .language {display: flex;flex-direction: row;}
 .language p {margin-right: 5px;}
 .corr {color: black !important;}
 .wrong {color: white !important;}
 .map-san, .map-pro {margin-left: 25px;margin-bottom: 25px;width: 850px;height:700px;}
`
class MapPage extends Component {
  constructor(props) {
  super(props);
  this.state = {
    photoIndex: 0,
    isOpen: false,
    trans: true,
    hea: false
  };
}
static async getInitialProps(ctx) {
  return {namespacesRequired: ['common']}
}
handleTrans = () => {
    this.setState(state => {
      const trans = !this.state.trans;
      return { trans };
    })
  };
  handleHea = () => {
    this.setState(state => {
      const hea = !this.state.hea;
      return { hea };
    })
    };
  renderTrans = (itemCount, overlay, alwaysRender) => {
  return (
    <div className={"main-column"}>
      <Dropdown
        itemCount={itemCount}
        open={this.state.trans}
        overlay={overlay}
        alwaysRender={alwaysRender}
      />
    </div>
  );
}
renderHea = (itemCount, overlay, alwaysRender) => {
return (
  <div className={"main-column"}>
    <Dropdown
      itemCount={itemCount}
      open={this.state.hea}
      overlay={overlay}
      alwaysRender={alwaysRender}
    />
  </div>
);
}
render() {
  const { photoIndex, isOpen } = this.state;
  return (
    <Wrapper>
      <section className="first">
        <p><img src="/top_left.png" width="384" height="80"/></p>
        <p><img src="/top_right.png" width="521" height="80"/></p>
      </section>
      <section className="navi">
        <div className="st"><Link href='/'><a className="level">{this.props.t(`nav1`)}</a></Link></div>
        <div className="ho"><Link href='/' prefetch><a className="level">{this.props.t(`nav2`)}</a></Link>
        <div className="drop">{links.ar.map(a => <div className="whole"><div className="ver">{a.icon}<p>{a.header}</p></div><ul className="down">{a.items.map(i => <Link className="test" href='/' prefetch><a>{i}</a></Link>)}</ul></div>)}</div></div>
        <div className="hoa"><Link href='/' prefetch><a className="level">{this.props.t(`nav3`)}</a></Link>
        <div className="dropa">{links.go.map(a => <div className="whole"><div className="ver">{a.icon}<p>{a.header}</p></div><ul className="down">{a.items.map(i => <Link href='/' prefetch><a>{i}</a></Link>)}</ul></div>)}</div></div>
        <div className="hob"><Link href='/' prefetch><a className="level">{this.props.t(`nav4`)}</a></Link>
        <div className="dropb">{links.ma.map(a => <div className="whole"><div className="ver">{a.icon}<p>{a.header}</p></div><ul className="down">{a.items.map(i => <Link href='/' prefetch><a>{i}</a></Link>)}</ul></div>)}</div></div>
        <div className="hoc"><Link href='/' prefetch><a className="level">{this.props.t(`nav5`)}</a></Link>
        <div className="dropc">{links.tr.map(a => <div className="whole"><div className="ver">{a.icon}<p>{a.header}</p></div><ul className="down">{a.items.map(i => <Link href='/' prefetch><a>{i}</a></Link>)}</ul></div>)}</div></div>
        <div className="hod"><Link href='/' prefetch><a className="level">{this.props.t(`nav6`)}</a></Link>
        <div className="dropd">{links.ci.map(a => <div className="whole"><div className="ver">{a.icon}<p>{a.header}</p></div><ul className="down">{a.items.map(i => <Link href='/' prefetch><a>{i}</a></Link>)}</ul></div>)}</div></div>
        <div className="hoe"><Link href='/' prefetch><a className="level">{this.props.t(`nav7`)}</a></Link>
        <div className="drope">{links.pr.map(a => <div className="whole"><div className="ver">{a.icon}<p>{a.header}</p></div><ul className="down">{a.items.map(i => <Link href='/' prefetch><a>{i}</a></Link>)}</ul></div>)}</div></div>
        <img src="/nav_image.png"/>
        <div className="language"><p className={i18n.language == `en` ? `corr` : `wrong`} onClick={() => i18n.changeLanguage(`en`)}>en</p><p className={i18n.language == `es` ? `corr` : `wrong`} onClick={() => i18n.changeLanguage(`es`)}>es</p></div>
      </section>
      <section className="slide">
        <Carousel views={[{source: `/top_slide_first.jpg`}, {source: `/top_slide_second.jpg`}, {source: `/top_slide_third.jpg`}, {source: `/top_slide_four.jpg`}, {source: `/top_slide_last.jpg`}]} />
      </section>
      <section className="search">
        <form action="/index.php" method="post" data-uk-search="{'source': '/index.php/component/search/?tmpl=raw&amp;type=json&amp;ordering=&amp;searchphrase=all', 'param': 'searchword', 'msgResultsHeader': 'Search Results', 'msgMoreResults': 'More Results', 'msgNoResults': 'No results found', flipDropdown: 1}">
          <input type="text" name="searchword" />
          <input type="hidden" name="task" value="search"/>
          <input type="hidden" name="option" value="com_search"/>
          <input type="hidden" name="Itemid" value="368"/>
        </form>
      </section>
      <section className="middle">
        <div>
        <div className="car-slide">
          <div className="im">
            <div className="over">
              <p style={{color: "rgb(241, 135, 138) !important",fontSize: "12px",fontWeight: `400 !important`,lineHeight: `18px`,letterSpacing: `2px`}}>{this.props.t(`vertop1`)}</p>
              <h1 style={{fontSize: "50px",fontWeight: `100 !important`,lineHeight: `55px`}}>{this.props.t(`verbot1`)}</h1>
              <p>{this.props.t(`overtop`)}</p>
              <p>{this.props.t(`m`)}</p>
            </div>
          </div>
          <div className="ver-text">
            <div><p style={{color: "rgb(241, 135, 138) !important",fontSize: "12px",fontWeight: `400 !important`,lineHeight: `18px`,letterSpacing: `2px`}}>{this.props.t(`vertop1`)}</p><p style={{fontSize: "17px",fontWeight: `100 !important`,lineHeight: `23px`}}>{this.props.t(`verbot1`)}</p></div>
            <div><p style={{color: "rgb(45, 179, 196) !important",fontSize: "12px",fontWeight: `400 !important`,lineHeight: `18px`,letterSpacing: `2px`}}>{this.props.t(`vertop2`)}</p><p style={{fontSize: "17px",fontWeight: `100 !important`,lineHeight: `23px`}}>{this.props.t(`verbot2`)}</p></div>
            <div><p style={{color: "rgb(45, 179, 196) !important",fontSize: "12px",fontWeight: `400 !important`,lineHeight: `18px`,letterSpacing: `2px`}}>{this.props.t(`vertop3`)}</p><p style={{fontSize: "17px",fontWeight: `100 !important`,lineHeight: `23px`}}>{this.props.t(`verbot3`)}</p></div>
            <div><p style={{color: "rgb(147, 214, 167) !important",fontSize: "12px",fontWeight: `400 !important`,lineHeight: `18px`,letterSpacing: `2px`}}>{this.props.t(`vertop4`)}</p><p style={{fontSize: "17px",fontWeight: `100 !important`,lineHeight: `23px`}}>{this.props.t(`verbot4`)}</p></div>
            <div><p style={{color: "rgb(45, 179, 196) !important",fontSize: "12px",fontWeight: `400 !important`,lineHeight: `18px`,letterSpacing: `2px`}}>{this.props.t(`vertop5`)}</p><p style={{fontSize: "17px",fontWeight: `100 !important`,lineHeight: `23px`}}>{this.props.t(`verbot5`)}</p></div>
            <div><p style={{color: "rgb(45, 179, 196) !important",fontSize: "12px",fontWeight: `400 !important`,lineHeight: `18px`,letterSpacing: `2px`}}>{this.props.t(`vertop6`)}</p><p style={{fontSize: "17px",fontWeight: `100 !important`,lineHeight: `23px`}}>{this.props.t(`verbot6`)}</p></div>
          </div>
        </div>
        <div className="mid-bot">
        <div className="mid-bot-first">
      <div className="across">
      <Fade bottom>
      <div className="three">
      <h3><a href="/index.php/prensa/enterese/noticias/152-espanol/5634-remocion-embarcaciones">{this.props.t(`verbot1`)}</a></h3>
      <p className="cen">{this.props.t(`acr1mid`)}</p><p><strong>&nbsp;</strong></p><p>{this.props.t(`acr1bot1`)}</p><p>{this.props.t(`acr1bot2`)}</p><p><a href="/index.php/prensa/enterese/noticias/152-espanol/5634-remocion-embarcaciones">{this.props.t(`m`)}</a></p>
      </div>
      </Fade>
      <Fade bottom>
      <div className="three">
      <h3><a href="/index.php/prensa/enterese/noticias/152-espanol/5628-advertencia-procedimientos-esteticos">{this.props.t(`acr2top`)}</a></h3><p className="cen">{this.props.t(`acr2mid`)}</p><p>{this.props.t(`acr2bot`)}</p><p><a href="/index.php/prensa/enterese/noticias/152-espanol/5628-advertencia-procedimientos-esteticos">{this.props.t(`m`)}</a></p>
      </div>
      </Fade>
      <Fade bottom>
      <div className="three">
      <h3><a href="/index.php/prensa/enterese/noticias/152-espanol/5627-jueves-culturales" >{this.props.t(`acr3top`)}</a></h3><p className="cen">{this.props.t(`acr3mid`)}</p><p>{this.props.t(`acr3bot1`)}</p><p>&nbsp;</p><p>{this.props.t(`acr3bot2`)}</p><p><a href="/index.php/prensa/enterese/noticias/152-espanol/5627-jueves-culturales">{this.props.t(`m`)}</a></p>
      </div>
      </Fade>
      </div>
      <section className="bottom-car">
        <Carousel views={[{source: `/ver_first.jpg`}, {source: `/ver_second.jpg`}, {source: `/ver_last.jpg`}]} />
      </section>
      <div className="map-san"><MyMap center={{lat: 12.541653,lng: -81.7246855}}/></div>
      <div className="map-pro"><MyMap center={{lat: 13.3565437,lng: -81.3842748}}/></div>
      </div>
      <aside>
        <div className="first-covid">
          <h3>COVID-19</h3>
          <a href="http://sanandres.gov.co/covid19"><img src="/first_covid.png" width="auto" height="auto"/></a>
        </div>
        <div className="side-boxes">
        <h3>{this.props.t(`verhead2`)}</h3>
        <ul>
          <li><a href="http://200.116.207.194:8085/DecSAIICA/"><img src="/red_com.png" width="62" height="62"/><div><p style={{color: "black !important"}}>{this.props.t(`var1redtop`)}</p> <p style={{color: "#EC5F63 !important"}}>{this.props.t(`var1redbot`)}</p></div></a></li>
          <hr/>
          <li><a href="http://200.116.207.194:8085/Predial/"><img src="/house.png" width="62" height="62"/><div><p style={{color: "black !important"}}>{this.props.t(`var1bluetop`)}</p> <p style={{color: "#36B3C3 !important"}}>{this.props.t(`var1bluebot`)}</p></div></a></li>
          <hr/>
          <li><a href="http://200.116.207.194:8085/IUVA/" ><img src="/auto.png" width="62" height="62"/><div><p style={{color: "black !important"}}>{this.props.t(`var1yeltop`)}</p> <p style={{color: "#F1C40F !important"}}>{this.props.t(`var1yelbot`)}</p></div></a></li>
          <hr/>
          <li><a href="http://200.116.207.194:8085/RentasSan/index.jsp"><img src="/money.png" width="62" height="62"/><div><p style={{color: "black !important"}}>{this.props.t(`var1gretop`)}</p> <p style={{color: "#1ABC9C !important"}}>{this.props.t(`var1grebot`)}</p></div></a></li>
        </ul>
        </div>
        <div className="side-boxes">
        <h3>{this.props.t(`verhead3`)}</h3>
        <ul>
          <li><a href="https://ventanilla.sanandres.gov.co"><img src="/check.png" width="62" height="62"/><div><p style={{color: "black !important"}}>{this.props.t(`var2redtop`)}</p> <p  style={{color: "#36B3C3 !important"}}>{this.props.t(`var2redbot`)}</p></div></a></li>
          <hr/>
          <li><a href="http://sanandres.digifileworkflow.com:8076/tramite_form/159"><img src="/citizen.png" width="62" height="62"/><div><p style={{color: "black !important"}}>{this.props.t(`var2bluetop`)}</p> <p style={{color: "#1ABC9C !important"}}>{this.props.t(`var2bluebot`)}</p></div></a></li>
          <hr/>
          <li><a href="/index.php/atencion-al-ciudadano/contratacion/procesos-contractuales"><img src="/round.png" width="62" height="62"/><div><p style={{color: "black !important"}}>{this.props.t(`var2yeltop`)}</p> <p style={{color: "#EC5F63 !important"}}>{this.props.t(`var2yelbot`)}</p></div></a></li>
          <hr/>
          <li><img src="/bike.png" width="62" height="62"/><div><p style={{color: "black !important"}}>{this.props.t(`var2gretop`)}</p> <p  style={{color: "#F1C40F !important"}}>{this.props.t(`var2grebot`)}</p></div></li>
        </ul>
        </div>
        <div className="bring">
        <h4>{this.props.t(`verhead4`)}</h4>
        <div className="first-trans">
        <div className="button" onClick={this.handleTrans}>
          {this.state.trans ? <IoIosArrowDropdownCircle/> : <IoIosArrowDropleftCircle/>}
          <h4>{this.props.t(`transtop`)}</h4>
        </div>
        <div className="main-columns-first">
          {this.renderTrans(<div><IoIosArrowDropleftCircle/><article><a href="https://sanandres.gov.co/index.php/transparencia/rendicion-de-cuentas/transparencia-y-acceso-a-la-informacion-publica">{this.props.t(`transbot`)}</a></article></div>, false, false)}
        </div>
        </div>
        <div className="second-hea">
        <div className="button" onClick={this.handleHea}>
          {this.state.hea ? <IoIosArrowDropdownCircle/> : <IoIosArrowDropleftCircle/>}
          <h4>{this.props.t(`heatop`)}</h4>
        </div>
        <div className="main-columns-second">
          {this.renderHea(<div><div><a href="/index.php/salud/estadisticas">{this.props.t(`heabot1`)}</a></div>
           <div><IoIosArrowDropleftCircle/><a href="/index.php/salud/salud-ambiental">{this.props.t(`heabot2`)}</a></div>
           <div><IoIosArrowDropleftCircle/><a href="/index.php/salud/salud-publica">{this.props.t(`heabot3`)}</a></div>
           <div><IoIosArrowDropleftCircle/><a href="/index.php/salud/publicaciones">{this.props.t(`heabot4`)}</a></div>
           <div><IoIosArrowDropleftCircle/><a href="/index.php/salud/informes">{this.props.t(`heabot5`)}</a></div>
           <div><IoIosArrowDropleftCircle/><a href="/index.php/sec-salud/salud-boletin-semanal">{this.props.t(`heabot6`)}</a></div>
           <div><IoIosArrowDropleftCircle/><a href="http://prestadores.minsalud.gov.co/habilitacion/ingreso.aspx?ets_codigo=88">{this.props.t(`heabot7`)}</a></div>
           <div><IoIosArrowDropleftCircle/><a href="http://prestadores.minsalud.gov.co/habilitacion/ingreso_prestadores.aspx?ets_codigo=88">{this.props.t(`heabot8`)}</a></div>
           <div><IoIosArrowDropleftCircle/><a href="/index.php/salud/aseguramiento">{this.props.t(`heabot9`)}</a></div>
           <div><IoIosArrowDropleftCircle/><a href="http://salud.sanandres.gov.co:8092">{this.props.t(`heabot10`)}</a></div>
           <div><IoIosArrowDropleftCircle/><a href="/index.php/salud/salud-infantil">{this.props.t(`heabot11`)}</a></div>
           <div><IoIosArrowDropleftCircle/><a href="/index.php/component/docman/?view=list&amp;layout=default&amp;slug=eje-1-a-plan-de-accion-ppss&amp;own=0">{this.props.t(`heabot12/3`)}</a></div>
           <div><IoIosArrowDropleftCircle/><a href="https://sanandres.gov.co/index.php/6-planeacion/6-1-politica-lineamientos-y-manuales/c-plan-estrategico/soportes-plan-de-accion-salud-2019">{this.props.t(`heabot12/3`)}</a></div></div>, false, false)}
        </div>
        </div>
        </div>
      <div className="first-covid">
      <h3>Coral Palace News</h3>
      <a href="https://youtu.be/EMIOAVqX6RE"><img src="/youtube.jpg"height="auto" width="auto"/></a>
      <p>{this.props.t(`youtubemid`)}</p>
      <h4>{this.props.t(`youtubebot`)}</h4>
      </div>
      </aside>
      </div>
      </div>
      </section>
      <section className="bottom">
      <div className="touch">
    <img src="/top_left_white.png" width="400" height="135" />
    <p>{this.props.t(`line1`)}</p>
  <p>{this.props.t(`line2`)}<a href="mailto:servicioalciudadano@sanandres.gov.co">servicioalciudadano@sanandres.gov.co</a></p>
  <p>{this.props.t(`line3`)}<a href="mailto:notificacion@sanandres.gov.co">notificacion@sanandres.gov.co</a>{this.props.t(`line4`)}<a href="mailto:seguridaddigital@sanandres.gov.co">seguridaddigital@sanandres.gov.co</a></p>
  <p>{this.props.t(`line5`)}</p>
      <h3 className="dif">{this.props.t(`follow`)} / Follow us on </h3>
      <div className="ic">
        <a href="https://twitter.com/GobernacionSai"><FaTwitter/></a>
  <a href="https://facebook.com/GobernacionSAI/?ref=hl"><FaFacebookF/></a>
  <a href="https://www.instagram.com/gobernacionsai/?hl=es-la"><TiSocialInstagram/></a>
        <a href="https://www.youtube.com/user/GobernacionSanAndres"><FaYoutube/></a>
        <a href="https://www.flickr.com/photos/gobernacionsanandres"><FaPinterest/></a>
        </div>
        </div>
        <div className="places">
  <h1 className="dif">{this.props.t(`interest`)}</h1>
  <div className="yellow">
  <div><img src="/yellow_dot.png" width="8" height="8"/> <a href="http://www.presidencia.gov.co/" target="_blank">{this.props.t(`yellow1`)}</a></div>
  <div><img src="/yellow_dot.png" width="8" height="8"/> <a href="/www.contratos.gov.co/consultas/inicioConsulta.do?codi_enti=134001000" target="_blank">{this.props.t(`yellow2`)}</a></div>
  <div><img src="/yellow_dot.png" width="8" height="8"/>  <a href="/www.contraloriagen.gov.co/" target="_blank">{this.props.t(`yellow3`)}</a></div>
  <div><img src="/yellow_dot.png" width="8" height="8"/>  <a href="/www.procuraduria.gov.co/" target="_blank">{this.props.t(`yellow4/1`)}</a><a href="/www.contraloriagen.gov.co/" target="_blank">>{this.props.t(`yellow4/2`)}</a><a href="/www.procuraduria.gov.co/" target="_blank">>{this.props.t(`yellow4/3`)}</a></div>
  <div><img src="/yellow_dot.png" width="8" height="8"/>  <a href="/www.gobiernoenlinea.gov.co/web/guest;jsessionid=4A4DF1E2F6E47A97D04D7CC9204038C5" target="_blank">{this.props.t(`yellow5`)}</a></div>
  </div>
  <div className="blue">
  <div><img src="/blue_dot.png" width="8" height="8"/>  <a href="/www.transparenciacolombia.org.co/" target="_blank">{this.props.t(`blue1`)}</a></div>
  <div><img src="/blue_dot.png" width="8" height="8"/>  <a href="/www.fiscalia.gov.co/colombia" target="_blank">{this.props.t(`blue2`)}</a></div>
  <div><img src="/blue_dot.png" width="8" height="8"/>  <a href="/providencia-sanandres.gov.co" target="_blank">{this.props.t(`blue3`)}</a></div>
  </div>
  <div className="red">
  <div><img src="/red_dot.png" width="8" height="8"/>  <a href="http://www.contraloriasai.gov.co/" target="_blank">{this.props.t(`red1`)}</a></div>
  <div><img src="/red_dot.png" width="8" height="8"/>  <a href="/horalegal.inm.gov.co/" target="_blank">{this.props.t(`red2/1`)}</a><a href="http://www.contraloriasai.gov.co/" target="_blank">{this.props.t(`red2/2`)}</a></div>
  <div><img src="/red_dot.png" width="8" height="8"/>  <a href="/www.urnadecristal.gov.co/" target="_blank">{this.props.t(`red3`)}</a></div>
  </div>
  </div>
  <div className="pic">
  <h3 className="dif">Instagram</h3>
  <div className="under">
            <div>{images.first.map((i, ind) => <div className="sep" onClick={() => this.setState({ isOpen: true, photoIndex: ind })}><img src={i} width="100" height="100"/></div>)}</div>
            <div>{images.second.map((i, ind) => <div className="sep" onClick={() => this.setState({ isOpen: true, photoIndex: ind + 3 })}><img src={i} width="100" height="100"/></div>)}</div>
            <div>{images.third.map((i, ind) => <div className="sep" onClick={() => this.setState({ isOpen: true, photoIndex: ind + 6 })}><img src={i} width="100" height="100"/></div>)}</div>
            <div>{images.last.map((i, ind) => <div className="sep" onClick={() => this.setState({ isOpen: true, photoIndex: 9 })}><img src={i} width="100" height="100"/></div>)}</div>
            {isOpen && (<Lightbox mainSrc={asone[photoIndex]}nextSrc={asone[(photoIndex + 1) % asone.length]}prevSrc={asone[(photoIndex + asone.length - 1) % asone.length]}onCloseRequest={() => this.setState({ isOpen: false })}onMovePrevRequest={() => this.setState({photoIndex: (photoIndex + asone.length - 1) % asone.length})}onMoveNextRequest={() => this.setState({photoIndex: (photoIndex + 1) % asone.length})}/>)}
        </div>
        </div>
      </section>
      <section className="footer">
      <footer><p>Copyright 2019 / Grupo Tic.</p></footer>
      </section>
    </Wrapper>
  )
}
}
export default withTranslation('common')(MapPage)
