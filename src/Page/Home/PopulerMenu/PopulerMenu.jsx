import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopulerMenu = () => {
    const [menu]=useMenu();
    const populerItem=menu.filter(item => item.category === 'popular')
  
    return (
        <section className="mb-10">
            <SectionTitle
             Heading='From Our Menu'
             subHeading='Populer Menu'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
               {
                populerItem.map(item => <MenuItem
                   key={item._id}
                   item={item}
                ></MenuItem>)
               }
            </div>
            <div className="flex justify-center">
            <button className="btn btn-outline border-0 border-b-4 mt-5 ">VIEW FULL MENU</button>
            </div>
        </section>
    );
};

export default PopulerMenu;