import Tasks from "../components/Tasks";
import Timebox from "../components/Timebox";

const Main = ({mode}) => {
    return (
        <main>
            <Timebox mode={mode} />
            <Tasks />
        </main>
    );
};

export default Main;