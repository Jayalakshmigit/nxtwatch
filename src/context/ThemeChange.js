import React from 'react'

const ThemeChange = React.createContext({
  activeTheme: 'light',
  changeTheme: () => {},

  savedVideos: [],
  addSavedVideos: () => {},

  activeTab: 'Home',
  changeTab: () => {},
})

export default ThemeChange
