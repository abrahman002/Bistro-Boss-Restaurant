
const SectionTitle = ({Heading,subHeading}) => {
    return (
        <div className="mx-auto text-center w-4/12">
            <p className="text-yellow-600 my-4 italic">--- {subHeading} ---</p>
            <h3 className="text-3xl border-y-4 py-2 mb-4 uppercase">{Heading}</h3>
        </div>
    );
};

export default SectionTitle;