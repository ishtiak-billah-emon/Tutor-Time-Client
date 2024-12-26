import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import NoContent from "../componenets/NoContent";

const MyTutorials = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const navigate = useNavigate();
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    fetch(`https://tutortime-server.vercel.app/myTutorials/${email}`)
      .then((res) => res.json())
      .then((data) => setTutorials(data));
  }, [email]);

  // what if there is no tutorial
  if (tutorials.length === 0) {
    return (
      <>
        <div className="flex justify-center mt-12">
          <NoContent />
        </div>
      </>
    );
  }

  // delete from db
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tutortime-server.vercel.app/tutorials/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Tutorial has been deleted.",
                icon: "success",
              });
              const remaining = tutorials.filter(
                (tutorial) => tutorial._id !== _id
              );
              setTutorials(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto mt-12 p-2">
      <h1 className="mb-4 text-xl font-bold">Tutorials</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Language</th>
              <th>Price</th>
              <th>Description</th>
              <th>Review</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tutorials.map((tutorial, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={tutorial.photo} alt="Tutor image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{tutorial.name}</div>
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td> {tutorial.language}</td>
                <td>{tutorial.price}</td>
                <td>{tutorial.description}</td>
                <td>{tutorial.rating}</td>
                <td>
                  <div className="space-y-2 md:space-y-0 md:flex">
                    <button
                      onClick={() =>
                        navigate(`/updateTutorial/${tutorial._id}`)
                      }
                      className="btn bg-[#59caf3] text-white w-full md:w-1/2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(tutorial._id)}
                      className="btn bg-[#f66962] text-white w-full md:w-1/2"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorials;
