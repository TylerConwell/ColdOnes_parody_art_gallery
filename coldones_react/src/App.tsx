import { useState } from 'react'
import beerju from './assets/beerju coldones.png'
import skull from './assets/coldones_org.png'
import grape from './assets/grog_grape.png'
import lemon from './assets/grog_lemonice.png'
import peach from './assets/grog_peach.png'
import chad from './assets/japanese_chad.png'
import max from './assets/japanese_max_png.png'
import mexicanMax from './assets/max_chuco_png.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
    // track which posters are currently animating (spinning)
    const [spinning, setSpinning] = useState<Set<number>>(new Set())

    const handleClick = (idx: number) => {
      setSpinning((prev) => {
        const next = new Set(prev)
        next.add(idx)
        return next
      })
    }

    const handleAnimationEnd = (idx: number) => {
      setSpinning((prev) => {
        const next = new Set(prev)
        next.delete(idx)
        return next
      })
    }

  return (
    <>
      {/* working title for the gallery */}
      <h1>Cold Ones Art Gallery</h1>

      {/* Stim button for randomly pressing */}
      <div className="fun_button">
        <button onClick={() => setCount((count) => count + 1)}>
          Wow you clicked this button {count} times
        </button>

        <p>
          Incase you needed a way to relieve stress, 
          or use it as a voting mechanism since I havent made one yet.
        </p>
      </div>

      {/* section is the grid container for the gallery items */}
      <section className="gallery">
        <div className="gallery-item">
          <img
            src={beerju}
            alt="beerju coldones"
            className={`poster ${spinning.has(0) ? 'spin' : ''}`}
            onClick={() => handleClick(0)}
            onAnimationEnd={() => handleAnimationEnd(0)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(0) } }}
            tabIndex={0}
          />
          <h3>Beerju Poster</h3>
          <p>
            So, like from what I see its a beer and a big one at that,
            and its walking around destroying stuff.
          </p>
        </div>

        <div className="gallery-item">
          <img
            src={skull}
            alt="coldones org"
            className={`poster ${spinning.has(1) ? 'spin' : ''}`}
            onClick={() => handleClick(1)}
            onAnimationEnd={() => handleAnimationEnd(1)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(1) } }}
            tabIndex={0}
          />
          <h3>Cold Ones Skull Poster</h3>
          <p>
            Some kinda bottom text with a skull and a concrete dog. What the dog doing?
          </p>
        </div>

        <div className="gallery-item">
          <img
            src={grape}
            alt="grog grape"
            className={`poster ${spinning.has(2) ? 'spin' : ''}`}
            onClick={() => handleClick(2)}
            onAnimationEnd={() => handleAnimationEnd(2)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(2) } }}
            tabIndex={0}
          />
          <h3>Grape Grog Poster</h3>
          <p>
            A lovey grape grop would hit pretty good right now.
            Mmmmm.
          </p>
        </div>

        <div className="gallery-item">
          <img
            src={lemon}
            alt="grog lemonice"
            className={`poster ${spinning.has(3) ? 'spin' : ''}`}
            onClick={() => handleClick(3)}
            onAnimationEnd={() => handleAnimationEnd(3)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(3) } }}
            tabIndex={0}
          />
          <h3>Lemon Ice Grog Poster</h3>
          <p>
            Hold up is that a Lemon Ice Grog? Yea i'll take two.
          </p>
        </div>

        <div className="gallery-item">
          <img
            src={peach}
            alt="grog peach"
            className={`poster ${spinning.has(4) ? 'spin' : ''}`}
            onClick={() => handleClick(4)}
            onAnimationEnd={() => handleAnimationEnd(4)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(4) } }}
            tabIndex={0}
          />
          <h3>Peach Grog Poster</h3>
          <p>
            Wait wait wait your telling me they have Peach Grog now?
          </p>
        </div>

        <div className="gallery-item">
          <img
            src={chad}
            alt="japanese chad"
            className={`poster ${spinning.has(5) ? 'spin' : ''}`}
            onClick={() => handleClick(5)}
            onAnimationEnd={() => handleAnimationEnd(5)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(5) } }}
            tabIndex={0}
          />
          <h3>Japanese Chad Grog Poster</h3>
          <p>
            Some kinda old japanese themed Chad from cold ones. JojiVlogs?
          </p>
        </div>

        <div className="gallery-item">
          <img
            src={max}
            alt="japanese max"
            className={`poster ${spinning.has(6) ? 'spin' : ''}`}
            onClick={() => handleClick(6)}
            onAnimationEnd={() => handleAnimationEnd(6)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(6) } }}
            tabIndex={0}
          />
          <h3>Japanese Max Grog Poster</h3>
          <p>
            Ah, now thats a classic old japanese stye max, or is that chinese style?
          </p>
        </div>

        <div className="gallery-item">
          <img
            src={mexicanMax}
            alt="max chuco"
            className={`poster ${spinning.has(7) ? 'spin' : ''}`}
            onClick={() => handleClick(7)}
            onAnimationEnd={() => handleAnimationEnd(7)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(7) } }}
            tabIndex={0}
          />
          <h3>Mexican Max Poster</h3>
          <p>
            Wait your telling me I can get this and like hang it up in my casa?
          </p>
        </div>
      </section>
    </>
  )

}

export default App
