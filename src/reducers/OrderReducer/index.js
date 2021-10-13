const initialState = []; // inicijalno stanje je prazan niz

const type = {
  ADD_ORDER_ITEM: "ADD_ORDER_ITEM"
};

// f. prima narudžbu 

export function addOrderItem(item) {
  return { type: type.ADD_ORDER_ITEM, item };
}

// reducer f. prima stanje i akciju i izbaci novo stanje, novi niz u kojem se nalaze svi stari podatci + još i nova narudžba

export default function reducer(state = initialState, action) {
  //console.log(state, action);
  switch (action.type) {
    case type.ADD_ORDER_ITEM:
      return [...state, action.item];
    default:
      return state;
  }
}