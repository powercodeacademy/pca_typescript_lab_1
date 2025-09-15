const formatId = (id: string | number): string =>
  typeof id === "string" ? id.toUpperCase() : id.toString().padStart(5, "0");
