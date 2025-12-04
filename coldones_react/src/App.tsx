import { useState } from 'react'
import beerju from './assets/beerju coldones.png'
import skull from './assets/coldones_org.png'
import grape from './assets/grog_grape.png'
import lemon from './assets/grog_lemonice.png'
import peeach from './assets/grog_peach.png'
import chad from './assets/japanese_chad.png'
import max from './assets/japanese_max_png.png'
import mexicanMax from './assets/max_chuco_png.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

      <div>
        <img src={beerju} alt="beerju coldones" />
        <h3>Beerju Poster</h3>
        <p>
          So, like from what I see its a beer and a big one at that,
          and its walking around destroying stuff.
        </p>
      </div>

      <div>
        <img src={skull} alt="coldones org" />
        <h3>Cold Ones Skull Poster</h3>
        <p>
          Some kinda bottom text with a skull and a concrete dog.
        </p>
      </div>

      <div>
        <img src={grape} alt="grog grape" />
        <h3>Grape Grog Poster</h3>
        <p>
          A lovey grape grop would hit pretty good right now.
          Mmmmm.
        </p>
      </div>

      <div>
        <img src={lemon} alt="grog lemonice" />
        <h3>Lemon Ice Grog Poster</h3>
        <p>
          Hold up is that a Lemon Ice Grog? Yea i'll take two.
        </p>
      </div>

      <div>
        <img src={peeach} alt="grog peeach" />
        <h3>Peach Grog Poster</h3>
        <p>
          Wait wait wait your telling me they have Peach Grog now?
        </p>
      </div>

      <div>
        <img src={chad} alt="japanese chad" />
        <h3>Japanese Chad Grog Poster</h3>
        <p>
          Some kinda old japanese themed Chad from cold ones. JojiVlogs?
        </p>
      </div>

      <div>
        <img src={max} alt="japanese max" />
        <h3>Japanese Max Grog Poster</h3>
        <p>
          Ah, now thats a classic old japanese stye max, or is that chinese style?
        </p>
      </div>

      <div>
        <img src={mexicanMax} alt="max chuco" />
        <h3>Mexican Max Poster</h3>
        <p>
          Wait your telling me I can get this and like hang it up in my casa?
        </p>
      </div>
    </>
  )
}

export default App
