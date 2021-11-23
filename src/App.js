import logo from './logo.svg';
import './App.scss';
import ArticleSkeleton from './components/ArticleSkeleton';
import Navigation from './components/Navigation';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Content from './components/Content';

function App() {
  return <>
  <Navigation/>
  <main className="main-container">
    <LeftSidebar/>
    <Content/>
    <RightSidebar/>
  </main>
  </>
}

export default App;
