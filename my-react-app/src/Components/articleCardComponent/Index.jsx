import './Index.css';

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
          <p className='today_date'>{item.date}</p>
          <p className="description-text">{item.description}</p>
          <a className='read_more_link text-decoration-none' href='/blog/1'>
            Read more...
          </a>
        </div>
      </div>
    </>
  );
}
