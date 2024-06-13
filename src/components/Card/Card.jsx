import imagePost from "../../assets/post.jpg";
import cardStyles from "./Card.module.css";

function Card({ title, content, tags, published }) {
    return (
        <>
            {published &&
                <div className={cardStyles.card}>
                    <img src={imagePost} alt="" />
                    <h3>{title}</h3>
                    <p>{content}</p>
                    {tags.map((tag, index) => (
                        <span className={tag == 'html' ? cardStyles.green : '' || tag == 'css' ? cardStyles.pink : tag == 'js' ? cardStyles.blue : ''} key={index}>{tag}</span>
                    ))}
                    <button>Leggi di più</button>
                </div>
            }
        </>
    )
}

export default Card