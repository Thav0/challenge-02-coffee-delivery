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

export function coffeesReducer(state, action: any){
  // case ActionTypes.ADD_NEW_CYCLE:
  //     return produce(state, (draft) => {
  //       draft.cycles.push(action.payload.newCycle)
  //       draft.activeCycleId = action.payload.newCycle.id
  //     })
}