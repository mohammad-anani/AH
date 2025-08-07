interface FormErrorProps {
  errorMessages: string[] | undefined;
}

export default function FormError({ errorMessages }: FormErrorProps) {
  if (!errorMessages || errorMessages.length === 0) {
    return null;
  }

  return (
    <ul
      className="grid grid-cols-1 text-sm! *:text-red-500!"
      role="alert"
      aria-live="polite"
    >
      {errorMessages.map((message, index) => (
        <li key={index}>{`* ${message}`}</li>
      ))}
    </ul>
  );
}
