'use client'

import { Textarea as HeroUiTextarea } from '@heroui/input'
import { Textarea as MantineTextarea } from '@mantine/core'
import { useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

const LONG_TEXT = '吾輩わがはいは猫である。名前はまだ無い。どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。この書生というのは時々我々を捕つかまえて煮にて食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌てのひらに載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始みはじめであろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶やかんだ。その後ご猫にもだいぶ逢あったがこんな片輪かたわには一度も出会でくわした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙けむりを吹く。どうも咽むせぽくて実に弱った。これが人間の飲む煙草たばこというものである事はようやくこの頃知った。'

export default function Page() {
  const [rtaText, setRtaText] = useState(LONG_TEXT)
  const [mantineText, setMantineText] = useState(LONG_TEXT)
  const [heroUiText, setHeroUiText] = useState(LONG_TEXT)

  const rtaRef = useRef<HTMLTextAreaElement>(null)
  const mantineRef = useRef<HTMLTextAreaElement>(null)
  const heroUiRef = useRef<HTMLTextAreaElement>(null)

  return (
    <div className="grid gap-16">
      {/* react-textarea-autosize: https://github.com/Andarist/react-textarea-autosize */}
      <div className="grid gap-4">
        <h2 className="text-2xl/7 font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight">react-textarea-autosize / Controlled</h2>
        <div className="grid gap-4">
          <TextareaAutosize className="border-2 border-black p-4 rounded-md" onChange={e => setRtaText(e.target.value)} value={rtaText} />
          <button type="button" onClick={() => setRtaText('')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            値を空にする
          </button>
        </div>
      </div>
      <div className="grid gap-4">
        <h2 className="text-2xl/7 font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight">react-textarea-autosize / UnControlled</h2>
        <form className="grid gap-4">
          <TextareaAutosize ref={rtaRef} className="border-2 border-black p-4 rounded-md" defaultValue={LONG_TEXT} />
          <button
            type="button"
            onClick={() => {
              rtaRef.current!.value = ''
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            値を空にする
          </button>
        </form>
      </div>
      <div className="grid gap-4">
        <h2 className="text-2xl/7 font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight">react-textarea-autosize / Form Reset</h2>
        <form className="grid gap-4">
          <TextareaAutosize className="border-2 border-black p-4 rounded-md" defaultValue="" />
          <button type="reset" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            値を空にする
          </button>
        </form>
      </div>
      {/* Mantine: https://mantine.dev/core/textarea/ */}
      <div className="grid gap-4">
        <h2 className="text-2xl/7 font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight">Mantine / Controlled</h2>
        <div className="grid gap-4">
          <MantineTextarea autosize onChange={e => setMantineText(e.target.value)} value={mantineText} />
          <button type="button" onClick={() => setMantineText('')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            値を空にする
          </button>
        </div>
      </div>
      <div className="grid gap-4">
        <h2 className="text-2xl/7 font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight">Mantine / UnControlled</h2>
        <form className="grid gap-4">
          <MantineTextarea autosize ref={mantineRef} defaultValue={LONG_TEXT} />
          <button
            type="button"
            onClick={() => {
              mantineRef.current!.value = ''
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            値を空にする
          </button>
        </form>
      </div>
      {/* HeroUI: https://www.heroui.com/docs/components/textarea */}
      <div className="grid gap-4">
        <h2 className="text-2xl/7 font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight">HeroUI / Controlled</h2>
        <div className="grid gap-4">
          <HeroUiTextarea onChange={e => setHeroUiText(e.target.value)} value={heroUiText} />
          <button type="button" onClick={() => setHeroUiText('')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            値を空にする
          </button>
        </div>
      </div>
      <div className="grid gap-4">
        <h2 className="text-2xl/7 font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight">HeroUI / UnControlled</h2>
        <form className="grid gap-4">
          <HeroUiTextarea ref={heroUiRef} defaultValue={LONG_TEXT} />
          <button
            type="button"
            onClick={() => {
              heroUiRef.current!.value = ''
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            値を空にする
          </button>
        </form>
      </div>
    </div>
  )
}
