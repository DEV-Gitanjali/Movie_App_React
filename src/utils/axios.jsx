  import axios from 'axios';

  const instance = axios.create({

    baseURL: "https://api.themoviedb.org/3/",
    headers:{
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTQyY2NiMmVlZjFhOWU1ZTdiNTRiMzVmNzEyNDhiZCIsInN1YiI6IjY2MjAxMTRiMjE2MjFiMDE3ZGYyNDY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j3m-HBnR8v5z6Vb4ks0SGQe98skQ5u3F2pZKmDDP0QM' ,
    
    },

  });

  export default instance;