import React, { Component, createRef } from 'react';
import { Map, TileLayer, LayersControl, Marker, Popup, MapControl, withLeaflet } from 'react-leaflet';
import {SIslands, PIslands} from '/data'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import { Sidebar, Tab, MenuButton } from 'components/side'
import { IoIosAirplane } from 'react-icons/io'
import { FaHome } from 'react-icons/fa'
import { TiDeleteOutline } from 'react-icons/ti'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
const a = [];
const acc = SIslands.map(i => { return {...i, out: false}});
acc.forEach(i => i.activities.forEach(i => {if (a.includes(i) === false) {a.push(i)}}))
const checkedAccess = [];
const checkedActiv = [];
const ischecked = [];
export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {collapsed: true,selected: 'home',center: {lat: -7.300000,lng: 50.3000000},m: acc,show: a.map(a => { return { name: a}} ),filactiv: a,filaccess: [`sea`, `air`],zoom: 7,draggable: false,upDown: ``,dis : ``}}
    onClose = () => {
    if (this.state.dis == `hovered`) {this.setState({collapsed: false,dis: `clicked`});
    } else {this.setState({collapsed: true});
    }}
  onOpenClick = id => {
    const which = id == `Activities` ? true : false;
    this.setState({collapsed: false,selected: id,upDown: which,dis: `clicked`})
  }
  onOpenHover = id => {
    const which = id == `Activities` ? true : false;
    this.setState({collapsed: false,selected: id,upDown: which,dis: `hovered`})
  }
    filterActiv = i => {
      const target = i.target;
      target.checked == true ? checkedActiv.push(target.name) : checkedActiv.splice(checkedActiv.indexOf(target.name), 1);
      if (checkedActiv.length == 14 || checkedActiv.length == 0) {
        this.setState(prev => {
          const filactiv = a;
          return { filactiv }})
      } else {
        this.setState(prev => {
          const filactiv = checkedActiv;
          return { filactiv }})
      }}
    filterAccess = i => {
      const target = i.target;
      target.checked == true ? checkedAccess.push(target.name) : checkedAccess.splice(checkedAccess.indexOf(target.name), 1);
      if (checkedAccess.length == 2 || checkedAccess.length == 0) {
        this.setState(prev => {
          const filaccess = [`sea`, `air`];
          return { filaccess }})
      } else {
        this.setState(prev => {
          const filaccess = checkedAccess;
          return { filaccess }})
      }}
  render() {
    const position = [this.props.center.lat, this.props.center.lng];
    return (
      <div className="map-root">
        <Map center={position} zoom={this.state.zoom} style={{height:"100%", width: "100%", marginTop: "48px", zIndex: 1}}><ReactLeafletGoogleLayer type={'satellite'}/></Map>
        <style jsx>{`.map-root {height: 100%;width: 100%;}.leaflet-container {height: 400px !important;width: 80%;margin: 0 auto;}.columns {height: 500px; width: 500px; overflow-y: scroll; display:grid; grid-template-columns: repeat(auto-fill, minmax(200px, auto)); grid-auto-flow: rows; grid-auto-rows: 1fr; grid-gap: 5%;}`}</style>
      </div>
    );
  }}
