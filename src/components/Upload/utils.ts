export const checkImageType = (files: File[]) => {
  if (!files?.length) return [];
  return files.every((file) => file.type.startsWith("image/"));
};
