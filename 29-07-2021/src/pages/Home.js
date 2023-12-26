import Board from '../components/Board';
import Navigation from '../components/Navigation';

export default function Home () {
    return (
        <div className="home_page">
            <Navigation />
            <main>
                <Board />
            </main>
        </div>
    )
}