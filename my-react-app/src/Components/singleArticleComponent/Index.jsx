import React, { useEffect } from 'react';
import './Index.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFeaturedBlogs } from '../../actions/createPostAction';
import { useNavigate } from 'react-router-dom';

export default function SingleArticleComponent() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.createPost.featuredBlogs);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getFeaturedBlogs());
    }, [dispatch]);

    return (
        <>
            <div className="firstSection">
                {data && data.length > 0 && (
                    <>
                        <h3 className="text-center pt-4">{data[0]?.title}</h3>
                        <div className="text-center">
                            <p className='today_date'>July-12-2024</p>
                        </div>
                        <img src={data[0]?.imageUrl} alt="lady" className="beautyPic mt-5" />
                        <p>
                            {data[0]?.description.slice(0, 60)}
                        </p>
                        <span
                            className="read_more_link text-decoration-none"
                            onClick={() => {
                                navigate(`/blog/${data[0]?._id}`);
                            }}
                        >
                            Read More...
                        </span>
                    </>
                )}
            </div>
        </>
    );
}
