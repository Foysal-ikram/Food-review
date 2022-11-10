import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import UserContext, { AuthContext } from '../Loader/UserContext';

const AddService = () => {
    const {user} = useContext(AuthContext) ;
    console.log(user)

    const addService= event =>{
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const img = form.image.value;
        const author = form.author.value ;
        const description = form.description.value;
        const price = form.price.value ;
        const name = form.serviceName.value ;
        const rating = form.rating.value ;


        const newService = {
            rating ,
            name,
            price: price,
            email,
            img,
            author ,
            description,
        }

        console.log(name,price, email,img,author,description) 
        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.acknowledged) {
                    toast('🦄 Your service is added', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    })
                    form.reset();
                }
            })
            .catch(er => console.error(er));




    }

    return (
       
        <div className='p-4 border-4 mt-4 shadow-xl border-2 mt-4'>
            <div className='bg-orange-400'> </div>
            <form onSubmit={addService}>

                <h2 className="text-4xl font-mono  text-center font-bold rounded-md mb-4 pl-1 bg-cyan-600	p-6">Add your service here </h2>

                <div className='grid grid-cols-2 gap-4'>
                    <input name="author" type="text" placeholder="Author Name" className="input input-ghost w-full  input-bordered" required />
                    <input name="serviceName" type="text" placeholder="Service Name" className="input input-ghost w-full  input-bordered" required />
                    <input name="price" type="text" placeholder="Service Price in ($)" className="input input-ghost w-full  input-bordered" required />
                    <input name="rating" type="text" placeholder="Give a average rating in number within 5" className="input input-ghost w-full  input-bordered" required />
                    <input name="image" type="text" placeholder="Place Photo URL" className="input input-ghost w-full  input-bordered" />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Give your service Description" required></textarea>

                <input className='btn' type="submit" value="Place Your review" />

            </form>
        </div>
    
    );
};

export default AddService;