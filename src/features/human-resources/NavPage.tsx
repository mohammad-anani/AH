import Clickable from "@/ui/Clickable";
import H2 from "@/ui/H2";

export default function NavPage() {
  return (
    <>
      <H2 className="mb-2">Human Resources</H2>
      <p className="text-[18px]">Choose a category to manage:</p>

      <nav className="mt-2 flex flex-wrap gap-x-5 gap-y-3">
        <Clickable as="Link" to="patients" variant="primary">
          Patients
        </Clickable>

        <Clickable as="Link" to="doctors" variant="primary">
          Doctors
        </Clickable>

        <Clickable as="Link" to="receptionists" variant="primary">
          Receptionists
        </Clickable>

        <Clickable as="Link" to="admins" variant="primary">
          Admins
        </Clickable>
      </nav>
    </>
  );
}
