// import React from 'react'
// import { useState } from 'react';

// function UserProfileCard({user, theme, action}){
//   return(
//     <div className={`p-6 rounded-2xl ${theme.backgroundColor} ${theme.textColor}`}>
//       <div>{user.avatar}</div>
//       <div>{user.role}</div>
//       {user.stats && (
//         <div>
//           {Object.entries(user.stats).map(([key, value]) => (
//             <div key={key}>
//               <div>{value}</div>
//               <div>{key}</div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// function ComplexProps() {
//   const [message, setMessage] = useState("");

//   const users = [
//     {
//       user: {
//         name: "Alice Johnson",
//         email: "alice@example.com",
//         avatar: "👩‍💼",
//         role: "Admin",
//         status: "Active",
//         stats: {
//           posts: 145,
//           followers: 2834,
//           following: 421,
//         },
//       },
//       theme: {
//         backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
//         textColor: "text-gray-800",
//         avatarBg: "bg-purple-300",
//         badgeBg: "bg-purple-200",
//       },
//       actions: {
//         primary: {
//           label: "View Profile",
//           onClick: () => setMessage("Viewing Alice's profile"),
//           className: "bg-purple-500 text-white hover:bg-purple-600",
//         },
//         secondary: {
//           label: "Message",
//           onClick: () => setMessage("Opening message to Alice"),
//           className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
//         },
//       },
//     },
//     {
//       user: {
//         name: "Bob Smith",
//         email: "bob@example.com",
//         avatar: "👨‍💻",
//         role: "Developer",
//         status: "Online",
//         stats: {
//           projects: 28,
//           commits: 1523,
//           reviews: 89,
//         },
//       },
//       theme: {
//         backgroundColor: "bg-gradient-to-br from-green-100 to-teal-100",
//         textColor: "text-gray-800",
//         avatarBg: "bg-green-300",
//         badgeBg: "bg-green-200",
//       },
//       actions: {
//         primary: {
//           label: "View Profile",
//           onClick: () => setMessage("Viewing Bob's profile"),
//           className: "bg-green-500 text-white hover:bg-green-600",
//         },
//         secondary: {
//           label: "Collaborate",
//           onClick: () => setMessage("Starting collaboration with Bob"),
//           className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
//         },
//       },
//     },
//   ];

//   return (
//     <>
//       <div className="space-y-8">
//           <div>
//             <h3 className="text-xl font-semibold mb-4 text-gray-700">
//               User Profile Cards (Nested User, Theme, and Actions):
//             </h3>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {users.map((userData, index) => (
//                 <UserProfileCard key={index} {...userData} />
//               ))}
//             </div>
//           </div>
//       </div>
//     </>
//   )
// }




// export default ComplexProps

// -=-==-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import React from 'react'
import { useState } from 'react';

function UserProfileCard({user, theme, actions}){
  return(
    <div className={`p-6 rounded-2xl shadow-lg ${theme.backgroundColor} ${theme.textColor}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-16 h-16 rounded-full ${theme.avatarBg} flex items-center justify-center text-3xl`}>
          {user.avatar}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold">{user.name}</h4>
          <p className="text-sm opacity-75">{user.email}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme.badgeBg}`}>
          {user.role}
        </span>
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-200 text-green-800">
          {user.status}
        </span>
      </div>

      {user.stats && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-sm opacity-75 capitalize">{key}</div>
            </div>
          ))}
        </div>
      )}

      {actions && (
        <div className="flex gap-3">
          <button
            onClick={actions.primary.onClick}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${actions.primary.className}`}
          >
            {actions.primary.label}
          </button>
          <button
            onClick={actions.secondary.onClick}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${actions.secondary.className}`}
          >
            {actions.secondary.label}
          </button>
        </div>
      )}
    </div>
  )
}

function ComplexProps() {
  const [message, setMessage] = useState("");

  const users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩‍💼",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Alice's profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Alice"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👨‍💻",
        role: "Developer",
        status: "Online",
        stats: {
          projects: 28,
          commits: 1523,
          reviews: 89,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-100 to-teal-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Bob's profile"),
          className: "bg-green-500 text-white hover:bg-green-600",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => setMessage("Starting collaboration with Bob"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              User Profile Cards (Nested User, Theme, and Actions):
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {users.map((userData, index) => (
                <UserProfileCard key={index} {...userData} />
              ))}
            </div>
          </div>
          
          {message && (
            <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 rounded">
              <p className="font-medium">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ComplexProps