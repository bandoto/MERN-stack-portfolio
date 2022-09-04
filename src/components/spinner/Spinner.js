import { GiChiliPepper } from 'react-icons/gi'
import './spinner.scss'

const Spinner = () => {
    return (
        <div className="spinner-block">
            <GiChiliPepper
                className='spinner'
                size={150} />   
        </div>
    );
};

export default Spinner;