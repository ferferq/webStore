import { useCallback, useEffect, useState } from 'react';
import Autocomplete from 'react-autocomplete';
import { FiSearch } from 'react-icons/fi';
import { apiSearchMovie } from '../../Modules/service/ServiceApi/apiMovie';
import { ContainerInput, Input, Movie } from './styles';

interface MovieProps {
  id: number;
  title: string;
}

interface GetMovieProps {
    results: MovieProps[];
};

export function InputSearch() {
  const [searchData, setSearchData] = useState('');
  const [movies, setMovies] = useState<MovieProps[]>([] as MovieProps[]);

  const handleSearch = useCallback(async (value: string) => {
    setSearchData(value);
  }, []);

  const handleResetValue = useCallback(() => {
    setMovies([] as MovieProps[]);
    setSearchData('');
  }, []);

  useEffect(() => {
    if (searchData === '') return;
    setTimeout(async () => {
      try {
        const response =  await apiSearchMovie.exec<GetMovieProps>(searchData);
        if (response)
        setMovies(response.data.results);
      } catch(err) {

      }
    }, 1000);
  }, [searchData]);

  return (
    <ContainerInput>
      <Autocomplete
        getItemValue={(item: MovieProps) => item.title}
        items={movies}
        menuStyle={{
          borderRadius: '3px',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.8)',
          background: 'rgba(255, 255, 255, 1)',
          padding: '0 1%',
          position: 'absolute',
          top: '40px',
          left: '0',
          overflow: 'auto',
          width: '240px',
          maxHeight: '50vh',
          justifyContent: 'center'
        }}
        renderItem={(item: MovieProps, isHighlighted) =>
          <Movie key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.title}
          </Movie>
        }
        renderInput={params => (
          <Input>
            <input
            {...params}
            placeholder="Buscar"
            onBlur={handleResetValue}
          />
            <FiSearch />
          </Input>
        )}

        value={searchData}
        onChange={(e) =>  handleSearch(e.currentTarget.value)}        
      />
      </ContainerInput>
  );
}