import styles from "./Graph.module.css";
import { ResponsivePie } from "@nivo/pie";

const Graph = () => {
  const data = [
    {
      id: "승리",
      label: "승리",
      value: 97,
      color: "hsl(275,70%,50%)",
    },
    {
      id: "패배",
      label: "패배",
      value: 101,
      color: "hsl(238, 70%, 50%)",
    },
  ];

  return (
    <div className={styles.graph}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#fff",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 16,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#020202",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Graph;
