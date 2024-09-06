import './Index.css';
import Desert from "../../assets/image5.png";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategory,
} from '../../actions/categoryAction';

export default function CategoryComponent() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.category);

    useEffect(() => {
      dispatch(getCategory());
    }, [dispatch]);
  return (
    <>
      <div className="imgWithBanner border">
        <img className="img_in_card" src={Desert} alt="forest" />
        <h3>
          BANNER ADS <p className='mx-3'> 300 * 250</p>
        </h3>
      </div>
      <div className="category">
        <h3>CATEGORIES</h3>
        {Array.isArray(data.category) &&
                data.category.map((item) => (
                  <div key={item._id}>
                    <p>{item.name}</p>
                    </div>
                ))}
      </div>
    </>
  );
}
