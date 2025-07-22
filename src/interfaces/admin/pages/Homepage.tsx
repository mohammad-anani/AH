import Selector from "@/ui/entityComponents/Selector";

export default function Homepage() {
  return (
    <>
      <h1>Admin Homepage</h1>
      <Selector
        entity="Admin"
        selectedDisplay={({ Name }) => Name}
        path="/admin/human-resources/admins"
      />
    </>
  );
}
