interface Props {
  children: React.ReactNode;
}

export function ArchiveLayout(props: Props) {
  return (
    <>
      <div className="flex justify-center py-12 px-8">
        <div className="flex flex-col w-full max-w-4xl lg:px-8">
          {props.children}
        </div>
      </div>
    </>
  );
}
