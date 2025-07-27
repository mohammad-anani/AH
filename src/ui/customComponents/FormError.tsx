export default function FormError({
  errorMessages,
}: {
  errorMessages: string[][] | undefined;
}) {
  if (!(errorMessages?.[0] && errorMessages[0].length)) return null;
  return (
    <ul className="grid grid-cols-1 text-sm! *:text-red-500!">
      {typeof errorMessages[0] === "string" ? (
        <li>{`* ${errorMessages[0]}`}</li>
      ) : (
        (errorMessages[0] as string[]).map((msg: string, i) => (
          <li key={i}>{`* ${msg}`}</li>
        ))
      )}
    </ul>
  );
}
