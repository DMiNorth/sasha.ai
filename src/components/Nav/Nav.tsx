import '../../index.css'
import play from '/public/play.svg'
import Card from '../Card/Card.tsx'
function Nav({updateModel}) {
    return(
        <>
            <div className='ml-8 mt-16 flex mb-[140px] relative'>
                <div className='max-w-3xl font-bold mr-10'>
                    <h1 className='text-white font-inter text-5xl leading-11'>Внедрите в бизнес <span className='text-green'>AI-продавца</span>, который начнет окупать себя с первого дня работы</h1>
                </div>
                <div className='max-w-[438px]'>
                    <h2 className='text-silver-gray font-inter font-medium text-base leading-6 mb-11'>Революционный продукт для малого и среднего бизнеса, доступный для каждого.</h2>
                    <div className='font-inter font-semibold text-[16px] flex'>
                        <button onClick={updateModel}
                            className='transition-colors hover:bg-[#75D42A] text-black bg-green min-w-44 min-h-11 flex items-center justify-center rounded-xl mr-6'>получить
                            демо <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                      stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                            </svg>
                        </button>
                        <button className='hover:text-white transition-colors text-green flex items-center justify-center'><img src={play} alt='play'
                                                                                             className='mr-[7px]'/> слушать
                            пример звонка
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-filial bg-no-repeat h-96 relative'>
                <div className='bg-gradient-to-t from-black to-white/0 h-60 absolute bottom-0 w-[100%]'/>
                <div className='flex justify-between'>
                    <div className='mt-10 ml-10'><Card/></div>
                    <div className='mt-52 mr-5'><Card/></div>
                    <div className='mt-16 mr-25'><Card/></div>
                    <div className='mt-28 mr-12'><Card/></div>
                </div>
            </div>
        </>
    )
}

export default Nav;