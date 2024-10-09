import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Dashboard() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
     if (!userInfo || userInfo?.token?.user?.role !== 'admin') {
       navigate('/');
     }
  }, [userInfo, dispatch, navigate]);
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
