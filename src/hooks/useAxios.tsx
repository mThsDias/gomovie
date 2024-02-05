// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export default function useAxios(configRequest: any) {
//   const { axiosClient, method, url, othersConfig = {} } = configRequest;

//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setErro] = useState('');

//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axiosClient[method.toLowerCase()](url, {
//           ...othersConfig,
//           params: { id },
//         });

//         setData(res.data.results || res.data);
//       } catch (err) {
//         setErro('erro');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id]);

//   return [data, isLoading, error];
// }

import axiosClient from '@/services/axiosClient';
import { useEffect, useReducer } from 'react';
import { StateProps, ActionProps, Media } from '@/types/types';
import axios from 'axios';

export default function useAxios<T = Media[]>(url: string) {
  const initialState: StateProps<T> = {
    error: undefined,
    data: undefined,
    isLoading: true,
  };

  const reducer = (state: StateProps<T>, action: ActionProps<T>) => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, isLoading: true };
      case 'fetched':
        return { ...initialState, data: action.payload, isLoading: false };
      case 'error':
        return { ...initialState, error: action.payload, isLoading: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();

    const handleFetch = async () => {
      dispatch({ type: 'loading' });

      try {
        const response = await axiosClient.get(url, {
          signal: controller.signal,
        });

        const responseData = response.data.results || response.data;

        dispatch({
          type: 'fetched',
          payload: responseData,
        });
      } catch (err) {
        if (axios.isAxiosError(err) && err.response)
          dispatch({ type: 'error', payload: err as Error });
      }
    };
    handleFetch();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data: state.data,
    error: state.error,
    isLoading: state.isLoading,
  };
}
