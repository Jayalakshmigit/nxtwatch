import React from 'react'

const ThemeChange = React.createContext({
  activeTheme: 'light',
  onChangeTheme: () => {},

  savedVideos: [],
  addSavedVideos: () => {},
})

export default ThemeChange
