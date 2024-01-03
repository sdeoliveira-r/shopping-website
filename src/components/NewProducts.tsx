import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
    {
        img: "/shirt-1.jpg",
        title: "Camisa",
        desc: "Pure Garment Dyed Cotton Shirt",
        // avaliações
        rating: 4,
        price: "45.00",
    },
    {
        img: "/jacket-1.jpg",
        title: "Jaqueta",
        desc: "MEM Yarn Fleece Full-Zip Jacket",
        rating: 4,
        price: "215.00",
    },
    {
        img: "/jacket-2.jpg",
        title: "Jaqueta",
        desc: "MEM Jacket",
        rating: 5,
        price: "175.90",
    },

    {
        img: "/skirt-1.jpg",
        title: "Saia",
        desc: "Black Floral Wrap Midi Skirt",
        rating: 5,
        price: "72.80",
    },
    {
        img: "/party-wear-1.jpg",
        title: "Sapato de Festa",
        desc: "Women's Party Wear Shoes",
        rating: 3,
        price: "97.50",
    },
    {
        img: "/sports-1.jpg",
        title: "Esporte",
        desc: "Trekking & Running Shoes - Black",
        rating: 3,
        price: "58.00",
    },
    {
        img: "/watch-1.jpg",
        title: "Relógio",
        desc: "Smart Watches Vital Plus",
        rating: 4,
        price: "100.00",
    },
    {
        img: "/watch-2.jpg",
        title: "Relógio",
        desc: "Pocket Watch Leather Pouch",
        rating: 4,
        price: "120.00",
    },
];

const NewProducts = () => {
    return (
        <div>
            <div className=" container pt-16">
                <h2 className="font-medium text-2xl pb-4">Novidades</h2>
                <div className=" grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 
                lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {productsData.map((item, index) => (
                        <ProductCard key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewProducts;