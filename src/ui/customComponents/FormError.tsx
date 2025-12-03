interface FormErrorProps {
  errorMessages: string[] | undefined;
  id?: string;
}

export default function FormError({ errorMessages, id }: FormErrorProps) {
  if (!errorMessages || errorMessages?.length === 0) {
    return null;
  }
  return (
    <ul
      id={id}
      className="grid grid-cols-1 text-sm! *:text-red-500!"
      role="alert"
      aria-live="polite"
    >
      {errorMessages?.map?.((message, index) => (
        <li key={index}>{`* ${message}`}</li>
      ))}
    </ul>
  );
}
