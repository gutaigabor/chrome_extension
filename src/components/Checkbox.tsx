interface Props {
  onChange: () => void;
  checked: boolean;
  className?: string
}

export const Checkbox = (props: Props) => {
  const { onChange, checked, className } = props;
  return (
    <input
      onChange={onChange}
      checked={checked}
      type="checkbox"
      className={`${className} w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600`}
    />
  );
}
  