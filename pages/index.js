import React from 'react'
import dynamic from 'next/dynamic';
import Nav from 'components/Nav'
const MyMap = dynamic(() => import('components/map'), {ssr: false});
const MapPage = () => (
  <div>
    <Nav />
    <div><MyMap /></div>
  </div>
)
export default MapPage
