import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import ConvertStatData from '../../utils/ConvertStatData';

interface ChartProps {
  statdata: [];
}

const Chart = ({ statdata }: ChartProps) => {
  console.log(ConvertStatData(statdata));
  return (
    <div style={{ width: '100%', height: '400px', objectFit: 'contain' }}>
      <ResponsivePie
        data={ConvertStatData(statdata)}
        margin={{ top: 10, left: 10, bottom: 10, right: 10 }}
        startAngle={-180}
        innerRadius={0.1}
        cornerRadius={7}
        activeInnerRadiusOffset={4}
        activeOuterRadiusOffset={5}
        colors={{ scheme: 'blues' }}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0]],
        }}
        arcLinkLabelsTextOffset={0}
        arcLinkLabelsTextColor='#333333'
        arcLinkLabelsOffset={-24}
        arcLinkLabelsDiagonalLength={0}
        arcLinkLabelsStraightLength={0}
        arcLinkLabelsThickness={0}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 1.3]],
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 200,
            translateY: 54,
            itemsSpacing: 4,
            itemWidth: 67,
            itemHeight: 10,
            itemTextColor: '#999',
            itemDirection: 'right-to-left',
            itemOpacity: 1,
            symbolSize: 24,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Chart;
