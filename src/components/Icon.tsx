interface Props {
  src: string;
  alt: string;
  className?: string;
}

export const Icon = (props: Props) => {
  const { src, alt, className } = props;
  return (
    <div className="w-12 h-12 bg-slate-300 rounded-full flex mx-auto mr-3">
      <img src={src} alt={alt} className={`${className} w-12 h-12 rounded-full`}/>
    </div>
  );
}

export const PriorityIcon = (props: Props) => {
  const { src, alt, className } = props;
  return (
    <div className="w-12 h-12 bg-red-900 rounded-full mr-3 flex items-center ">
      <div className="w-10 h-10 bg-slate-300 rounded-full flex mx-auto">
        <img src={src} alt={alt} className={`${className} w-10 h-10 rounded-full`}/>
      </div>
    </div>
  );
}

export const LargeIcon = (props: Props) => {
  const { src, alt, className } = props;
  return (
    <div className="w-24 h-24 bg-slate-300 rounded-full flex mx-auto">
      <img src={src} alt={alt} className={`${className} w-24 h-24 rounded-full`}/>
    </div>
  );
}
