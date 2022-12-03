import './Model.css'

const Model = (props) => {
    const {popup, ClickBg} = props;
    return (
        <div className='model-card'>
            <div className='img-model' onClick={ClickBg}>
                <div className='img-model-content'>
                    <img src={popup.fullUrl}/>
                </div>
            </div>
        </div>
    )
}

export default Model