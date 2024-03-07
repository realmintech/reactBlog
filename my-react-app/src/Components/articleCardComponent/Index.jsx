import "./Index.css";

export default function ArticleCard(props) {
  const { item } = props;
  return (
    <>
      <div>
        <div className="forestImg">
          <img src={item.imageUrl} alt="forest" className="blogImg" />
          <h5 className="article___header">{item.title}</h5>
          <hr />
          <p>{item.description}</p>
          <h5>
          <a className="read_more_link text-decoration-none" href="/blog/1">READ MORE...</a>
          </h5>
        </div>
      </div>
    </>
  );
}
