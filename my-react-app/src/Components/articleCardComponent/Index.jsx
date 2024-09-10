import './Index.css';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

export default function ArticleCard({ item }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/blog/${item._id}`);
  };

  return (
    <div className='card__section'>
      <div className='forestImg'>
        <div className='single_blog_img'>
          <img
            onClick={handleNavigate}
            src={item.imageUrl}
            alt='forest'
            className='blog_img'
          />
        </div>
        <div className='title-wrapper'>
          {/* <hr className="title-line" /> */}
          <h5 className='title-text' onClick={handleNavigate}>
            {item.title.slice(0, 25)}.. .
          </h5>
        </div>
        <p className='today_date'>{moment(item.timestamp).format('llll')}</p>
        <p className='description-text'>{item.description.slice(0, 100)}...</p>
      </div>
    </div>
  );
}
