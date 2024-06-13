import mainStyles from "./Main.module.css";
import Card from "../Card/Card";

const posts = [
    {
        id: 1,
        title: "Titolo del Post",
        image: 'https://picsum.photos/200?random=1',
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["html", "css"],
        published: true,
    },
    {
        id: 2,
        title: "Titolo del Post",
        image: 'https://picsum.photos/200?random=2',
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["js", "css"],
        published: true,
    },
    {
        id: 3,
        title: "Titolo del Post",
        image: 'https://picsum.photos/200?random=3',
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["js", "php"],
        published: true,
    },
    {
        id: 4,
        title: "Titolo del Post",
        image: 'https://picsum.photos/200?random=4',
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["html"],
        published: false,
    },
];

/*const tags = posts.map((post) =>
    post.tags
)

const tag = Array.from(new Set(tags.flat()))

console.log(tag)*/

const distinctTags = [...new Set(posts.flatMap(post => post.tags))];
console.log(distinctTags)

function Main() {
    return (
        <>
            <main>

                <ul>
                    {
                        distinctTags.map((tag, i) =>
                            <li key={i}><a href="#">{tag.toUpperCase()}</a></li>
                        )
                    }
                </ul>

                <div className={mainStyles.container}>
                    {posts.map((post) => (
                        <Card
                            key={post.id}
                            title={post.title}
                            image={post.image}
                            content={post.content}
                            tags={post.tags}
                            published={post.published}
                        />
                    ))}
                </div>

            </main>
        </>
    )
}

export default Main