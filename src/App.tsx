import { useState } from 'react';
import { Messages } from './pages/Messages';
import { Options } from './pages/Options';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { color } from './utils/utils';

export const App = () => {
  const [inSettings, setInSettings] = useState<boolean>();

  const colorScheme = useSelector<RootState, string>(state => state.options.colorScheme);

  return (
    <div className={`w-96 ${color(colorScheme)}`}>
      {inSettings ?
        <Options setInSettings={setInSettings} />
        :
        <Messages setInSettings={setInSettings} />
      }
    </div>
  );
}

export default App
