import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import FeaturedImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-items bg-fixed my-14 pt-10 text-white">
            <SectionTitle subHeading='check it out' Heading='Featured Items'></SectionTitle>

            <div className="md:flex justify-center items-center px-20 py-28">
                <div>
                <img className="rounded" src={FeaturedImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug,2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis alias sequi accusantium corrupti praesentium quod dignissimos reprehenderit accusamus maxime totam. Iusto amet ullam magni velit iste obcaecati unde rerum odit!</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Oder Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;