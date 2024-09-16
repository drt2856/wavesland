export function useGetAllImagesFromFolder(folder) {
  const allImages = import.meta.glob(
    "/src/assets/**/*.{png,jpg,jpeg,svg,jfif}"
  );
  const filteredImages = Object.keys(allImages).filter((path) =>
    path.includes(`/src/assets/${folder}/`)
  );
  return filteredImages;
}
