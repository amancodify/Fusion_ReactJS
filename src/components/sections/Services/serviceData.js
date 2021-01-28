import constructionImg from "../../../assets/s-construction.jpg";
import houseKeepingImg from "../../../assets/s-housekeeping.jpg";
import securityImg from "../../../assets/s-security.jpg";
import outsourcingImg from "../../../assets/s-outsourcing.jpg";

const SERVICEDATA = {
    "housekeeping": {
        "title": "House Keeping",
        "trustedBy": "1000+",
        "acceptedInOver": "100",
        "runningProjects": "25",
        "description": "Housekeeping refers to the management of duties and chores involved in the running of a household, such as cleaning, cooking, home maintenance, shopping, and bill payment. These tasks may be performed by members of the household, or by other persons hired for the purpose. The term is also used to refer to the money allocated for such use. There are a number of housekeeping services that can be added to your regular cleaning plan, including oven cleaning, refrigerator cleaning, and the changing of your bed linens. We recommend contacting us to ensure the service is offered. If so, let us know you’d like it added to your next cleaning.",
        "vectorImage": houseKeepingImg,
        "aminities": [
                        "Restroom Deodorization and Maintenance",
                        "Light Maintenance, Parking lot Maintenance, Fire and Flood Clean-up",
                        "Dusting and Trash removal",
                        "Blind Cleaning, Window Cleaning, Ceiling and Wall Cleaning",
                        "Special Event Support (set up, take down, and post event cleanup), Medical Office Cleaning, Hospital Janitorial Housekeeping Services"],
        "aminitiesTitle": "Areas we serve",
        "buttonText": "Book Now"
    },
    "security": {
        "title": "Security",
        "trustedBy": "1 Lakh",
        "acceptedInOver": "50+",
        "runningProjects": "20",
        "description": "There are many reasons of why security guards are important. They help protect businesses, schools, banks, and other important places. Not only do they protect places, but they also protect people. Many famous people will hire security guards known as body guards or a security guard company to protect them. Security guards have many responsibilities that they must uphold, and if they did not fulfill them, the world could be very different and much more unsafe.",
        "vectorImage": securityImg,
        "aminities": [
                        "There are many reasons of why security guards are important. They help protect businesses, schools, banks, and other important places.",
                        "We provide well trained security guards for your place",
                        "With and Without arms guards available",
                        "Male, female, bouncers, Gunman etc. all types are serviciable",
                        "Not only do they protect places, but they also protect people. Many famous people will hire security guards known as body guards or a security guard company to protect them."],
        "aminitiesTitle": "Our Key Points",
        "buttonText": "Get a Quote"
    },
    "construction": {
        "title": "Construction",
        "trustedBy": "1 Lakh",
        "acceptedInOver": "60+",
        "runningProjects": "10",
        "description": "Construction is a general term meaning the art and science to form objects, systems, or organizations. Giving shape to new possibilities and designing the art of virtual transformation is the key of our construction projects . Working with all big names of the industry has given enormous exposer and experience to mark the potential through our work.",
        "vectorImage": constructionImg,
        "aminities": [
                        "Quality control is maintained into every step of Fusion’s construction processes.",
                        "A great business at a fair price is superior to a fair business at a great price.",
                        "Our customers are not our competitors.",
                        "Professionalism is the conduct, behavior and attitude of someone in a work or business environment.",
                        "It’s been overhyped, oversold, and underrepresented (in many cases)."],
        "aminitiesTitle": "Our Key Values",
        "buttonText": "Know More"
    },
    "outsourcing": {
        "title": "Outsourcing",
        "trustedBy": "1 Lakh",
        "acceptedInOver": "90+",
        "runningProjects": "120",
        "description": "Timing is everything in the business game, and if you miss out any deal it’s gone. It becomes difficult for freshers of the market to keep a check on the market movements as this takes years of experience to judge and understand every move. We came up with  our outsourcing services where we provide you with tested and genuine projects to execute and make business with us.",
        "vectorImage": outsourcingImg,
        "aminities": [
                        "Reduce costs and improve operating costs",
                        "Grow outside limitations",
                        "Access to expert and experience services",
                        "Releasing internal resources for other purposes",
                        "Increase in efficiency and Tap into existing infrastructures"],
        "aminitiesTitle": "Why Outsourcing ?",
        "buttonText": "Know More"
    }
};

export const getServiceData = (serviceType) => {
    return SERVICEDATA[serviceType];
}