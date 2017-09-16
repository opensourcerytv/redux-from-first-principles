type TReducer = (state: any, action: any) => any;

export function createStore(reducer: TReducer, state: any = {}) {
    let subscribers = new Set();
    return {
        getState: () => state,
        dispatch: (action, ...args) => {
            let prevState = state;
            state = reducer(state, action, ...args);
            if (state != prevState && subscribers) {
                subscribers.forEach(fn => fn(state));
            }
        },
        subscribe: fn => subscribers.add(fn)
    }
}

export function reducer(prevState, currentAction, ...args) {
    if (!args) {
        args = [0];
    }
    let state;
    switch (currentAction) {
        case '@@INIT':
            state = 0;
            break;
        case 'INCREMENT':
            state = prevState + 1;
            break;
        case 'DECREMENT':
            state = prevState - 1;
            break;
        case 'ADD':
            state =  prevState + args[0];
            break;
        default: return prevState;
    }
    return state;
}


