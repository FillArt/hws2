import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const result = state.sort((a: UserType, b: UserType) => a.name.localeCompare(b.name));
            return action.payload === 'up' ? result : result.reverse();
        }
        case 'check': {
            return state.filter((item: UserType) => item.age >= action.payload);
        }
        default:
            return state
    }
}
