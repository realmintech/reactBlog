import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      <div className="dashboard container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 bg-light">
            <Sidebar />
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
