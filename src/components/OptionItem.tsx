interface Props {
  isSelected: boolean;
  label: string;
  onClick: () => void;
  className?: string;
}

export const OptionItem = (props: Props) => {
  const { isSelected, label, className, onClick } = props;
  return (
    <div className={`${className} w-full`} onClick={onClick}>
      <div className={`relative flex items-center mb-4 cursor-pointer ${isSelected && 'bg-slate-100'} p-2 rounded-md`}>
        <div className="w-12 h-12 bg-slate-300 rounded-full mr-3">
          <img src="https://placehold.co/200x/dddddd/999999.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-12 h-12 rounded-full"/>
        </div>
        <div className="flex-1" >
          <h2 className="text-lg text-slate-400 font-semibold">{label}</h2>
        </div>
      </div>
    </div>
  );
}
