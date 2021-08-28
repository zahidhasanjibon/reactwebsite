// export default function Post({ match }) {
//     const { params } = match;
//     return <h1>this is Post page {params.category} </h1>;
// }
import { useParams } from 'react-router-dom';

export default function Post() {
    const { category } = useParams();

    return <h1>this is Post page {category} </h1>;
}
