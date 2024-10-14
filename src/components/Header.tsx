interface Props {
  text: string;
  type: 'primary' | 'secondary';
  className?: string;
}

export const Header = (props: Props) => {
  const { text, type, className } = props;

  return (
    <header className={`${className} p-2 text-slate-600`}>
      <h1 className={`${className} ${type === 'primary' ? 'text-2xl' : 'text-xl'} font-semibold `}>{text}</h1>
    </header>
  );
}

// {`${className} transparent `}