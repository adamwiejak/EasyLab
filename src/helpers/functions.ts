import { useLoaderData } from "react-router-dom";

export const useDataFromLoader = <T>() => {
  return useLoaderData() as Awaited<T>;
};

export const excludeStyledProps = (excludeProps: PropertyKey[]) => {
  return (prop: PropertyKey) => !excludeProps.includes(prop);
};

// DUMMY
export const generateDate = () => new Date().toLocaleDateString();
