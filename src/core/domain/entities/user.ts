import { Brand, make } from "@/core/shared-kernel/utils/branded-types";
import { Email, UniqueId } from "@/core/shared-kernel/types/branded-alias";

export type UserName = Brand<string, User>;
export const makeUserName = make<UserName>();

export type User = {
  id: UniqueId;
  name: UserName;
  email: Email;
};

export function introduce(user: User): string {
  return `Hi! My name is ${user.name}. You can contact me via ${user.email}`;
}
