import React from 'react'
const MenuButton = props => {
  const icon = props.icon === 'string' ? <i className={props.icon} /> : props.icon
  const active = props.id === props.selected && !props.collapsed ? ' active' : ''
  const disabled = props.disabled ? ' disabled' : ''
  return <li className={active + disabled} key={props.id}><a href={`#${props.id}`}role='tab'onClick={e => props.disabled || (props.collapsed ? props.onOpenClick(props.id) : (props.selected === props.id ? props.onClose() : props.onOpenClick(props.id)))} onMouseEnter={e => props.onOpenHover(props.id)} onMouseLeave={e => props.onClose()}>{' '}{icon}</a></li>
}
export default MenuButton
