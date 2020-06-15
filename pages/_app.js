import React from 'react'
import App from 'next/app'
import { appWithTranslation } from '../i18n'
import "react-image-lightbox/style.css";
import 'react-slidedown/lib/slidedown.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default appWithTranslation(MyApp)
