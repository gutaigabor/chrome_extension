interface Props {
  label: string;
  onClick: () => void;
  className?: string
}

export const Button = (props: Props) => {
  const { label, onClick, className } = props;
  return (
    <button onClick={onClick} className={`${className} bg-transparent hover:bg-slate-500 text-slate-600 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded`}>
      {label}
    </button>
  );
}
