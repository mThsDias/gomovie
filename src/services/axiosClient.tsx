import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2Y2ZmU0NDRlNDliY2JlNGQ4ZjIxNTA3NjAwMGJlOSIsInN1YiI6IjY0YWI0N2I0ZTI0YjkzMDBhZWUyYTNmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xz69iILikL3eYmvDRj-YAqUCIJDrXuvl49CTx1YR89U',
  },
});

export default axiosClient;
