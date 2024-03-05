type MenuItemActions =
  | { type: "RegisterChild"; children: string }
  | { type: "UnregisterChild"; children: string };

type StatesProps = {
  childArray?: string[];
};

function stateReducer<T extends StatesProps>(
  state: T,
  action: MenuItemActions,
) {
  switch (action.type) {
    case "RegisterChild": {
      if (state.childArray?.includes(action.children)) return state;
      const currentChildren = state?.childArray || [];
      return { ...state, childArray: [...currentChildren, action.children] };
    }
    case "UnregisterChild": {
      return {
        ...state,
        childArray: state.childArray?.filter(
          (child) => child !== action.children,
        ),
      };
    }
  }
}

export default stateReducer;
