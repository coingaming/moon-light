type MenuItemActions =
  | { type: "RegisterChild"; children: string }
  | { type: "UnregisterChild"; children: string };

type StatesProps = {
  childrenArray?: string[];
};

function stateReducer<T extends StatesProps>(
  state: T,
  action: MenuItemActions,
) {
  switch (action.type) {
    case "RegisterChild": {
      if (state.childrenArray?.includes(action.children)) return state;
      const currentChildren = state?.childrenArray || [];
      return { ...state, childrenArray: [...currentChildren, action.children] };
    }
    case "UnregisterChild": {
      return {
        ...state,
        childrenArray: state.childrenArray?.filter(
          (child) => child !== action.children,
        ),
      };
    }
  }
}

export default stateReducer;
