export const isLocalhost = () => {
  const hostname =
    typeof window !== "undefined" && window.location.hostname
      ? window.location.hostname
      : "";

  return hostname === "localhost";
};
