import { testType } from "@/utils/models/componentsConfig/doctor/general/test-type.ts";
import type {
  customFilterProps,
  customFormProps,
} from "@/utils/models/types/utils/Form&Filter";
import type { Setter } from "@/utils/models/types/utils/basics";
import { useEffect, useState } from "react";
import TestTypeSelect, { type TestTypeSelectState } from "./TestTypeSelect";

export function useSelectedTestTypes(
  field: number[] | undefined,
  onChange: Setter<number[] | undefined>,
): [TestTypeSelectState, Setter<TestTypeSelectState>] {
  const [selectedTestTypes, setSelectedTestTypes] =
    useState<TestTypeSelectState>(field || []);

  useEffect(() => {
    onChange(selectedTestTypes);
  }, [selectedTestTypes, onChange]);

  return [selectedTestTypes, setSelectedTestTypes] as const;
}

export const TestTypeFormSelectorCallback: customFormProps = [
  ({ field, onChange, isSubmitting }) => {
    const [selectedTestTypes, setSelectedTestTypes] = useSelectedTestTypes(
      field as number[] | undefined,
      onChange as Setter<number[] | undefined>,
    );

    return (
      <TestTypeSelect
        disabled={isSubmitting}
        testTypes={selectedTestTypes}
        setTestTypes={setSelectedTestTypes}
        entityObject={testType}
      />
    );
  },
  "multiselect",
];

export const TestTypeFilterSelectorCallback: customFilterProps = [
  ({ field, onChange }) => {
    const [selectedTestTypes, setSelectedTestTypes] = useSelectedTestTypes(
      field as number[] | undefined,
      onChange as Setter<number[] | undefined>,
    );
    return (
      <TestTypeSelect
        testTypes={selectedTestTypes}
        setTestTypes={setSelectedTestTypes}
        entityObject={testType}
      />
    );
  },
  "multiselect",
];

export function TestTypeSelectCallback({
  value,
  setValue,
  disabled,
}: {
  value: TestTypeSelectState;
  setValue: Setter<TestTypeSelectState>;
  disabled?: boolean;
}) {
  return (
    <TestTypeSelect
      disabled={disabled}
      testTypes={value}
      setTestTypes={setValue}
      entityObject={testType}
    />
  );
}
