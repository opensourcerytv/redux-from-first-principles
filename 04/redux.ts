type TReducer = (state: any, action: any) => any;

export function createStore(reducer: TReducer, state: any = {}) {
    return {
        getState: () => state,
        dispatch: action => state = reducer(state, action)
    }
}

export function reducer(prevState, currentAction) {
    switch (currentAction) {
        case '@@INIT': return 0
        case 'INCREMENT': return prevState + 1;
        case 'DECREMENT': return prevState - 1;
    }
    return prevState;
}

