import { createContext, useContext, useReducer } from 'react';

    type State = {
      language: 'en' | 'es';
      filters: {
        skills: string[];
        rateRange: [number, number];
        location: string;
      };
      selectedDate: Date | null;
    };

    type Action =
      | { type: 'SET_LANGUAGE'; payload: 'en' | 'es' }
      | { type: 'SET_FILTERS'; payload: Partial<State['filters']> }
      | { type: 'SET_DATE'; payload: Date };

    const initialState: State = {
      language: 'en',
      filters: {
        skills: [],
        rateRange: [0, 100],
        location: ''
      },
      selectedDate: null
    };

    const reducer = (state: State, action: Action): State => {
      switch (action.type) {
        case 'SET_LANGUAGE':
          return { ...state, language: action.payload };
        case 'SET_FILTERS':
          return { 
            ...state, 
            filters: { ...state.filters, ...action.payload }
          };
        case 'SET_DATE':
          return { ...state, selectedDate: action.payload };
        default:
          return state;
      }
    };

    const AppContext = createContext<{
      state: State;
      dispatch: React.Dispatch<Action>;
    }>({
      state: initialState,
      dispatch: () => null
    });

    export const AppProvider = ({ children }: { children: React.ReactNode }) => {
      const [state, dispatch] = useReducer(reducer, initialState);

      return (
        <AppContext.Provider value={{ state, dispatch }}>
          {children}
        </AppContext.Provider>
      );
    };

    export const useAppContext = () => useContext(AppContext);
