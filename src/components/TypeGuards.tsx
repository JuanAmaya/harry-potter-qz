import type {
  BookArray,
  CharacterArray,
  HouseArray,
  SpellArray,
} from "../pages/QuizPage";

export function isCharacterArray(arr: any[]): arr is CharacterArray {
  return arr.length > 0 && "nickname" in arr[0];
}
export function isSpellArray(arr: any[]): arr is SpellArray {
  return arr.length > 0 && "spell" in arr[0];
}
export function isBookArray(arr: any[]): arr is BookArray {
  return arr.length > 0 && "title" in arr[0];
}
export function isHouseArray(arr: any[]): arr is HouseArray {
  return arr.length > 0 && "house" in arr[0];
}
