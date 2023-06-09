import Cover from "../Cover/Cover";

const MenuItem = ({ item }) => {
    const { name, image, price, recipe, } = item;
    return (
        <section>
            <div className="flex space-x-2">
            
                <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[100px]" src={image} alt="" />
                <div>
                    <h3 className="uppercase">{name}  ----------</h3>
                    <p className="text-sm">{recipe}</p>
                </div>
                <p className="text-yellow-500">${price}</p>
            </div>
            
        </section>
    );
};

export default MenuItem;