import './OurService.css';

const OurServices = (props) => {
    const { result, Click } = props
    return (
        <div className="list-our">
            <h1>{result.title}</h1>
            <div className='img-our'>
                <img src={result.thumnaiUrl} onClick={() => { Click(result) }} />
                <div className='btn'>
                    <button onClick={() => {Click(result)}}>จองเลย!!!</button>
                </div>
            </div>
        </div>
    )
}

export default OurServices