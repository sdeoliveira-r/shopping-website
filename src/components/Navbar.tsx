import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="hidden lg:block">
            <div className="container">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                    <Link className="navbar__link relative" href="#">
                        PÁGINA PRINCIPAL
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        CATEGORIAS
                    </Link>

                    <Link className="navbar__link relative" href="#">
                        HOMEM
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        MULHER
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        JOALHERIA
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        PERFUME
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        BLOG
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        OFERTAS
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default Navbar