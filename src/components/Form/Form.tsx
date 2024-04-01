import '../../index.css'
import plus_green from '/public/plus_green.svg'
function Form({setActive}){
    return (
        <>
            <div className='mr-8 ml-8 bg-green rounded-2xl h-[407px] p-8 relative'>
                <div className='text-black font-inter font-bold bg-white rounded-2xl h-[250px] flex justify-between p-6 pb-8'>
                    <div className='text-[64px] leading-[65px] max-w-[840px]'>
                        Оставьте свои контакты и мы заботливо оповестим вас о запуске продукта <a target='_blank1'></a>
                    </div>
                    <div className='text-5xl max-w-[188px] bg-clip-text text-transparent bg-gradient-to-b from-[#060606] to-[#757575]'>
                        sasha.ai sales future is here
                    </div>
                </div>
                <div className='mt-12'>
                    <button
                        onClick={setActive}
                        className='bg-[#060606] hover:bg-[#202020] transition-colors w-full flex items-center justify-center rounded-xl text-green p-3 text-xl'>получить демо
                        <img className='ml-2 flex justify-center items-center mt-1' src={plus_green} alt="green"/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Form;