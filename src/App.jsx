import desktopBG from './assets/images/background-pattern-desktop.svg'
import mobileBG from './assets/images/background-pattern-mobile.svg'
import starIcon from './assets/images/icon-star.svg'
import Accordion from './components/Accordion'

function App() {

  return (
    <main className='min-h-screen relative'>
      <header className='w-full bg-dark-purple'>
        <picture>
          <source media="(min-width:991px)" srcset={desktopBG} />
          <img src={mobileBG} className='w-full' alt="Pattern background" />
        </picture>
      </header>
      <div className='absolute left-0 top-0 w-full h-full grid place-items-center px-5'>
        <div className="faq-box p-8 max-md:px-5 bg-white rounded-2xl shadow-md md:w-[650px] w-full">
          <div className='flex items-center gap-5'>
            <img src={starIcon} width={32} alt="Star" />
            <h3 className='md:text-5xl text-4xl font-bold text-dark-purple'>FAQs</h3>
          </div>
          <Accordion></Accordion>
        </div>
      </div>
    </main>
  )
}

export default App
