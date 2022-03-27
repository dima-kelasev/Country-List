interface LineChartProps {
  arrayY?: number[];
}

export function LineChart({ arrayY }: LineChartProps) {
  const arrayX = [
    0, 41.5, 83, 124.5, 166, 207.5, 249, 290.5, 332, 373.5, 415, 456.5, 498,
    539.5, 581, 622.5, 664, 705.5, 747, 788.5, 830, 871.5, 913, 954.5,
  ];
  function generatePolylineArray() {
    let polyline = "";
    arrayX.map((coordX, i) => (polyline += `${coordX}, ${arrayY?.[i]} `));
    return polyline;
  }

  const polyline = generatePolylineArray();

  console.log("polyline", polyline);
  return (
    <>
      <svg
        x="200px"
        y="100px"
        viewBox="0 0 1000 2"
        style={{ height: "50px", width: "100%" }}
      >
        <polyline
          points={polyline}
          style={{ background: "white" }}
          stroke="#fff"
          stroke-width="4"
        />
        {arrayX.map((coordX, i) => (
          <circle key={i} cx={coordX} cy={arrayY?.[i]} r={4} fill="#fff" />
        ))}
      </svg>
    </>
  );
}
