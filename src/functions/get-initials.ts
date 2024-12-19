export function getInitials(name: string | undefined) {
  if (name) {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
  }
  return undefined
}
