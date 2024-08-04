import { useRef, useState } from "react";
import { X } from "lucide-react";
import "../index.css";

const AuthPopup = ({ onClose }) => {

  // popup window code
  const modalRef = useRef();

  const closeForm = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  // Form Data Handling 
  const [username,setUserName] = useState("");
  const [password,setPassword] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:8000/',{
      method: 'post',
      body: JSON.stringify({username,password}),
      headers:{
        'Content-Type': 'application/json'
      },
    });
    result = await result.json;
    localStorage.setItem("user", JSON.stringify(result));
    onClose();
  }

  return (
    <div
      ref={modalRef}
      onClick={closeForm}
      className="fixed inset-0 flex items-center justify-center h-screen bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
      <div className="flex flex-col gap-5 mt-10 text-white">
        <button onClick={onClose} className="mr-4 place-self-end">
          <X size={30} />
        </button>
        <div className="flex flex-col items-center gap-5 px-20 py-10 mx-4 bg-white rounded-xl">
          <form className="space-y-6" onSubmit={collectData}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Login</h5>
            <div>
              <label htmlFor="Username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Username
              </label>
              <input
                type="text"
                name="text"
                id="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="ABCD12345"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*********"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={closeForm}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPopup;
