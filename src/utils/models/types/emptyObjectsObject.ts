import { addingSchemas } from "../schema/addingSchemasObject";
import {
  ZodType,
  ZodObject,
  ZodString,
  ZodNumber,
  ZodBoolean,
  ZodArray,
  ZodOptional,
  ZodDefault,
  type ZodRawShape,
} from "zod";

function createEmptyValue(schema: ZodType<ZodRawShape>) {
  if (schema instanceof ZodString) {
    return "";
  }
  if (schema instanceof ZodNumber) {
    return null;
  }
  if (schema instanceof ZodBoolean) {
    return null;
  }
  if (schema instanceof ZodArray) {
    return [];
  }
  if (schema instanceof ZodObject) {
    const shape = schema.shape;
    const obj: Record<string, unknown> = {};
    for (const key in shape) {
      obj[key] = createEmptyValue(shape[key]);
    }
    return obj;
  }
  if (schema instanceof ZodOptional || schema instanceof ZodDefault) {
    return createEmptyValue(schema._def.innerType);
  }

  return null;
}

export const emptyObjects = Object.fromEntries(
  Object.entries(addingSchemas).map(([key, schema]) => [
    key,
    createEmptyValue(schema),
  ]),
) as {
  [K in keyof typeof addingSchemas]: ReturnType<typeof createEmptyValue>;
};
