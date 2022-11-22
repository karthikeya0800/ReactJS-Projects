import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function Page(){
  const [darkMode,setDarkMode]=React.useState("")
  function changeMode(){
    setDarkMode(prev => !prev)
  }
  return(
    <div className={darkMode?"dark":""}>
      <Header handleMode={changeMode} mode = {darkMode}/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(
  <Page/>,
  document.getElementById("root")
)