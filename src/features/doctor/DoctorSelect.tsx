import Selector from "@/ui/entityComponents/Selector";
import { fetchingPaths } from "@/utils/models/componentsConfig/fetchingPaths";
import { doctor } from "@/utils/models/componentsConfig/receptionist/human-resources/doctor";

import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";

import type { DoctorRow } from "@/utils/models/types/row/rowTypes";
import type { Setter } from "@/utils/models/types/utils/basics";

import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

export type DoctorSelectState = {
  Doctor: DoctorRow | { ID: number };
  Role: string;
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
      {Array.from({ length: 5 })?.map((_, index) => {
        if (index > 0 && !doctors[index - 1]) return null;

        const selected = doctors[index] ?? { doctor: {}, role: "" };

        return (
          <>
            {index === 0 && <hr />}
            <span className="grid grid-cols-[auto_1fr] space-y-0.5 space-x-2">
              <label>Doctor:</label>
              <Selector
                disabled={disabled}
                key={index}
                selectedObjectState={[
                  selected?.Doctor,
                  (doctor) => onSelect(doctor as DoctorRow, index),
                ]}
                entity="Doctor"
                entityObject={doctor}
                onDelete={onDelete}
                data={[items, count]}
                onEdit={(doc) => onEdit(doc, index)}
              />
              {doctors?.[index]?.Doctor?.ID && (
                <>
                  <label>Role:</label>
                  <span>
                    <input
                      type="text"
                      defaultValue={selected?.Role ?? ""}
                      onChange={(e) =>
                        setDoctors((docs) =>
                          docs?.map((doc, subIndex) =>
                            index === subIndex
                              ? { ...doc, Role: e.target.value }
                              : doc,
                          ),
                        )
                      }
                    />
                  </span>
                </>
              )}
            </span>
            <hr />
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

  const availableDoctors = items.filter(
    (doc) => !doctors?.some((sdoc) => sdoc?.Doctor?.ID === doc.ID),
  );

  function onSelect(doctor: DoctorRow, index: number) {
    if (!doctor || typeof doctor.ID === "undefined") return;

    setDoctors((prev) => {
      const updated = [...prev];

      const isAlreadySelected = updated.some(
        (d, i) => d?.Doctor?.ID === doctor.ID && i !== index,
      );
      if (isAlreadySelected) return prev;

      while (updated.length <= index)
        updated.push({ Doctor: {} as DoctorRow, Role: "" });

      updated[index].Doctor = doctor;

      return updated;
    });
  }

  function onDelete(doctor: DoctorRow) {
    if (!doctor || typeof doctor.ID === "undefined") return;

    setDoctors((prev) => prev.filter((doc) => doc?.Doctor.ID !== doctor.ID));
  }

  function onEdit(doctor: DoctorRow, index: number) {
    if (!doctor || typeof doctor.ID === "undefined") return;

    setDoctors((prev) => {
      const updated = [...prev];
      while (updated.length <= index)
        updated.push({ Doctor: {} as DoctorRow, Role: "" });
      updated[index].Doctor = doctor;
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
