import '../../index.css'
import logo from '/public/logo.png'
import burgerIcon from '/public/burger.svg'
import {IState} from "../../../public/Interface/updateState.ts";



function Header({updateState, state} : IState) {
    return(
        <>
            <div className='ml-8 mr-8 mt-4 flex justify-between'>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    <button className='bg-burger-bg w-16 h-10 flex justify-center items-center rounded-3xl' onClick={updateState}>
                        {state ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="w-6 h-6 fill-green">
                                <path
                                    d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"/>
                            </svg> : <img src={burgerIcon} alt="icon"/>
                        }
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;