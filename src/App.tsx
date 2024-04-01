import Header from './components/Header/Header.tsx'
import Nav from './components/Nav/Nav.tsx'
import Information from "./components/Information/Information.tsx";
import Form from "./components/Form/Form.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { useForm, SubmitHandler } from "react-hook-form"
import {useEffect, useRef, useState} from "react";
import { sendMessage } from "./api/sendMessage.ts";

enum Description {
    big = 'Большой бизнес',
    small = 'Малый и средний бизнес',
    crm = 'CRM & SaaS платформа, ищущая интеграцию с AI',
    investor = 'Инвестор',
    worker = 'Сотрудник'
}

enum NumberClient{
    upTo10 = 'До 10.000 клиентов',
    up10To50 = 'От 10.000 до 49.999 клиентов',
    up50To250 = 'От 50.000 до 250.000 клиентов',
    up250 = 'Более 250.000 клиентов',
}

interface IFormInput {
    name: string,
    email: string,
    number: string,
    siteCompany?: string,
    region?: string,
    describes: Description,
    use?: string,
    howClient?: NumberClient
}

function App() {
    const [active, setActive] = useState(false)
    const [modal, setModal] = useState(false)
    const ref1 = useRef()
    const ref2= useRef()
    const ref3 = useRef()
    const { register, handleSubmit } = useForm<IFormInput>()
    const [successNotification, setSuccessNotification] = useState(false)
    const onSubmit: SubmitHandler<IFormInput> =  async (data: IFormInput): Promise<void> =>{
        try {
            const message: string = `Имя: ${data.name}\nПочта: ${data.email}\nТелефон: ${data.number}\nСайт: ${data.siteCompany}\nРегион/Язык: ${data.region}\nКто?: ${data.describes}\nПользование: ${data.use}\nСколько?: ${data.howClient}`;
            const formattedMessage : string = encodeURIComponent(message)
            await sendMessage(formattedMessage);
        }
        finally {
            updateModel();
            setSuccessNotification(true)
        }
    }

    function NavCardText({text}: { text: string }) {
        return (
            <>
                <div className={'font-inter font-bold text-5xl text-[#A58CEA] flex'}>
                    {text}<span className={'after:absolute'}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                  fill="currentColor" className="w-6 h-6 fill-green"> <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd"/>
                </svg>
            </span>
                </div>
            </>
        )
    }

    useEffect(() => {
        setTimeout(() => {
            const valueRef1 = ref1.current as HtmlElement;
            const valueRef2 = ref2.current as HtmlElement;
            const valueRef3 = ref3.current as HtmlElement;
            if (valueRef1) {
                valueRef1.classList.remove('opacity-0');
            }
            if(valueRef2){
                valueRef2.classList.remove('opacity-0')
                valueRef2.classList.remove('-translate-y-[100%]')
            }
            if(valueRef3){
                valueRef3.classList.remove('ml-[200%]')
            }
        }, 100)
    }, )

    function updateState(){
        setActive(!active);
    }

    function updateModel(){
        setModal(!modal);
    }


  return (
      <>
          <div>
              <Header updateState={updateState} state={active}/>
              <Nav updateModel={updateModel}/>
              <Information />
              <Form setActive={updateModel}/>
              <Footer />
              {active && <>
                  <div
                      className='duration-500 -translate-y-[100%] opacity-0 transition-transform bg-black/80 absolute w-full mt-20 max-w-[1440px] top-0 left-50 flex justify-center items-center' ref={ref2}>
                      <div className={'font-inter font-bold w-full pl-8 pr-8'}>
                          <div className={'flex w-full h-[37.5em] gap-3'}>
                              <div className={'bg-[#4B1AD6] rounded-2xl w-full min-w-[56.25rem]'}>
                                  <nav className={'pl-8 pt-[8rem] max-w-24'}>
                                      <ul className={'text-white text-5xl'} id={'navbarText'}>
                                          <li>Продукт</li>
                                          <li><a href="#!"><NavCardText text={'Выгоды'}/></a></li>
                                          <li><a href="#!"><NavCardText text={'Кастомизация'}/></a></li>
                                          <li><a href="#!"><NavCardText text={'Омниканальность'}/></a></li>
                                          <li><a href="#!"><NavCardText text={'Безопасность'}/></a></li>
                                          <li><a href="#!"><NavCardText text={'Контакты'}/></a></li>
                                      </ul>
                                  </nav>
                              </div>
                              <div className={'bg-white rounded-2xl flex items-center justify-center w-full'}>
                                  <div
                                      className='text-6xl max-w-[265px] bg-clip-text text-transparent bg-gradient-to-b from-[#060606] to-[#757575]'>
                                      sasha.ai sales future is here
                                  </div>
                              </div>
                          </div>
                          <div className={'mt-3'}>
                              <button
                                  onClick={updateModel}
                                  className='bg-green hover:bg-[#75D42A] transition-colors w-full flex items-center justify-center rounded-xl text-black p-3 text-xl'>получить
                                  демо
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                       className="w-5 h-5">
                                      <path
                                          d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"/>
                                  </svg>
                              </button>
                          </div>
                      </div>
                  </div>
              </>}
              {modal && <>
                  <div
                      className='transition-opacity opacity-0 duration-500 fixed inset-0 bg-black/80 flex justify-center items-center'
                      ref={ref1}>
                      <div
                          className={'font-inter block scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[#A58CEA] overflow-y-scroll scroll-smooth scrollbar-w-8 text-white bg-[#4B1AD6] w-[544px] max-h-[600px] rounded-2xl'}
                          onClick={(e) => {
                              e.stopPropagation()
                          }}>
                          <div className={'flex justify-end p-[14px] pb-0'}>
                              <button onClick={updateModel}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                       className="w-7 h-7">
                                      <path
                                          d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"/>
                                  </svg>
                              </button>
                          </div>
                          <div className={'p-8 pt-0 text-5xl font-bold'}>
                              Заполните анкету
                          </div>
                          <div className={'p-8 pt-6'}>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                  <div>
                                      <input type="name"
                                         className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                         placeholder="Имя*" required
                                         {...register('name')}
                                      />
                                  </div>
                                  <div>
                                      <input type="email"
                                             className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                             placeholder="Почта*" required
                                             {...register('email')}/>
                                  </div>
                                  <div>
                                      <input type="number"
                                             className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                             placeholder="Номер*" required
                                             {...register('number')}/>
                                  </div>
                                  <div>
                                      <input type="site"
                                             className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                             placeholder="Сайт компании" required
                                             {...register('siteCompany')}/>
                                  </div>
                                  <div>
                                      <textarea id="aboutLanguage"
                                             className="mb-2 resize-none min-h-[130px] bg-gray-50 border align-top border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                             placeholder="В каком регионе и на каком языке работаете?"
                                             {...register('region')}/>
                                  </div>
                                  <div>
                                      <form className="w-full mx-auto">
                                          <select id="countries"
                                                  className="mb-2 focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                  {...register('describes')} required>
                                              <option disabled selected hidden>Что описывает вас наиболее корректно?*
                                              </option>
                                              <option value={Description.big}>Большой бизнес</option>
                                              <option value={Description.small}>Малый и средний бизнес</option>
                                              <option value={Description.crm}>CRM & SaaS платформа, ищущая интеграцию с AI</option>
                                              <option value={Description.investor}>Инвестор</option>
                                              <option value={Description.worker}>Сотрудник</option>
                                          </select>
                                      </form>
                                  </div>
                                  <div>
                                      <textarea id="aboutUsing"
                                                className="mb-2 resize-none min-h-[130px] bg-gray-50 border align-top border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Как вы хотите использовать наш продукт?"
                                                {...register('use')}/>
                                  </div>
                                  <div>
                                      <form className="w-full mx-auto">
                                          <select id="client"
                                                  className="mb-2 focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                  {...register('howClient')}>
                                              <option disabled selected hidden>Сколько клиентов вы обрабатываете в месяц?
                                              </option>
                                              <option value={NumberClient.upTo10}>До 10.000 клиентов</option>
                                              <option value={NumberClient.up10To50}>От 10.000 до 49.999 клиентов</option>
                                              <option value={NumberClient.up50To250}>От 50.000 до 250.000 клиентов</option>
                                              <option value={NumberClient.up250}>Более 250.000 клиентов</option>
                                          </select>
                                      </form>
                                  </div>
                                  <div className={'mt-6'}>
                                      <button type={'submit'}
                                              className='mb-3 transition-colors hover:bg-[#75D42A] text-black bg-green w-full h-14 flex items-center justify-center rounded-xl mr-6'>получить
                                          демо <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-2">
                                              <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"/>
                                          </svg>
                                      </button>
                                      <button type={'button'}
                                          className='hover:bg-green hover:text-black w-full h-14 border-[1px] border-green rounded-2xl transition-colors text-green flex items-center justify-center'>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                               className="w-5 h-5 mr-3">
                                              <path fillRule="evenodd"
                                                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                                    clipRule="evenodd"/>
                                          </svg>
                                          слушать
                                          пример звонка
                                      </button>
                                  </div>
                                  <div className={'font-inter text-silver-gray text-[0.75rem] mt-4'}>
                                  Нажимая на кнопку «Отправить», я соглашаюсь с обработкой персональных данных
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </>}
              {successNotification && <div className={'fixed bottom-0 right-0'}>
                  <div id="alert-3"
                       className="ml-[200%] w-full opacity-1 transition-all duration-500 flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" ref={ref3}
                       role="alert">
                      <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                           fill="#8AFF2F" viewBox="0 0 20 20">
                          <path
                              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                      </svg>
                      <span className="sr-only">Info</span>
                      <div className="ms-3 text-sm font-medium text-green flex">
                          Анкета была успешно отправлена! Ожидайте, в скором времени с вами свяжутся наши специалисты.
                      </div>
                      <button type="button" onClick={() => setSuccessNotification(false)}
                              className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 fill-green rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 text-green-400 dark:hover:bg-gray-700"
                              data-dismiss-target="#alert-3" aria-label="Close">
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#8AFF2F"
                               viewBox="0 0 14 14">
                              <path stroke="#8AFF2F" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                      </button>
                  </div>
              </div>}
          </div>
      </>
  )
}

export default App;
