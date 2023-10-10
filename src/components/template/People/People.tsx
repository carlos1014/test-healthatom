import { Container, Pagination } from "./People.style";
import { ContainerLoad } from "@/components/atoms/Loader/Loader.style";
import { useState, useEffect, useRef } from "react";
import { peopleService, peopleServicePage } from "@/services/data.services";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Loader from "@/components/atoms/Loader";


interface Props {
  localPage: number
}

interface People {
  previous: string;
  next: string;
  count: string;
  results: Results;
  localPageSt: number;
}

interface Results {
  name: string;
  homeworld: string
}

const defaultResults: Results[] = [];

const People = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Results[]>(defaultResults);
  const [disableButtonNext, setDisableButtonNext] = useState(false);
  const [disableButtonBack, setDisableButtonBack] = useState(false);
  const PageRef = useRef<number>(1);
  const {localPage = localStorage.getItem("page")} = props
  console.log("page", PageRef)
  console.log("page priemera", localPage)

  const fetchPeople = async () => {
    const { data } = await peopleService();
    localStorage.setItem("page", JSON.stringify(PageRef.current));
    if (data.results.length > 0) {
      setResults(data.results);
      setLoading(false);
    }
    if (data.previous === null) {
      setDisableButtonBack(true);
    }
  };

  const fetchPeoplePage = async () => {
    const localPage = localStorage.getItem("page");
    const localPageSt = parseInt(localPage);
    console.log("localPageSt", localPageSt);
    console.log("typeof localPageSt", typeof localPageSt);  
    const { data } = await peopleServicePage(localPageSt);    
    localStorage.setItem("page", JSON.stringify(PageRef.current));
    if (data.results.length > 0) {
      setResults(data.results);
      setLoading(false);
    }
    if (data.previous === null) {
      setDisableButtonBack(true);
    }

    return localPageSt
  };  


  const fetchPeoplePageNext = async () => {  
    PageRef.current++;
    setLoading(true);
    const { data } = await peopleServicePage(PageRef.current);
    setResults(data.results);
    setDisableButtonBack(false);
    localStorage.setItem("page", JSON.stringify(PageRef.current));  
    if (data.results.length > 0) {
      setResults(data.results);
      setLoading(false);
    }
    if (data.next === null) {
      setLoading(false);
      setResults(data.results);
      setDisableButtonNext(true);
    }
  };

  const fetchPeoplePageBack = async () => {   
    PageRef.current--;
    setLoading(true);
    const { data } = await peopleServicePage(PageRef.current);
    setResults(data.results);
        localStorage.setItem("page", JSON.stringify(PageRef.current)); 
    if (data.results.length > 0) {
      setResults(data.results);
      setLoading(false);
    }
    if (data.previous === null) {
      setLoading(false);
      setResults(data.results);
      setDisableButtonBack(true);
    }
    if (data.next !== null) {
      setDisableButtonNext(false);
    }    
  };




  useEffect(() => {
    const localPage = localStorage.getItem("page");
    console.log(localPage);
    console.log(typeof localPage);

    try {
      if (localPage === "1") {
        alert("entro igual a 1");
        fetchPeople();
        setLoading(true);
      } 
      if (localPage !== "1") {
        alert("entro dsityinto de 1");
        fetchPeoplePage();
        setLoading(true);
      }      
         
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
              const { name, homeworld} = item;
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
          onClick={fetchPeoplePageBack}
          disabled={disableButtonBack}
          style={{
            width: "8%",
            margin: 10,
          }}
        >
          Anterior
        </Button>
        <div style={{ padding: '10px 30px'  }}>Página {localPage}</div>
        <Button
          type="button"
          variant="contained"
          onClick={fetchPeoplePageNext}
          disabled={disableButtonNext}
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
