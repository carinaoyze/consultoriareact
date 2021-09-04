// Action Types
export const ContatosActions = {
    ADD_CONTATO: 'contatos/ADD',
    REMOVE_CONTATO: 'contatos/REMOVE'
} 


// Initial State de Contatos
const initialState = [];

// Reducer
export function contatosReducer( state = initialState, action = {} )
{
    switch(action.type)
    {
        case ContatosActions.ADD_CONTATO:
            return [ action.payload.novoContato, ...state ];

        case ContatosActions.REMOVE_CONTATO:
            const index = action.payload.index;
            state.splice(index, 1);
            return [...state];
    }

    return state;
}