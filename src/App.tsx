import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FamilyChartPage from './pages/FamilyChartPage';
import DTreePage from './pages/DTreePage';
import TopolaPage from './pages/TopolaPage';
import FamtreejsPage from './pages/FamtreejsPage';
import ReactD3TreePage from './pages/ReactD3TreePage';
import ReactFlowPage from './pages/ReactFlowPage';
import VisNetworkPage from './pages/VisNetworkPage';
import CytoscapePage from './pages/CytoscapePage';
import D3PedigreePage from './pages/D3PedigreePage';
import BalkanPage from './pages/BalkanPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="family-chart" element={<FamilyChartPage />} />
        <Route path="dtree" element={<DTreePage />} />
        <Route path="topola" element={<TopolaPage />} />
        <Route path="famtreejs" element={<FamtreejsPage />} />
        <Route path="react-d3-tree" element={<ReactD3TreePage />} />
        <Route path="react-flow" element={<ReactFlowPage />} />
        <Route path="vis-network" element={<VisNetworkPage />} />
        <Route path="cytoscape" element={<CytoscapePage />} />
        <Route path="d3-pedigree" element={<D3PedigreePage />} />
        <Route path="balkan" element={<BalkanPage />} />
      </Route>
    </Routes>
  );
}
