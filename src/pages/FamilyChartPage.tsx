import { useEffect, useRef } from 'react';
import { createChart } from 'family-chart';
import 'family-chart/styles/family-chart.css';
import DemoPage from '../components/DemoPage';
import { demos } from '../data/demos';
import { familyChartData } from '../data/sampleData';

const demo = demos.find((d) => d.id === 'family-chart')!;

export default function FamilyChartPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.innerHTML = '';
    const chart = createChart(el, familyChartData);
    chart
      .setCardHtml()
      .setCardDisplay([['first name', 'last name'], ['birthday']]);
    chart.updateTree({ initial: true, tree_position: 'fit' });

    return () => {
      el.innerHTML = '';
    };
  }, []);

  return (
    <DemoPage demo={demo}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </DemoPage>
  );
}
