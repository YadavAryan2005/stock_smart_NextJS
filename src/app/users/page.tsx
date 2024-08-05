"use client";
import { userI } from "@/model/user";
import { getUsers } from "@/utils/actions";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState<userI[] | null>(null);

  const fetchData = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    // Fetch users from the database
    fetchData();
  }, []);

  return (
    <div className='pt-20 px-4'>
      {users ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {users.map((user) => (
            <div
              key={user._id}
              className='user-card p-4 bg-white rounded-lg shadow-md flex flex-col items-center'
            >
              <img
                src={user.image as string}
                alt={`${user.name}'s profile`}
                className='rounded-full w-24 h-24 mb-4'
              />
              <div className='text-center'>
                <h2 className='text-xl font-semibold'>{user.name}</h2>
                <p className='text-gray-500'>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
}

export default Users;
