import { Header } from "../components/Header";

interface Props {
  className?: string;
}

export const LoadingPage = (props: Props) => {
  const { className } = props;
  return (
    <div role="loading" className={`${className} w-96`}>
      <Header text="Loading" type="primary" />
    </div>
  );
}
