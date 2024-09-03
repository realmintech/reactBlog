import './Index.css';
import moment from 'moment';

export default function ArticleCard(props) {
  const { item } = props;
  return (
    <>
      <div className='card__section'>
        <div className='forestImg'>
          <img src={item.imageUrl} alt='forest' className='blogImg' />
          <div className='title-wrapper'>
            <hr className='title-line' />
            <h5 className='title-text'>{item.title}</h5>
          </div>
          <p className='today_date'>{moment(item.timestamp).format('llll')}</p>
          <p className="description-text">{item.description.slice(0, 100)}</p>
          <a className='read_more_link text-decoration-none' href='/blog/id'>
            Read more...
          </a>
        </div>
      </div>
    </>
  );
}
