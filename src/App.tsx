import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import Layout from './components/Layout';
import AddDogPage from './pages/AddDogPage';
import MyDogPage from './pages/MyDogPage';
import TrainingPage from './pages/TrainingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MyDogPage />} />
          <Route path="add-dog" element={<AddDogPage />} />
          <Route path="training" element={<TrainingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
