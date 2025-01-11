import { useAppContext } from '../context/AppContext';

    export default function LanguageSwitcher() {
      const { state, dispatch } = useAppContext();

      const handleLanguageChange = (lang: 'en' | 'es') => {
        dispatch({ type: 'SET_LANGUAGE', payload: lang });
      };

      return (
        <div className="language-switcher">
          <button
            className={state.language === 'en' ? 'active' : ''}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </button>
          <button
            className={state.language === 'es' ? 'active' : ''}
            onClick={() => handleLanguageChange('es')}
          >
            ES
          </button>
        </div>
      );
    }
