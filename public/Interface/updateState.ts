export interface IState{
    updateState?: () => void,
    state?:boolean
}

export interface INotification{
    active: boolean,
    setActive: () => void,
    ref: React.MutableRefObject<undefined>
}