import '../../index.css'
import people_1 from '/public/people/1.jpg'
function Card(){
    return(
      <div>
          <div className='w-44 h-16 bg-[#373737]/60 rounded-xl bg-opacity-10 relative' id='point-card'>
              <div className="pl-2.5 pt-2.5 pr-4 pb-2.5 flex justify-between rounded-full">
                  <div>
                      <img src={people_1} alt="1" className='rounded-full'/>
                  </div>
                  <div className='font-inter font-medium'>
                    <h1 className='text-base text-white'>Иван Юдин</h1>
                    <h2 className='text-[12px] text-silver-gray'>Входящий вызов</h2>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Card;