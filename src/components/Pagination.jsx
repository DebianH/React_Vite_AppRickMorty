
const Paginations = ({ prev, next, onPrev, onNext }) => {
    const handlePrev = () =>{ onPrev()}
    const handleNext = () =>{ onNext()}

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {
                    prev ? (
                        <li className="page-item">
                    <button className="page-link" onClick={handlePrev}>Prev</button>
                </li>
                    ): null
                }
                {
                    next ? (
                        <li className="page-item">
                    <button className="page-link" onClick={handleNext}>Next</button>
                </li>
                    ): null
                }
            </ul>
        </nav>
    )
}

export default Paginations;