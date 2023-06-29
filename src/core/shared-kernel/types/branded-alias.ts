import { Brand, make } from "../utils/branded-types";

export type UniqueId = Brand<string, "uid">;
export const makeUniqueId = make<UniqueId>();

export type Email = Brand<string, "email">;
export const makeEmail = make<Email>();

export type PriceSatang = Brand<number, "price-satang">;
export const makePriceSatang = make<PriceSatang>();
