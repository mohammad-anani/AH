import Clickable from "@/ui/customComponents/Clickable";
import H2 from "@/ui/customComponents/H2";

export default function Tests() {
  return (
    <>
      <H2 className="mb-2">Tests</H2>
      <p className="text-[18px]">Choose a category to manage:</p>

      <nav className="mt-2 flex flex-wrap gap-x-5 gap-y-3">
        <Clickable as="Link" to="types" variant="primary">
          Types
        </Clickable>

        <Clickable as="Link" to="appointments" variant="primary">
          Appointments
        </Clickable>
      </nav>
    </>
  );
}
