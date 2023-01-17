interface Props {
  children: React.ReactNode;
}

export const PageLayout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <div className="flex justify-center py-12 px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full">{props.children}</div>
        </div>
      </div>
    </>
  );
};


