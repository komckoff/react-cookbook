import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            This page doesn't exist. Go <Link to="/">home</Link>
        </div>
    );
}

export { NotFound };
