import { useState, useEffect } from "react";
import DoctorSelect, { type DoctorSelectState } from "./DoctorSelect";
import { doctor } from "@/utils/models/componentsConfig/receptionist";
import type {
  customFilterProps,
  customFormProps,
} from "@/utils/models/types/utils/Form&Filter";
import type { Setter } from "@/utils/models/types/utils/basics";

export function useSelectedDoctors(
  field: [id: number, role: string][] | undefined,
  onChange: Setter<number[] | undefined>,
): [DoctorSelectState, Setter<DoctorSelectState>] {
  const [selectedDoctors, setSelectedDoctors] = useState<DoctorSelectState>(
    field?.map((f) => ({ doctor: { ID: f[0] }, role: f[1] })) || [],
  );

  useEffect(() => {
    const ids = selectedDoctors
      .filter(
        (docItem) =>
          docItem?.doctor?.ID && typeof docItem.doctor.ID === "number",
      )
      .map((docItem) => docItem.doctor.ID);
    onChange(ids.length > 0 ? ids : undefined);
  }, [selectedDoctors, onChange]);

  return [selectedDoctors, setSelectedDoctors] as const;
}

export const DoctorFormSelectorCallback: customFormProps = [
  ({ field, onChange, isSubmitting }) => {
    const [selectedDoctors, setSelectedDoctors] = useSelectedDoctors(
      field as [id: number, role: string][] | undefined,
      onChange as Setter<number[] | undefined>,
    );

    return (
      <DoctorSelect
        disabled={isSubmitting}
        doctors={selectedDoctors}
        setDoctors={setSelectedDoctors}
        entityObject={doctor}
      />
    );
  },
  "multiselect",
];

export const DoctorFilterSelectorCallback: customFilterProps = [
  ({ field, onChange }) => {
    const [selectedDoctors, setSelectedDoctors] = useSelectedDoctors(
      field as [id: number, role: string][] | undefined,
      onChange as Setter<number[] | undefined>,
    );

    return (
      <DoctorSelect
        doctors={selectedDoctors}
        setDoctors={setSelectedDoctors}
        entityObject={doctor}
      />
    );
  },
  "multiselect",
];
