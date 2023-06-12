import './ShimmerUI.css';

const ShimmerUI = () => {
    return (
        <div className='restaurant-list'>       
        {Array(12).fill('').map((e, index)=> <div key={index} className="shimmer-card"></div>)}    
        </div>
    );
};

export default ShimmerUI;