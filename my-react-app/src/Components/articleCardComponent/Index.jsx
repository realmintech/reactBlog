import Forest from '../../assets/image6.png';
import './Index.css';

export default function ArticleCard() {
  const data = [
    {
      imageUrl: Forest,
      title: 'FOREST MODEL SHOOT',
      description:
        'Lorem ipsum dolor sit amet doloremque harum. Ipsum.consectetur veritatis sequi suscipit. Sunt aliquid dictaveritatis reiciendis maxime omnis atque a cum perspiciatis animi.',
    },
    {
      imageUrl: Forest,
      title: 'FOREST MODEL SHOOT',
      description:
        'Lorem ipsum dolor sit amet doloremque harum. Ipsum.consectetur veritatis sequi suscipit. Sunt aliquid dictaveritatis reiciendis maxime omnis atque a cum perspiciatis animi.',
    },
    {
      imageUrl: Forest,
      title: 'FOREST MODEL SHOOT',
      description:
        'Lorem ipsum dolor sit amet doloremque harum. Ipsum.consectetur veritatis sequi suscipit. Sunt aliquid dictaveritatis reiciendis maxime omnis atque a cum perspiciatis animi.',
    },
    {
      imageUrl: Forest,
      title: 'FOREST MODEL SHOOT',
      description:
        'Lorem ipsum dolor sit amet doloremque harum. Ipsum.consectetur veritatis sequi suscipit. Sunt aliquid dictaveritatis reiciendis maxime omnis atque a cum perspiciatis animi.',
    },
    {
      imageUrl: Forest,
      title: 'FOREST MODEL SHOOT',
      description:
        'Lorem ipsum dolor sit amet doloremque harum. Ipsum.consectetur veritatis sequi suscipit. Sunt aliquid dictaveritatis reiciendis maxime omnis atque a cum perspiciatis animi.',
    },
  ];
  return (
    <>
      <div>
        <h3 className='text-center pt-4'>ART / LIFESTYLE</h3>
        <hr />
        <div className='row'>
          {data.map((item, index) => (
            <div className='col-lg-6' key={index}>
              <div className='forestImg'>
                <img src={item.imageUrl} alt='forest' className='blogImg'/>
                <h5 className='article___header'>{item.title}</h5>
                <hr />
                <p>{item.description}</p>
                <p className='read_more_link'>Read More...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
