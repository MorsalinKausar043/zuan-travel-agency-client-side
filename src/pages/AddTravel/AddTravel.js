import { useState } from "react";
import ReactStars from 'react-stars'


const AddTravel = () => {

    let formData = new FormData();
    const [image, setImage] = useState(null);
    const [rating, setRating] = useState(0);
    const [data, setData] = useState({
        title: "",
        category:"",
        description: "",
        cost: "",
        location: "",
    });


    const handleInputBox = (e) => {

        const { name, value } = e.target;
        setData({...data , [name]:value})
  }

    const submitAddData = (e) => {
      e.preventDefault();
        const user = "admin";
        let panding = user === "admin" ? "approvet" : "panding";
        const { title,description, category, cost, location } = data;
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("cost", cost);
        formData.append("location", location);
        formData.append("rating", rating);
        formData.append("image", image);
        formData.append("panding", panding);
        
        if (title && description && category && cost && location )
        {
            // data.status = "pending";
            fetch('http://localhost:5000/addTravels', {
                method: "POST",
                body:formData
              })
              .then(res => {
                  if (res.status === 200)
                  {
                    e.target.reset();
                    setData({title:"",category:"",description:"",cost:"" , location:"",});
                      alert('added successfully');
                  } else
                  {
                    alert("added Unsuccessfull");
                  }
            })
        }
        else
        {
            alert("please fill the input box!")
        }
    }
     
    return (

      <>
        <div className="w-100 mx-auto p-4 md:p-12">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={submitAddData}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                          Title
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            add
                          </span>
                          <input
                            type="text"
                            name="title"
                            value={data.title}
                            id="company-website"
                            onChange={handleInputBox}
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="title"
                          />
                        </div>
                      </div>
                    </div>
                                
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        category 
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            add
                          </span>
                          <input
                            type="text"
                            name="category"
                            value={data.category}
                            id="company-website"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="category "
                            onChange={handleInputBox}
                          />
                        </div>
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        description
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="description"
                          value={data.description}
                          rows={5}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="description"
                          defaultValue={''}
                          onChange={handleInputBox}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for your profile. URLs are hyperlinked.
                      </p>
                    </div>
                                
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Total Cost 
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            add
                          </span>
                          <input
                            type="text"
                            name="cost"
                            value={data.cost}
                            id="company-website"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="cost"
                            onChange={handleInputBox}
                          />
                        </div>
                      </div>
                    </div>
                                
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Location 
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            add
                          </span>
                          <input
                            type="text"
                            name="location"
                            value={data.location}
                            id="company-website"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="Location "
                            onChange={handleInputBox}
                          />
                        </div>
                      </div>
                    </div>
                  
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Rating 
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            add
                          </span>
                          <ReactStars
                            count={5}
                            onChange={data => setRating(data)}
                            name="rating"
                            size={24}
                            color2={'#ffd700'} />
                        </div>
                      </div>
                    </div>
  
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input id="file-upload" onChange={e=> setImage(e.target.files[0])} accept="image/*" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 1MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
        </div>
        
      </>
    )
}
  
export default AddTravel;