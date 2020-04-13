import React from 'react';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import Dashboard from '../src/Component/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const items = [
  <SidebarItem >Tab Heading 1</SidebarItem>,
  <SidebarItem >Tab Heading 2</SidebarItem>,
  <SidebarItem >Tab Heading 3</SidebarItem>,
  <SidebarItem >Tab Heading 4</SidebarItem>,
  <SidebarItem >Logout</SidebarItem>,
];

function App() {
  return (
    <div className="App">
        <Sidebar content={items} background='white' color='black'>
          <Dashboard />
        </Sidebar>
    </div>
  );
}

export default App;
