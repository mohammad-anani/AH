import PersonForm from "../person/Form";

export default function Form({ fieldPrefix = "" }: { fieldPrefix?: string }) {
  const prefix = fieldPrefix + "";
  return <PersonForm fieldPrefix={prefix} />;
}
