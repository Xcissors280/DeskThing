import { useState } from 'react'
import Devices from './Devices'
import Tabs, { View } from '../Tabs'
import Loading from '../Loading'

const Index = (): JSX.Element => {
  const views: View[] = [
    { id: 'dashboard', display: 'Dashboard' },
    { id: 'devices', display: 'Devices' }
  ]
  const [currentView, setCurrentView] = useState<View>(views[0])
  const renderView = (): JSX.Element | undefined => {
    switch (currentView.id) {
      case 'devices':
        return <Devices />
      case 'dashboard':
        return <Loading message="Awaiting Implementation" />
      default:
        return undefined
    }
  }

  return (
    <>
      <Tabs currentView={currentView} setCurrentView={setCurrentView} views={views} />
      <div className="w-full h-full">{renderView()}</div>
    </>
  )
}

export default Index
