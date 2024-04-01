import '../../index.css'
function Information() {
    return(
        <>
            <div className='bg-pulse bg-no-repeat bg-center relative'>
                <div className='pulse'></div>
                <div className='bg-gradient-to-b from-black to-white/0 h-60 bottom-0 w-[100%]'/>
                <div className='font-bold font-inter ml-4 mt-[110px] mr-12'>
                    <div className='text-silver-gray text-base'>
                        [ О проекте ]
                    </div>
                    <div
                        className='text-white text-[4rem] leading-[70px] mt-2 mb-[132px] max-w-[1380px] tracking-tight'>
                        <span className='underline'>sasha.ai</span> — первый в России искусственный интеллект, который
                        проводит<span className='text-green'> <a
                        target='_blank'></a>40-минутные звонки</span> неотличимые
                        от разговора с реальным человеком.
                    </div>
                </div>

                <div className='bg-gradient-to-t from-black to-white/0 h-60 bottom-0 w-[100%]'/>
            </div>
        </>
    )

}

export default Information;