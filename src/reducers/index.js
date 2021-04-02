
const initialState = {
    menu: [],
    loading: true,
    items:[],
    total: 0
}

const reducer = (state = initialState, action) => {
 
    switch (action.type) {
        case 'MENU_LOADED':
            return { ...state,
                menu: action.payload,
                loading: false
            };

        case 'MENU_REQUSTED':
            return {...state,
                menu: state.menu,
                loading: true
            };

        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            //
            const itemInd = state.items.findIndex(item => item.id === id);
            console.log(itemInd);
            if (itemInd >= 0){
                const itemInState = state.items.find(item => item.id === id);
                 console.log( itemInState);
                const newItem = {
                    ...itemInState,
                    qtty: ++itemInState.qtty
                }
                console.log( newItem);
                return {
                    ...state, 
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    total: state.total + newItem.price
                }

            } 
            //
            
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id : item.id,
                qtty: 1
            
            };
      
            return {
                ...state,
                items: [...state.items,
                newItem],
                total: state.total + newItem.price
            };
        case 'ITEM_REMOVE_FROM_CART':
            const  idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id===idx);
            const price = state.items[itemIndex]['price'] * state.items[itemIndex]['qtty'];
            return{
                ...state,
                items:[
                    ...state.items.slice(0,itemIndex),
                    ...state.items.slice(itemIndex+1)
                ],
                total: state.total -  price
            }
        default: 
            return state;
    }
}

export default reducer;