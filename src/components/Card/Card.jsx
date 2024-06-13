import imagePost from "../../assets/post.jpg";
import cardStyles from "./Card.module.css";

function Card({ title, image, content, tags, published }) {
    return (
        <>
            {published &&
                <div className={cardStyles.card}>
                    <img src={image} alt="" />
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <div className={cardStyles.badge}>
                        {tags.map((tag, index) => (
                            <span className={tag == 'html' ? cardStyles.green : '' || tag == 'css' ? cardStyles.pink : tag == 'js' ? cardStyles.blue : cardStyles.grey} key={index}>{tag}</span>
                        ))}
                    </div>
                    <button>Leggi di più</button>
                </div>
            }
        </>
    )
}

export default Card