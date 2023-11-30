import React from 'react'

const ThemeChange = React.createContext({
  activeTheme: 'light',
  changeTheme: () => {},

  savedVideos: [],
  addToSaveVideos: () => {},

  activeTab: 'Home',
  changeTab: () => {},
  removeSaveVideos: () => {},
})

export default ThemeChange
