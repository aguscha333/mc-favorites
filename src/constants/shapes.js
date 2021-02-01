import { number, string, bool } from "prop-types";

export const courseShape = {
  id: number.isRequired,
  title: string.isRequired,
  instructorName: string.isRequired,
  instructorImageUrl: string.isRequired,
  favorite: bool.isRequired,
};
