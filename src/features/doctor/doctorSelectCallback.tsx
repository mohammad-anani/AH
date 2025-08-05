import type { DoctorRow } from "@/utils/models/types/row/rowTypes";
import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";
import DoctorSelect from "./DoctorSelect";
import { useState, useEffect } from "react";
import type { customFormProps } from "@/utils/models/types/utils/Form&Filter";
import { doctor } from "@/utils/models/componentsConfig/receptionist";

export const DoctorSelectorCallback: customFormProps = [
  ({ field, onChange, isSubmitting }) => {
    const [selectedDoctors, setSelectedDoctors] = useState<
      (DoctorRow | null)[]
    >((field as number[])?.map((id) => ({ ID: id })) || []);

    useEffect(() => {
      const ids = selectedDoctors
        .filter((doc): doc is DoctorRow => !!doc && typeof doc.ID === "number")
        .map((doc) => doc.ID);
      onChange(ids);
    }, [selectedDoctors, onChange]);

    return (
      <DoctorSelect
        disabled={isSubmitting}
        selectedDoctorsState={[selectedDoctors, setSelectedDoctors]}
        entityObject={doctor}
      />
    );
  },
  "multiselect",
];
