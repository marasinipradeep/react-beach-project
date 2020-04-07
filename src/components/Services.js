import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
import Title from './Title'

class Services extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: [
                {
                    icon: <FaCocktail />,
                    title: "free cocktail",
                    info: 'hey you have free cocktail dinner here gsdfgsdgsdfg' 

                },
                {
                    icon: <FaHiking />,
                    title: "endless hiking",
                    info: 'hey you have free cocktail dinner here'

                },
                {
                    icon: <FaShuttleVan />,
                    title: "free cocktail",
                    info: 'hey you have free cocktail dinner here gsfdgsfcdgg'

                },
                {
                    icon: <FaBeer />,
                    title: "free cocktail",
                    info: 'hey you have free cocktail dinner here'

                },
            ]

        }
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return(
                             <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );

                    })}
                </div>
            </section>



        );
    }
}

export default Services
