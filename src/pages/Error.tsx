import { Header } from "../components/Header";

interface Props {
  className?: string;
}

export const ErrorPage = (props: Props) => {
  const { className } = props;
  return (
    <div className={`${className} w-96`}>
      <Header text="Internal server error" type="primary" />
    </div>
  );
}
