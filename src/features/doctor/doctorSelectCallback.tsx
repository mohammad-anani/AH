import { useState, useEffect } from "react";
import type { DoctorRow } from "@/utils/models/types/row/rowTypes";
import DoctorSelect, { type DoctorSelectState } from "./DoctorSelect";
import { doctor } from "@/utils/models/componentsConfig/receptionist";
import type {
  customFilterProps,
  customFormProps,
} from "@/utils/models/types/utils/Form&Filter";
import type { Setter } from "@/utils/models/types/utils/basics";

export function useSelectedDoctors(
  field: number[] | undefined,
  onChange: Setter<number[] | undefined>,
): [DoctorSelectState, Setter<DoctorSelectState>] {
  const [selectedDoctors, setSelectedDoctors] = useState<DoctorSelectState>(
    field?.map((id) => ({ ID: id })) || [],
  );

  useEffect(() => {
    const ids = selectedDoctors
      .filter((doc): doc is DoctorRow => !!doc && typeof doc.ID === "number")
      .map((doc) => doc.ID);
    onChange(ids);
  }, [selectedDoctors, onChange]);

  return [selectedDoctors, setSelectedDoctors] as const;
}

export const DoctorFormSelectorCallback: customFormProps = [
  ({ field, onChange, isSubmitting }) => {
    const [selectedDoctors, setSelectedDoctors] = useSelectedDoctors(
      field as number[] | undefined,
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
      field as number[] | undefined,
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
