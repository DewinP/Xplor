import { useRouter } from "next/router";

export const getCommunityNameFromUrl = () => {
  const router = useRouter();
  const name = typeof router.query.name === "string" ? router.query.name : null;
  return name;
};
