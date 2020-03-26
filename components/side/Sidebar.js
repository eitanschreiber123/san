import React from 'react'
import { PropTypes } from 'prop-types'
import Tab from './Tab'
import MenuButton from './MenuButton'
import { MapComponent } from 'react-leaflet'
import styled from 'styled-components'
const Wrapper = styled.div`.sidebar{position:absolute;top:0;bottom:0;width:100%;overflow:hidden;z-index:2000;box-shadow:0 1px 5px rgba(0,0,0,.65)}.sidebar.collapsed{width:40px}@media (min-width:768px) and (max-width:991px){.sidebar{width:305px}.sidebar-pane{min-width:265px}}@media (min-width:992px) and (max-width:1199px){.sidebar{width:390px}}@media (min-width:1200px){.sidebar{width:460px}}.sidebar-left{left:0}.sidebar-right{right:0}@media (min-width:768px){.sidebar{top:145px;left:20px;bottom:10px;transition:width .5s}.sidebar-left{left:10px}.sidebar-right{right:10px}}.sidebar-tabs{top:0;bottom:0;height:100%;background-color:#fff}.sidebar-left .sidebar-tabs{left:0}.sidebar-right .sidebar-tabs{right:0}.sidebar-tabs,.sidebar-tabs>ul{position:absolute;width:40px;margin:0;padding:0}.sidebar-tabs>li,.sidebar-tabs>ul>li{width:100%;height:40px;color:#333;font-size:12pt;overflow:hidden;transition:all 80ms}.sidebar-tabs>li:hover,.sidebar-tabs>ul>li:hover{color:#000;background-color:#eee}.sidebar-tabs>li.active,.sidebar-tabs>ul>li.active{color:#fff;background-color:#0074d9}.sidebar-tabs>li.disabled,.sidebar-tabs>ul>li.disabled{color:rgba(51,51,51,.4)}.sidebar-tabs>li.disabled:hover,.sidebar-tabs>ul>li.disabled:hover{background:0 0}.sidebar-tabs>li.disabled>a,.sidebar-tabs>ul>li.disabled>a{cursor:default}.sidebar-tabs>li>a,.sidebar-tabs>ul>li>a{display:block;width:100%;height:100%;line-height:40px;color:inherit;text-decoration:none;text-align:center}.sidebar-tabs>ul+ul{bottom:0}.sidebar-content{position:absolute;top:0;bottom:0;background-color:rgba(255,255,255,.95);overflow-x:hidden;overflow-y:auto}.sidebar-left .sidebar-content{left:40px;right:0}.sidebar-right .sidebar-content{left:0;right:40px}.sidebar.collapsed>.sidebar-content{overflow-y:hidden}.sidebar-pane{display:none;left:0;right:0;box-sizing:border-box;padding:10px 20px}.sidebar-pane.active{display:block}.sidebar-header{margin:-10px -20px 0;height:40px;padding:0 20px;line-height:40px;font-size:14.4pt;color:#fff;background-color:#0074d9}.sidebar-right .sidebar-header{padding-left:40px}.sidebar-close{position:absolute;top:0;width:40px;height:40px;text-align:center;cursor:pointer}.sidebar-left .sidebar-close{right:0}.sidebar-right .sidebar-close{left:0}.sidebar-left~.sidebar-map{margin-left:40px}.sidebar-right~.sidebar-map{margin-right:40px}.sidebar.leaflet-touch{box-shadow:none;border:none}@media (min-width:768px) and (max-width:991px){.sidebar-left~.sidebar-map .leaflet-left{left:315px}.sidebar-right~.sidebar-map .leaflet-right{right:315px}}@media (min-width:992px) and (max-width:1199px){.sidebar-pane{min-width:350px}.sidebar-left~.sidebar-map .leaflet-left{left:400px}.sidebar-right~.sidebar-map .leaflet-right{right:400px}}@media (min-width:1200px){.sidebar-pane{min-width:420px}.sidebar-left~.sidebar-map .leaflet-left{left:470px}.sidebar-right~.sidebar-map .leaflet-right{right:470px}}@media (min-width:768px){.sidebar-left~.sidebar-map{margin-left:0}.sidebar-right~.sidebar-map{margin-right:0}.sidebar{border:none}.sidebar.leaflet-touch{border:none}.sidebar-left~.sidebar-map .leaflet-left{transition:left .5s}.sidebar-left.collapsed~.sidebar-map .leaflet-left{left:50px}.sidebar-right~.sidebar-map .leaflet-right{transition:right .5s}.sidebar-right.collapsed~.sidebar-map .leaflet-right{right:50px}}.other {position: relative; z-index: 100;}.hover-content{height: 40px;position:absolute;background-color:rgba(255,255,255,.95);overflow-x:hidden;overflow-y:auto}.sidebar.collapsed>.hover-content{overflow-y:hidden}.sidebar-left .hover-content{left:40px;right:0}.moveUp, .moveDown {position: relative; left: 10px; bottom: 20px;}.first {top: 0; bottom: 520px;}.second {top: 40px; bottom: 480px;}`
class Sidebar extends MapComponent {
  onClose(e) {
    e.preventDefault()
    e.stopPropagation()
    this.props.onClose && this.props.onClose(e)}
  onOpen(e, tabid) {
    e.preventDefault()
    e.stopPropagation()
    this.props.onOpen && this.props.onOpen(tabid)}
  renderPanes(children) {
    return React.Children.map(children, p =>
      React.cloneElement(p, {
        onClose: this.onClose.bind(this),
        closeIcon: this.props.closeIcon,
        active: p.props.id === this.props.selected,
        position: this.props.position || 'left'
      }))}
  render() {
    const position = ` sidebar-${this.props.position || 'left'}`
    const collapsed = this.props.collapsed ? ' collapsed' : ''
    const tabs = React.Children.toArray(this.props.children)
    const bottomtabs = tabs.filter(t => t.props.anchor === 'bottom')
    const toptabs = tabs.filter(t => t.props.anchor !== 'bottom')
    const upDown = this.props.upDown ? `moveUp` : `moveDown`
    const pos = this.props.upDown ? ` first` : ` second`
    return (
      <Wrapper>
      <h1 style={{position: "absolute", top: "90px", left: "10px", zIndex: 100, color: "white"}}>Filter</h1>
      <div id={this.props.id} className={`sidebar leaflet-touch${position}${collapsed}`} ref={el => {this.rootElement = el}}>
        <div className='sidebar-tabs'>
          <ul role='tablist'>{toptabs.map(t => <MenuButton key={t.props.id} show={this.props.show} id={t.props.id} icon={t.props.icon} disabled={t.props.disabled}selected={this.props.selected} collapsed={this.props.collapsed} onClose={this.props.onClose} onOpenClick={this.props.onOpenClick} onOpenHover={this.props.onOpenHover}/>)}</ul>
          <ul role='tablist'>{bottomtabs.map(t => <MenuButton key={t.props.id} id={t.props.id} icon={t.props.icon} disabled={t.props.disabled} selected={this.props.selected} collapsed={this.props.collapsed} onClose={this.props.onClose} onOpenClick={this.props.onOpenClick} onOpenHover={this.props.onOpenHover}/>)}</ul>
        </div>
        {this.props.dis == `clicked` ? <div className='sidebar-content'>{this.renderPanes(this.props.children)}</div> : <div className={`hover-content${pos}`}><h1 className={upDown}>{this.props.hover_header}</h1></div>}
      </div>
      </Wrapper>
    )}}
export default Sidebar
