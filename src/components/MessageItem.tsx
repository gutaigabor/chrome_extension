import { MessagePriority } from "../interfaces/Message";
import { formattedDatetime } from "../utils/utils";
import { Badge } from "./Badge";
import { Checkbox } from "./Checkbox";
import { Icon, PriorityIcon } from "./Icon";

interface Props {
  id: string;
  priority: MessagePriority;
  content: string;
  dateStr: string;
  isRead: boolean;
  checked: boolean;
  onClick: () => void;
  onSelect: () => void;
  className?: string;
}

export const MessageItem = (props: Props) => {
  const { id, priority, content, dateStr, isRead, checked, className, onClick, onSelect } = props;
  return (
    <div className={`${className} w-full`} key={id}>
      <div className="relative flex items-center mb-4 cursor-pointer hover:bg-slate-100 p-2 rounded-md">
        { priority === MessagePriority.high ?
          <PriorityIcon src="https://placehold.co/200x/dddddd/999999.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar"/>
          :
          <Icon src="https://placehold.co/200x/dddddd/999999.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar"/>
        }
        <div className="flex-1" onClick={onClick}>
          <h2 className="text-lg text-slate-400 font-semibold">Admin</h2>
          <p className="font-semibold text-slate-600">{content.substring(0, 20)}{content.length > 20 && '...'}</p>
          <p className="pt-2 text-slate-600">{formattedDatetime(dateStr)}</p>
        </div>
        <Checkbox onChange={onSelect} checked={checked} />
        { !isRead && <Badge />}
      </div>
    </div>
  );
}
