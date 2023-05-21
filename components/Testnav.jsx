import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const TinyImpressiveCamembert = () => {
  const data = [
    { title: 'Segment 1', value: 40, color: '#FF3366' },
    { title: 'Segment 2', value: 30, color: '#00CCFF' },
    { title: 'Segment 3', value: 20, color: '#FF9933' },
    { title: 'Segment 4', value: 10, color: '#FFD700' },
  ];

  const renderLabel = ({ dataEntry }) => {
    return dataEntry.title;
  };

  return (
    <PieChart
      data={data}
      radius={20}
      lineWidth={15}
      segmentsShift={0}
      animate
      label={renderLabel}
      labelStyle={{
        fontSize: '8px',
        fontFamily: 'Arial, sans-serif',
        fill: '#ffffff',
        fontWeight: 'bold',
      }}
      labelPosition={112}
      background="#222"
      startAngle={0}
    />
  );
};

export default TinyImpressiveCamembert;
