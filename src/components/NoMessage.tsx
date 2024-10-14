interface Props {
  className?: string;
}

export const NoMessage = (props: Props) => {
  const { className } = props;
  return (
    <div className={`${className} w-full`}>
      <div className="relative flex items-center mb-4 cursor-pointer p-2 rounded-md">
          <h2 className="text-lg text-slate-400 font-semibold">No messages</h2>
      </div>
    </div>
  );
}
