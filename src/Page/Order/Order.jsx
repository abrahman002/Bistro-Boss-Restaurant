import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import OrderCart from "../OderCard/OrderCart";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['SALAD', 'PIZZA', 'SOUP', 'Dessert', 'DRINKS'];
    const { category } = useParams();
    // console.log(category)
    const initailIndex = categories.indexOf(category)
    // console.log(initailIndex)
    const [tabIndex, setTabIndex] = useState(initailIndex);
    const [menu] = useMenu();

    const DrinksItem = menu.filter(item => item.category === 'drinks')
    const dessertItem = menu.filter(item => item.category === 'dessert')
    const pizzaItem = menu.filter(item => item.category === 'pizza')
    const saladItem = menu.filter(item => item.category === 'salad')
    const soupItem = menu.filter(item => item.category === 'soup')
    return (
        <div >
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title={'Order Food'} subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nemo assumenda"}></Cover>
            <div className="text-center mt-10 mb-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderCart items={saladItem}></OrderCart>
                    </TabPanel>
                    <TabPanel>
                        <OrderCart items={pizzaItem}></OrderCart>
                    </TabPanel>
                    <TabPanel>
                        <OrderCart items={soupItem}></OrderCart>
                    </TabPanel>
                    <TabPanel>
                        <OrderCart items={dessertItem}></OrderCart>
                    </TabPanel>
                    <TabPanel>
                        <OrderCart items={DrinksItem}></OrderCart>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;