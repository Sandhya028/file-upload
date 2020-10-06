export const checkValiadtion = (image, file) => {
  if (image === "" && file === "") return "both"
  else if (image === "") return "image"
  else if (file === "") return "file"
}
