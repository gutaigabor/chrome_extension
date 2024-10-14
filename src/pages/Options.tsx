import { useDispatch, useSelector } from "react-redux";
import { GRAY, ZINC, SLATE } from "../constants/sizes";
import { setColorScheme } from "../reducers/options";
import { RootState } from "../store";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { OptionItem } from "../components/OptionItem";
import { NavBar } from "../components/NavBar";

interface Props {
  setInSettings: (value: boolean) => void;
}

export const Options = (props: Props) => {
  const { setInSettings } = props;

  const dispatch = useDispatch();

  const colorScheme = useSelector<RootState, string>(state => state.options.colorScheme);

  const optionList = [
    GRAY,
    ZINC,
    SLATE
  ]

  return (
    <>
      <NavBar>
        <Header text="Settings" type="primary" />
        <Button label="<" onClick={() => setInSettings(false)} className="m-2" />
      </NavBar>
      <div className='p-4'>
        <Header text="Background color" type="secondary" />
        {optionList.map(option => {
          return (
            <OptionItem
              isSelected={colorScheme === option}
              label={option}
              onClick={() => dispatch(setColorScheme(option))}
            />
          );
        })}
      </div>
    </>
  )
}
