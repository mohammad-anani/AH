import { schemas } from "../../zod/addingSchemas/addingSchemas.ts";
import {
  ZodObject,
  ZodString,
  ZodNumber,
  ZodBoolean,
  ZodArray,
  ZodOptional,
  ZodDefault,
  type ZodTypeAny,
} from "zod";
import type { DisplayEntityKey } from "../utils/entityKeys.ts";

interface EmptyObjectValue {
  [key: string]:
    | string
    | number
    | boolean
    | null
    | Array<EmptyObjectValue>
    | EmptyObjectValue;
}

type EmptyValueType =
  | string
  | number
  | boolean
  | null
  | Array<EmptyObjectValue>
  | EmptyObjectValue;

function createEmptyValue(schema: ZodTypeAny): EmptyValueType {
  if (schema instanceof ZodString) {
    return "";
  }
  if (schema instanceof ZodNumber) {
    return 0;
  }
  if (schema instanceof ZodBoolean) {
    return null;
  }
  if (schema instanceof ZodArray) {
    return [] as Array<EmptyObjectValue>;
  }
  if (schema instanceof ZodObject) {
    const shape = schema.shape;

    const obj: EmptyObjectValue = {};
    for (const key in shape) {
      obj[key] = createEmptyValue(shape[key] as ZodTypeAny);
    }
    return obj;
  }
  if (schema instanceof ZodOptional || schema instanceof ZodDefault) {
    return createEmptyValue(schema._def.innerType as ZodTypeAny);
  }

  return null;
}

export const emptyObjects = Object.fromEntries(
  Object.entries(schemas).map(([key, schema]) => {
    // removed console.log
    return [key, createEmptyValue(schema)];
  }),
) as {
  [K in DisplayEntityKey]: EmptyValueType;
};
