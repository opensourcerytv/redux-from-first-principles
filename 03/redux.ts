type TReducer = (state: any, action: any) => any;

export function createStore(reducer: TReducer, state: any = {}) {
    return {
        getState: () => state,
        dispatch: action => state = reducer(state, action)
    }
}

export function reducer(prevState, currentAction) {
    return prevState + currentAction;
}

