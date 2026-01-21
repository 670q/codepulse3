import { useState, useRef } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Work } from './components/Work'
import { Contact } from './components/Contact'
import { ScrollManager } from './components/ScrollManager'

function App() {
  const [textureUrl, setTextureUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setTextureUrl(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white selection:bg-purple-500/30" dir="rtl">
      <ScrollManager />
      <Navbar />

      <main>
        <Hero
          textureUrl={textureUrl}
          fileInputRef={fileInputRef}
          handleFileChange={handleFileChange}
          triggerFileInput={triggerFileInput}
        />
        <Services />
        <Work />
      </main>

      <Contact />
    </div>
  )
}

export default App
