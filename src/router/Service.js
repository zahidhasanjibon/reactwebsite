import { Link, useRouteMatch } from 'react-router-dom';

export default function Service({ num }) {
    const match = useRouteMatch();

    return (
        <>
            <h1>this is Service page - {num}</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={`${match.url}/comments`}>Comments </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
