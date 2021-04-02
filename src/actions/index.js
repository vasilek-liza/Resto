
const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    }
};

const addedToCart = (id, total) => {
    
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id,
        total: total
    }
};
const deleteFromCart = (id) => {
    
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
};
export {
    menuLoaded,
    menuRequested,
    addedToCart,
    deleteFromCart
};