
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

function UserEdit() {
    const loadedUser = useLoaderData();
    //console.log(loadedUser);
    const navigate = useNavigate();
  
    const handleEdit = (event) => {
      event.preventDefault();
  
      const form = new FormData(event.currentTarget);
  
      const name = form.get("name");
      const email = form.get("email");
  
      const updatedUser = { name, email };
      console.log("UpdatedUser:", updatedUser);
  
      fetch(`http://localhost:5000/user/${loadedUser._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            toast.success("User Updated Successfully", {
              position: "top-right",
            });
            Navigate("/users");
          }
        });
    };
    return (
      <div className="mx-auto mt-20">
        <div className="flex justify-center justify-items-center">
          <h1 className="text-3xl font-bold text-center mb-10">
            Update a User :
          </h1>
          &nbsp;&nbsp;&nbsp;
          <Link to="/">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
      py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
            >
              Home
            </button>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/userlist">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
      py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
            >
              Users
            </button>
          </Link>
        </div>
        <form onSubmit={handleEdit} className="w-full ">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="name"
              >
                Full Name
              </label>
            </div>
            <div className="md:w-1/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="name"
                type="text"
                name="name"
                defaultValue={loadedUser.name}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="email"
              >
                E-mail
              </label>
            </div>
            <div className="md:w-1/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="email"
                type="email"
                name="email"
                defaultValue={loadedUser.email}
              />
            </div>
          </div>
  
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white 
          font-bold py-2 px-4 rounded-none"
                type="submit"
              >
                Update User
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default UserEdit