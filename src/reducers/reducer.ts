export interface Coffe {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export interface UserAddress {
  postalCode: string;
  street: string;
  streetNumber: string;
  neighborhood: string;
  state: string;
  city: string;
  additionalInfo: string;
}

interface CoffeesState {
  totalItems: number;
  cartItems: Coffe[];
  userAddress: UserAddress | null;
}

export function coffeesReducer(state: CoffeesState, action: any){
  // case ActionTypes.ADD_NEW_CYCLE:
  //     return produce(state, (draft) => {
  //       draft.cycles.push(action.payload.newCycle)
  //       draft.activeCycleId = action.payload.newCycle.id
  //     })

  switch (action.type) {
    default:
          return state
  }
}