type ErrorProps = {
  status: string;
};

const Error = (props: ErrorProps) => {
  const getErrorMessage = (status: string) => {
    switch (status) {
      case "404":
        return "Page Not found";
      case "401":
        return "Unauthorized";
      default:
        "Not known error";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <p className="text-5xl">{props.status}</p>
      <p className="text-3xl">{getErrorMessage(props.status)}</p>
    </div>
  );
};

export default Error;
