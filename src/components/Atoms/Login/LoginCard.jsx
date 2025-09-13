import React from 'react';

const LoginCard = ({icon}) => {
return (
<div>
  <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
    {icon == "google" && <i data-feather="google" className="h-5 w-5 text-red-500"></i>}
  </a>
</div>
  )
}

export default LoginCard;