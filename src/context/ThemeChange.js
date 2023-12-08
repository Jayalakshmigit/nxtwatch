import React from 'react'

const ThemeChange = React.createContext({
  activeTheme: 'Light',
  changeTheme: () => {},

  savedVideos: [],
  addToSaveVideos: () => {},

  activeTab: '',
  activeTabItem: () => {},
  changeTab: () => {},
  removeSaveVideos: () => {},
})

export default ThemeChange
