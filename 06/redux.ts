type TReducer = (state: any, action: any, ...args) => any;

export function createStore(reducer: TReducer, state: any = {}) {
    return {
        getState: () => state,
        dispatch: (action, ...args) => state = reducer(state, action, ...args),
        subscribe: () => {}
    }
}

export function reducer(prevState, currentAction, ...args) {
    if (!args) {
        args = [0];
    }
    switch (currentAction) {
        case '@@INIT': return 0
        case 'INCREMENT': return prevState + 1;
        case 'DECREMENT': return prevState - 1;
        case 'ADD': return prevState + args[0]
    }
    return prevState;
}

