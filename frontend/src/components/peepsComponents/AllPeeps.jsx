import PeepCard from './PeepCard';

const AllPeeps = ({ peepsData }) => {
    const { peeps, getError } = peepsData;
    if (peeps.length > 0) {
        return (
            peeps.map(peep => {
                const { _id, peeperName, peeperLastName, userName, peepPosted, peepBody } = peep;

                const peepProps = {
                    peeperName,
                    peeperLastName,
                    userName,
                    peepPosted,
                    peepBody
                };

                return (
                    <>
                        <PeepCard
                            key={_id}
                            peepProps={peepProps}
                        />
                    </>
                )
            })
        )
    }
    else {
        return (
            <div className="row justify-content-md-center">
                <h1 className="col-md-auto">{getError.message}</h1>
            </div>
        )
    }
};


export default AllPeeps;