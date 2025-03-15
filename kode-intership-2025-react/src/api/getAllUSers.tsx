import axios from "axios";
import React, { useEffect, useState } from 'react';


// function getAllUsers() {
//     const 

// }


const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  fetch(
    "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));