import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2evsx4OXZ4haPuunJaXsNssUwMZ",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
