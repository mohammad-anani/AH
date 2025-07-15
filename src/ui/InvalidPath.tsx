import throwError from "@/utils/helpers/throwError";

export default function InvalidPath() {
  throwError(404, "Not Found", "This URL is not a valid path");
  return null;
}
