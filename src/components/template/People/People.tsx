import { Container, Pagination } from "./People.style";
import { ContainerLoad } from "@/components/atoms/Loader/Loader.style";
import { useState, useEffect, useRef } from "react";
import { peopleService, peopleServicePage } from "@/services/data.services";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Loader from "@/components/atoms/Loader";

interface People {
  previous: string;
  next: string;
  count: string;
  results: Results;
}

interface Results {
  name: string;
  homeworld: string
}

const defaultResults: Results[] = [];

const People = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Results[]>(defaultResults);
  const PageRef = useRef<number>(0);

  const fetchPeople = async () => {
    const { data } = await peopleService();
    if (data.results.length > 0) {
      setResults(data.results);
      setLoading(false);
      PageRef.current++;
    }
  };


  const fetchPeoplePage = async () => {
    setLoading(true);
    const { data } = await peopleServicePage(PageRef.current);
    PageRef.current++;
    setResults(data.results);
    if (data.results.length > 0) {
      setResults(data.results);
      setLoading(false);
    }
    if (data.next === null) {
      setLoading(false);
      setResults(data.results);
      alert("ho hay más resultados");
    }
  };

  useEffect(() => {
    try {
      fetchPeople();
      setLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      {loading && (
        <ContainerLoad>
          <Loader size="lg"></Loader>
          <div>Loading...</div>
        </ContainerLoad>
      )}
      <ul>
        {!!results?.length && (
          <>
            {results.map((item) => {
              const { name, homeworld } = item;
              return (
                  <Card key={name} name={name} homeworld={homeworld}/>
              );
            })}
          </>
        )}
      </ul>
      {!!results?.length && (
      <Pagination>
        <Button
          type="button"
          variant="contained"
          onClick={""}
          style={{
            width: "8%",
            margin: 10,
          }}
        >
          Anterior
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={fetchPeoplePage}
          style={{
            width: "8%",
            margin: 10,
            
          }}
        >
          siguiente
        </Button>
      </Pagination>
      )}
    </Container>
  );
};

export default People;
