import type { AdminRow } from "@/utils/models/types";
import DetailsButton from "@/ui/customComponents/DetailsButton";

export default function Row({ admin }: { admin: AdminRow }) {
  const { ID, Name } = admin;
  return (
    <li className="grid grid-cols-[2fr_1fr]">
      <span>{Name}</span>
      <DetailsButton ID={ID} />
    </li>
  );
}
