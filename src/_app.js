import React from "react"
import Router from "next/router"
import NProgress from "nprogress"
import "../css/styles.css"

NProgress.configure({ showSpinner: false, minimum: 0.2 })

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
