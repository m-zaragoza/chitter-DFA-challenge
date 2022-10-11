const PeepCard = ({ peepProps }) => {
    const { peeperName, peeperLastName, userName, peepPosted, peepBody } = peepProps;
    const displayDate = new Date(peepPosted).toDateString();
    const displayTime = new Date(peepPosted).toLocaleTimeString();

    return (
        <div className="card mx-5 mt-2">
            <div className="card-header pb-0 pt-3" style={{ backgroundColor: "#F7DC92" }}>
                <p>{peeperName} {peeperLastName} as {userName} peeped:</p>
            </div>
            <div className="card-body">
                <h5 className="card-title pb-3 ps-5 pt-1">{peepBody}</h5>
                <div className="text-end">
                    <p className="blockquote-footer mb-0">On {displayDate} at {displayTime}</p>
                </div>
            </div>
        </div>
    );
}

export default PeepCard;