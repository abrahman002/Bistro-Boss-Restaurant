import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import MenuImg from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";

const Menu = () => {
    const [menu]=useMenu();
    const offeredItem=menu.filter(item => item.category === 'offered')
    return (
        <div >
             <Helmet>
                <title>Bistro Boss | Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={MenuImg} title={'our menu'} subtitle={'would you like to try a dist?'}></Cover>
            <SectionTitle
             subHeading='Dont miss'
             Heading='todays offer'
            ></SectionTitle>
         <div className="grid md:grid-cols-2 gap-10 my-10">
         {
            offeredItem.map(item=><MenuItem
             key={item._id}
             item={item}
            ></MenuItem>)
          }
         </div>
         <div className="flex justify-center">
         <button className="btn btn-outline border-0 border-b-4 mt-5 uppercase">order your favourite food</button>
         </div>
        </div>
    );
};

export default Menu;