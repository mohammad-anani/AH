import Selector from "@/ui/entityComponents/Selector";
import { doctor } from "@/utils/models/componentsConfig/receptionist";
import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";

import type { DoctorRow } from "@/utils/models/types/row/rowTypes";
import type { Setter } from "@/utils/models/types/utils/basics";

import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

export default function DoctorSelect({
  disabled = false,
  selectedDoctorsState,
  entityObject,
}: {
  disabled?: boolean;
  selectedDoctorsState: [(DoctorRow | null)[], Setter<(DoctorRow | null)[]>];
  entityObject: RouteConfig<"Doctor">;
}) {
  const fetcher = useFetcher();

  const [selectedDoctors, setSelectedDoctors] = selectedDoctorsState;

  useEffect(() => {
    fetcher.load(`${entityObject.selectorConfig.path}/list`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    !fetcher.data ||
    !Array.isArray(fetcher.data) ||
    fetcher.data.length !== 2
  ) {
    return null;
  }

  const [items, count] = fetcher.data;

  return (
    <div className="flex flex-col gap-2">
      {/* Render selectors (up to 5), only if previous one is filled */}
      {Array.from({ length: 5 }).map((_, index) => {
        if (index > 0 && !selectedDoctors[index - 1]) return null;

        const selected = selectedDoctors[index] ?? undefined;

        return (
          <Selector
            disabled={disabled}
            key={index}
            selectedObjectState={[
              selected,
              (doctor: DoctorRow) => {
                if (!doctor || typeof doctor.ID === "undefined") return;

                setSelectedDoctors((prev) => {
                  const updated = [...prev];

                  // Prevent duplicates (except at same index)
                  const isAlreadySelected = updated.some(
                    (d, i) => d?.ID === doctor.ID && i !== index,
                  );
                  if (isAlreadySelected) return prev;

                  // Ensure array is long enough and has no undefined
                  while (updated.length <= index) updated.push(null);

                  updated[index] = doctor;

                  return updated;
                });
              },
            ]}
            entity="Doctor"
            entityObject={doctor}
            onDelete={(doctor) => {
              if (!doctor || typeof doctor.ID === "undefined") return;

              setSelectedDoctors((prev) =>
                prev.filter((doc) => doc?.ID !== doctor.ID),
              );
            }}
            data={[
              items.filter(
                (doc: DoctorRow) =>
                  !selectedDoctors.some((sdoc) => sdoc?.ID === doc.ID),
              ),
              count,
            ]}
            onEdit={(doc) => {
              if (!doc || typeof doc.ID === "undefined") return;

              setSelectedDoctors((prev) => {
                const updated = [...prev];
                while (updated.length <= index) updated.push(null);
                updated[index] = doc;
                return updated;
              });
            }}
          />
        );
      })}
    </div>
  );
}
