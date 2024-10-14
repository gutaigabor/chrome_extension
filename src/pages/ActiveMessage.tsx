import { Button } from "../components/Button";
import { LargeIcon } from "../components/Icon";
import { formattedDatetime } from "../utils/utils";

interface Props {
  content: string
  dateStr: string;
  onClick: () => void;
  className?: string;
}

export const ActiveMessage = (props: Props) => {
  const { content, dateStr, onClick, className } = props;
  return (
    <div role="active-message" className={`${className} w-96 p-4`}>
      <header className="py-4">
        <Button label="<" onClick={onClick} />
      </header>
      <LargeIcon src="https://placehold.co/200x/dddddd/999999.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar"/>
      <div className="w-12 h-12 flex mx-auto items-center justify-center">
        <h2 className="text-lg text-slate-400 font-semibold">Admin</h2>
      </div>
      <div className="relative flex items-center mb-4 bg-slate-100 p-2 rounded-md">
        <div className="flex-1">
          <p className="font-semibold text-slate-600">{content}</p>
          <p className="pt-2 text-slate-600">{formattedDatetime(dateStr)}</p>
        </div>
      </div>
    </div>
  );
}
