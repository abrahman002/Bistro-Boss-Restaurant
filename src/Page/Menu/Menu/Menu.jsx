import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import MenuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offeredItem = menu.filter(item => item.category === 'offered')
    const dessertItem = menu.filter(item => item.category === 'dessert')
    const pizzaItem=menu.filter(item => item.category === 'pizza')
    const saladItem=menu.filter(item => item.category === 'salad')
    const soupItem=menu.filter(item => item.category === 'soup')
    return (
        <div >
            <Helmet>
                <title>Bistro Boss | Menu</title>
               
            </Helmet>
            <Cover img={MenuImg} title={'our menu'} subtitle={'would you like to try a dist?'}></Cover>
            <SectionTitle
                subHeading='Dont miss'
                Heading='todays offer'
            ></SectionTitle>
            {/* Offered Menu items */}
                <MenuCategory
                   items={offeredItem}
                ></MenuCategory>
            {/* Dessert menu items */}
               <MenuCategory items={dessertItem} title={'Dessert'} img={dessertImg} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nemo assumenda, quas adipisci quasi eaque laboriosam sint officiis repellendus.'}></MenuCategory>
            {/* Pizza menu items */}
            <MenuCategory items={pizzaItem} title={'PIZZA'} img={pizzaImg} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nemo assumenda, quas adipisci quasi eaque laboriosam sint officiis repellendus.'}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={saladItem} title={'SALAD'} img={saladImg} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nemo assumenda, quas adipisci quasi eaque laboriosam sint officiis repellendus.'}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soupItem} title={'SOUP'} img={soupImg} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nemo assumenda, quas adipisci quasi eaque laboriosam sint officiis repellendus.'}></MenuCategory>
        </div>
    );
};

export default Menu; 