export function createStore(state: any = {}) {
    return {
        getState: () => state,
        dispatch: () => {}
    }
}

export function reducer(prevState, currentAction) {
    return prevState + currentAction;
}

