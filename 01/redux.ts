export function createStore(state: any = {}) {
    return {
        getState: () => state,
        dispatch: () => {}
    }
}