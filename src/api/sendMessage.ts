import { baseUrl } from "./telegram";
export const sendMessage = async (message: string): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=-4172700950&text=${message}`;
        const response = await fetch(url);
    if(!response.ok){
        const error = await response.json()
        await Promise.reject(error.description || 'Что-то пошло не так...')
        console.log('error:', error);
    }
};
