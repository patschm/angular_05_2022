export function reduce(state, action)
{
    if (action.type == 'loaded')
    {
        return action.payload;
    }
    if (action.type == 'add')
    {
        // never change state. Replace it!!!
        return [...state, action.payload];
    }
    if (action.type == 'delete')
    {
        let nwstate = state.filter(it=>it.index != action.payload.index);
        return [...nwstate];
    }
}