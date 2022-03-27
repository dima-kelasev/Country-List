export function generatePolylineArray(arrayX: number[], arrayY?: number[]) {
  let polyline = "";
  arrayX.map((coordX, i) => (polyline += `${coordX}, ${arrayY?.[i]}, `));
  return polyline;
}
