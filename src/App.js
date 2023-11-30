import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import ThemeChange from './context/ThemeChange'

import './App.css'

class App extends Component {
  state = {
    savedVideos: [],
    activeTheme: 'light',
    activeTab: 'HOME',
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  changeTheme = () => {
    this.setState(prevState => ({
      activeTheme: !prevState.activeTheme,
    }))
  }

  addToSaveVideos = video => {
    const {savedVideos} = this.state
    const videoObject = savedVideos.find(eachVideo => eachVideo.id === video.id)

   if(videoObject){
       this.setState(prevState=>({savedVideos:[...prevState.savedVideos],
    }))
   }else{
    this.setState({savedVideos:[...savedVideos,video]})
   }

  removeSaveVideos = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideos: updatedSavedVideos})
  }
  
  render(){
    const {savedVideos, activeTheme, activeTab} = this.state

    return (
      <ThemeChange.Provider
        value={{
          savedVideos,
          activeTheme,
          activeTab,
          changeTheme: this.changeTheme,
          removeSaveVideos:this.removeSaveVideos
          addToSaveVideos: this.addToSaveVideo,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeChange.Provider>
    )
  }
}

export default App
