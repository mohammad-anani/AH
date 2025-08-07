import Selector from "@/ui/entityComponents/Selector";
import { fetchingPaths } from "@/utils/models/componentsConfig/fetchingPaths";
import { doctor } from "@/utils/models/componentsConfig/receptionist";
import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";

import type { DoctorRow } from "@/utils/models/types/row/rowTypes";
import type { Setter } from "@/utils/models/types/utils/basics";

import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

export type DoctorSelectState = {
  doctor: DoctorRow | { ID: number };
  role: string;
}[];

export default function DoctorSelect({
  disabled = false,
  doctors,
  setDoctors,
}: {
  disabled?: boolean;
  doctors: DoctorSelectState;
  setDoctors: Setter<DoctorSelectState>;
  entityObject: RouteConfig<"Doctor">;
}) {
  const { items, count, isLoading, onSelect, onDelete, onEdit } = useDoctors(
    doctors,
    setDoctors,
  );

  if (isLoading) return null;

  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 5 }).map((_, index) => {
        if (index > 0 && !doctors[index - 1]) return null;

        const selected = doctors[index] ?? undefined;

        return (
          <>
            <Selector
              disabled={disabled}
              key={index}
              selectedObjectState={[
                selected.doctor as DoctorRow,
                (doctor) => onSelect(doctor as DoctorRow, index),
              ]}
              entity="Doctor"
              entityObject={doctor}
              onDelete={onDelete}
              data={[items, count]}
              onEdit={(doc) => onEdit(doc, index)}
            />
            <input
              type="text"
              value={selected.role}
              onChange={(e) =>
                setDoctors((docs) =>
                  docs.map((doc, subIndex) =>
                    index === subIndex ? { ...doc, role: e.target.value } : doc,
                  ),
                )
              }
            />
          </>
        );
      })}
    </div>
  );
}

function useDoctors(
  doctors: DoctorSelectState,
  setDoctors: Setter<DoctorSelectState>,
) {
  const fetcher = useFetcher();

  useEffect(() => {
    fetcher.load(fetchingPaths["Doctor"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isValidData =
    fetcher.data && Array.isArray(fetcher.data) && fetcher.data.length === 2;

  const items: DoctorRow[] = isValidData ? fetcher.data[0] : [];
  const count: number = isValidData ? fetcher.data[1] : 0;

  // Exclude already selected doctors
  const availableDoctors = items.filter(
    (doc) => !doctors.some((sdoc) => sdoc?.doctor?.ID === doc.ID),
  );

  // Handler to select/set doctor at a specific index
  function onSelect(doctor: DoctorRow, index: number) {
    if (!doctor || typeof doctor.ID === "undefined") return;

    setDoctors((prev) => {
      const updated = [...prev];

      const isAlreadySelected = updated.some(
        (d, i) => d?.doctor?.ID === doctor.ID && i !== index,
      );
      if (isAlreadySelected) return prev;

      //to see
      while (updated.length <= index)
        updated.push({ doctor: {} as DoctorRow, role: "" });

      updated[index].doctor = doctor;

      return updated;
    });
  }

  // Handler to delete doctor by ID
  function onDelete(doctor: DoctorRow) {
    if (!doctor || typeof doctor.ID === "undefined") return;

    setDoctors((prev) => prev.filter((doc) => doc?.doctor.ID !== doctor.ID));
  }

  // Handler to edit/update doctor at index
  function onEdit(doctor: DoctorRow, index: number) {
    if (!doctor || typeof doctor.ID === "undefined") return;

    setDoctors((prev) => {
      const updated = [...prev];
      while (updated.length <= index)
        updated.push({ doctor: {} as DoctorRow, role: "" });
      updated[index].doctor = doctor;
      return updated;
    });
  }

  return {
    items: availableDoctors,
    count,
    isLoading: !isValidData,
    onSelect,
    onDelete,
    onEdit,
  };
}
